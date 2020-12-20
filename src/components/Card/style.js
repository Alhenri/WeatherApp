import styled from 'styled-components';

export const Container = styled.span`
    max-height: 10%;
    margin: 5px 0;
    width: 80%;
    border-radius: 5px;
    transition: 0.5s;
    background-color: #AAEDED;
    display: flex;
    justify-content: space-between;
    align-items: center;

    span.text{
        flex: 4;
    }
    span.img{
        flex: 1;
        height: 100%;
        display:flex;
        align-items: center;
    }
    img{
        height: 50%;
        margin: auto;
        transition: 0.2s;
        :hover{
            height: 70%;
            border-radius: 5px;
        }
    }
    :hover{
        background-color: #67DEDE;
    }
`;