'use strict';
import { DateTime } from "luxon"
import ClsDatasExtenso from "./classes/ClsDatasExtenso"

/*
const dt2: DateTime = DateTime.local(1977, 4, 7, 9,18,55)
const dt1: DateTime = DateTime.now()

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
console.log('diferença em ANOS: ', dt2.year + ' e dt1', dt1.year + ' é de: ',(dt1.diff(dt2, 'years').years.toLocaleString('pt-br')))
console.log('diferença em DIAS: ', dt2.year + ' e dt1', dt1.year + ' é de: ',(dt1.diff(dt2, 'days').days.toLocaleString('pt-br')))
console.log('diferença em MESES: ', dt2.year + ' e dt1', dt1.year + ' é de: ',(dt1.diff(dt2, 'months').months.toLocaleString('pt-br')))
console.log('diferença em HORAS: ', dt2.year + ' e dt1', dt1.year + ' é de: ',(dt1.diff(dt2, 'hours').hours.toLocaleString('pt-br')))
console.log('diferença em MINUTOS: ', dt2.year + ' e dt1', dt1.year + ' é de: ',(dt1.diff(dt2, 'minutes').minutes.toLocaleString('pt-br')))
console.log('diferença em SEGUNDOS: ', dt2.year + ' e dt1', dt1.year + ' é de: ',(dt1.diff(dt2, 'seconds').seconds.toLocaleString('pt-br')))
console.log('dt1 é uma data válida: ', dt1.isValid)
console.log('dt1 é uma data válida: ', dt1.setLocale('pt-br').toFormat(" dd 'Dias do mês ' MMM ' do ano de ' yyyy"))
console.log('diferença entre dt2: ', dt2.year + ' e dt1', dt1.year + ' é de: ',(dt1.diff(dt2, 'year').years.toLocaleString('pt-br')))
console.log('data 2 usando o diffnow: ', dt2.diffNow())*/

try {
    let dtAniversario: DateTime = DateTime.local(2023, 4, 7)
    let apuraTempos: ClsDatasExtenso = new ClsDatasExtenso
    apuraTempos.calcularIdade(dtAniversario)
    apuraTempos.dataExtenso(dtAniversario)

} catch (Erro) {
    console.log('Erro na exucução do programa', Erro)
}