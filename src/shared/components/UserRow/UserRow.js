import React from 'react'
import styles from './UserRow.module.css';

export default ({ user: { avatar_url, url, login } }) => {
    return (
        <tr>
            <td>
                <img src={avatar_url} alt={login} className={styles.avatar} />
            </td>
            <td>
                <a href={url} target="_blank" rel="noopener noreferrer">{login}</a>
            </td>
        </tr>
    )
}