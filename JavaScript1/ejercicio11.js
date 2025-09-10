const cuerpo=document.body;

const fragmento=document.createDocumentFragment();

const subtitulo=document.createElement("H2")
subtitulo.classList.add("subtitulo");
subtitulo.textContent="Titulo de la tarjeta"

const parrafo=document.createElement("P")
parrafo.classList.add("parrafo");
parrafo.textContent="Contenido de la tarjeta"

const div=document.createElement("DIV");
div.classList.add("tarjeta");

fragmento.appendChild(subtitulo);
fragmento.appendChild(parrafo);

div.appendChild(fragmento)

const divGrande=document.createElement("DIV");
divGrande.classList.add("contenedor-principal");

divGrande.appendChild(div);

cuerpo.appendChild(divGrande);

cuerpo.style.fontFamily="sans-serif"
cuerpo.style.color="#3ef"
cuerpo.style.border="solid 3px #00F"
cuerpo.style.padding="40px"