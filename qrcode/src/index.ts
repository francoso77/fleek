import QRCode from 'qrcode';

let qrcodeFleek: string = 'http://fleekcursos.com.br'

QRCode.toString(qrcodeFleek, function(err, url){
    console.log(url)
})
QRCode.toString('http://www.google.com', function (err, string) {
  if (err) throw err
  console.log(string)
})
QRCode.toFile('fleek.png', qrcodeFleek, {
    color: {
        dark: '#00F',
        light: '#0000'
    }
}, function (err) {
    if (err) throw err
    console.log ('Arquivo PNG gerado com sucesso!')
})