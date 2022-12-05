import React, { useContext, useState } from 'react';
import InputButton from '../Components/InputButton';
import InputText from '../Components/InputText';
import { ContextoGlobal } from '../Contextos/ContextoGlobal';
import { FornecedoresInterface } from '../Interfaces/FornecedoresInterface';
import { GlobalStateInterface } from '../Interfaces/GlobalStateInterface';

export default function CadastroFornecedor() {

    const [rsFornecedor, setRsFornecedor] = useState<FornecedoresInterface>({
        id: '',
        fornecedor: '',
        cnpj: ''
    })

    const isLogado = (useContext(ContextoGlobal) as GlobalStateInterface).loginState.logado

    return (
        <>


            <h1>Cadastro Fornecedor</h1>

            {isLogado && <div>
                <InputText
                    label='Id: '
                    tipo='text'
                    valor={rsFornecedor.id}
                    id='txtId'
                    placeholder='id'
                    dados={rsFornecedor}
                    campo='id'
                    setState={setRsFornecedor}
                    valida='txt'
                />
                <InputText
                    label='Fornecedor: '
                    tipo='text'
                    valor={rsFornecedor.fornecedor}
                    id='txtFornecedor'
                    placeholder=''
                    dados={rsFornecedor}
                    campo='fornecedor'
                    setState={setRsFornecedor}
                    valida='txt'
                />
                <InputText
                    label='CNPJ: '
                    tipo='text'
                    valor={rsFornecedor.cnpj}
                    id='txtCNPJ'
                    placeholder=''
                    dados={rsFornecedor}
                    campo='cnpj'
                    setState={setRsFornecedor}
                    valida='email'

                />
                <br />

                <InputButton
                    id='btConfirmar'
                    tipo='Button'
                    valor='OK'
                    action=''
                />

            </div>}
        </>
    )
}