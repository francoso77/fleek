import { useContext, useState } from 'react'
import { ContextoGlobal, ContextoGlobalInterface } from '../../GlobalStates/ContextoGlobal'
import MenuCls from '../../Layout/MenuCls'
import ApiCls from '../../Services/ApiCls'
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Copyright from '../../Layout/Copyright';
import { MensagemTipo } from '../../GlobalStates/MensagemState';
import InputText from '../../Componentes/InputText';
import { Paper, Switch } from '@mui/material';


interface LoginInterface {
    login: string
    senha: string
}

export default function Login() {

    const GlobalContexto = (useContext(ContextoGlobal) as ContextoGlobalInterface)

    const [usuarioState, setUsuarioState] = useState<LoginInterface>({ login: '', senha: '' })

    const [exibirSenhaState, setExibirSenhaState] = useState(false)

    const handleExibirSenha = () => {
        setExibirSenhaState(!exibirSenhaState)
    }

    const clsApi = new ApiCls()

    const dados = {
        "login": "master",
        "senha": "1d8db7d7519ea9e08ab786ad2692fa29"
    }

    const logar = () => {

        clsApi.post<any>('/Usuario/AuthenticateUser', dados, 'Login', GlobalContexto.mensagemState, GlobalContexto.setMensagemState).then(rs => {

            const clsMenu = new MenuCls(rs.MenuDto)

            GlobalContexto.setLoginState({ ...GlobalContexto.loginState, logado: true })
            GlobalContexto.setLayoutState({ ...GlobalContexto.layoutState, opcoesMenu: clsMenu.Menu })
      
            console.log(JSON.stringify(clsMenu.Menu))
          })
        }
         /*   if (rs.token && rs.token.length > 0) {

                const clsMenu = new MenuCls(rs.MenuDto)

                GlobalContexto.setLoginState({ ...GlobalContexto.loginState, logado: true })
                GlobalContexto.setLayoutState({ ...GlobalContexto.layoutState, opcoesMenu: clsMenu.Menu })
                console.log(JSON.stringify(clsMenu.Menu))
            } else {

                GlobalContexto.setMensagemState({
                    ...GlobalContexto.mensagemState,
                    exibir: true,
                    mensagem: 'Verifique Usuário / Senha',
                    tipo: MensagemTipo.Erro
                })
            }
        }).catch((erro) => {

            console.log(erro)
            GlobalContexto.setMensagemState({
                ...GlobalContexto.mensagemState,
                exibir: true,
                mensagem: 'Erro de conexão com o Servidor',
                tipo: MensagemTipo.Erro
            })
        })
    }*/
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
                                Nome da Empresa
                            </Typography>

                            <InputText
                                dados={usuarioState}
                                field='login'
                                label='Usuário'
                                setState={setUsuarioState}
                                valida='txt'
                            />

                            <InputText
                                dados={usuarioState}
                                field='senha'
                                label='Senha'
                                type={exibirSenhaState ? "text" : "password"}
                                setState={setUsuarioState}
                                valida='txt'
                            />

                            <FormControlLabel
                                control={
                                    <Switch checked={exibirSenhaState} onChange={handleExibirSenha} />
                                }
                                label="Exibir Senha"
                                sx={{ width: '100%', my: 2 }}
                            />

                            <Button variant='contained' onClick={() => logar()} sx={{ width: '100%' }}>Logar</Button>
                            <Copyright sx={{ mt: 8, mb: 4 }} />
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </>
    )
}
