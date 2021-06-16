import React from 'react';
import { Query } from 'react-apollo';
import Chart from './Chart';
import { gql } from 'apollo-boost';

const users = {
    chart: [
        { year: '2014', solves: 13 },
        { year: '2015', solves: 11 },
        { year: '2016', solves: 12 },
        { year: '2017', solves: 9 },
        { year: '2018', solves: 8 },
        { year: '2019', solves: 10 },
        { year: '2020', solves: 12 },
        { year: '2021', solves: 9 }
    ],
    photo: "https://avatars1.githubusercontent.com/u/45543904?v=4"
};

const query = gql`
    query Cognito($username: String!) {
        cognito(username: $username) {
            name
            problems
            solves
            location {
                country
                city
            }
            avatar
            specialization
            group
        }
    }
`;

export default User =>
    <Query query={query} variables={{ "username": window.location.pathname.split('/')[2] }} fetchPolicy="cache-and-network">
        {({ data, loading }) => loading ?
            <h1>Завантаження користувача...</h1> :
            <div className="user-page">
                <div className="container text-center my-5">
                    <h2 className="name py-0">{data.cognito.name} статистика</h2>
                    <img className="img-fluid py-5" src={data.cognito.avatar} alt="#" />
                    <div className="dates">
                        <div className="start">
                            <strong>ОНОВЛЕНО</strong>{new Date().getSeconds()} секунд тому
                            <span></span>
                        </div>
                        <div className="end">
                            <strong>СПЕЦІАЛІЗАЦІЯ</strong>{data.cognito.specialization}
                        </div>
                    </div>
                    <div className="stats">
                        <div>
                            <strong>ГРУПА</strong> {data.cognito.group}
                        </div>
                        <div>
                            <strong>ПРОБЛЕМ ВИРІШЕНО:</strong> {data.cognito.problems}
                        </div>
                        <div>
                            <strong>ВСЬОГО ВІДПРАВЛЕНИХ РІШЕНЬ:</strong> {data.cognito.solves}
                        </div>
                        <div>
                            <strong>РЕЙТИНГ КОРИСТУВАЧА:</strong> {((data.cognito.problems / data.cognito.solves) * 100).toFixed(2)}%
                        </div>
                    </div>
                </div>
                <div id="chart-two">
                    <Chart />
                </div>
            </div>
        }
    </Query>;