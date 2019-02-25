import React from 'react'
import styles from './UserRow.module.css';

export default (avatarUrl, url, login) => {
    return (
    <tr>
        <td>
            <img src={avatarUrl} alt={login} class={styles.avatar} />
        </td>
        <td>
            <a href={url} target="_blank" rel="noopener noreferrer">{login}</a>
        </td>
    </tr>
    )
}