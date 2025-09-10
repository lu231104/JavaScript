//para aprobar 16 asistencias, 7 de promedio, 13 trabajos
const materias={};

const agregar=(indice,arreglo)=>{
    materias[indice]=arreglo;
    console.log("elemento agregado");
}

const consulta=()=>{
    for(curso in materias){
        if(materias[curso]){
            document.write(`Curso: ${curso}<br>`)
            if(materias[curso][0]>=16){
                document.write(`<b style="color:green">Asistió a clases muy bien</b><br>`)
            }else{
                document.write(`<b style="color:red">JALADO POR INASISTENCIA</b><br>`)
            }
            if(materias[curso][1]>=7){
                document.write(`<b style="color:green">Su promedio es aprobatorio bien</b><br>`)
            }else{
                document.write(`<b style="color:red">SU PROMEDIO ES MENOR A 7, JALADO</b><br>`)
            }if(materias[curso][2]>=13){
                document.write(`<b style="color:green">Entregó el 75% de sus trabajos</b><br><br>`)
            }else{
                document.write(`<b style="color:red">NO ENTREGÓ LOS TRABAJOS, JALADO</b><br><br>`)
            }
        }
    }
}

let cantCursos=prompt("Ingrese la cantidad de cursos")

for(let i=0;i<cantCursos;i++){
    agregar(
    prompt(`Inserte nombre del curso ${i+1}`),  
    [parseInt(prompt(`Inserte la asistencia del curso ${i+1}`)),
    parseFloat(prompt(`Inserte el promedio del curso ${i+1}`)),
    parseInt(prompt(`Inserte la cantidad de tareas entregadas del curso ${i+1}`))]);
}
/*DATOS A INGRESAR
agregar("poo",["17", "8.2", "14"]);
agregar("bd",["15", "6.9", "12"]);
agregar("tgs",["16", "7.0", "13"]);
agregar("html",["11","6","14"]);*/

consulta();