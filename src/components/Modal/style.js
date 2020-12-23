import styled from 'styled-components'

export const StyledDiv = styled.div`
    position: absolute;
    height: 100vh;
    width: 100vw;

    display:flex;
    justify-content: center;
    align-items: center;
    

    background-color: rgba(0, 0, 0, 0.3);

    section {
        background-color: white;
        width: 30%;
        height: 30%;
        border-radius: 15px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        text-align: center;
        padding-bottom: 5px;
        box-shadow: 10px 5px 5px black;

        input{
            background-color: #AAEDED;
            padding: 5px;
            border: none;
            border-radius: 5px;
        }

        img{
        height: 3vh;
        }

        a {
            margin: 0 5px;
        }
    }
`;

export const ButtonArea = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-between;
`;

export const TitleArea = styled(ButtonArea)`
    font-family: 'Roboto Slab', serif;
    width: 90%;
    margin-top: 5%;
`