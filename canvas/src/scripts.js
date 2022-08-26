
const FIGURA1_SRC = "imagens/agil-1t.png"
const FIGURA2_SRC = "imagens/agil-2t.png"
const FIGURA3_SRC = "imagens/agil9-t.png"

function desenhaBarra(ferramenta, figura)
{
    let cnvBarra = document.querySelector(ferramenta)
    let ctxBarra = cnvBarra.getContext('2d')
    let ImageBarra = new Image()

    if(figura == 1)
    {
        ImageBarra.src = FIGURA1_SRC
    }
    else if(figura == 2)
    {
        ImageBarra.src = FIGURA2_SRC
    }
    else
    {
        ImageBarra.src = FIGURA3_SRC
    }
    if (ferramenta != "#tela")
    {
        ImageBarra.addEventListener('load', () =>{
        ctxBarra.drawImage(ImageBarra, 0,0)
        })
    }
    else
    {
        ImageBarra.addEventListener('load', () =>{
            ctxBarra.drawImage(ImageBarra, 0,0,50,50)
            })
    }
}
