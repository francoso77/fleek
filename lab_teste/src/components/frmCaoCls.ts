import { Component, Vue } from 'vue-property-decorator';


@Component
export default class frmCaoCls extends Vue {

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