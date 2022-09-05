import { DateTime } from "luxon";
import ClsDataAniversario from "./ClsDataAniversario";

export default class ClsDatasExtenso extends ClsDataAniversario
{
    private extensoDiasMes: Array<string> = [
        'Um',
        'Dois',
        'Três',
        'Quatro',
        'Cinco',
        'Seis',
        'Sete',
        'Oito',
        'Nove',
        'Dez',
        'Onze',
        'Doze',
        'Treze',
        'Quatorze',
        'Quinze',
        'Dezesseis',
        'Dezesete',
        'Dezoito',
        'Dezenove',
        'Vinte',
        'Vinte e um',
        'Vinte e dois',
        'Vinte e três',
        'Vinte e quatro',
        'Vinte e cinco',
        'Vinte e seis',
        'Vinte e sete',
        'Vinte e oito',
        'Vinte e nove',
        'Tinta',
        'Trinta e um'
    ]

    private extensoDtCompleta: string = ''
    private extensoMes: string = ''
    private extensoDia: string = ''

    /**
     * Exibi data de nascimento completa, mês e dia por extenso.
     * @param dataNascimento {DateTime} informe uma data de nascimento do formato (2001, 4, 27)
     */
    public dataExtenso(dataNascimento: DateTime): void
    {
        if (!dataNascimento.isValid)
        {
            throw new Error('formato de data inválido. modelo (2001, 4, 27)')
        }
        else
        {
          
            this.extensoDtCompleta = dataNascimento.toLocaleString(DateTime.DATE_FULL)
            this.extensoMes = dataNascimento.monthLong
            let indice: number = (dataNascimento.day-1)
            
            console.log ('\n\n********** EXTENSO ***************\n\n')
            console.log('Data Nascimento Completa: ', this.extensoDtCompleta)
            console.log('Mês de Nascimento: ',this.extensoMes)
            console.log('Dia do Nascimento: ', this.extensoDiasMes[indice])
            console.log ('\n\n**********************************\n\n')
        }
    }
}