import styled from 'styled-components'

export const PageStyle = styled.div`
    background-color: black;
    min-height: 100vh;
    width: 100vw;

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
`;

export const ButtonArea = styled.div`
    width: 60%;
    display: flex;
    justify-content: space-between;
    text-align: center;
    margin-bottom: 25px;

    a{
        margin: 0 20px;
    }
`;

export const Content = styled.div`
    background-color: white;
    flex: 1;
    margin: 10px 0;
    width: 80%;
    border-radius: 15px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    input{
        background-color: pink;
        padding: 5px;
    }

    a{
        margin: 10% 0;
        width: 30%;
    }
`;