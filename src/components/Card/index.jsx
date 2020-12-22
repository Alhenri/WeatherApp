import React from 'react'
import { Container } from './style'
import op_img from '../../assets/def.svg'

export default function Card({children, OnClick, config}) {
    return (
        <Container onClick={OnClick}>
            <span className="text">
                {children}
            </span>
            <span className="img" onClick={config} >
                <img src={op_img} alt=":" />
            </span>
        </Container>
    )
}