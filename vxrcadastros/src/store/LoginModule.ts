import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'

@Module
export default class LoginModule extends VuexModule {
    public nome: string = 'Frank'
    public senha: string = '123'
    public logado: boolean = false

    @Mutation
    public alterarEstadoLogin(loginAtual: boolean): void {

        this.logado = loginAtual
    }

    @Action ({ commit: 'alterarEstadoLogin' })
    public login(_context: any, _payload: any): boolean{
        return true
    }
    
    @Action ({ commit: 'alterarEstadoLogin' })
    public logout(_context: any, _payload: any): boolean{
        return false
    }
};