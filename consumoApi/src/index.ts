import ClsValidaCampo from "./classes/ClsValidaCampos"

let CEP: string = '35.501-506'
let UF: string = 'hh'
let CPF: string = '0s07.323.026-09'
let CNPJ: string = '2g0.278.531/0001-58'
let EMAIL: string = 'zanatta@leekcursos.com'
let INT_DEC: string = '8980fgh79,00'
let PERCENTUAL: string = '11.5%'
let testaCampo: ClsValidaCampo = new ClsValidaCampo()

testaCampo.eCEP(CEP)? console.log('CEP - Válido - ', CEP) : console.log('CEP - Inválido - ', CEP)
testaCampo.eUF(UF)? console.log('UF - Válido - ', UF) : console.log('UF - Inválido - ', UF)
testaCampo.eCPF(CPF)? console.log('CPF - Válido - ', CPF) : console.log('CPF - Inválido - ', CPF)
testaCampo.eCNPJ(CNPJ)? console.log('CNPJ - Válido - ', CNPJ) : console.log('CNPJ - Inválido - ', CNPJ)
testaCampo.eEMAIL(EMAIL)? console.log('EMAIL - Válido - ', EMAIL) : console.log('EMAIL - Inválido - ', EMAIL)
testaCampo.eINTEIRO(INT_DEC)? console.log('INTEIRO ou DECIMAL - Válido - ', INT_DEC) : console.log('INTEIRO OU DECIMAL - Inválido - ', INT_DEC)
testaCampo.ePERCENTUAL(PERCENTUAL)? console.log('PERCENTUAL - Válido - ', PERCENTUAL) : console.log('PERCENTUAL - Inválido - ', PERCENTUAL)