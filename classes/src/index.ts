import ClsCliente from "./entity/ClsClientes"

class Point {
    public x: number = 0
    public y?: number = 0
    private z: number = 10

}

const pt = new Point()
pt.x = 10
pt.y = 20



console.log(pt)
console.log(`${pt.x}, ${pt.y}`)
console.log(pt.x + ", " + pt.y)

class HelloName
{
    name: string

    constructor(quem:string)
    {
        this.name = "Hello, " + quem
    }
}
let hello = new HelloName('Frank')
console.log(hello.name)

let cliente:ClsCliente = new ClsCliente ('Frank', 'JK, 1690')
cliente.nome = 'Joao'
cliente.endereco = 'BR 494'

console.log(cliente.nome)