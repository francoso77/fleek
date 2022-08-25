
let cnvBarra = document.querySelector('#figura1')
let ctxBarra = cnvBarra.getContext('2d')
let ImageBarra = new Image()

ImageBarra.src = "imagens/agil10.png"
ImageBarra.b
ImageBarra.addEventListener('load', () =>{
    ctxBarra.drawImage(ImageBarra, 10,10)
})
    
