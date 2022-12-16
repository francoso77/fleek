import { URL_SERVIDOR3006 } from "../Config/Setup"
import { AcaoStateInterface } from "../Interfaces/AcaoStateInterface"
import { FornecedoresInterface } from "../Interfaces/FornecedoresInterface"
import { GlobalStateInterface } from "../Interfaces/GlobalStateInterface"
import { PesquisaInterface } from "../Interfaces/PesquisaInterface"

const TEMPO_PADRAO_DELAY: number = 500

export default class ClsFetch {

    public pesquisar (
        item: number | string,
        acao: string,
        pesquisa: PesquisaInterface,
        rsFornecedores: FornecedoresInterface,
        globalContexto: GlobalStateInterface,
        setAcaoState: React.Dispatch<React.SetStateAction<AcaoStateInterface>>,
        setRsFornecedores: React.Dispatch<React.SetStateAction<FornecedoresInterface>>,
        setRsPesquisa: React.Dispatch<React.SetStateAction<FornecedoresInterface[]>>
         
    ) {
        
        let URL_PESQUISA: string = URL_SERVIDOR3006.concat('/fornecedores/'.concat(item.toString()))
        let MSG1: string = 'Pesquisando fornecedor ...'
        let MSG2: string = 'pesquisar'
        let MSG3: string = ''
        let corpo: string | null = null
        let metodo: string = 'GET'

        if (acao === 'pesquisando') {

            URL_PESQUISA = URL_SERVIDOR3006.concat('/fornecedores?fornecedor_like='.concat(pesquisa.nome))

        } else if (acao === 'ConfirmarEdicao') {
            
            MSG1 = 'Editando fornecedor ...'
            MSG2 = 'editar'
            MSG3 = 'editado'
            corpo = JSON.stringify(rsFornecedores)
            metodo = 'PATCH'
        } else if (acao === 'ConfirmarExclusao') {
            
            MSG1 = 'Excluindo fornecedor ...'
            MSG2 = 'excluir'
            MSG3 = 'excluído'
            metodo = 'DELETE'
        }else if (acao === 'ConfirmarInclusao') {
            
            URL_PESQUISA = URL_SERVIDOR3006.concat('/fornecedores')
            MSG1 = 'Incluindo fornecedor ...'
            MSG2 = 'incluir'
            MSG3 = 'incluído'
            corpo = JSON.stringify(rsFornecedores)
            metodo = 'POST'
        }

        globalContexto.setMensagemState({ exibir: true, mensagem: MSG1, tipo: 'processando' })

        setTimeout(() => {
            fetch(URL_PESQUISA, {
                body: corpo,
                headers: { 'content-Type': 'application/json', },
                method: metodo
            }).then(rs => {
                if (rs.ok) {
                    
                    if (acao === 'ConfirmarExclusao' || acao === 'ConfirmarEdicao' || acao === 'ConfirmarInclusao') {
                        
                        this.pesquisar(
                            0,
                            'pesquisando',
                            pesquisa,
                            rsFornecedores,
                            globalContexto,
                            setAcaoState,
                            setRsFornecedores,
                            setRsPesquisa)

                        setAcaoState ({acao:'pesquisando'})
                        setRsFornecedores({
                            idFornecedor:0,
                            fornecedor: '',
                            cnpj: ''
                        })
                        globalContexto.setMensagemState({ exibir: true, mensagem: 'Fornecedor '.concat(MSG3).concat(' com sucesso!!!'), tipo: 'aviso' })
                        
                    } else {
                        globalContexto.setMensagemState({ exibir: false, mensagem: '', tipo: 'aviso' })
                        return rs.json()
                    }
                } else {
                    globalContexto.setMensagemState({ exibir: true, mensagem: 'Erro ao '.concat(MSG2).concat(' Fornecedor!!! '), tipo: 'erro' })
                }
            }).then((DadosFornecedor) => {
                
                if (acao === 'pesquisando') {
                    setRsPesquisa(DadosFornecedor)
                } else if (acao === 'excluindo' || acao === 'editando') {
                    setRsFornecedores(DadosFornecedor)
                    setAcaoState({ acao: acao })
                }
                
            }).catch((e) => {
                globalContexto.setMensagemState({ exibir: true, mensagem: 'Erro no Servidor, Não foi possível '.concat(MSG2).concat(' Fornecedor!!!'), tipo: 'erro' })
            })
        }, TEMPO_PADRAO_DELAY)

    }
}
