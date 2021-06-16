import React from 'react';
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';
import { Query } from 'react-apollo';
import { ROOT_QUERY } from '../App';

class Table extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentPage: 0,
            data: [],
            offset: 0,
            pageCount: 0,
            perPage: this.props.count
        }

        this.handlePageClick = this.handlePageClick.bind(this);
    }

    receiveData() {
        let slice = this.props.data.slice(
            this.state.offset,
            this.state.offset + this.state.perPage
        );

        let postData = (
            <table className="table table-stripped table-bordered">
                <thead className="thead-dark table-stripped">
                    <tr>
                        <th>#</th>
                        <th>Хто</th>
                        <th>Ім'я користувача</th>
                        <th>Кількість задач</th>
                        <th>Кількість спроб</th>
                    </tr>
                </thead>
                <tbody>
                    {slice.map(item => (
                        <tr key={item.id}>
                            <td>{Number(item.id) + 1}</td>
                            <td><Link to={{ pathname: `/user/${item.username}` }}>{item.name}</Link></td>
                            <td>{item.username}</td>
                            <td>{item.problems}</td>
                            <td>{item.solves}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );

        this.setState({
            pageCount: Math.ceil(this.props.count / this.state.perPage),
            postData
        });
    }

    handlePageClick = (e) => {
        let selectedPage = e.selected;
        let offset = selectedPage * this.state.perPage;

        this.setState({
            currentPage: selectedPage,
            offset: offset
        }, () => {
            this.receiveData();
        });
    }

    componentDidMount() {
        this.receiveData();
    }

    render() {
        return (
            <div className="table">
                {this.state.postData}
                <ReactPaginate
                    previousLabel="<<"
                    nextLabel=">>"
                    breakLabel="..."
                    pageCount={this.state.pageCount}
                    onPageChange={this.handlePageClick}
                    containerClassName={"pagination justify-content-center"}
                    pageClassName={"page-item"}
                    pageLinkClassName={"page-link"}
                    previousLinkClassName={"page-link no-dis"}
                    nextLinkClassName={"page-link no-dis"}
                    disabledClassName={"page-item disabled"}
                    activeClassName={"page-item active"}
                />
            </div>
        );
    }
};

const Users = () =>
    <Query query={ROOT_QUERY} fetchPolicy="cache-and-network">
        {({ data, loading }) => loading ?
            <h1 className="text-center">Завантаження користувачів...</h1> :
            <div className="container">
                <h3 className="text-center">Статистика програмістів E-Olymp</h3>
                <h5 className="text-center">Всі студенти Сумського Державного Університету в одному місці</h5>
                <Table count={data.totalCognito} data={data.allCognito} />
            </div>
        }
    </Query>;

export default Users;