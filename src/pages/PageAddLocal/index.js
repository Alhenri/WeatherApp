import React, { useState } from 'react';
import Button from '../../components/Button'
import Map from '../../components/Map'
import { addFav } from '../../data/data';
import { 
        PageStyle, ButtonArea, ContentMap,
        ContentLoc, BackButton
    } from './style.js';
import img_arrow from '../../assets/l_arrow.svg'
import { Link } from 'react-router-dom'
import bg from '../../weather-image/bg.jpeg'

export default function PageAddLocal(){
    
    // novo favorito
    const [newfav, setNewFav] = useState("");

    const [localmap, setLocalMap] = useState({
        latitude: "",
        longitude: "",
    });

    function handleFav(event){
        const value = event.target.value
        setNewFav(value)
    }

    // Função que atualiza com a posição atual
    function handleNewFavCurrent(local) {
        const fav = {
            nome: newfav,
            lat: local.coords.latitude,
            long: local.coords.longitude
        }
        fav.nome===""?
        window.alert("Nome de local inválido"):
        addFav(fav);
    }

    function handleNewFavMap(){
        if(newfav===""){
            window.alert("Nome inválido");
            return
        }
        if(localmap.latitude===""){
            window.alert("Clique no mapa para selecionar um local!");
            return
        }

        const fav = {
            nome: newfav,
            lat: localmap.latitude,
            long: localmap.longitude,
        }

        addFav(fav);
    }

    // controle do tipo de captura
    const [loc, setLoc] = useState({
        locAtual: true,
        map: false
    })

    return (
        <PageStyle bg={bg}>
            <BackButton as={Link} to="/" className="BackButton">
                <img src={img_arrow} />
                <h4>Voltar</h4>
            </BackButton>
            
            {loc.locAtual?// Tela com da localização atual
            <ContentLoc className="locAtual">
                <h1>Localização atual</h1>

                <section>
                    <input
                    placeholder="Nome"
                    onChange={handleFav}
                    value={newfav}
                    />
                    <Button OnClick={()=>{
                        navigator.geolocation.getCurrentPosition(handleNewFavCurrent);
                    }} to="/" >Favoritar</Button>
                </section>
            </ContentLoc>
            :null}

            {loc.map?// Tela com Mapa
            <ContentMap>
                <h1>Localizar no mapa</h1>
                <Map local={(lat, long)=>setLocalMap({
                    latitude: lat,
                    longitude: long,
                })} />
                <ButtonArea>
                    <input
                        placeholder="Nome"
                        onChange={handleFav}
                        value={newfav}
                    />
                    <Button OnClick={handleNewFavMap} to="/">Favoritar</Button>
                </ButtonArea>
            </ContentMap>
            :null}

            {/*Botoes de alternancia*/}
            <ButtonArea>
                <Button OnClick={()=>setLoc({
                    locAtual: true,
                    map: false
                })}> Localização atual </Button>
                <Button OnClick={()=>setLoc({
                    locAtual: false,
                    map: true
                })}> Abrir mapa </Button>
            </ButtonArea>

        </PageStyle>
    )
}