import React from 'react';
import { Background, StyleHome, List, Sec } from './style.js'
import Button from '../../components/Button'

function Home() {
    return(
        <StyleHome weather={Background['sol']} >
            <List>
                <h1>Locais favoritos</h1>
            </List>
            <List>
                <Sec className="Info">
                    <h1>Informações</h1>
                </Sec>
                <Button to="/">Novo local</Button>
            </List>
        </StyleHome>
    )
}

export default Home;