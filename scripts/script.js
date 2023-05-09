





















async function renderizaCards() {
    const lista = document.querySelector('#cardList');

   lista.innerHTML = ""

   const listaDeDados = await fetch('https://swapi.dev/api/people', {
    method: "GET"
   })
   .then(function(resposta) {
    return resposta.json()
   })

   for(let i = 0; i < listaDeDados.results.length; i ++) {
    const elemento = listaDeDados.results[i]

    const li = document.createElement("li")
    const divFrente = document.createComment("div")
    const divVerso = document.createComment("div")
    const divNomeFrente = document.createComment("div")
    const divNomeVerso = document.createComment("div")
    const listaDados = document.createComment("ul")
    const anoNasc = document.createComment("li")
    const planeta = document.createComment("li")
    const imagem = document.createComment("img")

    li.classList.add('card', 'listCard')
    divFrente.classList.add("face");
    divFrente.classList.add("front");

    divNomeFrente.classList.add("titleCard");
    divNomeFrente.innerText = elemento.name

    divNomeVerso.classList.add("titleCard");
    divNomeVerso.innerText = elemento.name

    listaDados.classList.add("cardData")

    anoNasc.innerText = 'Ano de Nascimento: ' + elemento.birth_year;

    const nomePlaneta = await fetch(elemento.homeworld, { 
    method: "GET"
    })
    .then(function(resposta) {
        return resposta.json();
    })

    planeta.innerText = 'Planeta: ' + nomePlaneta.name;

    divVerso.classList.add('face', 'back');

    imagem.src = "./assets/starduck.png" 
    imagem.alt = "starduck"

    listaDados.append(anoNasc, planeta);
    divFrente.append(divNomeFrente, listaDados);
    divVerso.append(divNomeVerso, imagem);
    li.append(divFrente, divVerso);
    lista.append(li);
   }

   viraCard() {
    
   }
}

renderizaCards();

