import { Icon } from '@mui/material';
import Button from '@mui/material/Button';
import { useContext, useState } from 'react';
import InputText from '../Components/InputText';
import { ContextoGlobal } from '../Contextos/ContextoGlobal';
import { AcaoStateInterface } from '../Interfaces/AcaoStateInterface';
import { FornecedoresInterface } from '../Interfaces/FornecedoresInterface';
import { GlobalStateInterface } from '../Interfaces/GlobalStateInterface';
import { PesquisaInterface } from '../Interfaces/PesquisaInterface';
import ClsFetch from '../Utils/ClsFetch';


export default function CadastroFornecedor() {

    const [rsFornecedores, setRsFornecedores] = useState<FornecedoresInterface>({
        idFornecedor: 0,
        fornecedor: '',
        cnpj: ''
    })

    const globalContexto = (useContext(ContextoGlobal) as GlobalStateInterface)

    const [pesquisa, setPesquisa] = useState<PesquisaInterface>({ nome: '' })

    const [rsPesquisa, setRsPesquisa] = useState<Array<FornecedoresInterface>>([])

    const [acaoState, setAcaoState] = useState<AcaoStateInterface>({ acao: 'pesquisando' })

    const btPesquisar = (item: number | string, acao: string) => {

        const verificarDados: ClsFetch = new ClsFetch()

        verificarDados.pesquisar(
            item,
            acao,
            pesquisa,
            rsFornecedores,
            globalContexto,
            setAcaoState,
            setRsFornecedores,
            setRsPesquisa)
    }

    const listRsPesquisa = !rsPesquisa ? <></> : rsPesquisa.map((fornecedores) =>

        <tr key={fornecedores.idFornecedor}>
            <td>{fornecedores.idFornecedor}</td>
            <td>{fornecedores.fornecedor}</td>
            <td>{fornecedores.cnpj}</td>

            <td>
            <Icon>star</Icon>
            </td>
            <td><input type="button" value="Editar" onClick={(e) => btPesquisar(fornecedores.idFornecedor, 'editando')} /></td>
            <td><input type="button" value="Excluir" onClick={(e) => btPesquisar(fornecedores.idFornecedor, 'excluindo')} /></td>
        </tr>
    )

    const btCancelar = () => {

        setAcaoState({ acao: 'pesquisando' })

    }

    const btNovoFornecedor = () => {

        setAcaoState({ acao: 'incluindo' })

    }

    return (
        <>
            <h1>Cadastro Fornecedor</h1>

            {globalContexto.loginState.logado &&
                <>
                    {acaoState.acao !== 'pesquisando' &&
                        <>
                            <InputText
                                label='Fornecedor: '
                                tipo='text'
                                valor={rsFornecedores.fornecedor}
                                id='txtFornecedor'
                                dados={rsFornecedores}
                                campo='fornecedor'
                                setState={setRsFornecedores}
                                valida='txt'
                                disabled={acaoState.acao === 'excluindo' ? true : false}
                            />
                            <InputText
                                label='CNPJ: '
                                tipo='text'
                                valor={rsFornecedores.cnpj}
                                id='txtCNPJ'
                                dados={rsFornecedores}
                                campo='cnpj'
                                setState={setRsFornecedores}
                                valida='cnpj'
                                disabled={acaoState.acao === 'excluindo' ? true : false}
                            />
                            <br />
                            <Button
                                variant="outlined"
                                onClick={btCancelar}
                            >Cancelar</Button>
                            <br />
                        </>
                    }
                    {acaoState.acao === 'pesquisando' &&
                        <>
                            <InputText
                                label='Pesquisar: '
                                tipo='text'
                                id='txtPesquisar'
                                dados={pesquisa}
                                campo='nome'
                                setState={setPesquisa}
                                valida='txt'
                            />
                            <Button
                                variant="outlined"
                                onClick={(e) => btPesquisar(pesquisa.nome, 'pesquisando')}
                            >Pesquisar</Button>
                            <br />
                            <Button
                                variant="outlined"
                                onClick={btNovoFornecedor}
                            >+</Button>
                            <br />
                            <br />
                            <table>
                                <thead>
                                    <tr>
                                        <td>id</td>
                                        <td>Fornecedor</td>
                                        <td>CNPJ</td>
                                        <td colSpan={2}>Ações</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {listRsPesquisa}
                                </tbody>
                            </table>
                        </>
                    }
                    {acaoState.acao === 'editando' &&
                        <Button
                            variant="outlined"
                            onClick={(e) => btPesquisar(rsFornecedores.idFornecedor, 'ConfirmarEdicao')}
                        >Confirmar Edição</Button>
                    }
                    {acaoState.acao === 'excluindo' &&
                        <Button
                            variant="outlined"
                            onClick={(e) => btPesquisar(rsFornecedores.idFornecedor, 'ConfirmarExclusao')}
                        >Confirmar Exclusão</Button>
                    }
                    {acaoState.acao === 'incluindo' &&
                        <Button
                            variant="outlined"
                            onClick={(e) => btPesquisar(0, 'ConfirmarInclusao')}
                        >Confirmar Inclusão</Button>
                    }
                </>
            }
        </>
    )
}