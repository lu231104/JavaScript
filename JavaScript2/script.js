let alto=window.screen.availHeight;
let ancho=window.screen.availWidth;

comprar=confirm(`El alto es ${alto} y el ancho es ${ancho}`)

if(comprar){
    alert("La compra fue realizada exitosamente")
}else{
    alert("La compra ha sido cancelada")
}

let href=window.location.href;
let pathname=window.location.pathname;
let hostname=window.location.hostname;
let protocol=window.location.protocol;

let html=`Protocolo: <b>${protocol}</b><br>`;
html+=`Pathname: <b>${pathname}</b><br>`;
html+=`Hostname: <b>${hostname}</b><br>`;
html+=`URL Completa: <b>${href}</b><br>`;

document.write(html)