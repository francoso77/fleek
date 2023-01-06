import { Button } from '@mui/material'
import React, { useContext } from 'react'
import { ContextoGlobal, ContextoGlobalInterface } from '../../GlobalStates/ContextoGlobal'
import MenuCls from '../../Layout/MenuCls'
import ApiCls from '../../Services/ApiCls'
export default function Login () {

  const { layoutState, setLayoutState } = useContext( ContextoGlobal ) as ContextoGlobalInterface
  const { mensagemState, setMensagemState } = ( useContext( ContextoGlobal ) as ContextoGlobalInterface )
  const { loginState, setLoginState } = ( useContext( ContextoGlobal ) as ContextoGlobalInterface )

  const clsApi = new ApiCls()

  const dados = {
    "login": "master",
    "senha": "1d8db7d7519ea9e08ab786ad2692fa29"
  }

  const logar = () => {
    clsApi.post<any>( '/Usuario/AuthenticateUser', dados, 'Login', mensagemState, setMensagemState ).then( rs => {

      const clsMenu = new MenuCls( rs.MenuDto )

      setLoginState( { ...loginState, logado: true } )
      setLayoutState( { ...layoutState, opcoesMenu: clsMenu.Menu } )

      console.log( JSON.stringify( clsMenu.Menu ) )
    } )
  }

  return (
    <>
      <Button onClick={() => logar()}>Logar</Button>
    </>
  )
}