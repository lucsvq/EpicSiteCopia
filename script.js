const jogos = {
    fortnite : {
        baner : {url:'fornaiBaner3.avif'},
        logo : {src:'fortnite-logo-16.png'},
        miniDesc : 'NOVA TEMPORADA',
        descricao : 'Chame seus amigos e mergulhe no Fortnite, um jogo massivo de combate entre 100 jogadores da Epic Games que combina saque, criação, tiroteio e caos. O resultado é uma experiência online competitiva e totalmente imprevisível que só fica maior e mais radical a cada temporada.',
        comprar : 'Gratuito',
    },
    rocket : {
        baner : {url:'rocketBaner.avif'},
        logo : {src:'rocketLogo.avif'},
        miniDesc : 'JÁ DISPONÍVEL',
        descricao : 'Baixe e compita nesse híbrido radical de futebol estilo arcade e destruição automotiva! Personalize seu carro, entre em campo e compita em um dos jogos esportivos mais aclamados pela crítica de todos os tempos! Baixe e prepare o seu chute!',
        comprar : 'Gratuito',
    },
    island : {
        baner : {url:'islandBaner.avif'},
        logo : {src:'islandLogo.webp'},
        miniDesc : 'DISPONÍVEL DIA 21 DE ABRIL',
        descricao : 'Explore a icônica Los Angeles encharcada de sangue, evolua e cace zumbis como ninguém.',
        comprar : 'Á  partir de R$ 399,00',
    },
    rdr : {
        baner : {url:'rdrBaner.jpg'},
        logo : {src:'rdrLogo.png'},
        miniDesc : 'JÁ DISPONÍVEL',
        descricao : 'Entre no mundo vibrante e em constante desenvolvimento do Red Dead Online e experimente a vida na fronteira dos EUA. Vá atrás de recompensas, cace, pesque e negocie, procure. ',
        comprar : 'R$ 78,87',
    },
    valorant : {
        baner : {url:'valorantBaner.webp'},
        logo : {src:'valorantLogo.png'},
        miniDesc : 'NOVA TEMPORADA',
        descricao : 'VALORANT é um FPS tático 5x5 competitivo focado em personagens que se passa no mundo todo. Faça jogadas incríveis e supere seus oponentes com habilidades táticas, mecânica de tiro e trabalho em equipe.',
        comprar : 'Gratuito',
    },
    gta : {
        baner : {url:'gtaBaner.jpg'},
        logo : {src:'gtaLogo.avif'},
        miniDesc : 'JÁ DISPONIVEL',
        descricao : 'Quando um malandro de rua, um ladrão de bancos aposentado e um psicopata aterrorizante se veem encrencados, eles precisam realizar uma série de golpes ousados para sobreviver em uma cidade onde não podem confiar em ninguém, nem mesmo um no outro.',
        comprar : 'R$ 34,99',
    }

}

let jogo = jogos;

function gameOne(jogo) {
    let baner = document.querySelector('#conteudo');
    let logo = document.querySelector('#img-descricao').src = "fortnite-logo-16.png";
    let miniDesc = document.querySelector('#mini-desc');
    let desc = document.querySelector('#desc');
    let comprar = document.querySelector('#buy');
    
    baner.style.backgroundImage = `url(${jogos.fortnite.baner.url})`;;
    miniDesc.innerHTML = jogos.fortnite.miniDesc;
    desc.innerHTML = jogos.fortnite.descricao;
    comprar.innerHTML =  jogos.fortnite.comprar;
}


function gameTwo(jogo) {
    let baner2 = document.querySelector('#conteudo');
    let logo2 = document.querySelector('#img-descricao').src = "rocketLogo2.png";
    let miniDesc2 = document.querySelector('#mini-desc');
    let desc2 = document.querySelector('#desc');
    let comprar2 = document.querySelector('#buy');

    baner2.style.backgroundImage = `url(${jogos.rocket.baner.url})`;
    miniDesc2.innerHTML = jogos.rocket.miniDesc;
    desc2.innerHTML = jogos.rocket.descricao;
    comprar2.innerHTML =  jogos.rocket.comprar;
}


function gameTree(jogo) {
    let baner3 = document.querySelector('#conteudo');
    let logo3 = document.querySelector('#img-descricao').src = "islandLogo.webp";
    let miniDesc3 = document.querySelector('#mini-desc');
    let desc3 = document.querySelector('#desc');
    let comprar3 = document.querySelector('#buy');

    baner3.style.backgroundImage = `url(${jogos.island.baner.url})`;
    miniDesc3.innerHTML = jogos.island.miniDesc;
    desc3.innerHTML = jogos.island.descricao;
    comprar3.innerHTML =  jogos.island.comprar;
}


function gameFor(jogo) {
    let baner4 = document.querySelector('#conteudo');
    let logo4 = document.querySelector('#img-descricao').src = "rdrBaner2.png";
    let miniDesc4 = document.querySelector('#mini-desc');
    let desc4 = document.querySelector('#desc');
    let comprar4 = document.querySelector('#buy');

    baner4.style.backgroundImage = `url(${jogos.rdr.baner.url})`;
    miniDesc4.innerHTML = jogos.rdr.miniDesc;
    desc4.innerHTML = jogos.rdr.descricao;
    comprar4.innerHTML =  jogos.rdr.comprar;
}


function gameFive(jogo) {
    let baner5 = document.querySelector('#conteudo');
    let logo5 = document.querySelector('#img-descricao').src = "valorasLogo.png";
    let miniDesc5 = document.querySelector('#mini-desc');
    let desc5 = document.querySelector('#desc');
    let comprar5 = document.querySelector('#buy');

    baner5.style.backgroundImage = `url(${jogos.valorant.baner.url})`;
    miniDesc5.innerHTML = jogos.valorant.miniDesc;
    desc5.innerHTML = jogos.valorant.descricao;
    comprar5.innerHTML =  jogos.valorant.comprar;
}


function gameSix(jogo) {
    let baner6 = document.querySelector('#conteudo');
    let logo6 = document.querySelector('#img-descricao').src = "gtaLogo.avif";
    let miniDesc6 = document.querySelector('#mini-desc');
    let desc6 = document.querySelector('#desc');
    let comprar6 = document.querySelector('#buy');

    baner6.style.backgroundImage = `url(${jogos.gta.baner.url})`;
    miniDesc6.innerHTML = jogos.gta.miniDesc;
    desc6.innerHTML = jogos.gta.descricao;
    comprar6.innerHTML =  jogos.gta.comprar;
}

