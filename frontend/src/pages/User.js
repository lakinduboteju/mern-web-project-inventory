import {useCallback, useEffect, useState} from "react";
import config from "../config";

function User() {
    const [user, setUser] = useState(undefined);

    /**
     * Get user information from backend server
     * @return {Promise<{username: string, name: string} | null>}
     */
    async function fetchUserFromBackend() {
        const res = await fetch(`${config.api.url}/${config.api.routes.getUser}`);
        if (res.status === 200) {
            /**
             * @type {{username: string, name: string}}
             */
            const user = await res.json();
            return user;
        }
        return null;
    }

    // Runs once
    useEffect(function() {
        // Get user information from backend server and set user
        fetchUserFromBackend().then(user => setUser(user));
    }, []);

    return (
        <>
            <h1>User</h1>
            <UserInformation user={user} />
        </>
    );
}

function UserInformation({user}) {
    if (user === undefined) {
        return (
            <p>Loading...</p>
        );
    } else if (user === null) {
        return (
            <p>Loading user failed!</p>
        );
    } else {
        return (
            <>
                <table>
                    <tr>
                        <th>User</th>
                        <th>Username</th>
                    </tr>
                    <tr>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                    </tr>
                </table>
            </>
        );
    }
}

export default User;
