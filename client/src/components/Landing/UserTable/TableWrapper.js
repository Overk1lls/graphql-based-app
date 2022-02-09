import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const TableWrapper = ({ users }) => (
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
            {users.map(user => (
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

TableWrapper.propTypes = {
    users: PropTypes.array.isRequired
};

export default TableWrapper;