import { Component, Vue } from 'vue-property-decorator';
import frmCao from './components/frmCao.vue';

@Component({
  components: {
    frmCao,    
  },
})
export default class App extends Vue {}