export interface MensagemStateInterface {
    exibir: boolean
    mensagem: string
    tipo: 'aviso' | 'erro' | 'processando'
}