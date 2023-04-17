fetch('https://dummyjson.com/products')
  .then(res => res.json())
  .then(json =>{
    console.log("obtuve respuesta")
        valores = document.getElementById("producto");
        json.products.forEach(elemento => {
            console.log(elemento.title)
            li=document.createElement("li")
            li.innerHTML=`Nombre :${elemento.title}`
            valores.appendChild(li)
        });
  })    
    .catch(err => console.error("error", err))
    console.log("Fin consulta - fetch")

