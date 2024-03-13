import React, {useState} from 'react';
import Form from "@/app/component/Form";

const List = () => {
    const[users, setUsers] = useState([]);
    const insertUser = (user) => {
        setUsers(prevUsers => [...prevUsers, user]);
    }
    return (
        <div>
            <Form insertUser={insertUser} />
        </div>
    );
};

export default List;
