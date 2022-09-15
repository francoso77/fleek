import ClsValidaCampo from '@/classes/ClsValidaCampos';
import { Component, Vue } from 'vue-property-decorator';

interface CadastroColaboradorInterface {
    nome: string,
    endereco: string,
    cep: string,
    numero: number,
    bairro: string,
    uf: string,
    cidade: string,
    civil: string,
    escolaridade: string,
    viagem: boolean,
    filhos: boolean,
    qtdfilhos: number,
    salario: number,
    email: string,
    telefone: string,
    nascimento: string,
    cpf: string,
    rg: number,
    jornada: string
}

enum statusFormEnum {
    INCLUINDO = 1,
    ALTERANDO = 2
}

@Component
export default class ColaboradorCls extends Vue {

    public statusForm: statusFormEnum = statusFormEnum.INCLUINDO

    public get statusFormEnum(): typeof statusFormEnum {
        return statusFormEnum
    }

    public indiceRegistroAtual: number = 0

    public validaCampos: ClsValidaCampo = new ClsValidaCampo()

    public exibirDebug: boolean = false

    public exibirQtdFilhos: boolean = false

    public CEP_ATIVO: boolean = false

    public rsColaboradores: Array<CadastroColaboradorInterface> = []

    public rsColaborador: CadastroColaboradorInterface =
        {
            nome: '',
            endereco: '',
            cep: '',
            numero: 0,
            bairro: '',
            uf: '',
            cidade: '',
            civil: '',
            escolaridade: '',
            viagem: false,
            filhos: false,
            qtdfilhos: 0,
            salario: 0,
            email: '',
            telefone: '',
            nascimento: '',
            cpf: '',
            rg: 0,
            jornada: ''
        }

    public profissoes: Array<object> =
        [
            { cargo: 'administrador', valor: 'A' },
            { cargo: 'contador', valor: 'B' },
            { cargo: 'corretor', valor: 'C' },
            { cargo: 'vendedor', valor: 'D' }
        ]
    public escolaridades: Array<object> =
        [
            { nivel: 'Educação Infantil', valor: 'A' },
            { nivel: 'Fundamental Incompleto', valor: 'B' },
            { nivel: 'Fundamental Completo', valor: 'C' },
            { nivel: 'Médio Incompleto', valor: 'D' },
            { nivel: 'Médio Completo', valor: 'E' },
            { nivel: 'Superior Incompleto', valor: 'F' },
            { nivel: 'Superior Completo', valor: 'G' },
            { nivel: 'Pós Graduação', valor: 'H' },
            { nivel: 'Mestrado', valor: 'I' },
            { nivel: 'Doutorado', valor: 'J' }

        ]

    public ufs: Array<string> = [
        'AC',
        'AL',
        'AP',
        'AM',
        'BA',
        'CE',
        'DF',
        'ES',
        'GO',
        'MA',
        'MS',
        'MT',
        'MG',
        'PA',
        'PB',
        'PR',
        'PE',
        'PI',
        'RJ',
        'RN',
        'RS',
        'RO',
        'RR',
        'SC',
        'SP',
        'SE',
        'TO',
    ]

    public msgErro = {
        nome: '',
        nascimento: '',
        cpf: '',
        rg: '',
        civil: '',
        escolaridade: '',
        cep: '',
        email: '',
        endereco: '',
        numero: '',
        bairro: '',
        cidade: '',
        uf: '',
        salario: '',
        telefone: '',
        jornada: ''
    }

    public confirmarDados(): void {

        let dadosValidos: boolean = true


        if (!this.rsColaborador.nome || this.rsColaborador.nome.length < 10) {
            this.msgErro.nome = "O campo nome é obrigatório e deve ter no mínimo 10 caractes."
            dadosValidos = false
        } else {
            this.msgErro.nome = ''
        }

        if (!this.rsColaborador.nascimento) {
            this.msgErro.nascimento = "O campo nome é obrigatório e deve ter no mínimo 10 caractes."
            dadosValidos = false
        } else {
            this.msgErro.nascimento = ''
        }

        if (!this.validaCampos.eCPF(this.rsColaborador.cpf) || !this.rsColaborador.cpf) {
            this.msgErro.cpf = "CPF inválido, ou não informado."
            dadosValidos = false
        } else {
            this.msgErro.cpf = ''
        }
        if (!this.rsColaborador.rg) {
            this.msgErro.rg = "o RG precisa ser informado."
            dadosValidos = false
        } else {
            this.msgErro.rg = ''
        }
        if (!this.rsColaborador.civil) {
            this.msgErro.rg = "qual o estado cívil?"
            dadosValidos = false
        } else {
            this.msgErro.rg = ''
        }
        if (!this.rsColaborador.escolaridade) {
            this.msgErro.escolaridade = "escolha uma escolaridade."
            dadosValidos = false
        } else {
            this.msgErro.escolaridade = ''
        }
        if (!this.CEP_ATIVO == true) {
            this.msgErro.cep = 'CEP sem registro, preencha os dados manualmente'
            dadosValidos = false
        } else {
            this.msgErro.cep = ''
        }
        if (!this.rsColaborador.endereco) {
            this.msgErro.endereco = "O campo endereço é obrigatório e deve ter no mínimo 10 caractes."
            dadosValidos = false
        } else {
            this.msgErro.endereco = ''
        }
        if (!this.rsColaborador.numero || this.rsColaborador.numero <= 0) {
            this.msgErro.numero = "Digite o número do endereço"
            dadosValidos = false
        } else {
            this.msgErro.numero = ''
        }
        if (!this.rsColaborador.bairro) {
            this.msgErro.bairro = "informe o bairro!"
            dadosValidos = false
        } else {
            this.msgErro.bairro = ''
        }
        if (!this.rsColaborador.uf) {
            this.msgErro.uf = "informe o estado!"
            dadosValidos = false
        } else {
            this.msgErro.uf = ''
        }
        if (!this.rsColaborador.cidade) {
            this.msgErro.cidade = "informe a cidade!"
            dadosValidos = false
        } else {
            this.msgErro.cidade = ''
        }
        if (!this.rsColaborador.salario || this.rsColaborador.salario <= 0) {
            this.msgErro.salario = "O salário deve ser maior que 0."
            dadosValidos = false
        } else {
            this.msgErro.salario = ''
        }
        if (!this.validaCampos.eEMAIL(this.rsColaborador.email)) {
            this.msgErro.email = "E-mail inválido."
            dadosValidos = false
        } else {
            this.msgErro.email = ''
        }
        if (!this.rsColaborador.telefone) {
            this.msgErro.telefone = "informe um número de telefone"
            dadosValidos = false
        } else {
            this.msgErro.telefone = ''
        }
        if (!this.rsColaborador.jornada) {
            this.msgErro.jornada = "informe um jornada de trabalho."
            dadosValidos = false
        } else {
            this.msgErro.jornada = ''
        }

        if (dadosValidos) {
            if (this.statusForm == statusFormEnum.INCLUINDO) {
                this.rsColaboradores.push({ ...this.rsColaborador })

            } else {
                this.rsColaboradores[this.indiceRegistroAtual] = { ...this.rsColaborador }
                this.statusForm = statusFormEnum.INCLUINDO
            }

            this.limparEForcar()
        }
    }

    private limparEForcar() {
        this.rsColaborador = {
            nome: '',
            endereco: '',
            cep: '',
            numero: 0,
            bairro: '',
            uf: '',
            cidade: '',
            civil: '',
            escolaridade: '',
            viagem: false,
            filhos: false,
            qtdfilhos: 0,
            salario: 0,
            email: '',
            telefone: '',
            nascimento: '',
            cpf: '',
            rg: 0,
            jornada: ''
        }
            ; (<HTMLElement>this.$refs.txtNome).focus()
    }
    public verificaLetra(e: KeyboardEvent) {
        const eLetras: RegExp = new RegExp(/[a-z| |é|ã|á|í|ó]/, 'gim')
        if (!eLetras.test(e.key)) {
            e.preventDefault()
        }
    }

    public temFilhos() {

        if (this.rsColaborador.filhos) {
            this.exibirQtdFilhos = true
        } else {
            this.exibirQtdFilhos = false
        }
    }

    private btExcluir(indice: number): void {
        this.rsColaboradores.splice(indice, 1)
    }

    private btAlterar(indice: number): void {
        this.rsColaborador = { ...this.rsColaboradores[indice] }
        this.statusForm = statusFormEnum.ALTERANDO
        this.indiceRegistroAtual = indice
    }

    public buscaCep(CEP: string): void {
        if (CEP == 'txtCEP') {
            this.validaCampos.verificaCEP(this.rsColaborador.cep).then(temCEP => {
                if (temCEP) {
                    this.rsColaborador.endereco = this.validaCampos.tmp_eCEP.logradouro
                    this.rsColaborador.bairro = this.validaCampos.tmp_eCEP.bairro
                    this.rsColaborador.cidade = this.validaCampos.tmp_eCEP.localidade
                    this.rsColaborador.uf = this.validaCampos.tmp_eCEP.uf
                    this.CEP_ATIVO = true
                } else {
                    this.CEP_ATIVO = false
                }
            }).catch(err => {
                this.msgErro.endereco = err
            })
        }
    }
}
