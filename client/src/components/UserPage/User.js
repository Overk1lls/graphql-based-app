import { Query } from 'react-apollo';
import { USER_GRAPHQL_QUERY } from '../../lib/config';
import Chart from './Chart';

const User = () => (
    <Query
        query={USER_GRAPHQL_QUERY}
        variables={{ "username": window.location.pathname.split('/')[2] }}
        fetchPolicy="cache-and-network"
    >
        {({ data, loading }) => loading ?
            <h1>Завантаження користувача...</h1> :
            <div className="user-page">
                <div className="container text-center my-5">
                    <h2 className="name py-0">{data.user.name} статистика</h2>
                    <img className="img-fluid py-5" src={data.user.avatar} alt="#" />
                    <div className="dates">
                        <div className="start">
                            <strong>ОНОВЛЕНО </strong>
                            {new Date().getSeconds()} секунд тому
                            <span></span>
                        </div>
                        <div className="end">
                            <strong>СПЕЦІАЛІЗАЦІЯ </strong>
                            {data.user.specialization}
                        </div>
                    </div>
                    <div className="stats">
                        <div>
                            <strong>ГРУПА </strong>
                            {data.user.group}
                        </div>
                        <div>
                            <strong>ПРОБЛЕМ ВИРІШЕНО: </strong>
                            {data.user.problems}
                        </div>
                        <div>
                            <strong>ВСЬОГО ВІДПРАВЛЕНИХ РІШЕНЬ: </strong>
                            {data.user.solves}
                        </div>
                        <div>
                            <strong>РЕЙТИНГ КОРИСТУВАЧА: </strong>
                            {((data.user.problems / data.user.solves) * 100).toFixed(2)}%
                        </div>
                    </div>
                </div>
                <div id="chart-two">
                    <Chart />
                </div>
            </div>
        }
    </Query>
);

export default User;