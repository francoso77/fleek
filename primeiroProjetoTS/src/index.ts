import { validarCNPJ } from "./Utils/rotinas";

function btValidar(id: string): number {
    let idCNPJ: string = document.getElementById('id').value

    if (!validarCNPJ(idCNPJ)) {
        console.log('CNPJ incorreto!')
        alert("CNPJ Incorreto!")
    }
    else {
        console.log('CNPJ correto!')
        alert("CNPJ Correto!")
    }
}