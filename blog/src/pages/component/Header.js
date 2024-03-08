import React from 'react';

const Header = () => {
    return (
        <>
        <header className="masthead" style={{backgroundImage: `url('home-bg.jpg')`}}>
            <div className="overlay"></div>
            <div className="container">
                <div className="row">
                    <div className="col-md-10 col-lg-8 mx-auto position-relative">
                        <div className="site-heading">
                            <h1>real React</h1><span className="subheading">진짜 리액트 제대로 배우기</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        </>
    );
};

export default Header;
