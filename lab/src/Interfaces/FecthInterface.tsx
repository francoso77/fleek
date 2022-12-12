import React from "react"

export interface FetchInterface {
    funcao: 'incluindo' | 'excluindo' | 'pesquisando' | 'editando'
    idEscola: number
    method: 'GET' | 'DELETE' | 'PATCH' | 'POST'
    acao: 'Incluir' | 'Excluir' | 'Pesquisar' | 'Editar'
    
}