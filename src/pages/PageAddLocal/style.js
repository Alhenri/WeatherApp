import styled from 'styled-components'


export const PageStyle = styled.div`
    background-color: green;
    min-height: 100vh;
    width: 100vw;

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;

    background-image: url(${({ bg })=> bg});
    background-position-x: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;

    @media(max-width: 600px){
        background-size: auto 100%;
        div{
            section{
                flex-direction: column;
                align-items: center;
                a{
                    margin-top: 10px;
                    margin-left: 0;
                }
            }
        }
    } 

`;

export const ButtonArea = styled.div`
    width: 60%;
    display: flex;
    justify-content: space-between;
    text-align: center;
    margin-bottom: 15px;

    input{
        flex: 2;
    }

    a{
        margin: 0 20px;
        flex: 1;
    }

    @media(max-width: 600px){
        flex-direction: column;
        align-items: center;
        a{
            margin: 0;
            margin-top: 15px;
        }
    }
`;

export const ContentMap = styled.div`
    background-color: rgba(209, 213, 204, 0.4);
    padding: 0;
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
        background-color: #AAEDED;
        padding: 5px;
        border: none;
        border-radius: 5px;
    }
    h1{
        font-family: 'Roboto Slab', serif;
    }
    
`;

export const ContentLoc = styled(ContentMap)`

    section{
        width: 50vw;
        display: flex;
        justify-content: space-between;
        a{
            margin-left: 10vw
        }
    }
`;

export const BackButton = styled.div`
    text-decoration: none;
    margin-right: auto;
    margin-left: 10%;
    margin-top: 5px;
    background-color: #AAEDED;
    display: flex;
    color: black;
    align-items: center;
    border-radius: 5px;
    justify-content: center;
    width: 10vw;
    padding: 5px;
    transition: 0.3s;

    img{
        height: 3vh;
        margin-right: 5px;
    }
    h4{
        margin: 0;
    }
    :hover{
        background-color: #67DEDE;
        img{
            height: 4vh;
        }
    }

    @media(max-width: 600px){
        width: 20vw;
    } 
`;