"use strict";
var val = '007.323.026-09  ';
var cnpj = val.trim();
cnpj = cnpj.replace(/\./g, '');
cnpj = cnpj.replace('-', '');
var aux = false;
var matrizCNPJ = cnpj.split('');
var i = 1;
var p = 0;
var v1 = 0;
var v2 = 0;
for (i; matrizCNPJ.length > i; i++) {
    if (matrizCNPJ[i - 1] != matrizCNPJ[i]) {
        aux = true;
    }
}
if (aux == false) {
    console.log('falso');
}
for (i = 0, p = 10; (matrizCNPJ.length - 2) > i; i++, p--) {
    v1 += p * parseFloat(matrizCNPJ[i]);
}
v1 = ((v1 * 10) % 11);
if (v1 == 10) {
    v1 = 0;
}
if (v1 != parseInt(matrizCNPJ[9])) {
    console.log('falso no teste 9');
}
for (i = 0, p = 11; (matrizCNPJ.length - 1) > i; i++, p--) {
    v2 += p * parseInt((matrizCNPJ[i]));
}
v2 = ((v2 * 10) % 11);
if (v2 == 10) {
    v2 = 0;
}
if (v2 != parseInt(matrizCNPJ[10])) {
    console.log('falso no teste 10');
}
else {
    console.log('cpf certo');
}
//# sourceMappingURL=cpf.js.map