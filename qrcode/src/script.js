import QRCode from 'qrcode';

let qrcodeFleek = 'http://fleekcursos.com.br';

QRCode.toDataURL(qrcodeFleek, function(err, url){
    document.getElementById('qrcode').value = url
    //console.log(url)
});

