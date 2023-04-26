fetch('https://dummyjson.com/products')
  .then(res => res.json())
  .then(json => {
    valores = document.getElementById("producto");
    json.products.forEach(elemento => {

      li = document.createElement("li")
      li.innerHTML = `
      <div>
      <h5>Nombre: ${elemento.title}</h5>
      <button onclick="cargarValores('${elemento.title}','${elemento.thumbnail}','${elemento.description}','${elemento.price}')">Mas Info</button>
      </div>`
      valores.appendChild(li)

    });
  })
  .catch(err => console.error("error", err))
  
function cargarValores(titulo, imagen, descripcion, precio){

    document.getElementById("titulo").innerHTML = `${titulo}`
    document.getElementById("imagen").src = `${imagen}`
    document.getElementById("descripcion").innerHTML = `${descripcion}`
    document.getElementById("precio").innerHTML= `$${precio}`

}
//OTRA
function Buscar() {
  var el = document.getElementById("producto").getElementsByTagName("li");
  for (let element of el) {
    element.classList.add("d-none");
  }

  Ingresos = document.getElementById("Ingreso").value
  fetch('https://dummyjson.com/products/search?q=' + Ingresos)
    .then(res => res.json())
    .then(json => {
      valores = document.getElementById("producto");
      json.products.forEach(elemento => {
        li = document.createElement("li")
        li.innerHTML = `Nombre: ${elemento.title}`
        valores.appendChild(li)
      });
    })
    .catch(err => console.error("error", err))
}


const select = document.getElementById("Select")
select.addEventListener('change', function handleChange(event) {
  var categoria = select.options[select.selectedIndex].text
  var el = document.getElementById("producto").getElementsByTagName("li");
  for (let element of el) {
    element.classList.add("d-none");
  }

  fetch('https://dummyjson.com/products/category/' + categoria)
    .then(res => res.json())
    .then(json => {
      valores = document.getElementById("producto");
      json.products.forEach(elemento => {
        li = document.createElement("li")
        li.innerHTML = `Nombre: ${elemento.title}`
        valores.appendChild(li)
      });
    })
    .catch(err => console.error("error", err))
})

