import axios from "axios"

const expCEP: RegExp = new RegExp('^[0-9]{2}.[0-9]{3}-[0-9]{3}$', 'g')
const expUF: RegExp = new RegExp('^([A-Z]){2}$', 'gi')
const expCPF: RegExp = new RegExp('^[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}$', 'g')
const expCNPJ: RegExp = new RegExp('^[0-9]{2}.[0-9]{3}.[0-9]{3}\/[0-9]{4}-[0-9]{2}$', 'g')
const expSEXO: RegExp = new RegExp('^[a -z]{1}$', 'gi')
const expEMAIL: RegExp = new RegExp(/^\b\S+@\w+\.[a-z0-9]{1,3}\.[a-z]{2}$|^\b\S+@\w+\.[a-z0-9]{1,3}$/, 'gim')
const expINTEIRO: RegExp = new RegExp(/^\d+(,\d{1,3})?$/)
const expPERCENTUAL: RegExp = new RegExp(/^[0-9]*(,\d{1,3})?%$/)
const arrSEXO: Array<string> = ['m', 'f', 'i']

const arrUF: Array<string> = [
    'AC',
    'AL',
    'AP',
    'AM',
    'BA',
    'CE',
    'DF',
    'ES',
    'GO',
    'MA',
    'MS',
    'MT',
    'MG',
    'PA',
    'PB',
    'PR',
    'PE',
    'PI',
    'RJ',
    'RN',
    'RS',
    'RO',
    'RR',
    'SC',
    'SP',
    'SE',
    'TO',
]
/**
 * Valida os campos de acordo com seus formatos em Regex
 */
export default class ClsValidaCampo {

    public tmp_eCEP: object = {}
    /**
     * Valida o campo CEP
     * @param _eCEP string
     * @returns Retorna se o campo CEP está correto 
     */

    public eCEP(_eCEP: string): boolean {

        if (this.campoVazio(_eCEP) == true) {
            return false
        }
        else {
            _eCEP ? this.verificaCEP(_eCEP) : false
            return expCEP.test(_eCEP) ? true : false

        }
    }

    /**
     * Valida o campo UF
     * @param _eUF string
     * @returns Retorna se o campo UF está correto
     */
    public eUF(_eUF: string): boolean {
        if (this.campoVazio(_eUF) == true) {
            return false
        }
        else {
            let aux_uf: string = _eUF.toUpperCase()
            if (!arrUF.includes(aux_uf) || expUF.test(_eUF) == false) {
                return false
            }
            else {
                return true
            }
        }
    }

    /**
     * Valida o campo CPF e verifica se é um CPF válido
     * @param _eCPF string
     * @returns Retorna se o campo CPF está correto
     */
    public eCPF(_eCPF: string): boolean {
        if (this.campoVazio(_eCPF) == true) {
            return false
        }
        else {
            return this.validaCPF(_eCPF) && expCPF.test(_eCPF) ? true : false
        }
    }

    /**
     * Valida o campo CNPJ e verifica se é um CNPJ válido
     * @param _eCNPJ string
     * @returns Retorna se o campo CNPJ está correto
     */
    public eCNPJ(_eCNPJ: string): boolean {
        if (this.campoVazio(_eCNPJ) == true) {
            return false
        }
        else {
            return this.validarCNPJ(_eCNPJ) && expCNPJ.test(_eCNPJ) ? true : false
        }
    }

    /**
     * Valida o campo SEXO
     * @param _eSEXO string
     * @returns Retorna se o campo SEXO está correto
     */
    public eSEXO(_eSEXO: string): boolean {
        if (this.campoVazio(_eSEXO) == true) {
            return false
        }
        else {
            if (!arrSEXO.includes(_eSEXO) || expSEXO.test(_eSEXO) == false) {
                return false
            }
            else {
                return true
            }
        }
    }

    /**
     * Valida o campo E-mail 
     * @param _eEMAIL string
     * @returns Retorna se o campo tem um E-mail correto
     */
    public eEMAIL(_eEMAIL: string): boolean {

        if (this.campoVazio(_eEMAIL) == true) {
            return false
        }
        else {
            return expEMAIL.test(_eEMAIL) ? true : false
        }
    }

    /**
     * Valida se o campo é um número inteiro ou decimal
     * @param _eINTEIRO string
     * @returns Retorna se é um número inteiro ou decimal correto
     */
    public eINTEIRO(_eINTEIRO: string): boolean {
        if (this.campoVazio(_eINTEIRO) == true) {
            return false
        }
        else {
            return expINTEIRO.test(_eINTEIRO) ? true : false
        }

    }

    /**
     * Valida se o campo tem um valor PERCENTUAL
     * @param _ePERCENTUAL string
     * @returns Retorna se o campo tem um PERCENTUAL correto
     */
    public ePERCENTUAL(_ePERCENTUAL: string): boolean {

        if (this.campoVazio(_ePERCENTUAL) == true) {
            return false
        }
        else {
            return expPERCENTUAL.test(_ePERCENTUAL) ? true : false
        }
    }

    /*
     * Faz um verifricação de um CPF
     * @param tmp_eCPF string
     * @returns Retorna se o CPF é válido
     */

    private validaCPF(tmp_eCPF: string): boolean {
        let cpf: string = tmp_eCPF.trim()
        cpf = cpf.replace(/\./g, '')
        cpf = cpf.replace('-', '')
        var aux: boolean = false
        var matrizCPF: string[] = cpf.split('')
        var i: number = 1
        var p: number = 0
        var v1: number = 0
        var v2: number = 0

        for (i; matrizCPF.length > i; i++) {
            if (matrizCPF[i - 1] != matrizCPF[i]) {
                aux = true
            }
        }
        if (aux == false) {
            return false
        }
        for (i = 0, p = 10; (matrizCPF.length - 2) > i; i++, p--) {
            v1 += p * parseFloat(matrizCPF[i])
        }
        v1 = ((v1 * 10) % 11)
        if (v1 == 10) {
            v1 = 0
        }
        if (v1 != parseInt(matrizCPF[9])) {
            return false
        }
        for (i = 0, p = 11; (matrizCPF.length - 1) > i; i++, p--) {
            v2 += p * parseInt((matrizCPF[i]))
        }
        v2 = ((v2 * 10) % 11)
        if (v2 == 10) {
            v2 = 0
        }
        if (v2 != parseInt(matrizCPF[10])) {
            return false
        }
        else {
            return true
        }
    }

    /**
     * Faz a verificação de um CNPJ
     * @param tmp_eCNPJ string
     * @returns Retorna se o CNPJ é Válido
     */
    private validarCNPJ(tmp_eCNPJ: string): boolean {

        var cnpj: string = tmp_eCNPJ.trim()
        cnpj = cnpj.replace(/\./g, '')
        cnpj = cnpj.replace('-', '')
        cnpj = cnpj.replace('/', '')
        var aux: boolean = false
        var matrizCNPJ: string[] = cnpj.split('')
        var matriz1Validacao: Array<number> = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]
        var matriz2Validacao: Array<number> = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]
        var i: number = 1
        var v1: number = 0
        var v2: number = 0
        for (i; matrizCNPJ.length > i; i++) {
            if (matrizCNPJ[i - 1] != matrizCNPJ[i]) {
                aux = true
            }
        }
        if (aux == false) {
            return false
        }
        for (i = 0; matrizCNPJ.length - 2 > i; i++) {
            v1 += matriz1Validacao[i] * parseFloat(matrizCNPJ[i])
        }
        for (i = 0; matrizCNPJ.length - 1 > i; i++) {
            v2 += matriz2Validacao[i] * parseFloat(matrizCNPJ[i])
        }
        v1 = v1 % 11
        v2 = v2 % 11
        if (v1 > 2 && (11 - v1) == parseFloat(matrizCNPJ[12]) && v2 > 2 && (11 - v2) == parseFloat(matrizCNPJ[13])) {
            return true
        }
        else {
            v1 = 0
            v2 = 0
            return false
        }
    }
    /**
     * Verificar se o campo está vazio
     * @param tmpValor string
     * @returns Retorna true ou false 
     */
    private campoVazio(tmpValor: string): boolean {
        if (tmpValor == '' || tmpValor == null || tmpValor == undefined) {
            return true
        }
        else {
            return false
        }
    }

    private verificaCEP(_eCEP: string): void {

        _eCEP = _eCEP.replace(/\-|\./g, '')
        let tmpURL = 'https://viacep.com.br/ws/'.concat(_eCEP).concat('/json/')

        axios.get(tmpURL).then(dados => {

            if (dados.statusText == 'OK') {
                if (!dados.data.erro) {
                    console.log('O cep', dados.data.cep + ' está correto!')

                    let auxDADOS: string = JSON.stringify(dados.data)
                    let mapDados = new Map<number, string>()
                    mapDados.set(1, auxDADOS)
                    console.log(auxDADOS)
                    console.log(mapDados.entries())
                }
                else {
                    console.log('A conexão é feita, mas o CEP é Invalido')
                }
            }
            else {
                console.log('sem conexão')
            }

        }).catch(err => {
            console.log('Erro na requisição do CEP: ', err.code)
        })
    }
}
