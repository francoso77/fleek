import React from 'react'
import { Outlet } from 'react-router-dom'
import Mensagem from '../Components/Mensagem'
import { ContextoGlobal } from '../Contextos/ContextoGlobal'
import Login from '../Login/Login'
import useEscolaState from '../States/EscolaState'
import useLayoutState from '../States/LayoutState'
import useLoginState from '../States/LoginState'
import useMensagemState from '../States/MensagemState'
import usePesquisaState from '../States/PesquisaState'
import Footer from './Footer'
import Header from './Header'
import './Layout.css'


export default function Layout() {

    const { loginState, setLoginState } = useLoginState()
    const { layoutState, setLayoutState } = useLayoutState()
    const { mensagemState, setMensagemState } = useMensagemState()
    const { escolaState, setEscolaState } = useEscolaState()
    const { pesquisaState, setPesquisaState} = usePesquisaState()
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
                escolaState: escolaState,
                setEscolaState: setEscolaState,
                pesquisaState: pesquisaState,
                setPesquisaState: setPesquisaState,
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