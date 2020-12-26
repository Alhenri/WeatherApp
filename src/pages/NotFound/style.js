import styled from 'styled-components';

export const StyleNotFound = styled.div`
    height: 100vh;
    width: 100vw;
    background-image: url(${({bg})=>bg});
    background-size: 100vw 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    section{
        height: 70vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        align-items: center;
        img{
            height: 20vh;
        }
    }

`;