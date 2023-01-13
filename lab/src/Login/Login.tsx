import { useContext, useState } from 'react'
import './Login.css'
import { ContextoGlobal } from '../Contextos/ContextoGlobal'
import { GlobalStateInterface } from '../Interfaces/GlobalStateInterface'
import { URL_SERVIDOR3002 } from '../Config/Setup'
import ApiCls from '../Services/ApiCls'
import MenuCls from '../Layout/MenuCls'
import { MensagemTipo } from '../States/MensagemState'


export interface LoginInterface {
    usuario: string
    senha: string
    token: string
    autorizado: boolean
}

export default function Login() {

    const clsApi = new ApiCls()

    const dados = {
        "login": "master",
        "senha": "1d8db7d7519ea9e08ab786ad2692fa29"
    }

    const [usuarios, setUsuarios] = useState<LoginInterface>({
        usuario: '',
        senha: '',
        token: '',
        autorizado: false
    })

    const { mensagemState, setMensagemState } = useContext(ContextoGlobal) as GlobalStateInterface
    const { layoutState, setLayoutState } = useContext(ContextoGlobal) as GlobalStateInterface
    const { setLoginState } = useContext(ContextoGlobal) as GlobalStateInterface

    const logar = () => {

        let urlPesquisa: string = URL_SERVIDOR3002.concat('/usuarios?usuario=')
        urlPesquisa = urlPesquisa.concat(usuarios.usuario)
        urlPesquisa = urlPesquisa.concat('&senha=')
        urlPesquisa = urlPesquisa.concat(usuarios.senha)

       
            setMensagemState({ ...mensagemState, loading: true })

      


        fetch(urlPesquisa).then(rs => {
            return rs.json()
        }).then((dadosUsuarios: Array<LoginInterface>) => {
            if (dadosUsuarios.length > 0) {
                setLoginState({
                    logado: true,
                    nome: dadosUsuarios[0].usuario,
                    token: dadosUsuarios[0].token,
                    autorizado: dadosUsuarios[0].autorizado
                })


                clsApi.post<any>('/Usuario/AuthenticateUser', dados, 'Login', mensagemState, setMensagemState).then(rs => {

                    const clsMenu = new MenuCls(rs.MenuDto)

                    setLayoutState({ ...layoutState, opcoesMenu: clsMenu.Menu })

                    console.log(JSON.stringify(clsMenu.Menu))
                })
       
            } else {
                setMensagemState(
                    {
                        mensagem: 'Verifique Usuário / Senha',
                        exibir: true,
                        tipo: MensagemTipo.Error,
                        titulo: 'Erro',
                        modal: true,
                        loading: false
                    }
                )
            }
        }).catch(erro => {
  
            setMensagemState(
                {
                    mensagem: 'Erro de conexão com o Servidor',
                    exibir: true,
                    tipo: MensagemTipo.Error,
                    titulo: 'Erro Servidor',
                    modal: true,
                    loading: false
                }
            )
        })
    }

    return (
        <>
            <h1>Login</h1>

            <input type="text" id="txtLogin" placeholder='Login' autoFocus
                onChange={(e) => setUsuarios({ ...usuarios, usuario: e.target.value })} />
            <input type="password" id="txtSenha" placeholder='Senha'
                onChange={(e) => setUsuarios({ ...usuarios, senha: e.target.value })} />
            <br />

            <input type="button" value="Login" id='btLogin'
                onClick={logar} />
            <input type="button" value="Logout" id='btLogout'
                onClick={() => setLoginState({
                    logado: false,
                    nome: '',
                    token: '',
                    autorizado: false
                })} />

        </>
    )

}