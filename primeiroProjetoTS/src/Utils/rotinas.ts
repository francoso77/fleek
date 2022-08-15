/**
 * Testa se o CNPJ informado é válido
 * @param val valores do CNPJ
 * @returns Se o CNPJ é válido
 */
export function validarCNPJ(val:string): number{
    var cnpj: string = val.trim()
    cnpj = cnpj.replace(/\./g, '')
    cnpj = cnpj.replace('-', '')
    cnpj = cnpj.replace('/', '')
    var aux: boolean = false
    var matrizCNPJ: string[] = cnpj.split('')
    var matriz1Validacao: Array <number> = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]
    var matriz2Validacao: Array <number> = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]
    var i: number = 1
    var v1: number = 0
    var v2: number = 0
    for (i; matrizCNPJ.length > i; i++) {
        if (matrizCNPJ[i - 1] != matrizCNPJ[i]) {
            aux = true
        }
    }
    if (aux == false) {
        return 0
    }
    for (i = 0; matrizCNPJ.length - 2 > i; i++) {
        v1 += matriz1Validacao[i] * parseFloat(matrizCNPJ[i])
    }
    for (i = 0; matrizCNPJ.length - 1 > i; i++) {
        v2 += matriz2Validacao[i] * parseFloat(matrizCNPJ[i])
    }
    v1 = v1 % 11
    v2 = v2 % 11
    if (v1 > 2 && (11 - v1) == parseFloat(matrizCNPJ[12]) && v2 > 2 && (11 - v2) == parseFloat(matrizCNPJ[13]))
    {
        return 1
    }
    else {
        v1 = 0
        v2 = 0
        return 0
    }
}