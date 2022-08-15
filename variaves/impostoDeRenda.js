const IMPOSTO_DE_RENDA = 15;
const SALARIO = 2582.50;


console.log('O percentual do imposto ==> ', IMPOSTO_DE_RENDA +'%');
console.log('O valor do imposto sobre o salario: ', (IMPOSTO_DE_RENDA/100)*SALARIO);
console.log('O salario descontado o imposto: ', SALARIO -  (IMPOSTO_DE_RENDA/100)*SALARIO);

console.log(IMPOSTO_DE_RENDA.toString().concat('%'));
console.log((SALARIO * IMPOSTO_DE_RENDA/100).toFixed(2));
console.log(SALARIO - (SALARIO * IMPOSTO_DE_RENDA/100).toFixed(2));
