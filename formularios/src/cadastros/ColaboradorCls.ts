import { Component, Vue } from 'vue-property-decorator';

interface CadastroColaboradorInterface {
    nome: string,
    endereco: string,
    genero: string,
    cnh: string
}

@Component
export default class ColaboradorCls extends Vue {
    public rsColaborador: CadastroColaboradorInterface =
        {
            nome: "",
            endereco: "",
            genero: "",
            cnh: ""
        }

}