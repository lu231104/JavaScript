let materias = {
  fisica: ["Prof Miguel", "luis", "ana", "carlos", "maria", "juan", "sofia", "martin", "daniela", "ricardo"], // 10 en total
  programacion: ["Profe Carlos", "luis", "pedro", "laura", "ana", "diego"], // 6 en total
  ciencia: ["Prof Toribio", "carlos", "maria", "sofia", "andres", "lucia", "marcos", "valentina", "julian"], // 9 en total
  quimica: ["Prof Lucas", "luis", "ana", "pedro", "carlos", "laura", "diego", "martina"] // 8 en total
}


const inscripcion=(curso,alumno)=>{       
    if(materias[curso].length>9){
        return`LO SIENTO ${alumno}<br> <b style="color:red">CURSO LLENO NO SE PUEDE MATRICULAR</b><br>`
    }else{
        let profesor=materias[curso][0];  
        listaVieja=materias[curso].slice(1);
        materias[curso].push(alumno)
        let listaNueva=materias[curso].slice(1);       
        
        return `Profesor ${profesor}<br>
        Alumnos de ${curso}: ${listaVieja}<br>
        Felicidades ${alumno} te has inscrito a ${curso}<br>
        Nueva lista de alumnos: ${listaNueva}<br><br>`
    }
}

document.write((inscripcion("programacion","coty")))
document.write((inscripcion("programacion","coty1")))
document.write((inscripcion("programacion","coty2")))
document.write((inscripcion("programacion","coty3")))
document.write((inscripcion("programacion","coty4")))
document.write((inscripcion("programacion","coty5")))

