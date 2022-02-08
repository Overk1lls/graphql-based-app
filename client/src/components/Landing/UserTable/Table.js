import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import ReactPaginate from "react-paginate";

const Table = ({ count, users }) => {
    const [userTable, setUserTable] = useState(<></>);
    const [paginationSettings, setPaginationSettings] = useState({
        page: 0,
        pageOffset: 0,
        pageCount: 0,
        pageMax: count
    });

    const formTable = () => {
        if (!users) {
            return (
                <h4 className='text-center'>Could not load users...</h4>
            );
        }
        const usersSlice = users.slice(
            paginationSettings.pageOffset,
            paginationSettings.pageOffset + paginationSettings.pageMax
        );
        setPaginationSettings({
            ...paginationSettings,
            pageCount: Math.ceil(count / paginationSettings.pageMax)
        });

        return (
            <table className='table table-stripped table-bordered'>
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
                    {usersSlice.map(user => (
                        <tr key={user.id}>
                            <td>{Number(user.id) + 1}</td>
                            <td>
                                <Link to={{ pathname: `/user/${user.username}` }}>
                                    {user.name}
                                </Link>
                            </td>
                            <td>{user.username}</td>
                            <td>{user.problems}</td>
                            <td>{user.solves}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    };

    const handlePageChange = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * paginationSettings.pageMax;

        setPaginationSettings({
            ...paginationSettings,
            page: selectedPage,
            pageOffset: offset
        });
        setUserTable(formTable());
    };

    useEffect(() => {
        setUserTable(formTable());
    }, [users]);

    return (
        <div className='table'>
            {userTable}
            <ReactPaginate
                previousLabel="<<"
                nextLabel=">>"
                breakLabel="..."
                pageCount={paginationSettings.pageCount}
                onPageChange={handlePageChange}
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
};

Table.propTypes = {
    count: PropTypes.number.isRequired,
    users: PropTypes.array.isRequired
};

export default Table;