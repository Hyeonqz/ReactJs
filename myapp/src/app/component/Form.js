import React, {useRef} from 'react';

const Form = (props) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        props.insertUser({
            name : e.target.name.value,
            address : e.target.address.value,
            email: e.target.email.value
        });
        // 입력받은 데이터를 처리한다.
        e.target.reset();
    }

    const nameRef = useRef();
    const emailRef = useRef();

    const handleChangeName = () => {
        setName(nameRef.current.value);
    };

    const handleChangeEmail = () => {
        setEmail(emailRef.current.value);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='name'>이름 : </label>
                    <input ref={nameRef} value={name} onChange={handleChangeName} />
                </div>
                <div>
                    <label htmlFor='address'>주소 : </label>
                    <input ref={emailRef} value={email} onChange={handleChangeEmail}  />
                </div>
                <div>
                    <label htmlFor='email'>이메일 : </label>
                    <input id='email' type='email' />
                </div>
                <button type='submit'>저장</button>
            </form>

        </div>
    );
};

export default Form;
