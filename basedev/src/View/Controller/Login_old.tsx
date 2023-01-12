import React, { useContext } from 'react'
import { ContextoGlobal, ContextoGlobalInterface } from '../../GlobalStates/ContextoGlobal'
import MenuCls from '../../Layout/MenuCls'
import ApiCls from '../../Services/ApiCls'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Copyright from '../../Layout/Copyright';



export default function Login() {

  const GlobalContexto = (useContext(ContextoGlobal) as ContextoGlobalInterface)

  const clsApi = new ApiCls()

  const dados = {
    "login": "master",
    "senha": "1d8db7d7519ea9e08ab786ad2692fa29"
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  }

  const logar = () => {



    clsApi.post<any>('/Usuario/AuthenticateUser', dados, 'Login', GlobalContexto.mensagemState, GlobalContexto.setMensagemState).then(rs => {

      const clsMenu = new MenuCls(rs.MenuDto)

      GlobalContexto.setLoginState({ ...GlobalContexto.loginState, logado: true })
      GlobalContexto.setLayoutState({ ...GlobalContexto.layoutState, opcoesMenu: clsMenu.Menu })

      console.log(JSON.stringify(clsMenu.Menu))
    })
  }
  return (
    <>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Log in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="E-mail"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Senha"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Lembre-me"
            />
            <Button
              onClick={logar}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Log In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Esqueceu a senha?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Criar uma conta? Cadastrar"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </>
  )
}