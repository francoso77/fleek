import { Component, Vue } from 'vue-property-decorator'

interface UsuarioInterface {
    id: string,
    usuario: string,
    senha: string
}

enum statusFormEnum {
    INCLUINDO = 1,
    ALTERANDO = 2
}

@Component
export default class UsuarioViewCls extends Vue {

    public statusForm: statusFormEnum = statusFormEnum.INCLUINDO

    public get statusFormEnum(): typeof statusFormEnum {
        return statusFormEnum
    }

    public indiceRegistroAtual: number = 0

    public rsUsuarios: Array<UsuarioInterface> = []

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
    public rsUsuario: UsuarioInterface = {
        id: '',
        usuario: '',
        senha: ''
    }
    public cancelarDados(): void {
        this.limparEForcar()
    }
    public confimarDados(): void {
        
        let dadosValidos: boolean = false

        if (this.rsUsuario.id != '') {
            dadosValidos = true
            //this.msgErro.id = ""
        } else {
            dadosValidos = false
            //this.msgErro.id = 'O código inserido não é válido!'
        }
        if (this.rsUsuario.usuario != '') {
            dadosValidos = true
            //this.msgErro.nome = ""
        } else {
            dadosValidos = false
            //this.msgErro.nome = 'o nome não pode ser vázio e tem que ser menor que 10 caracteres!'
        }
        if (this.rsUsuario.senha != '') {
            dadosValidos = true
            //this.msgErro.nascimento = ''
        } else {
            dadosValidos = false
            //this.msgErro.nascimento = 'Informe o nascimento do cão.'
        }
        if (dadosValidos) {
            if (this.statusForm == statusFormEnum.INCLUINDO) {
                this.rsUsuarios.push({ ...this.rsUsuario })
            } else {
                this.rsUsuarios[this.indiceRegistroAtual] = { ...this.rsUsuario }
                this.statusForm = statusFormEnum.INCLUINDO
            }
            this.limparEForcar()
        }
    }
    /**
 * função para limpar o formulário e mandar o foco para o campo nome
 */
    private limparEForcar() {

        this.rsUsuario = {
            id: '',
            usuario: '',
            senha: ''
        }
            ; (<HTMLElement>this.$refs.txtID).focus()

    }
    /**
 * função para excluir um registro no formulário
 * @param indice number: número do indice a ser excluido
 */
    public btExcluir(indice: number): void {
        this.rsUsuarios.splice(indice, 1)
            ; (<HTMLElement>this.$refs.txtID).focus()
    }
    /**
     * função para alterar um registro no formuário
     * @param indice number: número do indice a ser alterado
     */
    public btAlterar(indice: number): void {
        this.rsUsuario = { ...this.rsUsuarios[indice] }
        this.statusForm = statusFormEnum.ALTERANDO
        this.indiceRegistroAtual = indice
            ; (<HTMLElement>this.$refs.txtID).focus()
    }
}