import axios from 'axios';
import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

function UserContextProvider(props) {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        try {
            axios.get('http://127.0.0.1:8000/api/users/')
                .then(res => {
                    console.log(res.data);
                    setUsers(res.data);
                })
        } catch (e) {
            console.log(e);
        }
    }, [])

    return (
        <UserContext.Provider value={{ users }}>
            {props.children}
        </UserContext.Provider>
    );

}

export default UserContextProvider;
