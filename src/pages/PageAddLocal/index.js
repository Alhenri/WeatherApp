import React, { useState, useEffect } from 'react';
import Button from '../../components/Button'
import { addFav } from '../../data/data';
import { PageStyle, ButtonArea, Content } from './style.js'

export default function PageAddLocal(){
    
    // novo favorito
    const [newfav, setNewFav] = useState("");

    // atualizando os favoritos
    

    // useEffect(()=>{
    //     saveFav(allFav);
    // }, [allFav]);

    function handleFav(event){
        const value = event.target.value
        setNewFav(value)
    }

    function handleNewFav(loc) {
        const fav = {
            nome: newfav,
            lat: loc.coords.latitude,
            long: loc.coords.longitude
        }
        fav.nome===""?
        window.alert("Nome de local inválido"):
        addFav(fav);
    }

    // controle do tipo de captura
    const [loc, setLoc] = useState({
        locAtual: true,
        map: false
    })

    return (
        <PageStyle>
            {loc.locAtual?
            <Content className="locAtual">
                <h1>Localização atual</h1>
                <input
                placeholder="Nome"
                onChange={handleFav}
                value={newfav}
                />
                <Button OnClick={()=>{
                    navigator.geolocation.getCurrentPosition(handleNewFav);
                }} to="/" >Favoritar</Button>
            </Content>
            :null}

            {loc.map?
            <Content>
                <h1>Localizar no mapa</h1>
            </Content>
            :null}


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