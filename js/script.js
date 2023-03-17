/*
let ator = new Ator(1, "JOHN WAYNE")

console.log(ator);

let diretor = new Diretor(1, "Alfred Hitchcock")

console.log(diretor);

let direcao = [
    new Diretor(1, "Lana"),
    new Diretor(2, "Lilly")    
];

let elenco = [
    new Ator(1, "Keanu Reeves"),
    new Ator(2, "Carrie-Anne Moss"),
    new Ator(3, "Laurence Fishburne"),
    new Ator(4, "Joe Pantoliano"),
    new Ator(5, "Hugo Weaving"),
    new Ator(6, "Antony Ray Parker")
];

let sinopse = "Um jovem programador (Keanu Reeves) é atormentado por estranhos pesadelos nos quais sempre está conectado por cabos a um imenso sistema de computadores do futuro. À medida que o sonho se repete, ele começa a levantar dúvidas sobre a realidade. E quando encontra os misteriosos Morpheus e Trinity, ele descobre que é vítima do Matrix, um sistema inteligente e artificial que manipula a mente das pessoas e cria a ilusão de um mundo real enquanto usa os cérebros e corpos dos indivíduos para produzir energia.";

let cartaz = "https://img.elo7.com.br/product/zoom/2679A20/big-poster-filme-matrix-lo03-tamanho-90x60-cm-geek.jpg";

let genero = ["Açao", "Ficção Científica"];

let filme = new Filmes(
    1,
    "Matrix",
    1999,
    genero,
    136,
    sinopse,
    cartaz,
    direcao,
    elenco,
    14,
    null
);

console.log(filme);
*/

let inputBuscarFilme = document.querySelector("#input-buscar-filme");
let btnBuscarFilme = document.querySelector("#btn-buscar-filme");
//let btnDetalhes = document.querySelectorAll("#btn-detalhes");

btnBuscarFilme.onclick = () => {
    if(inputBuscarFilme.value.length > 0){
        console.log(inputBuscarFilme.value);
    }
    return false;
}

btnBuscarFilme.onclick = () => {
    if(inputBuscarFilme.value.length > 0){
        fetch("http://www.omdbapi.com/?apikey=ee5ea508&s="+inputBuscarFilme.value, {mode:"cors"})
        .then((resp)=> resp.json())
        .then((resp)=> {
          console.log(resp);
        })
    }
    return false;
}

btnBuscarFilme.onclick = async () => {
    if(inputBuscarFilme.value.length > 0){
          let filmes = new Array();
      fetch("http://www.omdbapi.com/?apikey=ee5ea508&s="+inputBuscarFilme.value)
          .then((resp)=> resp.json())
          .then((resp)=> {
              resp.Search.forEach((item)=>{
                  console.log(item);
                  let filme=new Filme(
                      item.imdbID,
                      item.Title,
                      item.Year,
                      null,
                      null,
                      null,
                      item.Poster,
                      null,
                      null,
                      null,
                      null
                  );
                  filmes.push(filme);
                  
              });
              listarFilmes(filmes);
              
          })
          
    }
    return false;
  }

let listarFilmes = async (filmes) => {
	let listaFilmes = await document.querySelector("#lista-filmes");
	listaFilmes.innerHTML = "";
	//console.log(listaFilmes);
	if(filmes.length > 0) {
		filmes.forEach(async(filme) => {
            console.log(filme);
			listaFilmes.appendChild(await filme.getCard());
            filme.getBtnDetalhes().onclick=()=>{
                detalhesFilme(filme.id);
            }
		});
	}
}

setBtnDetalhes= () => {
    this.btnDetalhes = document.createElement('button');
    this.btnDetalhes.appendChild(document.createTextNode("Detalhes"));
    this.btnDetalhes.setAttribute("id", this.id);
    this.btnDetalhes.setAttribute("class", "btnDetalhesFilme");
}

getBtnDetalhes=()=>{
    return this.btnDetalhes
}

let btnDetalhesFilme = async (id)=>{
    fetch("http://www.omdbapi.com/?apikey=ee5ea508&i="+id)
    .then((resp)=> resp.json())
    .then((resp)=> {

    });
}