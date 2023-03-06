let ator = new Ator(1, "JOHN WAYNE")

console.log(ator);

let diretor = new Diretor(1, "Alfred Hitchcock")

console.log(diretor);

let genero = ["Açao", "Ficção Científica"];
let sinopse = "Um jovem programador (Keanu Reeves) é atormentado por estranhos pesadelos nos quais sempre está conectado por cabos a um imenso sistema de computadores do futuro. À medida que o sonho se repete, ele começa a levantar dúvidas sobre a realidade. E quando encontra os misteriosos Morpheus e Trinity, ele descobre que é vítima do Matrix, um sistema inteligente e artificial que manipula a mente das pessoas e cria a ilusão de um mundo real enquanto usa os cérebros e corpos dos indivíduos para produzir energia.";
let direcao = [
    new Diretor(1, "Lana"),
    new Diretor(2, "Lilly")    
];

let elenco = [
    new Ator(1, "Keanu"),
    new Ator(2, "Carrie-Anne"),
    new Ator(3, "Laurence")
];

let filme = new Filmes(
    1,
    "Matrix",
    1999,
    genero,
    136,
    sinopse,
    "https://img.elo7.com.br/product/zoom/2679A20/big-poster-filme-matrix-lo03-tamanho-90x60-cm-geek.jpg",
    direcao,
    elenco,
    14,
    8,8
);

console.log(filme);

fetch('http://www.omdbapi.com/?s=uva&apikey=ee5ea508').then(resp =>{
    console.log(resp)
    return resp.json()
}).then(corpo =>{
    console.log(corpo)
    console.log(corpo.Search)
    corpo.Search.forEach(element => {
        console.log(element.title)
    });
})