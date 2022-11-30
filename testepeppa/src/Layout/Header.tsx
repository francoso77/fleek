import React from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <>
            <div className='topnav'>
                <img src="logo.png" alt="asdfafasdfasdf"  width={210}/>
                
            </div>
            <div className='lateralnav '>
                <NavLink to="/" end>Home</NavLink>
                <NavLink to="/cadastrocliente/100">Cliente</NavLink>
                <NavLink to="/cadastrofornecedor">Fornecedor</NavLink>
                <NavLink to="/login">Login</NavLink>

            </div>
        </>
    )
}