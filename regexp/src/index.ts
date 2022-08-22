import ClsValidaCampo from "./classes/ClsValidaCampos"

let CEP: string = '35.501-506'
let UF: string = 'MG'
let CPF: string = '007.323.026-09'
let CNPJ: string = '20.278.531/0001-58'
let EMAIL: string = 'frank77invest@gmail.com'
let INTEIRO: string = '8987987'
let testaCampo: ClsValidaCampo = new ClsValidaCampo()

testaCampo.eCEP(CEP)? console.log('CEP - Válido') : console.log('CEP - Inválido')
testaCampo.eCPF(CPF)? console.log('CPF - Válido') : console.log('CPF - Inválido')
testaCampo.eCNPJ(CNPJ)? console.log('CNPJ - Válido') : console.log('CNPJ - Inválido')
testaCampo.eEMAIL(EMAIL)? console.log('EMAIL - Válido') : console.log('EMAIL - Inválido')
testaCampo.eINTEIRO(INTEIRO)? console.log('INTEIRO - Válido') : console.log('INTEIRO - Inválido')