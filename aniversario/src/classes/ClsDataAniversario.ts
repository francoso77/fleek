'use strict';
import { DateTime } from 'luxon';
/**
 * Classe utilizada para apurar dias, meses, anos, horas, minutos e segundos referente a uma data de nascimento
 */
export default class ClsDataAniversario
{
    private dias: string = ''
    private meses: string = ''
    private anos: string = ''
    private horas:string =''
    private minutos:string = ''
    private segundos:string = ''
    
    /**
     * claucula dias, meses, anos, horas, minutos e segundos com relação a data de nascimento
     * @param dataNascimento {DateTime} informe uma data de nascimento do formato (2001, 4, 27)
     */
    public calcularIdade(dataNascimento: DateTime): void
    {
        if (!dataNascimento.isValid)
        {
            throw new Error('formato de data inválido. modelo (2001, 4, 27)')
        }
        else
        {
            let dataAtual: DateTime = DateTime.now()
        
            this.dias = dataAtual.diff(dataNascimento, 'days').days.toLocaleString('pt-br', {style: 'decimal',maximumFractionDigits:0})
            this.meses = dataAtual.diff(dataNascimento, 'months').months.toLocaleString('pt-br',{style: 'decimal',maximumFractionDigits:0})
            this.anos = dataAtual.diff(dataNascimento, 'years').years.toLocaleString('pt-br',{style: 'decimal',maximumFractionDigits:0})
            this.horas = dataAtual.diff(dataNascimento, 'hours').hours.toLocaleString('pt-br',{style: 'decimal',maximumFractionDigits:0})
            this.minutos = dataAtual.diff(dataNascimento, 'minutes').minutes.toLocaleString('pt-br',{style: 'decimal',maximumFractionDigits:0})
            this.segundos = dataAtual.diff(dataNascimento, 'seconds').seconds.toLocaleString('pt-br',{style: 'decimal',maximumFractionDigits:0})
            
            console.log('\n\n************* RESULTADOS ******************\n\n')
            console.log('Quantidade de DIAS: ', this.dias)
            console.log('Quantidade de MESES: ', this.meses)
            console.log('Quantidade de ANOS: ', this.anos)
            console.log('Quantidade de HORAS: ', this.horas)
            console.log('Quantidade de MINUTOS: ', this.minutos)
            console.log('Quantidade de SEGUNDOS: ', this.segundos)
            console.log('\n\n*******************************************\n\n')
        }
    }
}
