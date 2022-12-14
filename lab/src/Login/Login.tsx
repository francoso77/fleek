import React, { useContext, useState } from 'react'
import './Login.css'
import { LoginInterface } from '../Interfaces/LoginInterface'
import { ContextoGlobal } from '../Contextos/ContextoGlobal'
import { GlobalStateInterface } from '../Interfaces/GlobalStateInterface'
import { URL_SERVIDOR3002 } from '../Config/Setup'

export default function Login() {

    const [usuarios, setUsuarios] = useState<LoginInterface>({
        usuario: '',
        senha: '',
        token: '',
        autorizado: false
    })

    const setLoginState = (useContext(ContextoGlobal) as GlobalStateInterface).setLoginState

    const logar = () => {

        let urlPesquisa: string = URL_SERVIDOR3002.concat('/usuarios?usuario=')
        urlPesquisa = urlPesquisa.concat(usuarios.usuario)
        urlPesquisa = urlPesquisa.concat('&senha=')
        urlPesquisa = urlPesquisa.concat(usuarios.senha)

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
                onClick={() => setLoginState({ logado: false, nome: '', token: '', autorizado: false })} />
        </>
    )
}