export interface AcaoStateInterface{
    acao: 'incluindo' | 
          'excluindo' | 
          'pesquisando' | 
          'editando' | 
          'ConfirmarEdicao' | 
          'ConfirmarExclusao'|
          'ConfirmarInclusao'|
          string
}