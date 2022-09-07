import { Component, Vue } from 'vue-property-decorator';
import Calculadora from './components/Calculadora.vue';

@Component({
  components: {
    Calculadora,
  },
})
export default class App extends Vue {}