import React, { useState, useEffect } from 'react';
import { Background, StyleHome, List, Sec } from './style.js'
import Button from '../../components/Button'
import {getFav, getWeather} from '../../data/data.js'
import Card from '../../components/Card'

function Home() {
 
    const [fav, setFav] = useState(getFav());

    useEffect(()=>{
        setFav(getFav());
    }, []);
    
    // clima
    const [weather, setWeather] = useState({
        name: 'Loading...',
        temp: 'Loading...',
        humidity: 'Loading...',
        desc: 'Loading...',
        icon: 'Loading...',
    })

    

    //console.log(weather)
    var pos=0;

    async function handleWeather(lat, long){
        const data = await getWeather(lat, long);
        setWeather(data)
    }


    return(
        <StyleHome weather={Background['sol']}>
            <List>
                <h1>Locais favoritos</h1>
                
                <Sec>
                    { fav.map(favorite => (
                        <Card config= {()=> {console.log("teste")}} key={pos++} OnClick={() => {
                            handleWeather(
                                favorite.lat,
                                favorite.long
                                )}}>
                            {favorite.nome}
                        </Card>
                    ))}
                </Sec>
            </List>
            <List>
                <Sec className="Info">
                    <h1>Informações</h1>
                    <h2>Cidade: { weather.name }</h2>
                    <h3>Temperatura: {weather.temp}</h3>
                    <h3>Umidade: {weather.humidity}%</h3>
                    <h4>Descrição: {weather.desc}</h4>
                </Sec>
                <Button to={"/AddLocal"}>Novo local</Button>
            </List>
        </StyleHome>
    )
}

export default Home;