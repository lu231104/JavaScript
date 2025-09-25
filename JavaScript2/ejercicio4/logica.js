const materiasHTML = document.querySelector(".materias");

const materias = [
  {
    nombre: "Fisica 1",
    nota: 7,
  },
  {
    nombre: "Calculo 1",
    nota: 10,
  },
  {
    nombre: "Matematica 1",
    nota: 17,
  },
  {
    nombre: "Quimica 1",
    nota: 11,
  },
  {
    nombre: "Algoritmos 1",
    nota: 17,
  },
];

const obtenerMateria = (id) => {
  return new Promise((resolve, reject) => {
    let materia = materias[id];
    if (materia == undefined) reject("La materia no existe");
    else
      setTimeout(() => {
        resolve(materia);
      }, Math.random() * 1400);
  });
};

const devolverMaterias = async () => {
  let materia = [];
  for (let i = 0; i < materias.length; i++) {
    materia[i] = await obtenerMateria(i);
    let newHTMLCode = `
        <div class="materia">
            <div class="nombre">${materia[i].nombre}</div>
            <div class="nota">${materia[i].nota}</div>
    </div>`;
    materiasHTML.innerHTML += newHTMLCode;
  }
};

devolverMaterias();
