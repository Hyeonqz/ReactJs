import React from 'react';

function Test( {title,author,price}) {
    const arr = [1,2,3,4,5];
    return (
    <>
        <h1>{title}</h1>
        <h2>{author}</h2>
        <h3>{price}</h3>
        <ul>
            {arr.map(a=> {
                return <li key={a}>항목{a}</li>
            })}
        </ul>
    </>
    );
}

export default Test;
