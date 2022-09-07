import { Component, Vue } from 'vue-property-decorator';

@Component
export default class CalculadoraCls extends Vue {
    private primeiroValor: number = 0
    private operadores: Array<string> = ['/', '*', '+', '-', 'C', '←', '=','√','x²']
    private operador: string = ''
    public txtVisor: string = '0'


    public enviaValor(bt: string): void {

        if (!this.operadores.includes(bt)) {
            if (!this.txtVisor) {
                this.txtVisor = bt
            }
            else {
                if (this.txtVisor == '0') {
                    this.txtVisor = bt
                } else {
                    this.txtVisor = this.txtVisor.concat(bt)
                }
            }
        }
        else {
            if (bt == '←') {
                if (this.txtVisor.length == 0) {
                    this.txtVisor = '0'
                } else {
                    this.txtVisor = this.txtVisor.substring(0, this.txtVisor.length - 1)
                }
            }
            else if (bt == 'C') {
                this.txtVisor = '0'
            }
            else if (bt == '=') {
                if (!this.primeiroValor) {
                    this.txtVisor = '0'
                } else {
                    this.calcular(this.primeiroValor, parseFloat(this.txtVisor), this.operador)
                    this.primeiroValor = 0
                }
            }
            else if (bt == '+') {
                this.primeiroValor = parseFloat(this.txtVisor)
                this.operador = '+'
                this.txtVisor = '0'
            }
            else if (bt == '-') {
                this.primeiroValor = parseFloat(this.txtVisor)
                this.operador = '-'
                this.txtVisor = '0'
            }
            else if (bt == '/') {
                this.primeiroValor = parseFloat(this.txtVisor)
                this.operador = '/'
                this.txtVisor = '0'
            }
            else if (bt == '*') {
                this.primeiroValor = parseFloat(this.txtVisor)
                this.operador = '*'
                this.txtVisor = '0'
            }else if (bt == '√'){
                if(this.txtVisor != '0'){
                    this.primeiroValor = parseFloat(this.txtVisor)
                    this.txtVisor = Math.sqrt(this.primeiroValor).toString()
                }
            }else if (bt == 'x²'){
                if(this.txtVisor != '0'){
                    this.primeiroValor = parseFloat(this.txtVisor)
                    this.txtVisor = (this.primeiroValor ** 2).toString()
                }
            } 
        }
    }

    public calcular(vr1: number, vr2: number, op: string): void {
        let resultado: number = 0
        if (op == '+') {
            resultado = vr1 + vr2
        } else if (op == '-') {
            resultado = vr1 - vr2
        } else if (op == '/') {
            if (vr1 == 0 || vr2 == 0) {
                resultado = 0
            } else {
                resultado = vr1 / vr2
            }
        } else if (op == '*') {
            resultado = vr1 * vr2
        }
        this.txtVisor = resultado.toString()
    }
}