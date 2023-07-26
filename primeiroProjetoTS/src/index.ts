import { validarCNPJ } from "./Utils/rotinas";

function btValidar(id: string) {
    var idCNPJ: any = document.querySelector('#' + id)


    if (!validarCNPJ(idCNPJ)) {
        console.log('CNPJ incorreto!')
        alert("CNPJ Incorreto!")
    }
    else {
        console.log('CNPJ correto!')
        alert("CNPJ Correto!")
    }
}