const subtitle = seletorDeElementoHTML('.subtitle');
const divHighlight = seletorDeElementoHTML('.highlight');
const highlightInfo = seletorDeElementoHTML('.highlight__info');
const highlightTitle = seletorDeElementoHTML('.highlight__title');
const highlightRating = seletorDeElementoHTML('.highlight__rating');
const highlightGenres = seletorDeElementoHTML('.highlight__genres');
const highlightLaunch = seletorDeElementoHTML('.highlight__launch');
const highlightDescription = seletorDeElementoHTML('.highlight__description');
const highlightVideoLike = seletorDeElementoHTML('.highlight__video-link');

async function filmeDoDia(){
  const resposta_fetch = await faz_fetch(`${base_URL}movie/436969?language=pt-BR`);

  divHighlight.style.backgroundImage = `linear-gradient(rgb(0,0,0,0.5), rgb(0,0,0,0.5)), url(${resposta_fetch.backdrop_path})`;
  highlightTitle.textContent = resposta_fetch.title
  highlightRating.textContent = resposta_fetch.vote_average

  let ano = resposta_fetch.release_date.slice(0,4)
  let mes = resposta_fetch.release_date.slice(6,7)
  let dia = resposta_fetch.release_date.slice(8)
  let meses = ["janeiro","fevereiro", "março","abril","maio","junho"," julho","agosto","setembro","outubro","novembro","dezembro"]
  highlightLaunch.textContent = (`/ ${dia} de  ${meses[Number(mes)-1]} de ${ano}`).toUpperCase()

  highlightDescription.textContent = resposta_fetch.overview;

  let listaGenres = [];
  resposta_fetch.genres.forEach(x => {
      listaGenres.push(x.name)
  });

  highlightGenres.textContent = listaGenres.join(', ').toUpperCase()

  const resposta_fetch_video = await faz_fetch(`${base_URL}movie/436969/videos?language=pt-BR`);
  const key = resposta_fetch_video.results[0].key
  highlightVideoLike.href = `https://www.youtube.com/watch?v=${key}`;
}

filmeDoDia()