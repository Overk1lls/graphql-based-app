import { gql } from "apollo-boost";

export const ROOT_GRAPHQL_QUERY = gql`
    query {
        totalUsers
        allUsers {
            id
            name
            username
            problems
            solves
        }
    }
`;

export const USER_GRAPHQL_QUERY = gql`
    query User($username: String!) {
        user(username: $username) {
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

export const FAKE_CHART_USERS = {
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

export const RESPONSES = {
    NO_LOAD: 'Завантажити дані користувачів не вдалося',
    LOADING: 'Завантаження користувачів...'
};