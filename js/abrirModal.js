const modal = seletorDeElementoHTML('.modal');
const imgModal = seletorDeElementoHTML('.modal__img');
const tituloModal = seletorDeElementoHTML('.modal__title');
const fecharModal = seletorDeElementoHTML('.modal__close');
const modalDescricao = seletorDeElementoHTML('.modal__description');
const modalAverage = seletorDeElementoHTML('.modal__average');
const divModalGenres = seletorDeElementoHTML('.modal__genres');
const modalGenreAverage = seletorDeElementoHTML('.modal__genre-average');

function abrirModal(divEvento, id) {
  divEvento.addEventListener('click', async () => {
      modal.classList.remove('hidden');

      const resposta_fetch = await faz_fetch(`${base_URL}movie/${id}?language=pt-BR`);

      imgModal.src = resposta_fetch.backdrop_path;
      tituloModal.textContent = resposta_fetch.title;
      modalDescricao.textContent = resposta_fetch.overview;
      modalAverage.textContent = resposta_fetch.vote_average;
  
      resposta_fetch.genres.forEach(x=> {       
        const spanModalGenre = criarElementoHTML('span', 'modal__genre');            
        spanModalGenre.textContent = x.name;

        divModalGenres.append(spanModalGenre);
        atualizaModal(spanModalGenre) 
          
      });
      modalGenreAverage.append(divModalGenres, modalAverage)
      modalDescricao.append(modalGenreAverage)
      
  }); 
}


function atualizaModal(spanModalGenre) {
  modal.addEventListener('click', () =>{
      modal.classList.add('hidden');
      spanModalGenre.remove();
  });  

  fecharModal.addEventListener('click', () => {
    modal.classList.add('hidden');
    spanModalGenre.remove()
  });
}

function pararPropagacaoDeEvento(elemento) {
  elemento.addEventListener('click', event =>{
      event.stopPropagation();
  });
}

pararPropagacaoDeEvento(imgModal);
pararPropagacaoDeEvento(modalGenreAverage);
pararPropagacaoDeEvento(tituloModal);
pararPropagacaoDeEvento(modalDescricao);
pararPropagacaoDeEvento(fecharModal);