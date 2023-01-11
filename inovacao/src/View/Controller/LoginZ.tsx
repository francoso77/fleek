import React, { useContext, useState } from 'react'
import { ContextoGlobal, ContextoGlobalInterface } from '../../GlobalStates/ContextoGlobal'
import MenuCls from '../../Layout/MenuCls'
import ApiCls from '../../Services/ApiCls'
import { Box, Button, FormControlLabel, Grid, Paper, Switch, Typography } from '@mui/material'
import InputText from '../../InovaComponents/InputText'
import { MensagemTipo } from '../../GlobalStates/MensagemState'

interface LoginInterface {
  login: string
  senha: string
}

export default function Login () {

  const { layoutState, setLayoutState } = useContext( ContextoGlobal ) as ContextoGlobalInterface
  const { mensagemState, setMensagemState } = ( useContext( ContextoGlobal ) as ContextoGlobalInterface )
  const { loginState, setLoginState } = ( useContext( ContextoGlobal ) as ContextoGlobalInterface )

  const [usuarioState, setUsuarioState] = useState<LoginInterface>( { senha: '', login: '' } )

  const [exibirSenhaState, setExibirSenha] = useState( false )

  const clsApi = new ApiCls()

  const handleExibirSenha = () => {
    setExibirSenha( !exibirSenhaState )
  }

  const dados = {
    "login": "master",
    "senha": "1d8db7d7519ea9e08ab786ad2692fa29"
  }

  const logar = () => {
    // setMensagemState( { ...mensagemState, titulo: 'Erro no Servidor!', modal: true, exibir: true, mensagem: 'Não foi possível fazer o Login!', tipo: MensagemTipo.Error } )

    clsApi.post<any>( '/Usuario/AuthenticateUser', dados, 'Login', mensagemState, setMensagemState ).then( rs => {

      if ( rs.token && rs.token.length > 0 ) {

        const clsMenu = new MenuCls( rs.menu )

        setLoginState( { ...loginState, logado: true } )
        setLayoutState( { ...layoutState, opcoesMenu: clsMenu.Menu } )

      } else {
        setMensagemState( { ...mensagemState, modal: true, exibir: true, mensagem: 'Verifique Usuário / Senha!', tipo: MensagemTipo.Error } )
      }
      
    } ).catch( ( er ) => {

      console.log( er )

      setMensagemState( { ...mensagemState, modal: true, exibir: true, mensagem: 'Erro no Servidor!', tipo: MensagemTipo.Error } )
    } )


  }

  return (
    <>
      <Grid
        container
        justifyContent='center'
        alignItems='center'
        height='100vh'
      >
        <Grid item xs={10} sm={8} md={6} lg={4}>
          <Paper>
            <Box
              sx={{ backgroundColor: 'primary.main', padding: 2 }}
              textAlign='center'
            >
              <img src="imagens/logoFundoBranco.png" width={200} alt="Inova Manager" />
              <Typography component="p" variant="h6" color="white">
                Versão
                <Typography component="span" variant="body1" color="white">
                  &nbsp;1.00 -&nbsp;
                  <Typography component="span" variant="h6" color="white">
                    Release
                    <Typography component="span" variant="body1" color="white">
                      &nbsp;00001/01
                    </Typography>
                  </Typography>
                </Typography>
              </Typography>
            </Box>
            <Box
              sx={{ backgroundColor: 'white', padding: 2, mx: 5 }}
              textAlign='center'
            >
              <Typography variant="h4" fontFamily='sans-serif' fontWeight='bolder' color="primary.main">
                Imanager
              </Typography>

              <InputText
                dados={usuarioState}
                field='login'
                label='Usuário'
                setState={setUsuarioState}
              />

              <InputText
                dados={usuarioState}
                field='senha'
                label='Senha'
                type={exibirSenhaState ? "text" : "password"}
                setState={setUsuarioState}
              />

              <FormControlLabel
                control={
                  <Switch checked={exibirSenhaState} onChange={handleExibirSenha} />
                }
                label="Exibir Senha"
                sx={{ width: '100%', my: 2 }}
              />

              <Button variant='contained' onClick={() => logar()} sx={{ width: '100%' }}>Logar</Button>

            </Box>
          </Paper>
        </Grid>
      </Grid>

    </>
  )

}