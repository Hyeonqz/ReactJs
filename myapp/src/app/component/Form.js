import React from 'react';

const Form = (props) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // 입력받은 데이터를 처리한다.
        e.target.reset();
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='name'>이름 : </label>
                    <input id='name' />
                </div>
                <div>
                    <label htmlFor='address'>주소 : </label>
                    <input id='address' />
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
