const sendButton=document.getElementById("enviar-nota");

sendButton.addEventListener("click",()=>{
    let resultado,mensaje;
    try{
        prevRes=parseInt(document.getElementById("nota-alumno").value);
        if(isNaN(prevRes)){
            throw "Gracioso";
        }
        resultado=verificarAprobacion(8,8,prevRes);
        mensaje=definirAprobacion(prevRes);
    }catch(e){
        resultado="ERES GRACIOSO?";
        mensaje="He descubierto que intentaste hackear el sitio";
    }
    abrirModal(resultado, mensaje);
})

const definirAprobacion=(pr)=>{
    let resultado;
    switch(pr) {
        case 1:resultado="No puedes ser tan HDP";
        break;
        case 2:resultado="Eres malisimo para mi materia";
        break;
        case 3:resultado="No sabes casi nada";
        break;
        case 4:resultado="Muy mal";
        break;
        case 5:resultado="Mal";
        break;
        case 6:resultado="Regular";
        break;
        case 7:resultado="Bien, pero puede mejorar";
        break;
        case 8:resultado="Muy bien!";
        break;
        case 9:resultado="Excelente!";
        break;
        case 10:resultado="Insuperable";
        break;
        default: resultado=null;
    }
    return resultado;
}

const verificarAprobacion=(nota1,nota2,prevRes)=>{
    promedio=(nota1+nota2+prevRes)/3;
    if(promedio>=7){
        return "<span class='green'>APROBADO</span>";
    }
    return "<span class='red'>DESAPROBADO</span>";
}

const abrirModal=(res,msg)=>{
    document.querySelector(".resultado").innerHTML=res;
    document.querySelector(".mensaje").innerHTML="Tu prueba: "+msg;
    let modal=document.querySelector(".modal-background");
    modal.style.display="flex";
    modal.style.animation="aparecer 1s forwards";
}