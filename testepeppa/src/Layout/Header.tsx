import React, { useContext } from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom'
import { LoginContexto } from './Layout'

export default function Header() {

    const isLogado = useContext(LoginContexto).logado
    const usuario = useContext(LoginContexto).nome
    return (
        <>
            {isLogado ?
                <>
                    <div className='topnav'>
                        <img src="logo.png" alt="asdfafasdfasdf" width={210} />
                        <span className='usuario'>{usuario}</span>
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
                        <img src="logo.png" alt="asdfafasdfasdf" width={210} />
                        
                    </div>
                    <div className='lateralnav '>

                        <NavLink to="/login">Login</NavLink>

                    </div>
                </>}

        </>)

}