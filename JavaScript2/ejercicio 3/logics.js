const alumnos = [
  {
    nombre: "Luis Flores",
    email: "Luis@gmail.com",
    materia: "Fisica 3 ",
  },
  {
    nombre: "Naomi Gonzales",
    email: "Naomi@gmail.com",
    materia: "Herramientas",
  },
  {
    nombre: "Kamilah FLores",
    email: "Kamilah@gmail.com",
    materia: "Quimica 2",
  },
  {
    nombre: "Alex Suarez",
    email: "Alex@gmail.com",
    materia: "Redes ",
  },
  {
    nombre: "Carlos Mass",
    email: "Carlos@gmail.com",
    materia: "Mate 3 ",
  },
];

const boton = document.querySelector(".btn-confirmar");
const contenedor=document.querySelector(".grid-container");

for (alumno in alumnos) {
  let datos = alumnos[alumno];
  let nombre = datos["nombre"];
  let email = datos["email"];
  let materia = datos["materia"];
  let htmlCode = `
        <div class="grid-item nombre">${nombre}</div>
        <div class="grid-item email">${email}</div>
        <div class="grid-item materia">${materia}</div>
        <div class="grid-item semana">
            <select class="semana-elegida">
                <option value="Semana 1">Semana 1</option>
                <option value="Semana 2">Semana 2</option>
            </select>
        </div>`;
  contenedor.innerHTML += htmlCode;
}

boton.addEventListener("click", () => {
  let confirmar = confirm("Realmente queires confirmar las mesas?");
  if (confirmar) {
    contenedor.body.removeChild(boton)
    let elementos = document.querySelectorAll(".semana");
    let semanasElegidas = document.querySelectorAll(".semana-elegida");
    for (elemento in elementos) {
      semana = elementos[elemento];
      semana.innerHTML = semanasElegidas[elemento].value;
    }
  }
});
