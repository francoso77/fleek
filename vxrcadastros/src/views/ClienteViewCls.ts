import { Component, Vue } from 'vue-property-decorator'

interface ClienteInterface {
    cpf: string,
    nome: string,
    nascimento: string
}

enum statusFormEnum {
    INCLUINDO = 1,
    ALTERANDO = 2
}

@Component
export default class ClienteViewCls extends Vue {

    public statusForm: statusFormEnum = statusFormEnum.INCLUINDO

    public get statusFormEnum(): typeof statusFormEnum {
        return statusFormEnum
    }

    public indiceRegistroAtual: number = 0

    public rsClientes: Array<ClienteInterface> = []

    public exibirDebug: boolean = false

    /*    public msgErro = {
            id: '',
            nome: '',
            genero: '',
            altura: '',
            nascimento: '',
            obito: '',
            raca: '',
            federacao: '',
            categoria: '',
            vacina: '',
            consulta: '',
            clinica: ''
        }*/
    public rsCliente: ClienteInterface = {
        cpf: '',
        nome: '',
        nascimento: ''
    }
    public cancelarDados(): void {
        this.limparEForcar()
    }
    public confimarDados(): void {
        
        let dadosValidos: boolean = false

        if (this.rsCliente.cpf != '') {
            dadosValidos = true
            //this.msgErro.id = ""
        } else {
            dadosValidos = false
            //this.msgErro.id = 'O código inserido não é válido!'
        }
        if (this.rsCliente.nome != '') {
            dadosValidos = true
            //this.msgErro.nome = ""
        } else {
            dadosValidos = false
            //this.msgErro.nome = 'o nome não pode ser vázio e tem que ser menor que 10 caracteres!'
        }
        if (this.rsCliente.nascimento != '') {
            dadosValidos = true
            //this.msgErro.nascimento = ''
        } else {
            dadosValidos = false
            //this.msgErro.nascimento = 'Informe o nascimento do cão.'
        }
        if (dadosValidos) {
            if (this.statusForm == statusFormEnum.INCLUINDO) {
                this.rsClientes.push({ ...this.rsCliente })
            } else {
                this.rsClientes[this.indiceRegistroAtual] = { ...this.rsCliente }
                this.statusForm = statusFormEnum.INCLUINDO
            }
            this.limparEForcar()
        }
    }
    /**
 * função para limpar o formulário e mandar o foco para o campo nome
 */
    private limparEForcar() {

        this.rsCliente = {
            cpf: '',
            nome: '',
            nascimento: ''
        }
            ; (<HTMLElement>this.$refs.txtCPF).focus()

    }
    /**
 * função para excluir um registro no formulário
 * @param indice number: número do indice a ser excluido
 */
    public btExcluir(indice: number): void {
        this.rsClientes.splice(indice, 1)
            ; (<HTMLElement>this.$refs.txtCPF).focus()
    }
    /**
     * função para alterar um registro no formuário
     * @param indice number: número do indice a ser alterado
     */
    public btAlterar(indice: number): void {
        this.rsCliente = { ...this.rsClientes[indice] }
        this.statusForm = statusFormEnum.ALTERANDO
        this.indiceRegistroAtual = indice
            ; (<HTMLElement>this.$refs.txtCPF).focus()
    }
}