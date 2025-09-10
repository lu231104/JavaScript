let productos={
  leche:["p1","5$","65","lacteo"],
  anis:["p2","2$","13","infusion"],
  cafe:["p3","3$","78","infusion"]
};

const mostrar=producto=>{
    if(producto&&productos[producto]!==undefined){
        return [productos[producto],producto];
    }else{
        return false
    }
}

const agregar=(clave,producto)=>{
  productos[clave]=producto;
  for(i in productos){
    nombre=i;
    prod=productos[i];
     document.write(`Id: ${productos[i][0]}, 
       Nombre: ${i},
       Costo: ${productos[i][1]}, Cantidad: ${productos[i][2]}, Categoría: ${productos[i][3]}<br><br>`)
  }
}

const eliminar=(producto)=>{  
  for(i in productos){    
    if(i===producto){
      productos[i].splice(i,1);     
      return mostrar(producto);
    }
  }
}

//agregar("manzanilla",["p4","2$","100","infusion"])

//eliminar("leche")

document.write(eliminar("leche"))