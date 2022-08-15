var email = "contato@fleekcursos.com.br";

var limite = email.indexOf("@");

console.log(email.substring(limite+1));

console.log(email.indexOf(".",20));

//o valor no final determina q vc quer procurar apartir desse ponto

var emailvalido = "dfjlaf@contato@fleekcursos.com.br";

console.log(emailvalido.indexOf("@",emailvalido.indexOf("@")+1));



var autor = "Frank Alves";
var Empresa = "Jb Textil Eireli Epp";

console.log(autor.split(" ").concat(Empresa.split(" ")));

