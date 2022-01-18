const divMovie = document.querySelectorAll('.movie ');
divMovie.forEach(x => x.remove());

const divMovies = seletorDeElementoHTML('.movies');

const divConteiner = seletorDeElementoHTML('.container');
const input = seletorDeElementoHTML('.input');
divConteiner.append(input);

let prev = seletorDeElementoHTML('.btn-prev');
let next = seletorDeElementoHTML('.btn-next');
divConteiner.append(prev);

function seletorDeElementoHTML(seletor) {
    const elementoHTML = document.querySelector(seletor);
    return elementoHTML;
}

function criarElementoHTML(elemento, classe) {
    const elementoHTML = document.createElement(elemento);
    elementoHTML.classList.add(classe);
    return elementoHTML;
}
const base_URL = 'https://tmdb-proxy.cubos-academy.workers.dev/3/';

async function faz_fetch(url) {
    const resposta = await fetch(url);
    const respostaTratada = await resposta.json();
    return respostaTratada;

}

const moveisConteiner = seletorDeElementoHTML('.movies-container');
moveisConteiner.append(divMovies);
let max = 5;
let min = 0;

buscaFilmes();

input.addEventListener('keydown', event => {
    if(event.key === 'Enter' && event.target.value === '') location.reload()
    if(event.key === 'Enter' && event.target.value !== '') { 
        divMovies.textContent = '';
        buscaFilmes(event.target.value)   
        input.value = '';
    }; 
});


async function buscaFilmes(requisicao) {
    let filmes = [];

    if(requisicao) {
        const resposta_fetch = await faz_fetch(`${base_URL}search/movie?language=pt-BR&include_adult=false&query=${requisicao}`);
        filmes.push(resposta_fetch.results);
    }else{
        const resposta_fetch = await faz_fetch(`${base_URL}discover/movie?language=pt-BR&include_adult=false`);
        filmes.push(resposta_fetch.results);
    }

    paginacao(filmes[0], min, max);

    next.addEventListener('click',() => {  
        divMovies.textContent = ''
        max += 5;
        min += 5; 
        if (max > filmes[0].length) {
            max = 5;
            min = 0
        }  
        paginacao(filmes[0], min, max)
    });
    
    prev.addEventListener('click',() => {  
        divMovies.textContent = '';  
        max -= 5;
        min -= 5;
        if (min < 0) {
            max = 20;
            min = 15;
        }
        paginacao(filmes[0], min, max)               
    });
}
