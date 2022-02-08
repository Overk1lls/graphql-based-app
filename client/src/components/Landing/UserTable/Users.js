import { Query } from 'react-apollo';
import { ROOT_GRAPHQL_QUERY } from '../../../lib/config';
import Table from './Table';

const Users = () => (
    <Query query={ROOT_GRAPHQL_QUERY} fetchPolicy="cache-and-network">
        {({ data, loading }) => (
            loading ?
                <h1 className="text-center">Завантаження користувачів...</h1> :
                <div className="container">
                    <h3 className="text-center">Статистика програмістів E-Olymp</h3>
                    <h5 className="text-center">
                        Всі студенти Сумського Державного Університету в одному місці
                    </h5>
                    <Table count={data.totalUsers} users={data.allUsers} />
                </div>
        )}
    </Query>
);

export default Users;