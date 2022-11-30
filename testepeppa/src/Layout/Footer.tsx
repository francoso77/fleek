import React from 'react'
import { LoginContexto } from './Layout'
import "./Footer.css"

export default function Footer() {
    return (
        <>
            <LoginContexto.Consumer>
                {(dadosLogin) => <>

                    <span className='footer'>{dadosLogin.nome}</span>
                </>}
            </LoginContexto.Consumer>
        </>
    )
}