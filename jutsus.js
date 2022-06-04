console.clear();
const prompt = require('prompt-sync')();
//Variaveis e lista dos jutsus, algumas lets estão em escopo local.  Organizar codigo
let rodadas;
let jogador1;
let pc;
let repetir = 'sim';
let jutsus = ['Ninjutsu','Taijutsu', 'Genjutsu']
//CONTADOR DE VITÓRIAS
let vitoriaPc = 0;
let vitoriaJ = 0;

console.log();
console.log('---------- Olá, seja bem vindo a escola de jutsus!!! -------- ') 
console.log(`

No jogo de hoje você é um pupilo tentando superar o mestre na arte dos jutsus!
Você e o mestre poderão usar os 3 tipos de jutsus disponíveis abaixo :

Os NINJUTSUS são jutsus que envolvem manipulação de chakra e concentração.
Os TAIJUTSUS são jutsus baseados em capacidade físicas de combate, eficientes contra GENJUSTUS
já que os mesmos se concentram em manipular o chakra do oponente.
Os GENJUTSUS são os jutsus em que exigem ótimo controle de chakra para manipular o inimigo sem que
ele perceba. Eficaz contra NINJUTSUS, já que os usuários destes precisam manter a circulação de chakras
para seus jutsus.

LEMBRANDO ENTÃO: TAIJUTSU ganha de GENJUTSU mas perde para NINJUTSU;
NINJUTSU ganha de TAIJUTSU mas perde para GENJUTSU;
GENJUTSU ganha de NINJUTSU mas perde para TAIJUTSU`)
console.log();

// FOR PARA A QUANTIDADE DE JOGADAS
for(let i = 0; i!= rodadas;){
    if(repetir == 'sim'){
        i=0;
        console.log('Quantas rodadas deseja jogar? ');
    rodadas = +prompt();
    while (i != rodadas) {
        //JOGADA ALEATORIA DO PC
        // MELHORAR A JOGADA PARA MATH RANDOM DENTRO DO MATH FLOOR EM UMA LINHA
    let pcResp = Math.floor(3 * Math.random());
    if(pcResp == 1){
        (pc = 1), (pcResp = jutsus[0]);
    } else if (pcResp == 2){
        (pc = 2) , (pcResp = jutsus[1])
    } else if (pcResp = 3){
        (pc = 3), (pcResp = jutsus[2])
    }
    console.log( ` 
    Escolha um jutsu para iniciar:
    1. Ninjutsu
    2. Taijutsu
    3. Genjutsu 
    `)
    let escolhaJogador = +prompt();
    // laço de repetição para não permitir outras entradas
    while (escolhaJogador > 3){
        console.log('ISSO NÃO É UM JUTSU !!!!')
        escolhaJogador = +prompt();}
    // Pegando a resposta do usuario e percorrendo array (poderia usar para percorrer direto armazendando em outra variavel)
  if(escolhaJogador == 1){
            (jogador1 = 1), (escolhaJogador = jutsus[0]);
} else if (escolhaJogador == 2){
            (jogador1 = 2) , (escolhaJogador = jutsus[1])
} else if (escolhaJogador = 3){
            (jogador1 = 3), (escolhaJogador = jutsus[2]) }

console.log(`
Você escolheu ${escolhaJogador}         |
-------------------------------|
O Mestre escolheu ${pcResp}     |
-------------------------------|`)
//Comparação das respostas
if (jogador1 == 3 && pc == 1) {
     console.log(` 
       O PUPILO VENCEU ESSA RODADA ... `)
    vitoriaJ++, i++;
  } else if (pc == 3 && jogador1 == 1) {
      console.log(`
       O MESTRE VENCEU ESSA RODADA ...`);
    vitoriaPc++, i++;
  } else if (jogador1 < pc) {
      console.log(`
       O PUPILO VENCEU ESSA RODADA ...`);
    vitoriaJ++, i++;
  } else if (pc < jogador1) {
      console.log(`
       O MESTRE VENCEU ESSA RODADDA ...`);
    vitoriaPc++, i++;
  } else if (pc == jogador1) {
      console.log(`
      JUTSUS IGUAIS SE ANULAM! EMPATE TÉCNICO ...
      `);
    i++;
  }
  
} // Mostrar placar final  
console.log(` -----------------------------------
         [ PLACAR FINAL ]
O PUPILO FEZ ${vitoriaJ} PONTOS.
O MESTRE FEZ ${vitoriaPc} PONTOS. 
------------------------------------

         [ O CAMPEÃO ]`);
// mostrar o campeão
if (vitoriaJ > vitoriaPc){
    console.log(`
    WEEEEEEEEEEE ARE THE CHAMPIOOOOONS "MAI FRIEND" (DANDANDAAAAN)...
    O PUPILO SUPERA O MESTRE!

    O pupilo venceu com ${vitoriaJ} pontos!`);
} else if (vitoriaPc > vitoriaJ){
    console.log(` 
    O MESTRE É DURO NA QUEDA :(

    O Mestre venceu com ${vitoriaPc} pontos!`);
} else {
    console.log(`
     A disputa terminou em empate! 
    `);
}
// Loop para restart 
console.log (' Foi um grande aprendizado! Lutar novamente? ');
repetir = prompt().toLowerCase();
if (repetir == 'sim'){
    (i=0), (vitoriaJ = 0), (vitoriaPc = 0);
} else { 
    console.log( `
    Ok, até a próxima pupilo! `);
}
}
}