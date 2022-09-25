import { Component, Vue } from 'vue-property-decorator';

interface CaoInterface{
    id: string,
    nome: string,
    genero: string,
    altura: number,
    nascimento: string,
    obito: string,
    raca: number,
    federacao: number,
    categoria: string,
    vacina: boolean,
    consulta: boolean,
    clinica: string
}

@Component
export default class frmCaoCls extends Vue {

    public rsCao: CaoInterface = {
        id: '',
        nome:'',
        genero:'',
        altura:0,
        nascimento:'',
        obito:'',
        raca: 0,
        federacao: 0,
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
}