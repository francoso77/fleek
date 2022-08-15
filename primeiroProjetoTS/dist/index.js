"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rotinas_1 = require("./Utils/rotinas");
function btValidar(id) {
    let idCNPJ = document.getElementById('id').value;
    if (!(0, rotinas_1.validarCNPJ)(idCNPJ)) {
        console.log('CNPJ incorreto!');
        alert("CNPJ Incorreto!");
    }
    else {
        console.log('CNPJ correto!');
        alert("CNPJ Correto!");
    }
}
//# sourceMappingURL=index.js.map