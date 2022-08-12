import "../scss/style.scss"

console.log("atlético minúsculo")
// variável recebe o nosso aplicativo
const app = document.getElementById("app");
// variáel recebe a criação de um elemento virtual chamado h1
const hello = document.createElement("h1");
// inserimos dentro deste elemento virtual um HTML usando um innerHMTL
hello.innerHTML = "AREREEE o gremio já ta na série B"
// acrescentamos ao elemnto 'app' o elemento 'hello'
app.append(hello)