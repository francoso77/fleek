export interface MensagemModalStateInterface {
    exibir: boolean
    mensagem: string
    tipo: 'aviso' | 'erro' | 'processo'
}