class App{
    constructor(descargas,puntuacion,peso){
        this.descargas=descargas;
        this.puntuacion=puntuacion;
        this.peso=peso;
        this.iniciada=false;
        this.instalada=false;
    }

    instalar(){
        if(this.instalada==false ){
            this.instalada=true;
            alert("app instalada correctamente")
        }
    }

    desinstalar(){
        if(this.instalada==true ){
            this.instalada=false;
            alert("app desinstalada correctamente")
        }
    }

    abrir(){
        if(this.iniciada==false && this.instalada==true){
            this.iniciada=true;
            alert("app iniciada");
        }
    }

    cerrar(){
        if(this.iniciada==true && this.instalada==true){
            this.iniciada=false;
            alert("app cerrada");
        }
    }

    appInfo(){
        return `
        Descargas:<b>${this.descargas}</b></br>
        Puntuacion: <b>${this.puntuacion}</b></br>
        Peso: <b>${this.peso}</b></br>
        `
    }

    
}

app=new App("16.000","5 estrellas","900mb");
app1=new App("20.000","1 estrellas","400mb");
app2=new App("17.000","4 estrellas","1gb");
app3=new App("11.000","3 estrellas","100mb");
app4=new App("1.000","5 estrellas","723mb");

app.instalar();
app.abrir();
app.cerrar();

document.write(`
    ${app.appInfo()}<br>
    ${app1.appInfo()}<br>
    ${app2.appInfo()}<br>
    ${app3.appInfo()}<br>
    ${app4.appInfo()}<br>
    `)