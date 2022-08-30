import QRCode from 'qrcode'

function gerarQrcode(URL)
{
    var tmpUrl = document.getElementById(URL).value
    var canvas = document.getElementById('canvas')
    QRCode.toCanvas(canvas, tmpUrl, function(err){
        if(err) console.log(err)
        console.log('funfou')
    })   
}