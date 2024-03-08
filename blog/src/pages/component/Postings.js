import React from 'react';
import Posting from "@/pages/component/Posting";

const Postings = () => {
    const postings = [
        {
        id:1,
        title:'리액트 처음 공부함',
        subtitle : '신선한 물 마시자',
        date : '2024년 3월 8일'
        },
        {
            id:2,
                title:'리액트 두번 공부함',
            subtitle : '신선한 고기를 먹자',
            date : '2024년 3월 7일'
        },
        {
            id:3,
            title:'리액트 또 공부함',
            subtitle : '신선한 공기 마시자',
            date : '2024년 3월 6일'
        }
    ]
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-10 col-lg-8">
                        {postings.map(p => {
                            return <Posting
                                key = {p.id}
                                title = {p.title}
                                subtitle = {p.subtitle}
                                date = {p.date}
                                />;
                        })}
                        <div className="clearfix">
                            <button className="btn btn-primary float-end" type="button">이전 포스팅 ⇒</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Postings;
