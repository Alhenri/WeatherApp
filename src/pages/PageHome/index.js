import React, { useState, useEffect } from 'react';
import { StyleHome, List, Sec } from './style.js'
import Button from '../../components/Button'
import {getFav, getWeather, removeFav, editFav} from '../../data/data.js'
import Card from '../../components/Card'
import Modal from '../../components/Modal'
import bg_img from '../../weather-image/bg.jpeg'

function Home(prop) {
    
    // Lista de locais favoritos salvo no navegador
    const [fav, setFav] = useState(getFav());

    // Controle da exibição do modal
    const [modalState, setModalState] = useState(false)

    // Local favorito em exibição
    const [locExib, setLocExib] = useState(null)

    
    // Controle da exibição da cidade indicada
    const [weather, setWeather] = useState({
        name: '',
        temp: '',
        humidity: '',
        desc: '',
        icon: '',
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
    }, [modalState, prop]);


    return(
        <StyleHome bg={bg_img}>
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
                <h1>Informações</h1>
                <Sec className="Info">
                    {weather.name===''?
                        <h1>Selecione o local primeiro</h1>
                    :
                    <div>
                        <h2>{ weather.name }</h2>
                        <h3>Temperatura: {weather.temp}°C</h3>
                        <h3>Umidade: {weather.humidity}%</h3>
                        <h4>Descrição: {weather.desc}</h4>
                    </div>
                    }
                </Sec>
                <Button to={"/AddLocal"}>Adicionar novo local</Button>
            </List>
        </StyleHome>
    )
}

export default Home;