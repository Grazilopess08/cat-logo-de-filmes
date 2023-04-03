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
    constructor(id, titulo, ano, genero, duracao, cartaz, sinopse, direcao, elenco, classificacao, avaliacao){
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

    }


    getCard = () => {
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

    getDetalhesFilme = () => {
        let divTudo = document.createElement("div");
        divTudo.setAttribute("class","tudo");
        //detalhesFilme.setAttribute("style","display: flex; padding:1.5rem;")
        
        let divUm = document.createElement('div');
        divUm.setAttribute('class','row g-0');
        divTudo.appendChild(divUm);

        let divDois = document.createElement('div');
        divDois.setAttribute('class','col-md-6');
        divUm.appendChild(divDois);

        let img = document.createElement('img');
        img.style.float = 'left';
        img.setAttribute('src',this.cartaz);
        img.setAttribute('class','img-fluid rounded-start');
        divDois.appendChild(img);
        
        let btnFavoritar = document.createElement('button');
        btnFavoritar.appendChild(document.createTextNode('Favoritar'));
        btnFavoritar.setAttribute('id', 'btnFavoritar');
        btnFavoritar.setAttribute('class','img-fluid rounded-start');

        let divBtn = document.createElement('div');
        divBtn.appendChild(btnFavoritar);
        divDois.appendChild(divBtn);

        let divTres = document.createElement('div');
        divTres.setAttribute('class','col-md-6');
        divUm.appendChild(divTres);

        let divCardBody = document.createElement("div");
        divCardBody.setAttribute("class","card-body");
        divTres.appendChild(divCardBody);
        
        let title1 = document.createElement("h3");
        title1.setAttribute("class","card-title1");
        //hTitle1.setAttribute("style","text-align:center;");
        title1.appendChild(document.createTextNode(this.titulo));
        divCardBody.appendChild(title1);

        let ano = document.createElement('p');
        ano.setAttribute('class','card-text');
        ano.appendChild(document.createTextNode(this.ano));
        divCardBody.appendChild(ano);
        let sinopse = document.createElement('p');
        sinopse.setAttribute('class','card-text');
        sinopse.appendChild(document.createTextNode(this.sinopse));
        divCardBody.appendChild(sinopse);
        let genero = document.createElement('p');
        genero.setAttribute('class','card-text');
        genero.appendChild(document.createTextNode(this.genero));
        divCardBody.appendChild(genero);        
        let duracao = document.createElement('p');
        duracao.setAttribute('class','card-text');
        duracao.appendChild(document.createTextNode(this.duracao));
        divCardBody.appendChild(duracao); 
        let direcao = document.createElement('p');
        direcao.setAttribute('class','card-text');
        direcao.appendChild(document.createTextNode(this.direcao));
        divCardBody.appendChild(direcao);
        let elenco = document.createElement('p');
        elenco.setAttribute('class','card-text');
        elenco.appendChild(document.createTextNode(this.elenco));
        divCardBody.appendChild(elenco);
        let classificacao = document.createElement('p');
        classificacao.setAttribute('class','card-text');
        classificacao.appendChild(document.createTextNode(this.classificacao));
        divCardBody.appendChild(classificacao);        
        let avaliacao = document.createElement('p');
        avaliacao.setAttribute('class','card-text');
        avaliacao.appendChild(document.createTextNode(this.avaliacao));
        divCardBody.appendChild(avaliacao);
    
        return divTudo;
    }
    
}
