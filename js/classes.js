class Ator
{
    constructor(id, nome){
        this.nome=nome;
        this.id=id;
    }
}


class Diretor
{
    constructor(id, nome){
        this.nome=nome;
        this.id=id;
    }
}


class Filme
{
    constructor(id, titulo, ano, genero, duracao, sinopse, cartaz, direcao, elenco, classificacao, avaliacao, btnDetalhes){
        this.id=id;
        this.titulo=titulo;
        this.ano=ano;
        this.genero=genero;
        this.duracao=duracao;
        this.sinopse=sinopse;
        this.cartaz=cartaz;
        this.direcao=direcao;
        this.elenco=elenco;
        this.classificacao=classificacao;
        this.avaliacao=avaliacao;
        this.btnDetalhes=null;
        this.divDetalhes=null;

    }


    getCard = async () => {
    let card = document.createElement("div");
    card.setAttribute("class","card");
    let imgCartaz = document.createElement("img");
    imgCartaz.setAttribute("class","card-img-topz");
    imgCartaz.setAttribute("src",this.cartaz);
    let cardBody = document.createElement("div");
    cardBody.setAttribute("class","card-body");
    let hCardTitle = document.createElement("h5");
    hCardTitle.setAttribute("class","card-title");
    let divDetalhes = document.createElement("div");
    divDetalhes.setAttribute("style","display:flex; justify-content:space-arund;");
    let divGenero = document.createElement("div");
    divGenero.setAttribute("style","flex-grow:1;");
    let divAnoPrducao = document.createElement("div");
    divAnoPrducao.setAttribute("style","flex-grow:1;");
    let divClassificacao = document.createElement("div");
    divClassificacao.setAttribute("style","flex-grow:1;");
    
    hCardTitle.appendChild(document.createTextNode(this.titulo));
    divGenero.appendChild(document.createTextNode(this.genero));
    divAnoPrducao.appendChild(document.createTextNode(this.ano));
    divClassificacao.appendChild(document.createTextNode(this.classificacao));
    divDetalhes.appendChild(divGenero);
    divDetalhes.appendChild(divAnoPrducao);
    divDetalhes.appendChild(divClassificacao);
    
    card.appendChild(imgCartaz);
    card.appendChild(cardBody);
    cardBody.appendChild(hCardTitle);
    cardBody.appendChild(divDetalhes);

    this.setBtnDetalhes();
    cardBody.appendChild(this.getBtnDetalhes());

    return card;
    }

    setBtnDetalhes=() => {
        this.btnDetalhes = document.createElement('button');
        this.btnDetalhes.appendChild(document.createTextNode("Detalhes"));
        this.btnDetalhes.setAttribute("id", this.id);
        this.btnDetalhes.setAttribute("class", "btnDetalhesFilme");
    }

    getBtnDetalhes=() => {
    return this.btnDetalhes;
    }

    getDetalhesFilme = async () => {
        let detalhesFilme = document.createElement("div");
        detalhesFilme.setAttribute("class","detalhesFilme");
        detalhesFilme.setAttribute("style","display: flex; padding:1.5rem;")
        let imgCartaz = document.createElement("img");
        imgCartaz.setAttribute("class","detalhes-img-cartaz");   
        imgCartaz.setAttribute("src",this.cartaz);
        let detalhesBody = document.createElement("div");
        detalhesBody.setAttribute("class","detalhes-body");
        detalhesBody.setAttribute("style","margin-left:1.5rem;");
        let hDetalhesTitle = document.createElement("h5");
        hDetalhesTitle.setAttribute("class","detalhes-title");
        hDetalhesTitle.setAttribute("style","text-align:center;");
        hDetalhesTitle.appendChild(document.createTextNode(this.titulo));
        let divDetalhesFilmes = document.createElement("div");
        divDetalhesFilmes.setAttribute("style","display:flex; justify-content:space-around; flex-direction: column; align-items: center;")

        let divAno = document.createElement("div");
        divAno.appendChild(document.createTextNode(this.ano));
        let divGenero = document.createElement("div");
        divGenero.appendChild(document.createTextNode(this.genero));
        let divDuracao = document.createElement("div");
        divDuracao.appendChild(document.createTextNode(this.duracao));
        let divSinopse = document.createElement("div");
        divSinopse.appendChild(document.createTextNode(this.sinopse));
        let divDirecao = document.createElement("div");
        divDirecao.appendChild(document.createTextNode(this.direcao));
        let divElenco = document.createElement("div");
        divElenco.appendChild(document.createTextNode(this.elenco));
        let divAvaliacao = document.createElement("div");
        divAvaliacao.appendChild(document.createTextNode(this.avaliacao));
        
        divDetalhesFilmes.appendChild(divAno);
        divDetalhesFilmes.appendChild(divGenero);
        divDetalhesFilmes.appendChild(divDuracao);
        divDetalhesFilmes.appendChild(divSinopse);
        divDetalhesFilmes.appendChild(divDirecao);
        divDetalhesFilmes.appendChild(divElenco);
        divDetalhesFilmes.appendChild(divAvaliacao);

        detalhesFilme.appendChild(imgCartaz);
        detalhesFilme.appendChild(detalhesBody);

        detalhesBody.appendChild(hDetalhesTitle);
        detalhesBody.appendChild(divDetalhesFilmes);
    
        
        return detalhesFilme;
    }
    
}
