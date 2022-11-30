import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Login from '../Login/Login'

import Footer from './Footer'
import Header from './Header'

import './Layout.css'

const loginContextoPadrao = {
    logado: false,
    nome: '',
    updateLogin: (logado: boolean, nome: string) => { }
}


export const LoginContexto = React.createContext({ ...loginContextoPadrao })

export default function Layout() {

    const [login, setLogin] = useState({ logado: false, nome: '' })

    const updateLogin = (logado: boolean, nome: string) => {
        setLogin({ logado: logado, nome: nome })
    }

    return (
        <>
            <LoginContexto.Provider value={{ ...login, updateLogin: updateLogin }}>

                <>
                    {!login.logado ?
                        <>
                            <Login />

                        </>
                        :
                        <>
                            <Header />
                            <main>
                                <Outlet />

                            </main>

                            <Footer />
                        </>}
                </>
            </LoginContexto.Provider>
        </>
    )
}