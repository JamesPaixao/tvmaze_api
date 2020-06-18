const pesquisa = document.getElementById('pesquisa');

const mostraPrograma = (title) => {
    const $imagem = document.getElementById('imagem');
    $imagem.innerHTML = `<img src="${title.image.original}" class="card-img-top" alt="...">`;
    const $titulo = document.getElementById('titulo');
    $titulo.innerHTML = '<span id="destaque">Title: </span>' + title.name;
    const $sinopse = document.getElementById('sinopse');
    $sinopse.innerHTML = '<span id="destaque">Summary: </span>' + title.summary;
    const $linguagem = document.getElementById('linguagem');
    $linguagem.innerHTML = '<span id="destaque">Language: </span>' + title.language;
    const $generos = document.getElementById('generos');
    $generos.innerHTML = '<span id="destaque">Genres: </span>' + title.genres;
    const $imdb = document.getElementById('imdb');
    $imdb.innerHTML = '<span id="destaque">IMDB: </span>' + title.rating.average;
    const $site = document.getElementById('site');
    $site.innerHTML = '<span id="destaque">Official Site: </span> ' + title.officialSite;
}
const pesquisaPrograma = async () => {
    try{
        const url = `https://api.tvmaze.com/singlesearch/shows?q=${pesquisa.value}`;
        const getTitle = await fetch(url);
        const title = await getTitle.json();
        
        const card = document.querySelector('.card').style.display = "block";
        mostraPrograma(title);
    }
    catch (exception){
        if (exception instanceof SyntaxError){
            alert('Não foi possível encontrar este programa!');
        }
    }
}
// const carregaSeries = async () =>{
//     for(let i = 1; i < 101; i++){
//         const url = `http://api.tvmaze.com/shows/${i}`;
//         const getApi = await fetch(url);
//         const title = await getApi.json();

//         mostraPrograma(title);
//     }
// }

// carregaSeries();

document.getElementById('pesquisa_botao').addEventListener('click', pesquisaPrograma);
