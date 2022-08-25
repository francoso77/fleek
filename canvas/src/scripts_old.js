var bola = {
    radius: 6,
    vx: 0,
    vy: 0,
    x: 30,
    y: 30,
    color: 'black',
    held: false
}
var retangulo = {
    x: 5,
    y: 5,
    a: 10,
    l: 10,
    held: false
}
var triangulo = {
    x: 2,
    y: 15,
    held: false
}

var catX = catY = hyp = 0
const UP = 38, DOWN = 40, LEFT = 37, RIGHT = 39
const AREA  = document.getElementById('tela')

function draw() 
{
  var canvas = document.getElementById('retangulo')
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d')
    ctx.fillRect(15,15, 65,65)
  }
  var canvas = document.getElementById('bola')
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d')
  
    ctx.fillStyle = bola.color
    ctx.beginPath();
    ctx.arc(50, 50, 40, 0, Math.PI * 2)
    ctx.fill()
  } 
  var canvas = document.getElementById('triangulo')
    if (canvas.getContext){
      var ctx = canvas.getContext('2d');
  
      ctx.beginPath();
      ctx.moveTo(25,25);
      ctx.lineTo(105,25);
      ctx.lineTo(25,105);
      ctx.fill();
  }
}
  
function desenhar(figura, x=0, y=0)
{
    var canvas = document.getElementById('tela')
    if (canvas.getContext) {
        
        var ctx = canvas.getContext('2d')
        if (figura == 'retangulo')
        {
            ctx.fillRect(retangulo.x, retangulo.y, retangulo.a, retangulo.l)
        }
        else if (figura == 'triangulo')
        {
            if (x==0 && y==0)
            {
                x = triangulo.x
                y = triangulo.y
            }
            
            ctx.beginPath()
            ctx.moveTo(x, x)
            ctx.lineTo(y, x)
            ctx.lineTo(x, y)
            ctx.fill()
        }
        else if( figura == 'bola')
        {
            ctx.fillStyle = bola.color
            ctx.beginPath();
            ctx.arc(bola.x, bola.y, bola.radius, 0, Math.PI * 2)
            ctx.fill()
        }
    }
}
AREA.addEventListener("mousemove", function(e) {
    desenhar('retangulo', e.offsetX , e.offsetY)
})



/*function teclaPressionada(tecla)
{
    alert(tecla)
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

    desenhar('retangulo')
}*/


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



