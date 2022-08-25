var bola = {
    radius: 20,
    vx: 0,
    vy: 0,
    x: 30,
    y: 30,
    color: 'red',
    held: false
}
var retangulo = {
    x: 5,
    y: 5,
    a: 20,
    l: 20,
    held: false
}
var triangulo = {
    x: 25,
    y: 105,
    held: false
}

var catX = catY = hyp = 0
const UP = 38, DOWN = 40, LEFT = 37, RIGHT = 39

function draw() {
  var canvas = document.getElementById('retangulo')
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d')
    ctx.fillRect(15,15, 65,65)
  }
  var canvas = document.getElementById('emoji')
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d')
  
    ctx.fillStyle = bola.color
    ctx.beginPath();
    ctx.arc(50, 50, 40, 0, Math.PI * 2)
    ctx.fill()
  
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
  
}
  
function render() {
  var canvas = document.getElementById('tela');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    ctx.fillRect(retangulo.x, retangulo.y, retangulo.a,retangulo.l)
   }
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



