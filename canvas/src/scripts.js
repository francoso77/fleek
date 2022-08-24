var bola = {
    radius: 20,
    vx: 0,
    vy: 0,
    x: 30,
    y: 30,
    color: 'red',
    held: false
}

var catX = catY = hyp = 0
const UP = 38, DOWN = 40, LEFT = 37, RIGHT = 39




function btClick(objbt)
{
    alert(objbt.id)
}

function draw()
{
    var retangulo = {
        x: 10,
        y: 10,
        a: 50,
        l: 50,
        held: false,
        area: retangulo.a * retangulo.l
    }
    var cnvRetangulo = document.getElementById('tela')
    if (cnvRetangulo.getContext){
        var ctxRetangulo = cnvRetangulo.getContext('2d')
    }
    ctxRetangulo.clearRect(0,0,cnvRetangulo.width, cnvRetangulo.height)
    ctxRetangulo.fillRect(retangulo.x, retangulo.y, retangulo.a, retangulo.l)
}





/*function draw() {

        window.addEventListener("keydown", teclaPrecionada)
        window.addEventListener("mousedown", function(e){
            var cssValue = style="cursor: -webkit-grabbing; cursor: -moz-grabbing;"
            canvas.style.cssText = cssValue
            catX = retangulo.x - e.offsetX
            catY = retangulo.y - e.offsetY
            hyp = Math.sqrt(catX*catX + catY*catY)
            if (hyp < area && !retangulo.held)
            {
                retangulo.held = true
            }
            render()
        },false)
        window.addEventListener("mouseup", function(){
            var cssValue = style="cursor: -webkit-grab; cursor: -moz-grab;"
            canvas.style.cssText = cssValue
            if (retangulo.held)
            {
                retangulo.held = false

            }
            render()
        },false)

        window.addEventListener("mousemove", function(e){
            if(retangulo.held)
                retangulo.x = e.offsetX
                retangulo.y = e.offsetY
           
            //render()
        },false)


        function teclaPrecionada(tecla)
        {
            if(tecla.keyCode === LEFT)
            {
                retangulo.x--
            }
            if(tecla.keyCode === RIGHT)
            {
                retangulo.x++
            }
            if(tecla.keyCode === UP)
            {
                retangulo.y--
            }
            if(tecla.keyCode === DOWN)
            {
                retangulo.y++
            }

            render()
        }
               
        function render()
        {

            ctx.clearRect(0,0,canvas.width, canvas.height)
            ctx.fillRect(retangulo.x, retangulo.y, retangulo.a, retangulo.l)

        }
}*/



