import React from "react";

// eslint-disable-next-line react/prop-types
function Wrapper({children}) {
    const style = {
        border: '2px solid gray',
        padding: '16px'
    };

    return (
        <div style={style}>
            {children}
        </div>
    )
}

export default Wrapper;
