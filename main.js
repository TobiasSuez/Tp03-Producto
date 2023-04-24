fetch('https://dummyjson.com/products')
  .then(res => res.json())
  .then(json => {
    valores = document.getElementById("producto");
    json.products.forEach(elemento => {
      const Boton = document.createElement("button")
      Boton.setAttribute("id", "miBoton")
      Boton.innerHTML = "Mas info"
      Contenido=document.getElementById("contenido")
      Contenido.innerHTML= `Descripcion: ${elemento.description}`
      
      li = document.createElement("li")
      li.innerHTML = `Nombre: ${elemento.title}`
      valores.appendChild(li)
      valores.appendChild(Boton)

      var modal = document.getElementById("myModal");

      var btn = document.getElementById("miBoton");

      var span = document.getElementsByClassName("close")[0];

      btn.onclick = function () {
        modal.style.display = "block";
      }

      span.onclick = function () {
        modal.style.display = "none";
      }

      window.onclick = function (event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      }
    });
  })
  .catch(err => console.error("error", err))

//OTRA
function Buscar() {
  var el = document.getElementById("producto").getElementsByTagName("li");
  var lol=document.getElementById("producto").getElementsByTagName("miBoton")
  for (let element of el) {
    element.classList.add("d-none");
    lol.classList.add("d-none")
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
    lol.classList.add("d-none")

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


