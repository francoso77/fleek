import { ThemeProvider } from '@mui/system'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Mensagem from '../Components/Mensagem'
import { THEME } from '../Config/Theme'
import { ContextoGlobal } from '../Contextos/ContextoGlobal'
import Login from '../Login/Login'
import useLayoutState from '../States/LayoutState'
import useLoginState from '../States/LoginState'
import useMensagemState from '../States/MensagemState'
import './Layout.css'
import TopAppBar from './TopAppBar'


export default function Layout() {

    const { loginState, setLoginState } = useLoginState()
    const { layoutState, setLayoutState } = useLayoutState()
    const { mensagemState, setMensagemState } = useMensagemState()
    const clearMensagem = () => {
        setMensagemState({ ...mensagemState, exibir: false })
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
                    <ThemeProvider theme={THEME}>
                        {loginState.logado ?
                            <>
                                <Mensagem />
                                <TopAppBar />
                                <Outlet />

                            </> :
                            <>
                                <Login />
                            </>
                        }
                    </ThemeProvider>
                </>
            </ContextoGlobal.Provider>
        </>
    )
}