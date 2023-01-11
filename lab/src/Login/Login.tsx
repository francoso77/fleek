import React, { useContext, useState } from 'react'
import './Login.css'
import { LoginInterface } from '../Interfaces/LoginInterface'
import { ContextoGlobal } from '../Contextos/ContextoGlobal'
import { GlobalStateInterface } from '../Interfaces/GlobalStateInterface'
import { URL_SERVIDOR3002 } from '../Config/Setup'
import ApiCls from '../Services/ApiCls'
import MenuCls from '../Layout/MenuCls'

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

    const GlobalContexto = (useContext(ContextoGlobal) as GlobalStateInterface)

    const logar = () => {

        let urlPesquisa: string = URL_SERVIDOR3002.concat('/usuarios?usuario=')
        urlPesquisa = urlPesquisa.concat(usuarios.usuario)
        urlPesquisa = urlPesquisa.concat('&senha=')
        urlPesquisa = urlPesquisa.concat(usuarios.senha)

        fetch(urlPesquisa).then(rs => {
            return rs.json()
        }).then((dadosUsuarios: Array<LoginInterface>) => {
            if (dadosUsuarios.length > 0) {
                GlobalContexto.setLoginState({
                    logado: true,
                    nome: dadosUsuarios[0].usuario,
                    token: dadosUsuarios[0].token,
                    autorizado: dadosUsuarios[0].autorizado
                })
                clsApi.post<any>('/Usuario/AuthenticateUser', dados, 'Login', GlobalContexto.mensagemState, GlobalContexto.setMensagemState).then(rs => {

                    const clsMenu = new MenuCls(rs.MenuDto)

                    GlobalContexto.setLayoutState({ ...GlobalContexto.layoutState, opcoesMenu: clsMenu.Menu })

                    console.log(JSON.stringify(clsMenu.Menu))
                })
                console.log('usuario: ', dadosUsuarios[0].usuario)
                console.log('senha: ', dadosUsuarios[0].senha)
                console.log('autorizado: ', dadosUsuarios[0].autorizado)
                console.log('Usuário encontrato... Login OK!!')
            } else {
                console.log('Usuário Não encontrato!!')
            }
        }).catch(erro => {
            console.log('Erro no Fetch....', erro)
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
                onClick={() => GlobalContexto.setLoginState({ logado: false, nome: '', token: '', autorizado: false })} />
        </>
    )

}