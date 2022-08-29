import luxon, { DateTime } from "luxon"
import ClsValidaCampo from "./classes/ClsValidaCampos"

let CEP: string = '35.500-155'
let UF: string = 'hh'
let CPF: string = '0s07.323.026-09'
let CNPJ: string = '2g0.278.531/0001-58'
let EMAIL: string = 'zanatta@leekcursos.com'
let INT_DEC: string = '8980fgh79,00'
let PERCENTUAL: string = '11.5%'
let testaCampo: ClsValidaCampo = new ClsValidaCampo()

/*testaCampo.eCEP(CEP)? console.log('CEP - Válido - ', CEP) : console.log('CEP - Inválido - ', CEP)
testaCampo.eUF(UF)? console.log('UF - Válido - ', UF) : console.log('UF - Inválido - ', UF)
testaCampo.eCPF(CPF)? console.log('CPF - Válido - ', CPF) : console.log('CPF - Inválido - ', CPF)
testaCampo.eCNPJ(CNPJ)? console.log('CNPJ - Válido - ', CNPJ) : console.log('CNPJ - Inválido - ', CNPJ)
testaCampo.eEMAIL(EMAIL)? console.log('EMAIL - Válido - ', EMAIL) : console.log('EMAIL - Inválido - ', EMAIL)
testaCampo.eINTEIRO(INT_DEC)? console.log('INTEIRO ou DECIMAL - Válido - ', INT_DEC) : console.log('INTEIRO OU DECIMAL - Inválido - ', INT_DEC)
testaCampo.ePERCENTUAL(PERCENTUAL)? console.log('PERCENTUAL - Válido - ', PERCENTUAL) : console.log('PERCENTUAL - Inválido - ', PERCENTUAL)*/

const dt1: DateTime = DateTime.local(7, 4, 7, 9,18,55)
const dt2: DateTime = DateTime.now()

console.log('dia', dt1.day)
console.log('mês', dt1.month)
console.log('ano', dt1.year)
console.log('dia da semana', dt1.weekday)
console.log('weeknumber', dt1.weekNumber)
console.log('weekyaer', dt1.weekYear)
console.log('dia da semana: ', dt1.weekdayLong)
console.log('dia da semana abreviado: ', dt1.weekdayShort)
console.log('quantidade de dias no mês: ', dt1.daysInMonth)
console.log('quantiadde de dias no ano: ',dt1.daysInYear)
console.log('local: ',dt1.locale) 
console.log('nome do mês: ',dt1.monthLong) 
console.log('nome do mês abreviado: ',dt1.monthShort)
console.log('fuso: ',dt1.offset)
console.log('horário de : ',dt1.offsetNameLong)
console.log('horário de  - abreviado:  ',dt1.offsetNameShort)
console.log('ordinal: ',dt1.ordinal)
console.log('calender: ',dt1.outputCalendar)
console.log('Horas: ',dt1.hour)
console.log('Minutos: ',dt1.minute)
console.log('Segundos: ',dt1.second)
console.log('diferença entre dt2: ', dt2.year + ' e dt1', dt1.year + ' é de: ',(dt2.diff(dt1, 'year').years).toFixed())
console.log('dt1 é uma data válida: ', dt1.isValid)
console.log('dt1 é uma data válida: ', dt1.setLocale('pt-br').toFormat(" dd 'Dias do mês ' MMM ' do ano de ' yyyy"))
console.log('diferença entre dt2: ', dt2.year + ' e dt1', dt1.year + ' é de: ',(dt2.diff(dt1, 'year').years.toLocaleString('pt-br')))
