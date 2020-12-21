import React, { useState } from 'react';
import Button from '../../components/Button'
import Map from '../../components/Map'
import { addFav } from '../../data/data';
import { PageStyle, ButtonArea, Content } from './style.js'

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
        <PageStyle>
            {loc.locAtual?// Tela com da localização atual
            <Content className="locAtual">
                <h1>Localização atual</h1>
                <input
                placeholder="Nome"
                onChange={handleFav}
                value={newfav}
                />
                <Button OnClick={()=>{
                    navigator.geolocation.getCurrentPosition(handleNewFavCurrent);
                }} to="/" >Favoritar</Button>
            </Content>
            :null}

            {loc.map?// Tela com Mapa
            <Content>
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
            </Content>
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