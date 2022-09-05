import { toCanvas } from 'qrcode'

function gerarQrcode(URL)
{
    console.log(URL)
    var tmpUrl = URL.value
    var canvas = document.getElementById('canvas')
    toCanvas(canvas, tmpUrl, function(err){
        if(err) console.log(err)
        console.log('funfou')
    })   
}