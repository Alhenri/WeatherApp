import React from 'react';
import { Link } from 'react-router-dom';
import { StyledA } from './style.js'

function Button({children, to}){
    return (
        <StyledA as={Link} to={to}>
            {children}
        </StyledA>
    )
}

export default Button;