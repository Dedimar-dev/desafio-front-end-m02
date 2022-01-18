const btnHheme = seletorDeElementoHTML('.btn-theme');
const body =  seletorDeElementoHTML('body');
let temaAtual = 'light';

btnHheme.addEventListener('click', () => {
  temaAtual = temaAtual === 'light'? 'dark':'light';
  mudarTema(temaAtual)
});  

function mudarTema(tema) {
  let cor1 = tema === 'light'? "#242424": '#fff';
  let cor2 = tema === 'light'? "#fff": '#242424';
  let corSeta = tema === 'light'? "dark": 'light';

  btnHheme.src = `./assets/${corSeta}-mode.svg`;
  body.style.setProperty( '--cor-de-fundo', cor2);
  prev.src = `./assets/seta-esquerda-${corSeta}.svg`;
  next.src = `./assets/seta-direita-${corSeta}.svg`;
  input.style.setProperty('--input-color', cor1);
  input.style.setProperty('--cor-de-texto', cor1);
  divHighlight.style.setProperty('--cor-de-texto', cor1);
  subtitle.style.setProperty('--cor-de-texto', cor1);
  highlightInfo.style.setProperty('--cor-de-fundo-info', cor2);
  divMovie.style.setProperty('--cor-de-texto', cor1)
}

