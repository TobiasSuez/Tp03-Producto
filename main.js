fetch('https://dummyjson.com/products')
  .then(res => res.json())
  .then(json =>{
    console.log("obtuve respuesta")
        valores = document.getElementById("producto");
        json.products.forEach(elemento => {
            li=document.createElement("li")
            li.innerHTML=`Nombre: ${elemento.title}`
            valores.appendChild(li)
        });
  })    
    .catch(err => console.error("error", err))
    console.log("Fin consulta - fetch")

//OTRA
function Buscar(){
  var el = document.getElementById("Producto").getElementsByTagName("li");
  for (let index = 0; index < el.length; index++) {
    valores.removeChild(li)
  }
  Ingresos= document.getElementById("Ingreso").value
      fetch('https://dummyjson.com/products/search?q='+Ingresos)
    .then(res => res.json())
    .then(json =>{
      console.log("obtuve respuesta")
          valores = document.getElementById("producto");
          json.products.forEach(elemento => {
              li=document.createElement("li")
              li.innerHTML=`Nombre: ${elemento.title}`
              valores.appendChild(li)
          });
    })    
      .catch(err => console.error("error", err))
      console.log("Fin consulta - fetch")
}
