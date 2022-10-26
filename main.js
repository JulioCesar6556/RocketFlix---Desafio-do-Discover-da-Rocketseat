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
      filme.innerHTML =
        <><div>
          <img class='poster' src="${IMG_URL + data.poster_path}" alt="Poster do Fime"></img>
          <p class="popularidade"> Nota: ${data.vote_average}</p>
        </div>
        <div>
            <h2 class="titulo-do-filme"></h2>
            <p class="Descrição-do-filme">${data.overview}</p>
          </div></>
    })
    .catch(error => {
      filme.innerHTML = 
      <div id="error-mensage">
        <h2 class="titulo-do-filme">Hoje não é dia de filme. Keep calm and play blass.</h2>
      </div>
    })
  }
  mudarFilme.addEventListener("click", chamarFilme);



