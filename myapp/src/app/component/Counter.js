import {useState} from 'react';

function Counter(props) {
    const [counter, setCounter] = useState(0);
    const [user, setUser] = useState({name:"", email: ""});

    const handlerChangeName = (e) => {
        setUser(pervUser => ({
            name : e.target.value,
            email : pervUser.email
        }));
    }

    const handlerChangeEmail = (e) => {
        setUser(pervUser => ({
            name : pervUser.name,
            email : e.target.value
        }));
    }

    const handleReset = () => {
        setUser({name:"", email:""});
    }

    const lengthOfName = user.name.length;
    const lengthOfEmail = user.email.length;

    const increase = () => {
        setCounter(counter+1);
    }
    const decrease = () => {
        setCounter(counter-1);
    }

    return (
        <div>
            <h1>{props.title}</h1>
            이름 : <input value={user.name} onChange={handlerChangeName} />
            이메일 : <input value={user.email} onChange={handlerChangeEmail} />
            <br />
            <div>
                <div>이름 : {user.name}, 길이 : {lengthOfName}</div>
                <div>이메일 : {user.name}, 길이 : {lengthOfEmail}</div>
            </div>
            <br />
            <div>
                <button onClick={handleReset}>초기화</button>
            </div>
        </div>
    );
}

export default Counter;
