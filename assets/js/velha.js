const principal = document.querySelector('#menuPrincipal');
// Pegantdo elementos da Tela 1
const tela1 = document.querySelector('#tela1');
const umParticipante = document.querySelector('.um-participante');
const doisParticipante = document.querySelector('.dois-participante');

// Pegantdo elementos da Tela 2
const tela2 = document.querySelector('#tela2');
const facil = document.querySelector('.facil');
const normal = document.querySelector('.normal');
const dificil = document.querySelector('.dificil');

// Pegantdo elementos da Tela 3
const tela3 = document.querySelector('#tela3');
const jogador = document.querySelector('#tela3 input');
const avancar = document.querySelector('#tela3 button');

// Pegantdo elementos da Tela 4
const tela4 = document.querySelector('#tela4');
const jogador1 = document.querySelector('.jogador1');
const jogador2 = document.querySelector('.jogador2');
const avancar2 = document.querySelector('#tela4 button');


menuPrincipal();


function menuPrincipal() {

    // 1 Participante ------------------------
    umParticipante.addEventListener('click', function() {
        abreTela2();
    })

    // Animação abrindo tela 2
    // Visivel caso seja Um jogador
    function abreTela2() {
        umParticipante.classList.add('anime');
        setTimeout(() => {
            doisParticipante.classList.add('anime');
        }, 500)
        setTimeout(() => {
            tela1.style.display = 'none';
            abrindoTela2();
        }, 1000)
        
        tela2.style.display = 'block';


        function abrindoTela2() {
            facil.classList.remove('anime');
            setTimeout(() => {
                normal.classList.remove('anime');
            }, 500)
            setTimeout(() => {
                dificil.classList.remove('anime');
            }, 1000)
        }
    }

    // depois que tiver as funções de dificudade
    // mudar esse click
    facil.addEventListener('click', function() {
        abreTela3();
        nivelFacil();
    })

    // Animação abrindo tela 3
    function abreTela3() {
        facil.classList.add('anime');
        setTimeout(() => {
            normal.classList.add('anime');
        }, 500)
        setTimeout(() => {
            dificil.classList.add('anime');
        }, 1000)
        setTimeout(() => {
            tela2.style.display = 'none';
            abrindoTela3();
        }, 1500)

        tela3.style.display = 'block';


        function abrindoTela3() {
            jogador.classList.remove('anime2');
            setTimeout(() => {
                avancar.classList.remove('anime');
            }, 500)
        }
    }


    // 2 Participante ------------------------
    doisParticipante.addEventListener('click', function() {
        abreTela4();
        jogandoDoisPlayer();
    })


    // Animação abrindo tela 4
    // Visivel caso seja Dois jogadores
    function abreTela4() {
        umParticipante.classList.add('anime');
        setTimeout(() => {
            doisParticipante.classList.add('anime');
        }, 500)
        setTimeout(() => {
            tela1.style.display = 'none';
            abrindoTela4();
        }, 1000)

        tela4.style.display = 'block';

        function abrindoTela4() {
            jogador1.classList.remove('anime2');
            setTimeout(() => {
                jogador2.classList.remove('anime2');
            }, 500)
            setTimeout(() => {
                avancar2.classList.remove('anime');
            }, 1000)
        }
    }
  


    // Avançar para tela do jogo ------------------------
    avancar.addEventListener('click', function() {
        if(jogador.value === '') {
            alert('Digite seu nome');
        } else {
            fechandoTela3();
            abrePlacar();
            abreCampo();
        }
    })
    avancar2.addEventListener('click', function() {
        if(jogador1.value === '' || jogador2.value === '') {
            alert('Digite o nome dos jogadores');
        } else {
            fechandoTela4();
            abrePlacar();
            abreCampo();
        }
    })



    // Função para fechar tela 3
    function fechandoTela3() {
        jogador.classList.add('anime2');
        setTimeout(() => {
            avancar.classList.add('anime');
        }, 500)
        setTimeout(() => {
            tela3.style.display = 'none';
            principal.classList.add('animePrincipal');
        }, 1000)
    }

    // Função para fechar tela 4
    function fechandoTela4() {
        jogador1.classList.add('anime2');
        jogador2.classList.add('anime2');
        setTimeout(() => {
            avancar2.classList.add('anime');
        }, 500)
        setTimeout(() => {
            tela4.style.display = 'none';
            principal.classList.add('animePrincipal');
        }, 1000)
    }

    // Função para abrir placar
    function abrePlacar() {
        setTimeout(() => {
            jogo.style.display = 'block';
            principal.style.display = 'none';
            setTimeout(() => {
                placar.classList.remove('placarAnime1');
            }, 50)
            setTimeout(() => {
                placar.classList.remove('placarAnime2');
                tituloPlacar.style.display = 'block';
                setTimeout(() => {
                    avatarPlayer1.classList.remove('animeAvatar');
                },1000)
            }, 500)
        }, 1500)
    }

    // Função para abrir campo 
    function abreCampo() {
        setTimeout(() => {
            campo.classList.remove('campoAnime');
            setTimeout(() => {
                campoPlayer.classList.remove('anime');
            }, 1000)

            setTimeout(() => {
                avatares.style.display = 'block';
                setTimeout(() => {
                    avatares.classList.remove('animeAvatares');
                }, 50)
            }, 1500)
        }, 2500)
    }

}


// ***************************************************************


// Pegando elementos do Campo
const jogo = document.querySelector('#jogo');
const placar = document.querySelector('#placar');
const campo = document.querySelector('#campo');
const tituloPlacar = document.querySelector('#placarTitulo h1');


// Pegando Informações dos jogadores
const nomePlayer1 = document.querySelector('#jogadorUm .nome');
const nomePlayer2 = document.querySelector('#jogadorDois .nome');
const nomeVelha = document.querySelector('#velha .nome');

const avatarPlayer1 = document.querySelector('#jogadorUm .avatarPlayer');
const avatarPlayer2 = document.querySelector('#jogadorDois .avatarPlayer');
const avatarVelha = document.querySelector('#velha .avatarPlayer');

const placarPlayer1 = document.querySelector('#jogadorUm .placarPlayer');
const placarPlayer2 = document.querySelector('#jogadorDois .placarPlayer');
const placarVelha = document.querySelector('#velha .placarPlayer');

const botVoltaInicio = document.querySelector('#botVoltaInicio button');

botVoltaInicio.addEventListener('click', function() {
    location.reload();
})



const campoPlayer = document.querySelector('#campoJogador');
let checkNumPlayer = ''; // variavel para checar número de participantes
let checkPlayerUm = true;
let checkPlayerDois = false;

//Pegando avatares
const avatares = document.querySelector('#avateres');
let guardandoAvatar1 = '';
let guardandoAvatar2 = '';

//Pegando campo do jogo 
const jogandoVelha = document.querySelector('#jogandoVelha');
const avatarExterminator = ['robo1', 'robo2', 'robo3', 'robo4', 'robo5', 'robo6', 'robo7', 'robo8'];
let ExterminatorEscolhido = Math.floor(Math.random() * avatarExterminator.length);

placarDoJogo();

function placarDoJogo() {

    umParticipante.addEventListener('click', function() {
        checkNumPlayer = 1;
        
        avatarPlayer2.innerHTML = `<img title="robo" src="assets/img/avatar/${avatarExterminator[ExterminatorEscolhido]}.jpg">`;

        const roboImg = document.querySelector('#jogadorDois .avatarPlayer img');
    })

    doisParticipante.addEventListener('click', function() {
        checkNumPlayer = 2;
    })
    


    // Colocando nome / caso seja 1 participante
    avancar.addEventListener('click', function() {
        if(jogador.value !== '') {
            if(checkNumPlayer === 1) {
                nomePlayer1.innerHTML = jogador.value;
                nomePlayer2.innerHTML = 'Exterminator';
                
                campoPlayer.innerHTML = `<b>${jogador.value}</b> escolha seu avatar`;
            }
        };
    }) 


    // Colocando nome / caso seja 2 participante
    avancar2.addEventListener('click', function() {
        if(jogador1.value !== '' || jogador2.value !== '') {
            if(checkNumPlayer === 2) {
                nomePlayer1.innerHTML = jogador1.value;
                nomePlayer2.innerHTML = jogador2.value;

                campoPlayer.innerHTML = `<b>${jogador1.value}</b> escolha seu avatar`;
            }
        }
    })






    for(let i of avatares.querySelectorAll('button img')) {
        i.addEventListener('click', function() {
            if (checkPlayerUm === true) {
                guardandoAvatar1 = i;
                avatarPlayer1.insertAdjacentElement('afterbegin', guardandoAvatar1); 
                efeitoPlayer1();   
                
                // checando se é um player
                if(checkNumPlayer === 1) {
                    setTimeout(() => {
                        efeitoPlayer2(500, 1000, 1500);
                    }, 1500)

                    setTimeout(() => {
                        efeitoVelha();
                        setTimeout(() => {
                            efeitoBotVoltaInicio();
                        }, 2000)
                    }, 3500)

                    fechaAvatares();
                    mudaCampoJogador(6000, 6500);
                } else { // Dois player
                    setTimeout(() => {
                        campoPlayer.classList.add('anime');
                        setTimeout(() => {
                            campoPlayer.innerHTML = `<b>${jogador2.value}</b> escolha seu avatar`;
                            campoPlayer.classList.remove('anime');
                        },300)

                        avatarPlayer2.classList.remove('animeAvatar');
                        setTimeout(() => {
                            checkPlayerDois = true;
                        }, 500)
                    }, 1500)
                }

                checkPlayerUm = false;

            } else if (checkNumPlayer === 2 && checkPlayerDois === true) {
                guardandoAvatar2 = i;
                avatarPlayer2.insertAdjacentElement('afterbegin', guardandoAvatar2);
                efeitoPlayer2(100, 500, 1000);

                setTimeout(() => {
                    efeitoVelha();
                    setTimeout(() => {
                        efeitoBotVoltaInicio();
                    }, 2000)
                }, 1500)
                fechaAvatares();
                mudaCampoJogador(3700, 4200);
                
                checkPlayerDois = false
            }
        });
        
    }




    // Animações dos players no placar
    function efeitoPlayer1() {
        setTimeout(() => {
            avatarPlayer1.classList.remove('anime2');
            setTimeout(() => {
                nomePlayer1.classList.remove('animeNome');
            }, 500)
            setTimeout(() => {
                placarPlayer1.classList.remove('anime');
            }, 1000)
        }, 100)
    }

    function efeitoPlayer2(tempo1, tempo2, tempo3) {
        setTimeout(() => {
            avatarPlayer2.classList.remove('animeAvatar');
            setTimeout(() => {
                avatarPlayer2.classList.remove('anime2');
            }, tempo1)
            setTimeout(() => {
                nomePlayer2.classList.remove('animeNome');
            }, tempo2)
            setTimeout(() => {
                placarPlayer2.classList.remove('anime');
            }, tempo3)
        }, 10)
    }

    function efeitoVelha() {
        setTimeout(() => {
            avatarVelha.classList.remove('animeAvatar');
            setTimeout(() => {
                avatarVelha.classList.remove('anime2');
            }, 500)
            setTimeout(() => {
                nomeVelha.classList.remove('animeNome');
            }, 1000)
            setTimeout(() => {
                placarVelha.classList.remove('anime');
            }, 1500)
        }, 10)
    }

    function efeitoBotVoltaInicio() {
        botVoltaInicio.style.display = 'block'
        setTimeout(() => {
            botVoltaInicio.classList.remove('botVoltaAnime');
        }, 50)
        
    }

    function fechaAvatares() {
        avatares.classList.add('animeAvatares');
            setTimeout(() => {
                avatares.style.display = 'none';
        }, 300)
    }

    function mudaCampoJogador(tempo, tempo2) {
        setTimeout(() => {
            campoPlayer.classList.add('anime');
            setTimeout(() => {
                if(checkNumPlayer === 1) {
                    campoPlayer.innerHTML = `<b>${jogador.value}</b> sua vez de jogar`;
                } else {
                    campoPlayer.innerHTML = `<b>${jogador1.value}</b> sua vez de jogar`;
                }
                jogandoVelha.style.display = 'block';
            }, 300)
        }, tempo)

        setTimeout(() => {
            campoPlayer.classList.remove('anime');
            jogandoVelha.classList.remove('animeJogandoVelha');
        }, tempo2)
    }
    

}




// ***************************************************************
const casas = [];
for(let i of jogandoVelha.querySelectorAll('button')) {
    casas.push(i.id)
};

let suaVez = true;
let acabou = true;


const casaSelecionada1 = [];
const casaSelecionada2 = [];



// Jogando
function nivelFacil() {

    for(let i of jogandoVelha.querySelectorAll('button')) {
        i.addEventListener('click', function() {
            if(i.childNodes.length === 0) {
                if(suaVez === true && acabou === true) {
                    i.innerHTML = `<img src="assets/img/avatar/${guardandoAvatar1.title}.jpg">`;
                    
                    casaSelecionada1.push(i.id);
                    vencePlayer1();

                    if(acabou === true) {
                        campoPlayer.classList.add('anime');
                        setTimeout(() => {
                            campoPlayer.innerHTML = `<b>Exterminator</b> pensando`;
                            campoPlayer.classList.remove('anime');
                        }, 300)

                        casas.splice(casas.indexOf(i.id), 1);
                        suaVez = false;
                        aleatorio(casas, 2500, 2505);
                    }
                    
                } 
            }
            velhaVence();
        })
    }

}



// aleatorio(casas);
function aleatorio(casas, tempo1, pempo2) {

    let escolhido = Math.floor(Math.random() * casas.length);

    for(let i of jogandoVelha.querySelectorAll('button')) {

        if(casas[escolhido] === i.id) {

            setTimeout(() => {
                i.innerHTML = `<img src="assets/img/avatar/${avatarExterminator[ExterminatorEscolhido]}.jpg">`;

                casaSelecionada2.push(i.id);
                vencePlayer2();

                casas.splice(casas.indexOf(casas[escolhido]), 1);
                suaVez = true;
                
            }, tempo1)


            


            setTimeout(() => {
                campoPlayer.classList.add('anime');
                setTimeout(() => {
                    if(acabou === true) {
                        campoPlayer.innerHTML = `<b>${jogador.value}</b> sua vez de jogar`;
                        campoPlayer.classList.remove('anime');
                        velhaVence();
                    }
                }, 300)
            }, pempo2)
            
        }

    }
    

}









// Jogando Dois Players
function jogandoDoisPlayer() {


    for(let i of jogandoVelha.querySelectorAll('button')) {
        i.addEventListener('click', function() {
            if(i.childNodes.length === 0) {
                if(suaVez === true && acabou === true) {
                    i.innerHTML = `<img src="assets/img/avatar/${guardandoAvatar1.title}.jpg">`;

                    casaSelecionada1.push(i.id);
                    

                    campoPlayer.classList.add('animeJogandoVelha');
                    setTimeout(() => {
                        campoPlayer.innerHTML = `<b>${jogador2.value}</b> sua vez de jogar`;
                        campoPlayer.classList.remove('animeJogandoVelha');
                    }, 300)
                    
                    vencePlayer1();
                    suaVez = false;              
                } else {
                    i.innerHTML = `<img src="assets/img/avatar/${guardandoAvatar2.title}.jpg">`;

                    casaSelecionada2.push(i.id);
                    


                    campoPlayer.classList.add('animeJogandoVelha');
                    setTimeout(() => {
                        campoPlayer.innerHTML = `<b>${jogador1.value}</b> sua vez de jogar`;
                        campoPlayer.classList.remove('animeJogandoVelha');
                    }, 300)

                    vencePlayer2();
                    suaVez = true;
                }
            }


            // console.log(contadorVelha);
            velhaVence();

        })
    }

}














let placar1 = document.querySelector('#jogadorUm .placarPlayer');
let contador1 = 0;
let placar2 = document.querySelector('#jogadorDois .placarPlayer');
let contador2 = 0;
let placar3 = document.querySelector('#velha .placarPlayer');
let contador3 = 0;

retorna = true;

// Vence Player 1
function vencePlayer1() {

    if(retorna === true) horizontal1();
    if(retorna === true) horizontal2();
    if(retorna === true) horizontal3();

    if(retorna === true) vertical1();
    if(retorna === true) vertical2();
    if(retorna === true) vertical3();

    if(retorna === true) inclinado1();
    if(retorna === true) inclinado2();

    

    // Checando a horizontal

    function horizontal1() {
        let home1 = '';
        let home2 = '';
        let home3 = '';


        for(let i = 0; i < casaSelecionada1.length; i++) {
            if(casaSelecionada1[i] === 'A-1') {
                home1 = 'A-1';
            }
            if(casaSelecionada1[i] === 'A-2') {
                home2 = 'A-2';
            }
            if(casaSelecionada1[i] === 'A-3') {
                home3 = 'A-3';
            }
        }

        if(home1 === 'A-1' && home2 === 'A-2' && home3 === 'A-3') {

            retorna = false;

            contador1 = contador1 + 1;
            contadorVencida(placar1, contador1);

            animeVencedor(home1, home2, home3);

            acabou = false;
            if(checkNumPlayer === 1) {
                resultado(jogador.value);
            } else {
                resultado(jogador1.value);
            }
        }

  
    }

    function horizontal2() {
        let home1 = '';
        let home2 = '';
        let home3 = '';


        for(let i = 0; i < casaSelecionada1.length; i++) {
            if(casaSelecionada1[i] === 'B-1') {
                home1 = 'B-1';
            }
            if(casaSelecionada1[i] === 'B-2') {
                home2 = 'B-2';
            }
            if(casaSelecionada1[i] === 'B-3') {
                home3 = 'B-3';
            }
        }

        if(home1 === 'B-1' && home2 === 'B-2' && home3 === 'B-3') {

            retorna = false;

            contador1 = contador1 + 1;
            contadorVencida(placar1, contador1);

            animeVencedor(home1, home2, home3);

            acabou = false;
            if(checkNumPlayer === 1) {
                resultado(jogador.value);
            } else {
                resultado(jogador1.value);
            }
        }

    }

    function horizontal3() {
        let home1 = '';
        let home2 = '';
        let home3 = '';


        for(let i = 0; i < casaSelecionada1.length; i++) {
            if(casaSelecionada1[i] === 'C-1') {
                home1 = 'C-1';
            }
            if(casaSelecionada1[i] === 'C-2') {
                home2 = 'C-2';
            }
            if(casaSelecionada1[i] === 'C-3') {
                home3 = 'C-3';
            }
        }

        if(home1 === 'C-1' && home2 === 'C-2' && home3 === 'C-3') {

            retorna = false;

            contador1 = contador1 + 1;
            contadorVencida(placar1, contador1);

            animeVencedor(home1, home2, home3);

            acabou = false;
            if(checkNumPlayer === 1) {
                resultado(jogador.value);
            } else {
                resultado(jogador1.value);
            }
        }

    }


    // Checando a vertical

    function vertical1() {
        let home1 = '';
        let home2 = '';
        let home3 = '';


        for(let i = 0; i < casaSelecionada1.length; i++) {
            if(casaSelecionada1[i] === 'A-1') {
                home1 = 'A-1';
            }
            if(casaSelecionada1[i] === 'B-1') {
                home2 = 'B-1';
            }
            if(casaSelecionada1[i] === 'C-1') {
                home3 = 'C-1';
            }
        }

        if(home1 === 'A-1' && home2 === 'B-1' && home3 === 'C-1') {

            retorna = false;

            contador1 = contador1 + 1;
            contadorVencida(placar1, contador1);

            animeVencedor(home1, home2, home3);

            acabou = false;
            if(checkNumPlayer === 1) {
                resultado(jogador.value);
            } else {
                resultado(jogador1.value);
            }
        }
    }

    function vertical2() {
        let home1 = '';
        let home2 = '';
        let home3 = '';


        for(let i = 0; i < casaSelecionada1.length; i++) {
            if(casaSelecionada1[i] === 'A-2') {
                home1 = 'A-2';
            }
            if(casaSelecionada1[i] === 'B-2') {
                home2 = 'B-2';
            }
            if(casaSelecionada1[i] === 'C-2') {
                home3 = 'C-2';
            }
        }

        if(home1 === 'A-2' && home2 === 'B-2' && home3 === 'C-2') {

            retorna = false;

            contador1 = contador1 + 1;
            contadorVencida(placar1, contador1);

            animeVencedor(home1, home2, home3);

            acabou = false;
            if(checkNumPlayer === 1) {
                resultado(jogador.value);
            } else {
                resultado(jogador1.value);
            }
        }
    }

    function vertical3() {
        let home1 = '';
        let home2 = '';
        let home3 = '';


        for(let i = 0; i < casaSelecionada1.length; i++) {
            if(casaSelecionada1[i] === 'A-3') {
                home1 = 'A-3';
            }
            if(casaSelecionada1[i] === 'B-3') {
                home2 = 'B-3';
            }
            if(casaSelecionada1[i] === 'C-3') {
                home3 = 'C-3';
            }
        }

        if(home1 === 'A-3' && home2 === 'B-3' && home3 === 'C-3') {

            retorna = false;

            contador1 = contador1 + 1;
            contadorVencida(placar1, contador1);

            animeVencedor(home1, home2, home3);

            acabou = false;
            if(checkNumPlayer === 1) {
                resultado(jogador.value);
            } else {
                resultado(jogador1.value);
            }
        }
    }


    // Checando a inclinada

    function inclinado1() {
        let home1 = '';
        let home2 = '';
        let home3 = '';


        for(let i = 0; i < casaSelecionada1.length; i++) {
            if(casaSelecionada1[i] === 'A-1') {
                home1 = 'A-1';
            }
            if(casaSelecionada1[i] === 'B-2') {
                home2 = 'B-2';
            }
            if(casaSelecionada1[i] === 'C-3') {
                home3 = 'C-3';
            }
        }

        if(home1 === 'A-1' && home2 === 'B-2' && home3 === 'C-3') {

            retorna = false;

            contador1 = contador1 + 1;
            contadorVencida(placar1, contador1);

            animeVencedor(home1, home2, home3);

            acabou = false;
            if(checkNumPlayer === 1) {
                resultado(jogador.value);
            } else {
                resultado(jogador1.value);
            }
        }
    }

    function inclinado2() {
        let home1 = '';
        let home2 = '';
        let home3 = '';


        for(let i = 0; i < casaSelecionada1.length; i++) {
            if(casaSelecionada1[i] === 'A-3') {
                home1 = 'A-3';
            }
            if(casaSelecionada1[i] === 'B-2') {
                home2 = 'B-2';
            }
            if(casaSelecionada1[i] === 'C-1') {
                home3 = 'C-1';
            }
        }

        if(home1 === 'A-3' && home2 === 'B-2' && home3 === 'C-1') {

            retorna = false;

            contador1 = contador1 + 1;
            contadorVencida(placar1, contador1);

            animeVencedor(home1, home2, home3);

            acabou = false;
            if(checkNumPlayer === 1) {
                resultado(jogador.value);
            } else {
                resultado(jogador1.value);
            }
        }
    }

}

// Vence Player 2
function vencePlayer2() {



    if(retorna === true) horizontal1();
    if(retorna === true) horizontal2();
    if(retorna === true) horizontal3();

    if(retorna === true) vertical1();
    if(retorna === true) vertical2();
    if(retorna === true) vertical3();

    if(retorna === true) inclinado1();
    if(retorna === true) inclinado2();



    // Checando a horizontal

    function horizontal1() {
        let home1 = '';
        let home2 = '';
        let home3 = '';

        for(let i = 0; i < casaSelecionada2.length; i++) {
            if(casaSelecionada2[i] === 'A-1') {
                home1 = 'A-1';
            }
            if(casaSelecionada2[i] === 'A-2') {
                home2 = 'A-2';
            }
            if(casaSelecionada2[i] === 'A-3') {
                home3 = 'A-3';
            }
        }


        if(home1 === 'A-1' && home2 === 'A-2' && home3 === 'A-3') {

            retorna = false;
            
            contador2 = contador2 + 1;
            contadorVencida(placar2, contador2);

            animeVencedor(home1, home2, home3);

            acabou = false;
            
            if(checkNumPlayer === 1) {
                resultado('Exterminator');
            } else {
                resultado(jogador2.value);
            }
        }

    }

    function horizontal2() {
        let home1 = '';
        let home2 = '';
        let home3 = '';

        for(let i = 0; i < casaSelecionada2.length; i++) {
            if(casaSelecionada2[i] === 'B-1') {
                home1 = 'B-1';
            }
            if(casaSelecionada2[i] === 'B-2') {
                home2 = 'B-2';
            }
            if(casaSelecionada2[i] === 'B-3') {
                home3 = 'B-3';
            }
        }


        if(home1 === 'B-1' && home2 === 'B-2' && home3 === 'B-3') {

            retorna = false;
            
            contador2 = contador2 + 1;
            contadorVencida(placar2, contador2);

            animeVencedor(home1, home2, home3);

            acabou = false;
            
            if(checkNumPlayer === 1) {
                resultado('Exterminator');
            } else {
                resultado(jogador2.value);
            }
        }

    }

    function horizontal3() {
        let home1 = '';
        let home2 = '';
        let home3 = '';

        for(let i = 0; i < casaSelecionada2.length; i++) {
            if(casaSelecionada2[i] === 'C-1') {
                home1 = 'C-1';
            }
            if(casaSelecionada2[i] === 'C-2') {
                home2 = 'C-2';
            }
            if(casaSelecionada2[i] === 'C-3') {
                home3 = 'C-3';
            }
        }


        if(home1 === 'C-1' && home2 === 'C-2' && home3 === 'C-3') {

            retorna = false;
            
            contador2 = contador2 + 1;
            contadorVencida(placar2, contador2);

            animeVencedor(home1, home2, home3);

            acabou = false;
            
            if(checkNumPlayer === 1) {
                resultado('Exterminator');
            } else {
                resultado(jogador2.value);
            }
        }

    }


    // Checando a horizontal
    function vertical1() {
        let home1 = '';
        let home2 = '';
        let home3 = '';

        for(let i = 0; i < casaSelecionada2.length; i++) {
            if(casaSelecionada2[i] === 'A-1') {
                home1 = 'A-1';
            }
            if(casaSelecionada2[i] === 'B-1') {
                home2 = 'B-1';
            }
            if(casaSelecionada2[i] === 'C-1') {
                home3 = 'C-1';
            }
        }


        if(home1 === 'A-1' && home2 === 'B-1' && home3 === 'C-1') {

            retorna = false;
            
            contador2 = contador2 + 1;
            contadorVencida(placar2, contador2);

            animeVencedor(home1, home2, home3);

            acabou = false;
            
            if(checkNumPlayer === 1) {
                resultado('Exterminator');
            } else {
                resultado(jogador2.value);
            }
        }

    }

    function vertical2() {
        let home1 = '';
        let home2 = '';
        let home3 = '';

        for(let i = 0; i < casaSelecionada2.length; i++) {
            if(casaSelecionada2[i] === 'A-2') {
                home1 = 'A-2';
            }
            if(casaSelecionada2[i] === 'B-2') {
                home2 = 'B-2';
            }
            if(casaSelecionada2[i] === 'C-2') {
                home3 = 'C-2';
            }
        }


        if(home1 === 'A-2' && home2 === 'B-2' && home3 === 'C-2') {

            retorna = false;
            
            contador2 = contador2 + 1;
            contadorVencida(placar2, contador2);

            animeVencedor(home1, home2, home3);

            acabou = false;
            
            if(checkNumPlayer === 1) {
                resultado('Exterminator');
            } else {
                resultado(jogador2.value);
            }
        }

    }

    function vertical3() {
        let home1 = '';
        let home2 = '';
        let home3 = '';

        for(let i = 0; i < casaSelecionada2.length; i++) {
            if(casaSelecionada2[i] === 'A-3') {
                home1 = 'A-3';
            }
            if(casaSelecionada2[i] === 'B-3') {
                home2 = 'B-3';
            }
            if(casaSelecionada2[i] === 'C-3') {
                home3 = 'C-3';
            }
        }


        if(home1 === 'A-3' && home2 === 'B-3' && home3 === 'C-3') {

            retorna = false;
            
            contador2 = contador2 + 1;
            contadorVencida(placar2, contador2);

            animeVencedor(home1, home2, home3);

            acabou = false;
            
            if(checkNumPlayer === 1) {
                resultado('Exterminator');
            } else {
                resultado(jogador2.value);
            }
        }

    }


    // Checando a inclinada

    function inclinado1() {
        let home1 = '';
        let home2 = '';
        let home3 = '';

        for(let i = 0; i < casaSelecionada2.length; i++) {
            if(casaSelecionada2[i] === 'A-1') {
                home1 = 'A-1';
            }
            if(casaSelecionada2[i] === 'B-2') {
                home2 = 'B-2';
            }
            if(casaSelecionada2[i] === 'C-3') {
                home3 = 'C-3';
            }
        }


        if(home1 === 'A-1' && home2 === 'B-2' && home3 === 'C-3') {

            retorna = false;
            
            contador2 = contador2 + 1;
            contadorVencida(placar2, contador2);

            animeVencedor(home1, home2, home3);

            acabou = false;
            
            if(checkNumPlayer === 1) {
                resultado('Exterminator');
            } else {
                resultado(jogador2.value);
            }
        }
    }

    function inclinado2() {
        let home1 = '';
        let home2 = '';
        let home3 = '';

        for(let i = 0; i < casaSelecionada2.length; i++) {
            if(casaSelecionada2[i] === 'A-3') {
                home1 = 'A-3';
            }
            if(casaSelecionada2[i] === 'B-2') {
                home2 = 'B-2';
            }
            if(casaSelecionada2[i] === 'C-1') {
                home3 = 'C-1';
            }
        }


        if(home1 === 'A-3' && home2 === 'B-2' && home3 === 'C-1') {

            retorna = false;
            
            contador2 = contador2 + 1;
            contadorVencida(placar2, contador2);

            animeVencedor(home1, home2, home3);

            acabou = false;
            
            if(checkNumPlayer === 1) {
                resultado('Exterminator');
            } else {
                resultado(jogador2.value);
            }
        }
    }
    
    

}

// Vence Velha
let contadorVelha = 0;
function velhaVence() {

    contadorVelha = contadorVelha + 1;

    if(contadorVelha === 9) {

        contador3 = contador3 + 1;
        contadorVencida(placar3, contador3);
        resultado('Velha');
        
        contadorVelha = 0;

    }

    
}






// Função para mudar o placar
function contadorVencida(player, contador) {
    player.innerHTML = contador;

    // Trocando cor do placar do player 1
    if(contador1 === contador2 || contador1 === contador3 || contador2 === contador3) {
        placar1.style.color = '#fff';
        placar2.style.color = '#fff';
        placar3.style.color = '#fff';
    }

    // Trocando cor do placar do player 1
    if(contador1 > contador2 && contador1 > contador3) {
        placar1.style.color = '#0cb720';
    } else if(contador1 < contador2 && contador1 < contador3) {
        placar1.style.color = '#a0101e';
    } else if (contador1 < contador2 && contador1 > contador3) {
        placar1.style.color = '#57a2ff';
    } else if (contador1 > contador2 && contador1 < contador3) {
        placar1.style.color = '#57a2ff';
    }

    // Trocando cor do placar do player 2
    if(contador2 > contador1 && contador2 > contador3) {
        placar2.style.color = '#0cb720';
    } else if(contador2 < contador1 && contador2 < contador3) {
        placar2.style.color = '#a0101e';
    } else if(contador2 < contador1 && contador2 > contador3) {
        placar2.style.color = '#57a2ff';
    } else if (contador2 > contador1 && contador2 < contador3) {
        placar2.style.color = '#57a2ff';
    }

    // Trocando cor do placar do player 3 (VELHA)
    if(contador3 > contador1 && contador3 > contador2) {
        placar3.style.color = '#0cb720';
    } else if(contador3 < contador1 && contador3 < contador2) {
        placar3.style.color = '#a0101e';
    } else if(contador3 < contador1 && contador3 > contador2) {
        placar3.style.color = '#57a2ff';
    } else if (contador3 > contador1 && contador3 < contador2) {
        placar3.style.color = '#57a2ff';
    }
}


// Função para animação das casas vencedoras girando
function animeVencedor(casa1, casa2, casa3) {
    setTimeout(() => {
        for(let i of jogandoVelha.querySelectorAll('button')) {
            if(i.id === casa1){
                i.classList.add('anime');
            } 
        }
        for(let i of jogandoVelha.querySelectorAll('button')) {
            if(i.id === casa2){
                i.classList.add('anime');
            } 
        }
        for(let i of jogandoVelha.querySelectorAll('button')) {
            if(i.id === casa3){
                i.classList.add('anime');
            } 
        }
    }, 1000)

    setTimeout(() => {
        for(let i of jogandoVelha.querySelectorAll('button')) {
            if(i.id === casa1){
                i.classList.remove('anime');
            } 
        }
        for(let i of jogandoVelha.querySelectorAll('button')) {
            if(i.id === casa2){
                i.classList.remove('anime');
            } 
        }
        for(let i of jogandoVelha.querySelectorAll('button')) {
            if(i.id === casa3){
                i.classList.remove('anime');
            } 
        }
    }, 4000)
}



let imparPar = 0;
function resultado(nomeVencedor) {
    const bloqueia = document.querySelector('#block');
    contadorVelha = -1;

    imparPar = imparPar + 1;
    

    campoPlayer.classList.add('anime');

    setTimeout(() => {
        campoPlayer.innerHTML = `<b>${nomeVencedor}</b> venceu a partida`;
        campoPlayer.classList.remove('anime');
    }, 300)

    setTimeout(() => {

        jogandoVelha.classList.add('animeJogandoVelha');
        setTimeout(() => {
            jogandoVelha.classList.remove('animeJogandoVelha');

        }, 300)


        for(let i of jogandoVelha.querySelectorAll('img')) {
            i.parentNode.removeChild(i);
        }


        for(let i of jogandoVelha.querySelectorAll('button')) {
            casas.splice(i.id);
        };
        for(let i of jogandoVelha.querySelectorAll('button')) {
            casas.push(i.id);
        };


        for(let i of casaSelecionada1) {
            casaSelecionada1.splice(i);
        }
        for(let i of casaSelecionada2) {
            casaSelecionada2.splice(i);
        }


        acabou = true;


        if(imparPar % 2 !== 0) {

            if(checkNumPlayer === 1) {
                bloqueia.style.display = 'block';
            }

            campoPlayer.classList.add('animeJogandoVelha');
            setTimeout(() => {
                if(checkNumPlayer === 1) {
                    campoPlayer.innerHTML = `<b>Exterminator</b> pensando`;
                } else {
                    campoPlayer.innerHTML = `<b>${jogador2.value}</b> sua vez de jogar`;
                }
                
                campoPlayer.classList.remove('animeJogandoVelha');
            }, 300)

            if(checkNumPlayer === 1) {
                setTimeout(() => {
                    aleatorio(casas);
                    bloqueia.style.display = 'none';
                }, 2500)
            }

        } else {
            campoPlayer.classList.add('animeJogandoVelha');
            setTimeout(() => {
                if(checkNumPlayer === 1) {
                    campoPlayer.innerHTML = `<b>${jogador.value}</b> sua vez de jogar`;
                } else {
                    campoPlayer.innerHTML = `<b>${jogador1.value}</b> sua vez de jogar`;
                    suaVez = true;
                }
                
                campoPlayer.classList.remove('animeJogandoVelha');
            }, 300)
        }

    }, 4000)

    setTimeout(() => {
        retorna = true;
    }, 100)

}










// ***************************************************************

// Menu Mobile 

navMobile();

function navMobile() {

    const navMobile = document.querySelector('#navMobile');
    const botMobile = document.querySelector('#navMobile nav');
    let checkMenu = false;


    avancar.addEventListener('click', function() {
        abrindoBot();
    })
    avancar2.addEventListener('click', function() {
        abrindoBot();
    })

    function abrindoBot() {
        setTimeout(() => {
            navMobile.classList.remove('navAnime');
        }, 1000)
    }


    botMobile.addEventListener('click', function() {
        if(checkMenu === false) {
            placar.classList.remove('animePlcacarMobile');
            checkMenu = true;
        } else {
            placar.classList.add('animePlcacarMobile');
            checkMenu = false;
        }
    })
}












