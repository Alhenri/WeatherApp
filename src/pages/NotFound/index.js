import React from 'react';
import { StyleNotFound } from './style.js';
import bg_img from '../../weather-image/bg.jpeg';
import error_img from '../../assets/erro.svg'
import Button from '../../components/Button'

function NotFound() {
    return(
        <StyleNotFound bg={bg_img} >
            <section>
                <h1>Not Found Error</h1>
                <img src={error_img} alt="404"/>
                <Button to="/">Voltar</Button>
            </section>
        </StyleNotFound>
    )
}

export default NotFound;