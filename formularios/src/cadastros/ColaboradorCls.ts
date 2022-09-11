import { Component, Vue } from 'vue-property-decorator';

interface CadastroColaboradorInterface {
    nome: string,
    endereco: string,
    genero: string,
    cnh: string,
    tratamentos: Array<string>,
    profissoes: string
}

@Component
export default class ColaboradorCls extends Vue {
    public rsColaborador: CadastroColaboradorInterface =
        {
            nome: "",
            endereco: "",
            genero: "",
            cnh: "",
            tratamentos: [],
            profissoes: ''
        }

    public profissoes: Array<object> =
        [
            { cargo: 'administrador', valor: 'A' },
            { cargo: 'contador', valor: 'B' },
            { cargo: 'corretor', valor: 'C' },
            { cargo: 'vendedor', valor: 'D' }
        ]

    public msgErro = {
        nome: '',
        endereco: ''
    }

    public validarFormulario() {
        if (!this.rsColaborador.nome || this.rsColaborador.nome.length < 10) {
            this.msgErro.nome = "O campo nome é obrigatório e deve ter no mínimo 10 caractes."
        } else {
            this.msgErro.nome = ''
        }
        if (!this.rsColaborador.endereco || this.rsColaborador.endereco.length < 10) {
            this.msgErro.endereco = "O campo endereço é obrigatório e deve ter no mínimo 10 caractes."
        } else {
            this.msgErro.endereco = ''
        }
    }
}