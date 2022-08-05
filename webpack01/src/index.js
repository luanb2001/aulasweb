// Pega o elemento DOM com o ID APP
const app = document.getElementById("app")

// Cria um novo elemento DOm na memória do JS
const h1 = document.createElement("h1")

// Adiciona HTML a este elemento
h1.innerHTML = "hello from javascript"

// Adicona o filho h1 a app
app.appendChild(h1)