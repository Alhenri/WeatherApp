import React, { useState, useEffect } from 'react';
import { Background, StyleHome, List, Sec } from './style.js'
import Button from '../../components/Button'
import {getFav, getWeather} from '../../data/data.js'
import Card from '../../components/Card'

function Home() {

    // lista de favoritos
    const [fav, setFav] = useState([]); 
    
    // clima
    const [weather, setWeather] = useState({
        name: 'Loading...',
        temp: 'Loading...',
        humidity: 'Loading...',
        desc: 'Loading...',
        icon: 'Loading...',
    })

    //carregando os favoritos
    useEffect(() => {
        const data = getFav();
        setFav(data);
    }, []);

    //console.log(weather)
    var pos=0;

    async function handleWeather(lat, long){
        const data = await getWeather(lat, long);
        setWeather(data)
    }

    function handleAddFavorite(lat, long) {
        // falta o nome
        console.log(lat, long)
        // const newFav = 'a'

        // setFav([
        //     ...fav,
        //     newFav
        // ]);
    }

    return(
        <StyleHome weather={Background['chuva']} >
            <List>
                <h1>Locais favoritos</h1>
                
                <Sec>
                    { fav.map(favorite => (
                        <Card key={pos++} OnClick={() => {
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
                    <h2>{ weather.name }</h2>
                    <h2>{ weather.temp }</h2>
                </Sec>
                <Button to={"/"}>Novo local</Button>
            </List>
        </StyleHome>
    )
}

export default Home;