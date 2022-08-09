import axios from 'axios';
import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

function UserContextProvider(props) {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://192.168.8.134:8000/api/users')
            .then(res => {
                setUsers(res.data);
            })
    }, [])

    return (
        <UserContext.Provider value={{ users }}>
            {props.children}
        </UserContext.Provider>
    );

}

export default UserContextProvider;
