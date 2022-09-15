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

@Component
export default class ColaboradorCls extends Vue {

    public exibirDebug: boolean = false
    public exibirQtdFilhos: boolean = false

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
        endereco: '',
        cpf: '',
        email: '',
        numero: '',
        salario: ''
    }

    public validarFormulario(campo: string): void {
        const validaCampos: ClsValidaCampo = new ClsValidaCampo()

        if (campo == 'txtCEP') {
            validaCampos.verificaCEP(this.rsColaborador.cep).then(temCEP => {
                if (temCEP) {
                    console.log(validaCampos.tmp_eCEP)
                    this.rsColaborador.endereco = validaCampos.tmp_eCEP.logradouro
                    this.rsColaborador.bairro = validaCampos.tmp_eCEP.bairro
                    this.rsColaborador.cidade = validaCampos.tmp_eCEP.localidade
                    this.rsColaborador.uf = validaCampos.tmp_eCEP.uf
                } else {
                    console.log('não tem cep')
                }
            }).catch(err => {
                console.log(err)
            })
        }

        if (campo == 'txtCPF') {
            if (!validaCampos.eCPF(this.rsColaborador.cpf)) {
                this.msgErro.cpf = "CPF inválido."
            } else {
                this.msgErro.cpf = ''
            }
        }
        if (campo == 'txtEmail') {
            if (!validaCampos.eEMAIL(this.rsColaborador.email)) {
                this.msgErro.email = "E-mail inválido."
            } else {
                this.msgErro.email = ''
            }
        }
        if (campo == 'txtNome') {

            if (!this.rsColaborador.nome || this.rsColaborador.nome.length < 10) {
                this.msgErro.nome = "O campo nome é obrigatório e deve ter no mínimo 10 caractes."
            } else {
                this.msgErro.nome = ''
            }
        }
        if (campo == 'txtEndereco') {
            if (!this.rsColaborador.endereco || this.rsColaborador.endereco.length < 10) {
                this.msgErro.endereco = "O campo endereço é obrigatório e deve ter no mínimo 10 caractes."
            } else {
                this.msgErro.endereco = ''
            }
        }
        if (campo == 'txtNumero') {
            if (!this.rsColaborador.numero) {
                this.msgErro.numero = "Digite o número do endereço"
            } else {
                this.msgErro.numero = ''
            }
        }
        if (campo == 'txtSalario') {
            if (this.rsColaborador.salario <= 0) {
                this.msgErro.salario = "O salário deve ser maior que 0."
            } else {
                this.msgErro.salario = ''
                this.rsColaborador.salario.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })
            }
        }
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

    private btExcluir(){
        console.log('excluir')
    }

    private btAlterar(){
        console.log('alterar')
    }
}
