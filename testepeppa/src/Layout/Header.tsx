import React, { useContext } from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom'
import { ContextoGlobal } from '../Contexto/ContextoGlobal'
import { ContextoGlobalInterface } from '../Interfaces/ContextoGlobalInterface'

export default function Header() {

    const Login = (useContext(ContextoGlobal) as ContextoGlobalInterface).loginState
    
    return (
        <>
            {Login.logado ?
                <>
                    <div className='topnav'>
                        <img src="logo.png" alt="asdfafasdfasdf" width={210} />
                        <span className='usuario'>{Login.usuario}</span>
                    </div>
                    <div className='lateralnav '>
                        <NavLink to="/" end>Home</NavLink>
                        <NavLink to="/cadastroProduto">Produtos</NavLink>
                        <NavLink to="/listagemProduto">Listagem Produtos</NavLink>
                        <a href="">Logout</a>

                    </div>

                </>
                :
                <>
                    <div className='topnav'>
                        <img src="logo.png" alt="lototipo Elanto" width={210} />
                        
                    </div>
                    <div className='lateralnav '>

                        <NavLink to="/login">Login</NavLink>

                    </div>
                </>}

        </>)

}