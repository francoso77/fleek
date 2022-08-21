const expCEP: RegExp = new RegExp('^[0-9]{2}.[0-9]{3}-[0-9]{3}$', 'g')
const expUF: RegExp = new RegExp('^([A-Z]){2}$', 'gi')
const expCPF: RegExp = new RegExp('^[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}$', 'g')
const expCNPJ: RegExp = new RegExp('^[0-9]{2}.[0-9]{3}.[0-9]{3}\/[0-9]{4}-[0-9]{2}$', 'g')
const expSEXO: RegExp = new RegExp('^[a -z]{1}$', 'gi')
const expEMAIL: RegExp = new RegExp(/\S+@\S+\.\S+/, 'gi')
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
export default class ClsValidaCampo {
    public eCEP(_eCEP: string): boolean {
        return expCEP.test(_eCEP) ? true : false
    }

    public eUF(_eUF: string): boolean {
        let aux_uf: string = _eUF.toUpperCase()
        if (!arrUF.includes(aux_uf) || expUF.test(_eUF) == false) {
            return false
        }
        else {
            return true
        }
    }

    public eCPF(_eCPF: string): boolean {
        return this.validaCPF(_eCPF) && expCPF.test(_eCPF) ? true : false
    }

    public eCNPJ(_eCNPJ: string): boolean {
        return this.validarCNPJ(_eCNPJ) && expCNPJ.test(_eCNPJ) ? true : false
    }

    public eSEXO(_eSEXO: string): boolean {
        if (!arrSEXO.includes(_eSEXO) || expSEXO.test(_eSEXO) == false)
        {
            return false
        }
        else
        {
            return true
        }
    }

    public eEMAIL(_eEMAIL: string): boolean
    {

        return expEMAIL.test(_eEMAIL) ? true : false
    }
    
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
}
