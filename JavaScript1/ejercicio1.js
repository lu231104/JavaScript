let cantidad=prompt("Ingrese cantidad de alumnos");
let alumnosTotales=[];

for(let i=0;i<cantidad;i++){
    alumnosTotales[i]=[prompt("ingrese nombre del alumno"+(i+1)),0]
}

const tomarAsistencia=(nombre,i)=>{
    let asistencia=prompt(nombre);
    if(asistencia=="p" || asistencia=="P"){
        alumnosTotales[i][1]++;
    }
}

for(let i=0;i<5;i++){
    for(alumno in alumnosTotales){
        tomarAsistencia(alumnosTotales[alumno][0],alumno);
    }
}

for(alumno in alumnosTotales){
    let resultado=
    `${alumnosTotales[alumno][0]}: tiene
    ${alumnosTotales[alumno][1]} asistencias
    y ${5-alumnosTotales[alumno][1]} faltas`;

if((5-alumnosTotales[alumno][1])>2){
    resultado+=" ESTA REPROBADO POR FALTON";
}else{
    resultado+=" ASISTIO MUY BIEN";
}

document.write(resultado);
}

