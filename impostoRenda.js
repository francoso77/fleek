var salario = 4664.68;
var aliquota = 0.0;
var imposto = 0.0;
var saldoDoSalario = 0.0;
var dedutor = 0.0;


var tabela = [[0,1903.99,0],
              [0.075, 2826.66, 142.80], 
              [0.15, 3751.06, 354.80], 
              [0.225, 4664.69, 636.13],
              [0.275, 4664.69, 869.36]];


if (salario < tabela[0][1])
{       
    aliquota = 0;
    imposto = 0;
    dedutor = 0;
}
else if (salario >= tabela[0][1] && salario < tabela[1][1])
{        
    aliquota = tabela[1][0];
    dedutor = tabela[1][2];
}
else if (salario >= tabela[1][1] && salario < tabela[2][1])
{
    aliquota = tabela[2][0];
    dedutor = tabela[2][2]; 
}
else if (salario >= tabela[2][1] && salario < tabela[3][1])
{
    aliquota = tabela[3][0];
    dedutor = tabela[3][2];
}
else    
{    
    aliquota = tabela[4][0];
    dedutor = tabela[4][2]; 
}

imposto = aliquota * salario - dedutor
saldoDoSalario = salario - imposto; 

console.log("Salario: ", salario.toFixed(2));
console.log("Aliquota: ", aliquota.toFixed(3));
console.log("Imposto sem dedutor: ", (aliquota * salario).toFixed(2));
console.log("Imposto: ", imposto.toFixed(2));
console.log("Dedutor: ", dedutor.toFixed(2));
console.log("Saldo do Salario: ", saldoDoSalario.toFixed(2));

