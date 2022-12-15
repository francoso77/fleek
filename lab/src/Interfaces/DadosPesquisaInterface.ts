export interface DadosPesquisaInterface {
    MSG1: 'Pesquisando' | 'Editando' | 'Excluindo' | 'Incluindo'
    MSG2: 'pesquisar' | 'editar' | 'excluir' | 'Incluir'
    MSG3: null | 'editado' | 'excluído' | 'incluído'
    dados: null | string
    corpo: null | string
    metodo: 'GET' | 'POST' | 'PATCH' | 'DELETE'
    url: null | string
}