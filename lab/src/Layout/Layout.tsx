import React from 'react'
import { Outlet } from 'react-router-dom'
import Mensagem from '../Components/Mensagem'
import { ContextoGlobal } from '../Contextos/ContextoGlobal'
import Login from '../Login/Login'
import useLayoutState from '../States/LayoutState'
import useLoginState from '../States/LoginState'
import useMensagemState from '../States/MensagemState'
import Footer from './Footer'
import Header from './Header'
import './Layout.css'


export default function Layout() {

    const { loginState, setLoginState } = useLoginState()
    const { layoutState, setLayoutState } = useLayoutState()
    const { mensagemState, setMensagemState } = useMensagemState()

    const clearMensagem = () => {
        setMensagemState({...mensagemState, exibir: false})
    }

    return (
        <>
            <ContextoGlobal.Provider value={{
                loginState: loginState,
                setLoginState: setLoginState,
                layoutState: layoutState,
                setLayoutState: setLayoutState,
                mensagemState: mensagemState,
                setMensagemState: setMensagemState,
                clearMessage: clearMensagem
            }}>

                <>
                    {loginState.logado ?
                        <>
                            <Mensagem />
                            <Header />
                            <Outlet />
                            <Footer />
                        </> :
                        <>
                            <Login />
                        </>
                    }

                </>
            </ContextoGlobal.Provider>
        </>
    )
}