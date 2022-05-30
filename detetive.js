const prompt = require ("prompt-sync")();
console.clear();
let respostaS=0;

console.log();
console.log(`Você é uma das pessoas que estava presente numa cena de crime. Esse é um procedimento padrão para descartar suspeitos. Você precisa responder apenas 5 perguntas com S ou N.

Vamos começar...
`)

let pergunta1=prompt('Você estava aqui na hora do crime? [S/N] ').toUpperCase();
while (pergunta1!= 'S'&& pergunta1!= 'N'){
    console.log('Resposta inválida. Entre com S ou N.')
    pergunta1=prompt('Você estava aqui na hora do crime? [S/N] ').toUpperCase();
}
if(pergunta1 == 'S') {
    console.log();
      console.log('Humm, entendi.' );
      respostaS++
    } else{
      console.log();
      console.log ('Humm, ok.');
    }
    console.log();
let pergunta2=prompt('Você viu ou sabe quem fez isso? [S/N]').toUpperCase();
while (pergunta2!= 'S'&& pergunta2!= 'N'){
    console.log('Resposta inválida. Entre com S ou N.')
    pergunta2=prompt('Você viu ou sabe quem fez isso? [S/N] ').toUpperCase();
}
    if(pergunta2 == 'S') {
        console.log();
          console.log('Humm, entendi.' );
          respostaS++
        } else{
          console.log();
          console.log ('Humm, ok.');
        }
        console.log();
let pergunta3 = prompt('Você sabe como aconteceu? [S/N]').toUpperCase();
while(pergunta3!= 'S' && pergunta3 != 'N'){
    console.log('Resposta inválida. Entre com S ou N.')
    pergunta3 = prompt('Você sabe como aconteceu? [S/N]').toUpperCase();

}
if(pergunta3 == 'S'){
    console.log();
    console.log('Humm, entendo.');
    respostaS++
}else{
    console.log();
    console.log('Hmmm, ok.');
}
let pergunta4 = prompt('Você já viu a vitima antes? [S/N]').toUpperCase();
while(pergunta4!='S' && pergunta4!='N'){
    console.log('Resposta inválida. Entre com S ou N.')
    pergunta4 = prompt('Você já viu a vitima antes? [S/N]').toUpperCase();
}
if (pergunta4 == 'S'){
    console.log();
    console.log('Humm, entendo.');
respostaS++
}else{
    console.log();
    console.log('Hummm, ok.');
}
let pergunta5 = prompt('Você está envolvido? [S/N]').toUpperCase();
while(pergunta5!='S' && pergunta5!='N'){
    console.log('Resposta inválida. Entre com S ou N.')
    pergunta5 = prompt('Você está envolvido? [S/N]').toUpperCase();
}
if (pergunta5 == 'S'){
    console.log();
    console.log('Humm, entendo.');
respostaS++
}else{
    console.log();
    console.log('Hummm, ok.');
}
console.log(`
COM BASE NA ENTREVISTA...
`);

if (respostaS <= 2){

    console.log(`
    Você é INOCENTE.`);
}
if (respostaS == 3){
    console.log(`
    Você é um SUSPEITO.`);
}
if (respostaS >= 4 ){
    console.log(`
    Você é CULPADO. `);
}

