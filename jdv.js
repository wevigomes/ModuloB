const prompt = require("prompt-sync")();
console.clear();

// MATRIZ DO JOGO
const jogo = [
  ["", "", "" ],
  ["", "", ""],
  ["", "", ""],
];
// VARIAVEIS
let jogador;
let jogador2;
let coluna2;
let coluna;
let pontosJogador = 0;
let pontosJ2 = 0;
let repetir;

// FUNÇÕES JOGADORES
// FUNÇÃO J1 X
const player = () => {
  if (jogador == 0 && coluna == 0 && jogo[0][0] == "") {
    jogo[0][0] = "X";
  } else if (jogador == 0 && coluna == 1 && jogo[0][1] == "") {
    jogo[0][1] = "X";
  } else if (jogador == 0 && coluna == 2 && jogo[0][2] == "") {
    jogo[0][2] = "X";
  }
  if (jogador == 1 && coluna == 0 && jogo[1][0] == "") {
    jogo[1][0] = "X";
  } else if (jogador == 1 && coluna == 1 && jogo[1][1] == "") {
    jogo[1][1] = "X";
  } else if (jogador == 1 && coluna == 2 && jogo[1][2] == "") {
    jogo[1][2] = "X";
  }
  if (jogador == 2 && coluna == 0 && jogo[2][0] == "") {
    jogo[2][0] = "X";
  } else if (jogador == 2 && coluna == 1 && jogo[2][1] == "") {
    jogo[2][1] = "X";
  } else if (jogador == 2 && coluna == 2 && jogo[2][2] == "") {
    jogo[2][2] = "X";
  }
};
// FUNÇÃO J2 O
const comp = () => {
  if (jogador2 == 0 && coluna2 == 0 && jogo[0][0] == "") {
    jogo[0][0] = "O";
  } else if (jogador2 == 0 && coluna2 == 1 && jogo[0][1] == "") {
    jogo[0][1] = "O";
  } else if (jogador2 == 0 && coluna2 == 2 && jogo[0][2] == "") {
    jogo[0][2] = "O";
  }
  if (jogador2 == 1 && coluna2 == 0 && jogo[1][0] == "") {
    jogo[1][0] = "O";
  } else if (jogador2 == 1 && coluna2 == 1 && jogo[1][1] == "") {
    jogo[1][1] = "O";
  } else if (jogador2 == 1 && coluna2 == 2 && jogo[1][2] == "") {
    jogo[1][2] = "O";
  }
  if (jogador2 == 2 && coluna2 == 0 && jogo[2][0] == "") {
    jogo[2][0] = "O";
  } else if (jogador2 == 2 && coluna2 == 1 && jogo[2][1] == "") {
    jogo[2][1] = "O";
  } else if (jogador2 == 2 && coluna2 == 2 && jogo[2][2] == "") {
    jogo[2][2] = "O";
  }
};
// INTRO
console.log(`
------------------------- BEM VINDO AO JOGO DA VELHA --------------------------
                           [INSTRUÇÕES]
Para fazer suas jogadas será necessário informar a linha e em seguida a coluna.
Há numeração nas linhas e colunas para facilitar, observe a tabela.
Jogadas com número diferente das linhas e colunas NÃO SERÃO CONTABILIZADAS e o jogador
perderá o direito de jogada.
O Jogador 1 será X e o Jogador 2 será O.
Boa sorte!

PRESSIONE ENTER PARA CONTINUAR`)
prompt();
//REPETIÇÃO DO JOGO
while (true) {
  while (true) {
       console.table(jogo)
    jogador = +prompt(" Jogador 1, digite a linha da sua jogada: ");
    coluna = +prompt("Jogador 1, digite a coluna da sua jogada: ");
    
    player();
    console.table(jogo)
    jogador2 = +prompt(" Jogador 2, digite a linha da sua jogada:  ");
    coluna2 = +prompt("Jogador 2, digite a linha da sua jogada:");
    comp();


    // DECLARANDO VITÓRIA
    if (
      (jogo[0][0] == "X" && jogo[0][1] == "X" && jogo[0][2] == "X") ||
      (jogo[0][0] == "X" && jogo[1][0] == "X" && jogo[2][0] == "X") ||
      (jogo[0][0] == "X" && jogo[1][1] == "X" && jogo[2][2] == "X") ||
      (jogo[0][2] == "X" && jogo[1][2] == "X" && jogo[2][2] == "X") ||
      (jogo[2][0] == "X" && jogo[2][1] == "X" && jogo[2][2] == "X") ||
      (jogo[0][2] == "X" && jogo[1][1] == "X" && jogo[2][0] == "X") ||
      (jogo[1][0] == "X" && jogo[1][1] == "X" && jogo[1][2] == "X") ||
      (jogo[0][1] == "X" && jogo[1][1] == "X" && jogo[2][1] == "X")
    ) {
        console.clear();
      console.log(`
      Parabéns!! O jogador 1 Venceu!!`);
      pontosJogador++;
      console.table(jogo)
      jogo[0].splice(0, 3, "", "", "");
      jogo[1].splice(0, 3, "", "", "");
      jogo[2].splice(0, 3, "", "", "");
      break;
    } else if (
      (jogo[0][0] == "O" && jogo[0][1] == "O" && jogo[0][2] == "O") ||
      (jogo[0][0] == "O" && jogo[1][0] == "O" && jogo[2][0] == "O") ||
      (jogo[0][0] == "O" && jogo[1][1] == "O" && jogo[2][2] == "O") ||
      (jogo[0][2] == "O" && jogo[1][2] == "O" && jogo[2][2] == "O") ||
      (jogo[2][0] == "O" && jogo[2][1] == "O" && jogo[2][2] == "O") ||
      (jogo[0][2] == "O" && jogo[1][1] == "O" && jogo[2][0] == "O") ||
      (jogo[1][0] == "O" && jogo[1][1] == "O" && jogo[1][2] == "O") ||
      (jogo[0][1] == "O" && jogo[1][1] == "O" && jogo[2][2] == "O")
    ) {
        console.clear();
        console.log(`
        Parabéns!! O jogador 2 Venceu!!`);
      pontosJ2++;
      
     
      console.table(jogo);
      jogo[0].splice(0, 3, "", "", "");
      jogo[1].splice(0, 3, "", "", "");
      jogo[2].splice(0, 3, "", "", "");
      break;
    }
  }
  // PERGUNTA DO WHILE TRUE PARA MOSTRAR PLACAR E DECLARAR CAMPEÃO 
  repetir = prompt("Deseja Continuar ? Digite S ou N: ").toUpperCase();
  if (repetir == "N") {
    console.log(`O Jogador 1 fez ${pontosJogador} pontos`);
    console.log(`O Jogador 2 fez ${pontosJ2} pontos`);
    console.log('----------------- [O CAMPEÃO] -------------------')
    if (pontosJogador > pontosJ2) {
      console.log("O Jogador 1 ganhou !");
    } else if (pontosJogador < pontosJ2 ){
      console.log("O Jogador 2 ganhou !");
    } else{
        console.log("O JOGO EMPATOU...");
    }
    break;
  }
}