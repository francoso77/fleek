import { Component, Vue } from 'vue-property-decorator'

interface FornecedorInterface {
    cnpj: string,
    empresa: string,
    telefone: string
}

enum statusFormEnum {
    INCLUINDO = 1,
    ALTERANDO = 2
}

@Component
export default class FornecedorViewCls extends Vue {

    public statusForm: statusFormEnum = statusFormEnum.INCLUINDO

    public get statusFormEnum(): typeof statusFormEnum {
        return statusFormEnum
    }

    public indiceRegistroAtual: number = 0

    public rsFornecedores: Array<FornecedorInterface> = []

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
    public rsFornecedor: FornecedorInterface = {
        cnpj: '',
        empresa: '',
        telefone: ''
    }
    public cancelarDados(): void {
        this.limparEForcar()
    }
    public confimarDados(): void {
        
        let dadosValidos: boolean = false

        if (this.rsFornecedor.cnpj != '') {
            dadosValidos = true
            //this.msgErro.id = ""
        } else {
            dadosValidos = false
            //this.msgErro.id = 'O código inserido não é válido!'
        }
        if (this.rsFornecedor.empresa != '') {
            dadosValidos = true
            //this.msgErro.nome = ""
        } else {
            dadosValidos = false
            //this.msgErro.nome = 'o nome não pode ser vázio e tem que ser menor que 10 caracteres!'
        }
        if (this.rsFornecedor.telefone != '') {
            dadosValidos = true
            //this.msgErro.nascimento = ''
        } else {
            dadosValidos = false
            //this.msgErro.nascimento = 'Informe o nascimento do cão.'
        }
        if (dadosValidos) {
            if (this.statusForm == statusFormEnum.INCLUINDO) {
                this.rsFornecedores.push({ ...this.rsFornecedor })
            } else {
                this.rsFornecedores[this.indiceRegistroAtual] = { ...this.rsFornecedor }
                this.statusForm = statusFormEnum.INCLUINDO
            }
            this.limparEForcar()
        }
    }
    /**
 * função para limpar o formulário e mandar o foco para o campo nome
 */
    private limparEForcar() {

        this.rsFornecedor = {
            cnpj: '',
            empresa: '',
            telefone: ''
        }
            ; (<HTMLElement>this.$refs.txtCNPJ).focus()

    }
    /**
 * função para excluir um registro no formulário
 * @param indice number: número do indice a ser excluido
 */
    public btExcluir(indice: number): void {
        this.rsFornecedores.splice(indice, 1)
            ; (<HTMLElement>this.$refs.txtCNPJ).focus()
    }
    /**
     * função para alterar um registro no formuário
     * @param indice number: número do indice a ser alterado
     */
    public btAlterar(indice: number): void {
        this.rsFornecedor = { ...this.rsFornecedores[indice] }
        this.statusForm = statusFormEnum.ALTERANDO
        this.indiceRegistroAtual = indice
            ; (<HTMLElement>this.$refs.txtCNPJ).focus()
    }
}