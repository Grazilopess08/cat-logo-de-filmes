let inputBuscarFilme = document.querySelector("#input-buscar-filme");
let btnBuscarFilme = document.querySelector("#btn-buscar-filme");
let listaFilmes = document.querySelector("#lista-filmes");
let mostrarFilmes = document.getElementById("mostrar-filmes");
let fundo = document.getElementById("filme-sai");
let navFavoritos = document.querySelector("#nav-favoritos");
//document.querySelector("#mostrar-detalhes").style.display = "none";

function divSai(){
    fundo.style.display = "none";
    mostrarFilmes.style.display = "none";
}

btnBuscarFilme.onclick = () => {
    if(inputBuscarFilme.value.length > 0){
          let filmes = new Array();
      fetch("https://www.omdbapi.com/?apikey=ee5ea508&s="+inputBuscarFilme.value, {mode:"cors"})
          .then((resp)=> resp.json())
          .then((resp)=> {
              resp.Search.forEach((item)=>{
                  //console.log(item);
                  let filme=new Filme(
                        item.imdbID,
                        item.Title,
                        "",
                        item.Type,
                        null,
                        item.Poster,
                        null,    
                        null,
                        null,
                        item.Year
                  );
                  filmes.push(filme);
                 
              });
              listarFilmes(filmes);
              //document.querySelector("detalhesFilme").style.display = "none";
             
          })
         
    }
    //mostrarFilmes.style.display = "none";
    return false;
  }

let listarFilmes = async (filmes) => {
    listaFilmes.innerHTML = "";
    if(filmes.length > 0) {
        filmes.forEach(async(filme) => {
            listaFilmes.appendChild(filme.getCard());
            filme.getBtnDetalhes().onclick = () => {
                detalhesFilme(filme.id);
                mostrarFilmes.innerHTML = "";
                let bot = document.createElement("img");
                bot.setAttribute("src","./img/fecha.png");
                bot.setAttribute("onclick","divSai()");
                mostrarFilmes.appendChild(bot);
                mostrarFilmes.style.display = "block";
                fundo.style.display = "block";
            }
        })
    }
}

let detalhesFilme = async (id) =>{
    fetch("https://www.omdbapi.com/?apikey=ee5ea508&i="+id)
    .then((resp)=>resp.json())
    .then((resp)=>{
        let filme = new Filme(
            resp.imdbID,
            resp.Title,
            resp.Year,
            resp.Genre.split(","),
            resp.Runtime,
            resp.Poster,
            resp.Plot,
            resp.Director,
            resp.Actors.split(","),
            resp.Awards,
            resp.imdbRating
        );
        
        mostrarFilmes.style.display = "block";
        mostrarFilmes.appendChild(filme.getDetalhesFilme());
        console.log(filme);
        //document.querySelector("#mostrar-filme").appendChild(filme.getDetalhesFilme());
        //console.log(filme);
        /*document.querySelector("#btnFechar").onclick = () =>{
            document.querySelector("#lista-filmes").style.display="flex";
            document.querySelector("#mostrar-filme").innerHTML="";
            document.querySelector("#mostrar-filme").style.display="none";
        } 
        */   
        document.querySelector("#btnFavoritar").onclick = () =>{
            FavoritarFilme(filme);
        }
        document.querySelector("#btnDesfavoritar").onclick = () =>{
            DesfavoritarFilme(filme);
        }
        let filmesString = localStorage.getItem("favoritos");
        var filmes = JSON.parse(filmesString);
        filmes=JSON.stringify(filmes);
        /*
        document.querySelector("#lista-filmes").style.display="none";
        document.querySelector("#mostrar-filme").style.display="flex"*/
    });
    
}

function listarFavoritos(){
    let favoritos = localStorage.getItem("favoritos");
    favoritos=JSON.parse(favoritos);
    let filmes = new Array();
    favoritos.forEach((item) =>{
        let filme = new Filme(
            item.id,
            item.titulo,
            item.ano,
            item.genero,
            item.duracao,
            item.cartaz,
            item.direcao,
            item.elenco,
            item.classificacao,
            item.avaliacao
        );
        filmes.push(filme);
    });

    listarFilmes(filmes);
}

let FavoritarFilme = (filme) => {
    let filmesString = localStorage.getItem("favoritos");
    let filmes = null;
    let jt=0;
    if(filmesString){
        filmes=JSON.parse(filmesString);
        filmes.forEach((item)=>{
            if(item.id==filme.id){
                jt++;
                return false;
            }
        });
        filmes.push(filme);
    }
    else{
        filmes=[filme];
    }
    if(jt==0){
        filmes = JSON.stringify(filmes);
        // console.log(filmes);
        localStorage.setItem("favoritos",filmes);
    }
    

}

let DesfavoritarFilme = (filme) =>{
    let filmesString = localStorage.getItem("favoritos");
    let filmes = null;
    if(filmesString){
        filmes = JSON.parse(filmesString);
    for(let i = 0; i < filmes.length; i++){
        if(filmes[i].id === filme.id){
            filmes.splice(i, 1);
            break;
        }
    }
    }

    filmes = JSON.stringify(filmes);
    // console.log(filmes);
    localStorage.setItem("favoritos", filmes);
}
  
navFavoritos.onclick = () =>{
    listarFavoritos();
}

/*let filmeString = localStorage.getItem("filmesFavoritos");
var filme = JSON.parse(filmeString);
filmes.push(filme);
filme=JSON.stringify(filme);
localStorage.setItem("filmesFavoritos", filme);

let navFavoritos = document.querySelector("#nav-favoritos");
navFavoritos.onclick = () =>{
    listarFavoritos= function () {
        let filmesFavoritos = localStorage.getItem("filmesFavoritos");
        filmesFavoritos = JOSON.parse(filmesFavoritos);
    } 
}

filmesFavoritos=JSON.parse(filmesFavoritos);
let filmes=new Array();
filmesFavoritos.forEach((item)=>{
    let filme = new Filme(
        item.id,
        item.titulo,
        item.ano,
        item.genero,
        item.duracao,
        item.cartaz,
        item.direcao,
        item.elenco,
        item.classificacao,
        item.avaliacao
    );
    filme.push(filme);
});

listarFilmes(filmes);*/

