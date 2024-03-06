import React from "react";

// eslint-disable-next-line react/prop-types
function Hello({color, name, isSpecial}) {

    return (
        <div style={{color}}>
            {isSpecial && <b>*</b>}
            안녕하세요 {name}
        </div>
    );
}

Hello.defaultPorps = {
    name: '이름없음'
}
export default Hello;
