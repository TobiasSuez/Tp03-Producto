fetch('https://dummyjson.com/products')
  .then(res => res.json())
  .then(json =>{
    console.log("obtuve respuesta")
        valores = document.getElementById("producto");
        json.products.forEach(elemento => {
            console.log(elemento.title)
            elemento=document.createElement("li")
            elemento.innerHTML=`Nombre:${json.products.title}`
            valores.appendChild(elemento)
        });
  })    
    .catch(err => console.error("error", err))
    console.log("Fin consulta - fetch")
