import {
  API_KEY, BASE_URL,
  IMG_URL,
  language,
} from './api.js'

  const mudarFilme = document.querySelector("#mudar-filme");

  function chamarFilme (){
    const id = Math.floor(Math.random() *1000) + 1
    const url = `${BASE_URL}${id}?${API_KEY}&${language}`
    axios.get(url).then(response => {
      const data = response.data
      poster.src = `${IMG_URL}${response.data.poster_path}`
      tituloFilme.textContent = data.title
      resumo.textContent = data.overview
      })
    .catch(error => {
      filme.innerHTML = "<div> <strong> OPS, Hoje não é dia de filme é dia de estudar!!!<\strong> <\div>"
    })
  }
  mudarFilme.addEventListener("click", chamarFilme);



