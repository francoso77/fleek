import React, { useContext, useState } from 'react';
import InputText from '../Components/InputText';
import { URL_SERVIDOR } from '../Config/Setup';
import { ContextoGlobal } from '../Contextos/ContextoGlobal';
import { EscolasInterface } from '../Interfaces/EscolasInterface';
import { GlobalStateInterface } from '../Interfaces/GlobalStateInterface';

export default function CadastroEscola() {

    const [rsEscolas, setRsEscolas] = useState<EscolasInterface>({
        id: '',
        escola: '',
        cnpj: '',
        email: ''
    })


    const isLogado = (useContext(ContextoGlobal) as GlobalStateInterface).loginState.logado
    const isAutorizado = (useContext(ContextoGlobal) as GlobalStateInterface).loginState.autorizado
    

    const btIncluir = () => {

        setTimeout(() => {
            
            fetch(URL_SERVIDOR.concat('/escolas'), {
                body: JSON.stringify(rsEscolas),
                headers: {
                    'Content-Type': 'application/json',
                },
                method: 'POST'
            }).then (rs => {
                if (rs.status == 201) {
                    setRsEscolas ({
                        escola: '', 
                        cnpj: '', 
                        email:'', 
                        id:''})
                }
            })


        }, 9000);

        /*fetch(URL_SERVIDOR.concat('/escolas'))
        .then (resp => resp.json())
        .then ((data) =>{
            console.log(data)
        })
        .catch ((error) =>{
            console.log(error)
        })*/
    }

    const btEditar = () => {

        //setTimeout(() => {

            console.log (URL_SERVIDOR.concat('/escolas?id=').concat(rsEscolas.id))

            fetch(URL_SERVIDOR.concat('/escolas?id=').concat(rsEscolas.id), {
                body: JSON.stringify(rsEscolas),
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8'
                },
                method: 'PUT'
            }).then (rs => {
                
                return rs.json()
                

                /*if (rs.status == 201) {
                    setRsEscolas ({
                        escola: rsEscolas.escola, 
                        cnpj: rsEscolas.cnpj, 
                        email:rsEscolas.email, 
                        id:rsEscolas.id})
                }*/
            }).then ((dados: Array <EscolasInterface>) =>{
                console.log(dados)
                
                setRsEscolas ({
                    escola: dados[0].escola, 
                    cnpj: dados[0].cnpj, 
                    email:dados[0].email, 
                    id:dados[0].id})
                
            })


        //}, 9000);

        /*fetch(URL_SERVIDOR.concat('/escolas'))
        .then (resp => resp.json())
        .then ((data) =>{
            console.log(data)
        })
        .catch ((error) =>{
            console.log(error)
        })*/



    }
    return (
        <>

            <h1>Cadastro Escolas</h1>
            
            {isAutorizado && isLogado ? 
            
            <div className='escola'>
                <InputText
                    label='Id: '
                    tipo='text'
                    valor={rsEscolas.id}
                    id='txtId'
                    placeholder='id'
                    dados={rsEscolas}
                    campo='id'
                    setState={setRsEscolas}
                    valida='txt'
                />
                <InputText
                    label='Escola: '
                    tipo='text'
                    valor={rsEscolas.escola}
                    id='txtEscola'
                    placeholder=''
                    dados={rsEscolas}
                    campo='escola'
                    setState={setRsEscolas}
                    valida='txt'
                />
                <InputText
                    label='CNPJ: '
                    tipo='text'
                    valor={rsEscolas.cnpj}
                    id='txtCNPJ'
                    placeholder=''
                    dados={rsEscolas}
                    campo='cnpj'
                    setState={setRsEscolas}
                    valida='cnpj'

                />
                <InputText
                    label='E-mail: '
                    tipo='text'
                    valor={rsEscolas.email}
                    id='txtEMAIL'
                    placeholder=''
                    dados={rsEscolas}
                    campo='email'
                    setState={setRsEscolas}
                    valida='email'

                />
                <br />

                <input
                    id='btConfirmar'
                    type='Button'
                    value='Incluir'
                    onClick={btIncluir}

                />
                
                <input
                    id='btEditar'
                    type='Button'
                    value='Editar'
                    onClick={btEditar}

                />
            </div>:
            <>
            </>
            }
        </>

    )

}