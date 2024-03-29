import React from 'react';

// eslint-disable-next-line react/prop-types
function CreateUser({username, email, onChange, onCreate}) {
    return (
        <div>
            <input name='username' placeholder='계정명' onChange={onChange} value={username}/>
            <input name='email' placeholder='이메일' onChange={onChange} value={email}/>
            <button type='button' onClick={onCreate}>등록</button>
        </div>
    );
}

export default CreateUser;
