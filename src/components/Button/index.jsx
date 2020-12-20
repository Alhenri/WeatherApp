import React from 'react';
import { Link } from 'react-router-dom';
import { StyledA } from './style.js'

function Button({children, to, OnClick}){
    return (
        <StyledA as={Link} onClick={OnClick} to={to}>
            {children}
        </StyledA>
    )
}

export default Button;