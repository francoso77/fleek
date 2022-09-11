import { Component, Vue } from 'vue-property-decorator';
import Colaborador from './cadastros/Colaborador.vue';


@Component({
  components: {
    Colaborador,    
  },
})
export default class App extends Vue {

}