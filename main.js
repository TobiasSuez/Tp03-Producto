fetch('https://dummyjson.com/products')
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

function Categorias() {
  const select=document.getElementById("Select")
  select.addEventListener('change' , function handleChange(event){
    console.log(event.target.value);
    console.log(select.options[select.selectedIndex].value);
    console.log(select.options[select.selectedIndex].text)

  })
  var el = document.getElementById("producto").getElementsByTagName("li");
  for (let element of el) {
    element.classList.add("d-none");
  }
  Ingresos = document.getElementById("Ingreso").value
  fetch('https://dummyjson.com/products/category/' + Ingresos)
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
