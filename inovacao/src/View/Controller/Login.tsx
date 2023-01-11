import { Box, Button, Card, CardContent, CardHeader, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material'
import React, { useContext } from 'react'
import { ContextoGlobal, ContextoGlobalInterface } from '../../GlobalStates/ContextoGlobal'
import MenuCls from '../../Layout/MenuCls'
import ApiCls from '../../Services/ApiCls'
import { Visibility, VisibilityOff } from '@mui/icons-material'
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



  interface StateSenha {
    Senha: string;
    MostarSenha: boolean;
  }
  
  
  interface StateUsuario {
    Usuario: string;
  }
  
  const [valuesUsuario, setValuesUsuario] = React.useState<StateUsuario>({
    Usuario: '',
  })

  const setNomeUsuario = (prop: keyof StateUsuario) => (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length >= 20) {
      event.target.value = event.target.value.substring(0, 20)
    }
    setValuesUsuario({ ...valuesUsuario, [prop]: event.target.value })
  }

  const [valuesSenha, setValuesSenha] = React.useState<StateSenha>({
    Senha: '',
    MostarSenha: false,
  });

  const setSenha = (prop: keyof StateSenha) => (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length >= 35) {
      event.target.value = event.target.value.substring(0, 35)
    }
    setValuesSenha({ ...valuesSenha, [prop]: event.target.value });
  };

  const handleClickShowSenha = () => {
    setValuesSenha({
      ...valuesSenha,
      MostarSenha: !valuesSenha.MostarSenha,
    });
  };

  const handleMouseDownSenha = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };



  return (
    <>
        <Card sx={{position: 'relative', backgroundColor: 'white',
                  width: '30%', minWidth: '300px', maxWidth: '500px',
                  height: '70%', minHeight: '470px',
                  maxHeight: '537px', left: '50vw', 
                  top: '50vh', transform: 'translate(-50%, -50%)'}}
                  raised>
          <CardContent>

          <InputLabel sx={{ fontWeight: '600', color: 'navy', marginTop: '5%', fontSize: '25px' }}>Usuario</InputLabel>
            <OutlinedInput
              sx={{ width: '100%', height: '40px' }}
              value={valuesUsuario.Usuario}
              onChange={setNomeUsuario('Usuario')}
            />

            <InputLabel sx={{ fontWeight: '600', color: 'navy', marginTop: '5%', fontSize: '25px' }}>Senha</InputLabel>
            <OutlinedInput
              sx={{ width: '100%', height: '40px' }}
              type={valuesSenha.MostarSenha ? 'text' : 'password'}
              value={valuesSenha.Senha}
              onChange={setSenha('Senha')}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="Alterar visibiliade"
                    onClick={handleClickShowSenha}
                    onMouseDown={handleMouseDownSenha}
                    edge="end"
                  >
                    {valuesSenha.MostarSenha ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
            <Button onClick={() => logar()}>Logar</Button>
          </CardContent>

        </Card>
      {/* </Box> */}
    </>
  )
}