import React, { useState } from 'react';
import { StyledDiv, ButtonArea, TitleArea } from './style.js';
import Button from '../Button';
import close_img from '../../assets/cancel.svg';

export default function Modal({config, Delete, Edit, value}) {

    const [newvalue, setNewValue] = useState(value)

    return(
        <StyledDiv>
            <section>
               <TitleArea>
                    <div>Editar</div>
                    <img  onClick={config} src={close_img} alt="X"/>
               </TitleArea>
                <input
                    placeholder="Novo nome"
                    onChange={(event)=>{
                        setNewValue(event.target.value)

                    }}
                    value = {newvalue}
                />

                <ButtonArea>
                    <Button cor OnClick={Delete}>Excluir</Button>
                    <Button OnClick={()=>{Edit(newvalue)}}>Salvar</Button>
                </ButtonArea>
            </section>
        </StyledDiv>
    )
}