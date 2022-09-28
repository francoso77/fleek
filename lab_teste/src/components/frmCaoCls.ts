import clsValidacao from '@/ultis/clsValidacao';
import { Component, Vue } from 'vue-property-decorator';

interface CaoInterface {
    id: string,
    nome: string,
    genero: string,
    altura: number,
    nascimento: string,
    obito: string,
    raca: string,
    federacao: string,
    categoria: string,
    vacina: boolean,
    consulta: boolean,
    clinica: string
}

enum statusFormEnum {
    INCLUINDO = 1,
    ALTERANDO = 2
}


@Component
export default class frmCaoCls extends Vue {

    public statusForm: statusFormEnum = statusFormEnum.INCLUINDO

    public get statusFormEnum(): typeof statusFormEnum {
        return statusFormEnum
    }

    public indiceRegistroAtual: number = 0

    public rsCaes: Array<CaoInterface> = []

    public exibirDebug: boolean = false

    public temClinica: boolean = false

    public msgErro = {
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
    }
    public rsCao: CaoInterface = {
        id: '',
        nome: '',
        genero: '',
        altura: 0,
        nascimento: '',
        obito: '',
        raca: '',
        federacao: '',
        categoria: '',
        vacina: false,
        consulta: false,
        clinica: ''

    }

    public racas: Array<string> = [
        'PitBull',
        'Pincher',
        'Vira-lata',
        'Bace'
    ]

    public federacoes: Array<string> = [
        'Federação Brasileira',
        'Federação Carioca',
        'Federação Mineira',
        'Federação Paulista'
    ]

    public habilitaClinica(): void {

        const resposta: string = this.rsCao.consulta.toString()
        if (resposta == "true" || resposta == "sim") {
            this.temClinica = false
        } else {
            this.rsCao.clinica = ""
            this.temClinica = true
        }
    }
    public confimarDados(): void {

        let dadosValidos: boolean = false

        const validacao: clsValidacao = new clsValidacao

        if (validacao.validaDado(this.rsCao.id)) {
            dadosValidos = true
            this.msgErro.id = ""
        } else {
            dadosValidos = false
            this.msgErro.id = 'O código inserido não é válido!'
        }
        if (validacao.validaDado(this.rsCao.nome) && this.rsCao.nome.length < 10) {
            dadosValidos = true
            this.msgErro.nome = ""
        } else {
            dadosValidos = false
            this.msgErro.nome = 'o nome não pode ser vázio e tem que ser menor que 10 caracteres!'
        }
        if (this.rsCao.genero == 'Macho' || this.rsCao.genero == 'Femea') {
            dadosValidos = true
            this.msgErro.genero = ""
        } else {
            dadosValidos = false
            this.msgErro.genero = 'O campo genero é obrigatório'
        }
        if (validacao.validaDado(this.rsCao.altura) && this.rsCao.altura < 200) {
            dadosValidos = true
            this.msgErro.altura = ""
        } else {
            dadosValidos = false
            this.msgErro.altura = 'A altura informada não é válido!'
        }
        if (this.rsCao.nascimento != '') {
            dadosValidos = true
            this.msgErro.nascimento = ''
        } else {
            dadosValidos = false
            this.msgErro.nascimento = 'Informe o nascimento do cão.'
        }
        if (this.rsCao.raca != '') {
            dadosValidos = true
            this.msgErro.raca = ''
        } else {
            dadosValidos = false
            this.msgErro.raca = 'Informe a raça do cão.'
        }
        if (this.rsCao.federacao != '') {
            dadosValidos = true
            this.msgErro.federacao = ''
        } else {
            dadosValidos = false
            this.msgErro.federacao = 'Informe qual federação o cão pertence.'
        }
        if (this.rsCao.categoria != '') {
            dadosValidos = true
            this.msgErro.categoria = ''
        } else {
            dadosValidos = false
            this.msgErro.categoria = 'Informe qual a categoria do cão.'
        }
        if (dadosValidos) {
            if (this.statusForm == statusFormEnum.INCLUINDO) {
                this.rsCaes.push({ ...this.rsCao })
            } else {
                this.rsCaes[this.indiceRegistroAtual] = { ...this.rsCao }
                this.statusForm = statusFormEnum.INCLUINDO
            }
            this.limparEForcar()
        }
    }
    /**
 * função para limpar o formulário e mandar o foco para o campo nome
 */
    private limparEForcar() {

        this.rsCao = {
            id: '',
            nome: '',
            genero: '',
            altura: 0,
            nascimento: '',
            obito: '',
            raca: '',
            federacao: '',
            categoria: '',
            vacina: false,
            consulta: false,
            clinica: ''
        }

        this.temClinica = false
            ; (<HTMLElement>this.$refs.txtCodigo).focus()

    }
    /**
 * função para excluir um registro no formulário
 * @param indice number: número do indice a ser excluido
 */
    public btExcluir(indice: number): void {
        this.rsCaes.splice(indice, 1)
            ; (<HTMLElement>this.$refs.txtCodigo).focus()
    }
    /**
     * função para alterar um registro no formuário
     * @param indice number: número do indice a ser alterado
     */
    public btAlterar(indice: number): void {
        this.rsCao = { ...this.rsCaes[indice] }
        this.statusForm = statusFormEnum.ALTERANDO
        this.indiceRegistroAtual = indice
            ; (<HTMLElement>this.$refs.txtCodigo).focus()
    }
}