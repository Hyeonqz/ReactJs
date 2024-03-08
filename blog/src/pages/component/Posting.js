import React from 'react';

const Posting = (props) => {
    return (
        <div>
            <div className='post-preview'>
                <a href='#'>
                    <h2 className='post-title'>{props.title}</h2>
                    <h3 className='post-subtitle'>{props.subtitle}</h3>
                </a>
                <p className='post-meta'>포스팅 날짜&nbsp;&nbsp;{props.date}</p>
            </div>
        </div>
    );
};

export default Posting;
