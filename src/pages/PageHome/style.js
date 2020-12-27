import styled from 'styled-components'

// construção da Home
export const StyleHome = styled.div`

    height: 100vh;
    width: 100vw;
    background-image: url(${props => props.bg});
    background-size: 100vw 100vh;

    align-items: center;
    display: flex;
    cursor: pointer;

    h1, h2, h3, h4{
        font-family: 'Roboto Slab', serif;
        margin-top: 0;
    }

    /* Responsividade - Notebooks*/
    @media(max-width: 668px){
       flex-direction: column;

       section{
           width: 80vw;
           height: 40vh;

           section{
               width: 70vw;
           }

           a{
               width: 30vw;
           }
           span{
               padding: 5px;
               width: 40vw;

               img{
                   height: 3vh;
               }
           }
       }
    }

    /* Responsividade - Celular */
    @media(max-width: 420px){
        section{
            a{
                width: 50vw;
            }
            span{
                width: 60vw;
            }
        }
    }
`;

export const List = styled.section`
    height: 80vh;
    width: 30vw;
    margin: auto;
    padding: 5px;
    align-items: center;
    text-align: center;
    display: flex;
    flex-direction: column;
    background-color: rgba(209, 213, 204, 0.4);
    border-radius: 15px;

    overflow: auto;
`;

export const Sec = styled(List)`
    padding: 10px;
    background-color: rgba(209, 213, 204, 0);
    width: 25vw;
    height: 70vh;
    div{
        margin: auto 0;
    }

    h3, h4{
        text-align: left;
    }
`;