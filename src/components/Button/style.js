import styled from 'styled-components';

export const StyledA = styled.a`
    max-height: 10vh;
    width: 80%;
    background-color: ${({bgcolor})=> bgcolor?"#F56565":"#91F11C"};
    text-decoration: none;
    padding: 5px;
    border-radius: 10px;
    color: black;
    transition: 0.5s;
    
    :hover{
        background-color: ${({bgcolor})=> bgcolor?"#F54242":"#74CD08"};
    }
`;