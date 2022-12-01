import React, { useContext, useState } from 'react'
import { URL_SERVIDOR } from '../Config/Setup'
import { LoginInterface } from '../Interfaces/LoginInterface'
import { LoginContexto } from '../Layout/Layout'
import './Login.css'

export default function Login() {

    const [validacao, setValidacao] = useState('')
    
    const [usuarios, setUsuarios] = useState<LoginInterface>({
        usuario: '',
        senha: '',
        logado: false
    })

    const updateLogin = useContext(LoginContexto).updateLogin

    const logar = () => {

        let urlPesquisa: string = URL_SERVIDOR.concat('/usuarios?usuario=')
        urlPesquisa = urlPesquisa.concat(usuarios.usuario)
        urlPesquisa = urlPesquisa.concat('&senha=')
        urlPesquisa = urlPesquisa.concat(usuarios.senha)

        fetch(urlPesquisa).then(rs => {
            return rs.json()
        }).then((dadosUsuarios: Array<LoginInterface>) => {
            if (dadosUsuarios.length > 0) {

                updateLogin(true, dadosUsuarios[0].usuario)

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
                onChange={(e) => setUsuarios({ ...usuarios, usuario: e.target.value })} />
            <input type="password" id="txtSenha" placeholder='Senha'
                onChange={(e) => setUsuarios({ ...usuarios, senha: e.target.value })} />
            <span className="spanValidacao">{validacao}</span>
            <br />

            <input type="button" value="Login" id='btLogin'
                onClick={logar} />
            <input type="button" value="Logout" id='btLogout'
                onClick={() => updateLogin(false, '')} />
        </>
    )
}