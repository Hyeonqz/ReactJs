import React from 'react';
import PropTypes from 'prop-types';

const MenuItem = props => {
    const icon = `icons/${props.icon}.png`;
    return (
            <li>
                <a href={props.href} className='menu-link'>
                    <img src={icon} width='16' alt="" />
                    {props.children}
                </a>
            </li>

    );
};

MenuItem.propTypes = {

};

export default MenuItem;
