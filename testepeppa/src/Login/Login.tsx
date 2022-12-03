import React, { useContext, useRef, useState } from 'react'
import { URL_SERVIDOR } from '../Config/Setup'
import { ContextoGlobal } from '../Contexto/ContextoGlobal'
import { ContextoGlobalInterface } from '../Interfaces/ContextoGlobalInterface'
import { LoginInterface } from '../Interfaces/LoginInterface'

import './Login.css'

export default function Login() {

      
    const [validacao, setValidacao] = useState('')
    
    const [login, setLogin] = useState<LoginInterface>({
        usuario: '',
        senha: '',
        logado: false
    })

    const setLoginState = (useContext(ContextoGlobal) as ContextoGlobalInterface).setLoginState

    const logar = () => {

        let urlPesquisa: string = URL_SERVIDOR.concat('/usuarios?usuario=')
        urlPesquisa = urlPesquisa.concat(login.usuario)
        urlPesquisa = urlPesquisa.concat('&senha=')
        urlPesquisa = urlPesquisa.concat(login.senha)

        fetch(urlPesquisa).then(rs => {
            return rs.json()
        }).then((dadosUsuarios: Array<LoginInterface>) => {
            if (dadosUsuarios.length > 0) {

                setLoginState({
                    logado : true,
                    usuario : dadosUsuarios[0].usuario
                })

            } else {
                setValidacao('Usuário ou senha inválidos!')
                
            }
        }).catch(erro => {
            alert('sem conexão com o banco de dados!')
        })

    }

    return (
        <>
            <div className='cabecalho'>
                <img src="logo.png" alt="asdfafasdfasdf" width={210} />
                <h1>Login</h1>

            </div>

            <input type="text" id="txtLogin" placeholder='Login' autoFocus
                onChange={(e) => setLogin({ ...login, usuario: e.target.value })} />
            <input type="password" id="txtSenha" placeholder='Senha'
                onChange={(e) => setLogin({ ...login, senha: e.target.value })} />
            <span className="spanValidacao">{validacao}</span>
            <br />

            <input type="button" value="Login" id='btLogin'
                onClick={logar} />
            <input type="button" value="Logout" id='btLogout'
                onClick={() => setLoginState({logado: false, usuario: ''})} />
        </>
    )
}