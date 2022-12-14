import React from 'react'
import { Outlet } from 'react-router-dom'
import { ContextoGlobal } from '../Contexto/ContextoGlobal'
import Login from '../Login/Login'
import MensagemModal from '../Pages/MensagemModal'
import useLayoutState from '../States/LayoutState'
import useLoginState from '../States/LoginState'
import useMensagemModalState from '../States/MensagemState'
import useTemProdutosState from '../States/TemProdutosState'

import Footer from './Footer'
import Header from './Header'

import './Layout.css'


export default function Layout() {

    const {loginState, setLoginState} = useLoginState()
    const {layouteState, setLayoutState} = useLayoutState()
    const {mensagemModalState, setMensagemModalState} = useMensagemModalState()
    const {temProdutosState, setTemProdutosState}= useTemProdutosState()

    return (
        <>
            <ContextoGlobal.Provider value= {{
                loginState: loginState,
                setLoginState: setLoginState,
                layoutState: layouteState,
                setLayoutState: setLayoutState,
                mensagemModalState: mensagemModalState,
                setMensagemModalState: setMensagemModalState,
                temProdutosState: temProdutosState,
                setTemProdutosState: setTemProdutosState
            }}>

                <>
                    {!loginState.logado ?
                        <>
                            <Login />

                        </>
                        :
                        <>
                            
                            <Header />
                            <main>
                                <Outlet />
                                <MensagemModal />

                            </main>

                            <Footer />
                        </>}
                </>
            </ContextoGlobal.Provider>
        </>
    )
}