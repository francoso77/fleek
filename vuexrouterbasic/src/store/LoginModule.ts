import { VuexModule, Module } from 'vuex-module-decorators'

@Module
export default class LoginModule extends VuexModule {

    public nome: string = 'Frank'
    public empresa: string = 'JB Textil'
    public logado: boolean = false
}