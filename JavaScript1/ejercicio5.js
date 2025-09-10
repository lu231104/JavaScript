//ARREGLO QUE TIENE DE INDICE UN CURSO Y OTRO ARREGLO DENTRO
const materias={
        fisica:["Prof Miguel","luis", "ana", "carlos", "maria", "juan", "sofia"],
        programacion:["Profe Carlos","luis", "pedro", "laura", "ana", "diego", "elena"],
        ciencia:["Prof Toribio","carlos", "maria", "sofia", "andres", "lucia", "marcos"],
        quimica:["Prof Lucas","luis", "ana", "pedro", "carlos", "laura", "diego"]
    };

//FUNCION QUE DEVUELVE LOS INTEGRANTES DEL CURSO Y EL NOMBRE DEL CURSO
const infoCurso=materia=>{    
    if(materia && materias[materia]!==undefined){
        return [materias[materia],materia];
    }else{        
        return false;
    }
    
}

//FUNCION QUE DEVUELVE CURSO PROFESOR Y ALUMNOS
const mostrarInfo=materia=>{
    let informacion=infoCurso(materia);

    if(informacion!==false){
        let profesor=informacion[0][0];
        let alumnos=informacion[0];
        alumnos.shift()
        document.write(`Alumnos presentes en <b>${informacion[1]}</b> con el profesor <b style="color:red">${profesor}</b> :<b style="color:blue"> ${alumnos}</b></br>`)
    }else{
        document.write(`<b style=color:red>INGRESE UN CURSO VALIDO</b><br>`)
    }
}

//FUNCION QUE MUESTRA LA CANTIDAD Y QUE CURSOS CURSA CADA ALUMNOS
const cantidadDeClases=alumno=>{
    let cantidadTotal=0;
    let clasesPresentes=[];

    for(curso in materias){
        if(materias[curso].includes(alumno)){
            cantidadTotal++;
            clasesPresentes.push(" "+curso);
        }
    }return `<b style="color:blue">${alumno}</b> esta en <b>${cantidadTotal}</b> clases<br>
    Está cursando las clases: <b style="color:green">${clasesPresentes}</b>`;
}

mostrarInfo();
mostrarInfo("programacion");
mostrarInfo("ciencia");
mostrarInfo("quimica");
document.write(cantidadDeClases("luis"));

