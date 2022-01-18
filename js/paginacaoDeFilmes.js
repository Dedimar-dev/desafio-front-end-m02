function paginacao(filmes, min, max) {
  filmes.slice(min, max).forEach((filme,index )=> {
      let divMovie = criarElementoHTML('div', 'movie');

      let divRodaPe = criarElementoHTML('div', 'rodaPedivFilmes');
      let titulo = criarElementoHTML('span', 'titulo-movie');
      let movieRating = criarElementoHTML('span', 'rating');
      const estrela = criarElementoHTML('img', 'estrela');
      estrela.src = "./assets/estrela.svg";
      titulo.textContent = filme.title;
      movieRating.textContent = filme.vote_average;
      divMovie.style.backgroundImage = `url(${filme.poster_path})`;
      
      movieRating.append(estrela);
      divRodaPe.append(titulo,movieRating);
      divMovie.append(divRodaPe);
      divMovies.append(divMovie); 
      
      abrirModal(divMovie, filme.id)
  });   
}