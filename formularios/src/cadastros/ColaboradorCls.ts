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
}