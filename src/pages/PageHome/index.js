import React, { useState, useEffect } from 'react';
import { Background, StyleHome, List, Sec } from './style.js'
import Button from '../../components/Button'
import {getFav, getWeather, removeFav, editFav} from '../../data/data.js'
import Card from '../../components/Card'
import Modal from '../../components/Modal'

function Home() {
    
    // Lista de locais favoritos salvo no navegador
    const [fav, setFav] = useState(getFav());

    // Controle da exibição do modal
    const [modalState, setModalState] = useState(false)

    // Local favorito em exibição
    const [locExib, setLocExib] = useState(null)

    
    // Controle da exibição da cidade indicada
    const [weather, setWeather] = useState({
        name: 'Loading...',
        temp: 'Loading...',
        humidity: 'Loading...',
        desc: 'Loading...',
        icon: 'Loading...',
    })
    //console.log(weather)
    var pos=0;
    
    // Atualizando o clima
    async function handleWeather(lat, long){
        const data = await getWeather(lat, long);
        setWeather(data)
    }
    
    // Atualização da lista
    useEffect(()=>{
        setFav(getFav());
    }, [modalState]);


    return(
        <StyleHome weather={Background['sol']}>
            {modalState?<Modal 
                            // logica de exibição do modal
                            config={()=> {
                                setModalState(false)
                            }}
                            // chamada da exclusão do local
                            Delete={() => {
                                removeFav(locExib);
                                setModalState(false)
                            }}

                            value={locExib}
                            // chamada da Edição
                            Edit={(newValue)=>{
                                editFav(newValue, locExib);
                                setModalState(false);
                            }}
                            
                        />:null}
            
            <List>
                <h1>Locais favoritos</h1>
                
                <Sec>
                    { fav.map(favorite => (
                        <Card config= {()=> setModalState(true)} key={pos++} OnClick={() => {
                            handleWeather(
                                favorite.lat,
                                favorite.long
                            );
                            setLocExib(favorite.nome)
                        }}>
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