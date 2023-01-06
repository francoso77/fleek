import React from 'react'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { Outlet } from 'react-router-dom'
import { THEME } from '../Config/Theme'
import { ContextoGlobal } from '../GlobalStates/ContextoGlobal'
import useLayoutState from '../GlobalStates/LayoutState'
import Mensagem from '../InovaComponents/xMensagem'
import BottomBar from './BottomBar'
import TopAppBar from './TopAppBar'
import Menu from './Menu'
import Condicional from './Condicional'
import Login from '../View/Controller/Login'
import useMensagemState from '../GlobalStates/MensagemState'
import useLoginState from '../GlobalStates/LoginState'

export default function Layout () {

  const { layoutState, setLayoutState } = useLayoutState()
  const { mensagemState, setMensagemState } = useMensagemState()
  const { loginState, setLoginState } = useLoginState()

  return (
    <>
      <ContextoGlobal.Provider value={{
        layoutState: layoutState,
        setLayoutState: setLayoutState,
        mensagemState: mensagemState,
        setMensagemState: setMensagemState,
        loginState: loginState,
        setLoginState: setLoginState
      }}>
        <CssBaseline />
        <ThemeProvider theme={THEME}>

          <Mensagem />

          <Condicional condicao={loginState.logado}>

            <TopAppBar />
            <Outlet />
            <BottomBar/>
            <Menu />

          </Condicional>

          <Condicional condicao={!loginState.logado}>
            <Login />
          </Condicional>

        </ThemeProvider>

      </ContextoGlobal.Provider>

    </>
  )
}