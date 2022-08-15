var sal = "R$ 1.935,60";

sal = sal.replace("R$ ","");
sal = sal.replace(".","");
sal = sal.replace(",",".");

var novosal = parseFloat(sal);
console.log(novosal);
novosal = novosal * 1.1;
console.log(novosal);







