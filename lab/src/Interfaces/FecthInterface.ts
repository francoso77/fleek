export interface FetchInterface {
    acao: 'incluindo' | 'excluindo' | 'pesquisando' | 'editando'
    idEscola: number
    nome: string   
}