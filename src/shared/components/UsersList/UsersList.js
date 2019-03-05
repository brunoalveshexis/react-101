import React from 'react'
import UserRow from '../UserRow'
import NoData from '../NoData';

export default ({ users }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Avatar</th>
                    <th>Username</th>
                </tr>
            </thead>
            <tbody>
                {users && users.length > 0 ? users.map(user => <UserRow user={user} key={user.id} />) : <NoData />}
            </tbody>
        </table >
    );
}