import styled from 'styled-components'
import sol_img from '../../weather-image/sol.jpg';
import nub_img from '../../weather-image/nublado.jpg'
import chuv_img from '../../weather-image/chuva.jpg'

// Imagens para background
export const Background = {
    sol: sol_img,
    nublado: nub_img,
    chuva: chuv_img,
};

// construção da Home
export const StyleHome = styled.div`

    height: 100vh;
    width: 100vw;
    background-image: url(${props => props.weather});
    background-size: 100vw 100vh;

    align-items: center;
    display: flex;

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
`;