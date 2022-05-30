console.clear();
const prompt = require('prompt-sync')();
let  respostaS=0
//-----------------------------------------------------------------------------------------------------------
console.log();
console.log("                   [O CAÇADOR DAS TREVAS]");
console.log();

console.log(" Nessa história você é Tanjiro, um garoto que trabalha fazendo carvão para sustentar a mãe e os 4 irmãos. Um dia quando retorna pra casa você se depara com a pior das cenas: sua mãe e seus irmãos foram dizimados, menos Nezuko, a sua irmã mais velha, que foi deixada como parte de um experimento. A sua missão agora é encontrar uma cura para Nezuko e para isso você precisará passar por alguns empecilhos no caminho para concluí-la. Entre eles o de se tornar um forte caçador das trevas e provar para todos que a sua irmã ainda é sua irmã e não um ser da escuridão como todos pensam. Vamos iniciar essa caminhada? ")
console.log();


//-------------------------------------------------------------------------------------------
console.log('----------------- ÍNICIO ---------------------')
console.log();
let pergunta1=prompt('Você conseguiu chegar à montanha e encontrou o mestre? [S/N] ').toUpperCase();
while (pergunta1!= 'S'&& pergunta1!= 'N'){
    console.log('Resposta inválida. Entre com S ou N.')
    pergunta1=prompt('Você conseguiu chegar à montanha e encontrou o mestre? [S/N] ').toUpperCase();

} if(pergunta1 == 'S') {
  console.log();
    console.log('Ótimo, as instruções estavam corretas. Vejamos agora o que acontece. ' );
    respostaS++
  } else{
    console.log();
    console.log ('Preciso encontrar uma forma de chegar a montanha ou iniciar meu treinamento!');
  }
  console.log();


let pergunta2 = prompt('Você terminou o treinamento e se tornou um caçador das trevas? [S/N] ').toUpperCase();

while (pergunta2!= 'S'&& pergunta2!= 'N'){
    console.log('Resposta inválida. Entre com S ou N.')
    pergunta2=prompt('Você terminou o treinamento e se tornou um caçador das trevas? [S/N] ').toUpperCase();

} 
if(pergunta2 == 'S') {
  console.log();
    console.log('Agora posso sair em missões para coletar amostras e conseguir um antídoto para Nezuko! ' );
    respostaS++
  } else{
    console.log();
    console.log ('Preciso achar um jeito de treinar e me tornar mais forte! Nezuko depende de mim!');
  }
  console.log();

let pergunta3 = prompt('Ganhou a batalha contra Inosuke e salvou Nezuko? [S/N] ').toUpperCase()

while (pergunta3!= 'S'&& pergunta3!= 'N'){
    console.log('Resposta inválida. Entre com S ou N.')
    pergunta3=prompt('Ganhou a batalha contra Inosuke e salvou Nezuko? [S/N] ').toUpperCase()

} 
console.log();
if(pergunta3 == 'S') {
  console.log();
  console.log('Inosuke agora é meu companheiro e entendeu que Nezuko não fará mal a nenhum humano, derrotaremos as trevas juntos a partir de agora. ' );
  respostaS++
} else{
  console.log();
  console.log ('Não posso me dar por vencido, minha irmã é valiosa demais para mim!');
}
console.log();

let pergunta4 = prompt('Derrotou e mostrou compaixão pelos seres menores? [S/N] ').toUpperCase()

while (pergunta4!= 'S'&& pergunta4!= 'N'){
    console.log('Resposta inválida. Entre com S ou N.')
    pergunta4=prompt('Derrotou  e mostrou compaixão pelos seres menores? [S/N] ').toUpperCase()

} 
console.log();
if(pergunta4 == 'S') {
  console.log();
  console.log('Enquanto lutava, pude sentir a dor de muitos seres das trevas que eram apenas marionetes de algo maior, o que pude fazer para dar conforto a sua alma, eu fiz... ' );
  respostaS++
} else{
  console.log();
  console.log ('Não consigo! Esses bastardos foram responsáveis pelo o que aconteceu com a minha família e tantos outros inocentes! ');
}
console.log();
let pergunta5 = prompt('Conseguiu aprovação dos caçadores mostrando que a Nezuko era diferente? [S/N] ').toUpperCase();

while (pergunta5!= 'S'&& pergunta5!= 'N'){
    console.log('Resposta inválida. Entre com S ou N.')
    pergunta5=prompt('Conseguiu aprovação dos  caçadores mostrando que a Nezuko  era diferente? [[S/N]] ').toUpperCase()

}console.log();
if(pergunta5 == 'S') {
  console.log();
  console.log('Ótimo! Agora tenho aprovação para seguir meu caminho com Nezuko em busca de uma cura sem que meus companheiros tente acabar conosco! ' );
  respostaS++
} else{
  console.log();
  console.log ('Não posso aceitar isso! Nezuko nunca feriu um ser humano, em muitas missões ela me ajudou acabando com adversários que queriam machucar pessoas!');
}
console.log();
console.log('----------- FIM DA PRIMEIRA  ETAPA  -------------');
console.log();
//---------------------------------------------------------------------------------------------------------------------------------------------------
if(respostaS == 0){
  console.log('Você não conseguiu salvar a sua irmã e muito menos tentou, sofrerá o resto dos seus dias por não ter feito nada...');
} else if (respostaS == 1 || respostaS ==2){
  console.log('Você foi fraco, não teve forças suficiente para ser um excelente caçador mas continua atrás de seus objetivos. ');
} else if(respostaS == 3 ){
  console.log('Você até tentou fazer algo por Nezuko, mas falhou em coisas importantes para os dois.');
} else if(respostaS == 4 ){
  console.log('Você conseguiu fazer quase tudo por Nezuko, mas ainda há muito o que fazer, não desista! . ');
} else if(respostaS == 5 ){
  console.log('Você conseguiu passar por todos os obstáculos e está cada vez mais perto de achar uma cura para sua irmã! Nezuko está orgulhosa de você! ')
}
console.log();
console.log('-----------  CONTINUA -----------')