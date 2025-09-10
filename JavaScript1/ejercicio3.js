class Celular{
    constructor(color,peso,resolucion,camara,ram){
        this.color=color;
        this.peso=peso;
        this.resolucion=resolucion;
        this.camara=camara;
        this.ram=ram;
        this.encendido=false;
    }

    presionarBotonEncendido(){
        if(this.encendido==false){
            alert("celular prendido");
            this.encendido=true;
        }else{
            alert("El celular esta apagado");
            this.encendido=false;
        }
    }

    reiniciar(){
        if(this.encendido==true){
            alert("reiniciando celular");
        }else{
            alert("el celular está apagado");
        }
    }

    tomarFotos(){
        alert(`foto tomada en una resolucion de ${this.camara}`)
    }

    grabarVideo(){
        alert(`grabando video en ${this.camara}`)
    }

    mobileInfo(){
        return `
        Color: <b>${this.color}</b></br>
        Peso: <b>${this.peso}</b></br>
        Tamaño: <b>${this.resolucion}</b></br>
        Resolución de Cámara: <b>${this.camara}</b></br>
        Resolución de Vídeo: <b>${this.camara}</b></br>
        Memoria Ram: <b></b></br>
        `
    }

}

class CelularAltaGamma extends Celular{
    constructor(color,peso,resolucion,camara,ram,resolucionExtra){
        super(color,peso,resolucion,camara,ram);
        this.resolucionExtra=resolucionExtra;
    }

    grabarVideoLento(){
        alert("estas grabando en camara lenta")
    }

    reconocimientoFacial(){
        alert("vamos a iniciar un reconocimiento facial")
    }

    infoAltaGamma(){
        return this.mobileInfo()+`Resolucion camara Extra: ${this.resolucionExtra}`
    }

}

/*celular1=new Celular("rojo","150g","5'","full hd","2GB");
celular2=new Celular("negro","155g","5.4'","full hd","4GB");
celular3=new Celular("blanco","146g","5.9'","vga","8GB");

celular1.presionarBotonEncendido();
celular1.tomarFotos();
celular1.grabarVideo();
celular1.reiniciar();
celular1.presionarBotonEncendido();*/

celular1= new CelularAltaGamma("rojo","130g","5.2","4k","3GB","full hd");
celular2=new CelularAltaGamma("negro","142g","6","4k","4GB","hd");


/*document.write(`
    ${celular1.mobileInfo()}<br>
    ${celular2.mobileInfo()}<br>
    ${celular3.mobileInfo()}<br>
    `);*/

document.write(`
    ${celular1.infoAltaGamma()}<br><br>
    ${celular2.infoAltaGamma()}<br>    
`);