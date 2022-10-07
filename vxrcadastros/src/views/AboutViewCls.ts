import { Component, Vue } from 'vue-property-decorator'
import store from '../store'

@Component
export default class LoginViewCls extends Vue {
    public login(): void {
        this.$store.dispatch('login')
    }
    public logout(): void {
        store.dispatch('logout')
    }
}