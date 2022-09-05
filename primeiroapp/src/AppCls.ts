
  import { Component, Vue } from 'vue-property-decorator';
  import ExibirNome from './components/ExibirNome.vue';

  interface rsClienteInterface 
  {
    nome: string
  }

  @Component({
    components:{
      ExibirNome
    }
  })

  export default class App extends Vue {

    public rsClientes: Array<rsClienteInterface> = []
    
    constructor(){
        super()

        this.rsClientes.push({nome: 'Frank'})
        this.rsClientes.push({nome: 'Diana'})
        this.rsClientes.push({nome: 'Ana Clara'})
        this.rsClientes.push({nome: 'Anabio'})

    }

  }