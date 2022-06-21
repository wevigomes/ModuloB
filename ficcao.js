const prompt = require ("prompt-sync")()
console.clear()
function tutorial (){
    console.log(`
 ________________________________________________________
|                 SING SIMULATOR                         |
|________________________________________________________|

OLÁ, SEJA BEM-VINDO A SIMULAÇÃO DE CANTOR DE SUCESSO.
NESSE GAME VOCÊ PRECISA SAIR DO ABSOLUTAMENTE ZERO, APENAS COM A SUA PAIXÃO PARA
CONSEGUIR CHEGAR AO STATUS DE ESTRELA MUNDIAL!

AS FUNÇÕES DEPENDEM PRINCIPALMENTE DA SUA ENERGIA PARA SEREM REALIZADAS E CADA
UMA TEM UM PESO DIFERENTE, PODENDO TRAZER BENEFICIOS OU MALEFICIOS.

AO FINAL DE CADA AÇÃO IRÁ SURGIR O STATUS DE TEMPO E DO PERSONAGEM.

ATENÇÃO: EM ALGUM MOMENTO DO GAME PODEM SURGIR EVENTOS ALEATÓRIOS, FAÇA ESCOLHAS SÁBIAS. 

PRESSIONE [ENTER] PARA CONTINUAR `)
prompt()
console.clear()
console.log(`
Vivendo em uma área remota de uma ilha você acorda todos os dias com um sonho:
SER UMA CANTORA MUITO FAMOSA.`);
prompt('[ ENTER ] ')
console.log(`
As coisas são muito dificeis para a sua mãe aqui, você percebe isso quando observa
ela se maquiando todos os dias de madrugada para trabalhar no hotel... `);
prompt('[ ENTER ] ')
console.log(`
Você promete a si mesma que irá conseguir isso e ajudar todas as pessoas que 
precisam. Você sente essa vontade ardente em seu coração de sempre ajudar os outros...`);
prompt(' [ ENTER ] ')
console.log(`
Você fica responsável de cuidar dos seus irmãos todos os dias enquanto sua mãe trabalha e 
geralmente os leva para brincar na praia após o almoço, já que eles se distraem e você pode
estudar mais e praticar canto...`);
prompt('[ ENTER ] ')
console.log(`
Um dia você está na praia, cantando para as rochas quando de repente ouve uma voz atrás de você :

"Hey, bela voz! Pena que seu público não pode te aplaudir :D "

Você se vira e vê um homem e diz:
[1] QUEM É VOCÊ ? 
`);
let choice = +prompt();
while(choice != 1){
    console.clear()
    console.log(`
Um dia você está na praia, cantando para as rochas quando de repente ouve uma voz atrás de você :
    
"Hey, bela voz! Pena que seu público não pode te aplaudir :D "
    
Você se vira e vê um homem e diz:
[1] QUEM É VOCÊ ? 
    `)
choice = +prompt();;
    
}
if(choice == 1){ console.clear()
    console.log(`
Você: " QUEM É VOCÊ ?"

Homem: "OLÁ, ME CHAMO MARK NOAH. SOU PRODUTOR EM NOVA YORK."`)
console.log(`
"Um produtor aqui na ilha! Deve ser meu dia de sorte!" Você pensa.

[1] PERGUNTAR O QUE ELE ESTÁ FAZENDO NA ILHA  `)
let escolha = +prompt()
while(escolha != 1){console.clear()
    console.log(`
Você: " QUEM É VOCÊ ?"

Homem: "OLÁ, ME CHAMO MARK NOAH. SOU PRODUTOR EM NOVA YORK."`)
console.log(`
"Um produtor aqui na ilha! Deve ser meu dia de sorte!" Você pensa.

[1] PERGUNTAR O QUE ELE ESTÁ FAZENDO NA ILHA  `)
escolha = +prompt()

}
if( escolha == 1){ console.clear()
    console.log(`
Você: " E O QUE O TRÁS A ILHA? `);
syncDelay(1000)
console.log(`
Mark: " ME DISSERAM QUE NOVOS TALENTOS ESTAVAM SURGINDO POR AQUI..."`);
syncDelay(1000)
console.log(`
Mark: "HAHA ESTOU BRINCANDO, EU AMO A TRANQUILIDADE DAQUI."

(VOCÊ RI E DIZ QUE A ILHA É UMA FLOR REBELDE NO MEIO DO OCEANO... )
`);
prompt("[ENTER]")
console.log(`
Mark: "HEY, VOCÊ GOSTARIA DE VIR COMIGO E AÍ CONVERSAMOS MAIS SOBRE MÚSICA?"

[1] ACEITAR CONVITE [2] RECUSAR E IR PROCURAR SEUS IRMÃOS `);
let escolha1 = +prompt()
while(escolha1!=1 && escolha1 != 2){ 
    console.clear()
    console.log(`
Mark: "HEY, VOCÊ GOSTARIA DE VIR COMIGO E AÍ CONVERSAMOS MAIS SOBRE MÚSICA?"

[1] ACEITAR CONVITE [2] RECUSAR E IR PROCURAR SEUS IRMÃOS `);
escolha1 = +prompt()
}
if(escolha1 == 1){
    console.clear()
    console.log(`
Você: "CLARO, VOU SÓ AVISAR MEUS IRMÃOS E JÁ VAMOS."

Mark: "PERFEITO, TE ESPERO AQUI"`)
prompt(' [ ENTER ]')
console.log(`
( VOCÊS CONVERSAM BASTANTE E MARK PEDE QUE VOCÊ CANTE MAIS UM POUCO PARA ELE)
( VOCÊ CANTA UMA MÚSICA E MARK FICA ENCANTADO COM O SEU POTENCIAL... )`);
syncDelay(2000)
console.log(`
Mark: " EU NÃO TENHO PALAVRAS PRA DESCREVER O QUE VOCÊ CAUSA! CLARO QUE PRECISA SER 
TRABALHADO, MAS VOCÊ TEM MUITO POTENCIAL...`);
prompt('[ ENTER ] ')
console.log(` VOCÊ TERIA INTERESSE EM IR PRA NOVA YORK COMIGO E TENTAR CHEGAR AO ESTRELATO ? 
[1] ACEITAR PROPOSTA [2] DIZER QUE VAI CONSULTAR A SUA MÃE "`);
let escolha2 = +prompt()
while(escolha2!=1 && escolha2 !=2){
    console.clear();
    console.log(` VOCÊ TERIA INTERESSE EM IR PRA NOVA YORK COMIGO E TENTAR CHEGAR AO ESTRELATO ? 
[1] ACEITAR PROPOSTA [2] DIZER QUE VAI CONSULTAR A SUA MÃE "`);

escolha2 = +prompt()
}
if(escolha2 == 1){ console.clear()
    console.log(`
Você: " CLARO QUE SIMMM! ESSE É O MEU MAIOR SONHO !"`)
syncDelay(1500)
console.log(`
Mark: " CERTO! ENTÃO ME DÁ SEU TELEFONE E TE LIGO NOS PRÓXIMOS DIAS. VOU ARRUMAR UM LOFT E QUANDO
TUDO ESTIVER CERTO VOCÊ INICIA A SUA JORNADA ! "

(VOCÊ PASSA SEU CONTATO, AGRADECE E VAI PARA CASA FELIZ DA VIDA COM SEUS IRMÃOS CONTAR PARA SUA MÃE...)
(MARK FEZ UMA GRAVAÇÃO ENQUANTO VOCÊ CANTAVA E MANDOU PARA O CEO DA GRAVADORA)`)
prompt('[ ENTER ]')
console.clear()
console.log(` [ DIAS DEPOIS ]
[TELEFONE TOCANDO...]
Você: "ALÔ?"
Mark: "E AÍ, ROBYN, MINHA FLOR REBELDE! JÁ FEZ AS MALAS?
Você: " AI MEU DEEEEUS! VOCÊ CONSEGUIU, MARK?
Mark: " ME DIZ O QUE SEU PRODUTOR NÃO CONSEGUE?  JÁ ALUGUEI O LOFT, ONDE VOCÊ VAI PODER ESTUDAR 
E MELHORAR SUAS HABILIDADES. LEMBRE-SE QUE VOCÊ TEM TALENTO, MAS TUDO DEPENDE DA FORMA QUE VOCÊ VAI
ADMINISTRAR AS COISAS. TUDO PRECISA ESTAR EM EQUILIBRIO" `)
prompt('[ ENTER ]')
console.log(`
A GRAVADORA AMOU A SUA VOZ, MAS VOCÊ PRECISA AFLORAR MAIS SEUS TALENTOS PARA COMEÇAR A GRAVAR ÁLBUNS.
PARA FAZER SHOWS É A MESMA COISA, MAS ENQUANTO ISSO EVENTOS E PUBLICIDADE FARÃO BEM PARA SUA FAMA E
VOCÊ GANHARÁ UM POUCO DE DINHEIRO COM ISSO. VOCÊ VIAJA AMANHÃ, TE VEJO NO AEROPORTO!`)
prompt('[ ENTER ] ')
syncDelay(1000)
console.log(`
                 [ DIA SEGUINTE ]`)
syncDelay(1000)
console.log(`
[ INDO PARA O AEROPORTO...]`);
syncDelay(1000)
console.log(`
[ EMBARCANDO NO VOO...]`);
syncDelay(2000)
console.log(`
[ CHEGANDO EM NOVA YORK LOL ]`);
prompt('[ ENTER ]')
console.log(`
A PARTIR DE AGORA VOCÊ PODERÁ DECIDIR O QUE FAZER PARA CHEGAR AO OBJETIVO DE SE TORNAR UMA CANTORA NÍVEL 5
E SE TORNAR UMA DAS MAIORES FILANTROPAS DO MUNDO!`);

}
if (escolha2 == 2) { console.clear()
    console.log(`
Você: " EU PRECISO CONSULTAR A MINHA MÃE PRIMEIRO. "`)
syncDelay(1000);
console.log(`
Mark: " CLARO, SEM PROBLEMAS. ME PASSA SEU TELEFONE E AMANHÃ MESMO EU IREI CONVERSAR COM ELA SOBRE
A SUA IDA PARA NOVA YORK!"

(VOCÊ PASSA SEU CONTATO, AGRADECE E VAI PARA CASA FELIZ DA VIDA COM SEUS IRMÃOS CONTAR PARA SUA MÃE...)
(MARK FEZ UMA GRAVAÇÃO ENQUANTO VOCÊ CANTAVA E MANDOU PARA O CEO DA GRAVADORA)`);
prompt('[ ENTER ]')
console.clear()
console.log('MARK ENCONTRA SUA MÃE E EXPLICA TODOS OS VIÉS DO CONTRATO, ASSIM COMO AGÊNCIAÇÃO E SUA MÃE CONCORDA.');
console.log(` 
[ DIAS DEPOIS ]
[TELEFONE TOCANDO...]
Você: "ALÔ?"
Mark: "E AÍ, ROBYN, MINHA FLOR REBELDE! JÁ FEZ AS MALAS?
Você: " AI MEU DEEEEUS! VOCÊ CONSEGUIU, MARK?
Mark: " ME DIZ O QUE SEU PRODUTOR NÃO CONSEGUE?  JÁ ALUGUEI O LOFT, ONDE VOCÊ VAI PODER ESTUDAR 
E MELHORAR SUAS HABILIDADES. LEMBRE-SE QUE VOCÊ TEM TALENTO, MAS TUDO DEPENDE DA FORMA QUE VOCÊ VAI
ADMINISTRAR AS COISAS. TUDO PRECISA ESTAR EM EQUILIBRIO" `)
prompt('[ ENTER ]')
console.log(`
A GRAVADORA AMOU A SUA VOZ, MAS VOCÊ PRECISA AFLORAR MAIS SEUS TALENTOS PARA COMEÇAR A GRAVAR ÁLBUNS.
PARA FAZER SHOWS É A MESMA COISA, MAS ENQUANTO ISSO EVENTOS E PUBLICIDADE FARÃO BEM PARA SUA FAMA E
VOCÊ GANHARÁ UM POUCO DE DINHEIRO COM ISSO. VOCÊ VIAJA AMANHÃ, TE VEJO NO AEROPORTO!`)
prompt('[ ENTER ] ')
syncDelay(1000)
console.log(`
                 [ DIA SEGUINTE ]`)
syncDelay(1000)
console.log(`
[ INDO PARA O AEROPORTO...]`);
syncDelay(1000)
console.log(`
[ EMBARCANDO NO VOO...]`);
syncDelay(2000)
console.log(`
[ CHEGANDO EM NOVA YORK LOL ]`);
prompt('[ ENTER ]')
console.log(`
A PARTIR DE AGORA VOCÊ PODERÁ DECIDIR O QUE FAZER PARA CHEGAR AO OBJETIVO DE SE TORNAR UMA CANTORA NÍVEL 5
E SE TORNAR UMA DAS MAIORES FILANTROPAS DO MUNDO!`);

    
}

}
if(escolha1 == 2){
    console.clear()
    console.log(`
Você: " RECEIO QUE NÃO POSSO, ESTOU COM MEUS IRMÃOS AQUI..."

Mark: "NÃO TEM PROBLEMA ALGUM, EU PAGO UM SORVETE PARA ELES :D "`)
syncDelay(2000)
console.log(`
( VOCÊ PENSA UM POUCO E CONCORDA... )
( VOCÊS CONVERSAM BASTANTE E MARK PEDE QUE VOCÊ CANTE MAIS UM POUCO PARA ELE)
( VOCÊ CANTA UMA MUSICA PARA ELE E MARK FICA ENCANTADO COM O SEU POTENCIAL)`)
prompt('[ENTER] ')

console.log(`
Mark: " EU NÃO TENHO PALAVRAS PRA DESCREVER O QUE VOCÊ CAUSA! CLARO QUE PRECISA SER 
TRABALHADO, MAS VOCÊ TEM MUITO POTENCIAL...`)
prompt('[ ENTER ] ')

console.log(`
Mark: VOCÊ TERIA INTERESSE EM IR PRA NOVA YORK COMIGO E TENTAR CHEGAR AO ESTRELATO ? 
[1] ACEITAR PROPOSTA [2] DIZER QUE VAI CONSULTAR A SUA MÃE "`);
let escolha2 = +prompt()
while(escolha2!=1 && escolha2 !=2){
        console.clear()
        console.log(`
Mark: VOCÊ TERIA INTERESSE EM IR PRA NOVA YORK COMIGO E TENTAR CHEGAR AO ESTRELATO ? 
[1] ACEITAR PROPOSTA [2] DIZER QUE VAI CONSULTAR A SUA MÃE "`);
 escolha2 = +prompt()
}
if(escolha2 == 1){ console.clear()
    console.log(`
Você: " CLARO QUE SIMMM! ESSE É O MEU MAIOR SONHO !"`)
syncDelay(1500)
console.log(`
Mark: " CERTO! ENTÃO ME DÁ SEU TELEFONE E TE LIGO NOS PRÓXIMOS DIAS. VOU ARRUMAR UM LOFT E QUANDO
TUDO ESTIVER CERTO VOCÊ INICIA A SUA JORNADA ! "

(VOCÊ PASSA SEU CONTATO, AGRADECE E VAI PARA CASA FELIZ DA VIDA COM SEUS IRMÃOS CONTAR PARA SUA MÃE...)
(MARK FEZ UMA GRAVAÇÃO ENQUANTO VOCÊ CANTAVA E MANDOU PARA O CEO DA GRAVADORA)`)
prompt('[ ENTER ]')
console.clear()
console.log(` [ DIAS DEPOIS ]
[TELEFONE TOCANDO...]
Você: "ALÔ?"
Mark: "E AÍ, ROBYN, MINHA FLOR REBELDE! JÁ FEZ AS MALAS?
Você: " AI MEU DEEEEUS! VOCÊ CONSEGUIU, MARK?
Mark: " ME DIZ O QUE SEU PRODUTOR NÃO CONSEGUE?  JÁ ALUGUEI O LOFT, ONDE VOCÊ VAI PODER ESTUDAR 
E MELHORAR SUAS HABILIDADES. LEMBRE-SE QUE VOCÊ TEM TALENTO, MAS TUDO DEPENDE DA FORMA QUE VOCÊ VAI
ADMINISTRAR AS COISAS. TUDO PRECISA ESTAR EM EQUILIBRIO" `)
prompt('[ ENTER ]')
console.log(`
A GRAVADORA AMOU A SUA VOZ, MAS VOCÊ PRECISA AFLORAR MAIS SEUS TALENTOS PARA COMEÇAR A GRAVAR ÁLBUNS.
PARA FAZER SHOWS É A MESMA COISA, MAS ENQUANTO ISSO EVENTOS E PUBLICIDADE FARÃO BEM PARA SUA FAMA E
VOCÊ GANHARÁ UM POUCO DE DINHEIRO COM ISSO. VOCÊ VIAJA AMANHÃ, TE VEJO NO AEROPORTO!`)
prompt('[ ENTER ] ')
console.clear()
console.log(`
[ DIA SEGUINTE...]`);
syncDelay(1000)
console.log(`
[ INDO PARA O AEROPORTO...]`);
syncDelay(1000)
console.log(`
[ EMBARCANDO NO VOO...]`);
syncDelay(2000)
console.log(`
[ CHEGANDO EM NOVA YORK LOL ]`);
prompt('[ ENTER ]')
console.log(`
A PARTIR DE AGORA VOCÊ PODERÁ DECIDIR O QUE FAZER PARA CHEGAR AO OBJETIVO DE SE TORNAR UMA CANTORA NÍVEL 5
E SE TORNAR UMA DAS MAIORES FILANTROPAS DO MUNDO!`);

}
if (escolha2 == 2) { console.clear()
    console.log(`
Você: " EU PRECISO CONSULTAR A MINHA MÃE PRIMEIRO. "`)
syncDelay(1000);
console.log(`
Mark: " CLARO, SEM PROBLEMAS. ME PASSA SEU TELEFONE E AMANHÃ MESMO EU IREI CONVERSAR COM ELA SOBRE
A SUA IDA PARA NOVA YORK!"

(VOCÊ PASSA SEU CONTATO, AGRADECE E VAI PARA CASA FELIZ DA VIDA COM SEUS IRMÃOS CONTAR PARA SUA MÃE...)
(MARK FEZ UMA GRAVAÇÃO ENQUANTO VOCÊ CANTAVA E MANDOU PARA O CEO DA GRAVADORA)`);
prompt('[ ENTER ] ')
console.log(`
NO DIA SEGUINTE MARK FALA COM A SUA MÃE, EXPLICA TODOS OS VIÉS DO CONTRATO E ELA CONCORDA, JÁ QUE ESSE 
É O SEU SONHO. AGORA SÓ AGUARDAR O MARK LIGAR E TUDO CERTO PARA SUA IDA! `);    
prompt('[ ENTER ]')
console.clear()
console.log(` [ DIAS DEPOIS ]
[TELEFONE TOCANDO...]
Você: "ALÔ?"
Mark: "E AÍ, ROBYN, MINHA FLOR REBELDE! JÁ FEZ AS MALAS?
Você: " AI MEU DEEEEUS! VOCÊ CONSEGUIU, MARK?
Mark: " ME DIZ O QUE SEU PRODUTOR NÃO CONSEGUE?  JÁ ALUGUEI O LOFT, ONDE VOCÊ VAI PODER ESTUDAR 
E MELHORAR SUAS HABILIDADES. LEMBRE-SE QUE VOCÊ TEM TALENTO, MAS TUDO DEPENDE DA FORMA QUE VOCÊ VAI
ADMINISTRAR AS COISAS. TUDO PRECISA ESTAR EM EQUILIBRIO" `)
prompt('[ ENTER ]')
console.log(`
A GRAVADORA AMOU A SUA VOZ, MAS VOCÊ PRECISA AFLORAR MAIS SEUS TALENTOS PARA COMEÇAR A GRAVAR ÁLBUNS.
PARA FAZER SHOWS É A MESMA COISA, MAS ENQUANTO ISSO EVENTOS E PUBLICIDADE FARÃO BEM PARA SUA FAMA E
VOCÊ GANHARÁ UM POUCO DE DINHEIRO COM ISSO. VOCÊ VIAJA AMANHÃ, TE VEJO NO AEROPORTO!`)
prompt('[ ENTER ] ')
syncDelay(1000)
console.log(`
[ INDO PARA O AEROPORTO...]`);
syncDelay(1000)
console.log(`
[ EMBARCANDO NO VOO...]`);
syncDelay(2000)
console.log(`
[ CHEGANDO EM NOVA YORK LOL ]`)

prompt('[ ENTER ]')
console.log(`
A PARTIR DE AGORA VOCÊ PODERÁ DECIDIR O QUE FAZER PARA CHEGAR AO OBJETIVO DE SE TORNAR UMA CANTORA NÍVEL 5
E SE TORNAR UMA DAS MAIORES FILANTROPAS DO MUNDO!`);
}

}
} }


}
function syncDelay (milliseconds){
   var start = new Date().getTime();
   var end = 0;
   while((end-start) < milliseconds){
    end = new Date().getTime();
   }
}
let albunsStudio = []
var convite = false;
const tempo = {
    mes : 1,
    dia: 1,
    hora: 6,
    min: 0,
    resetMin: function(a){
        this.min += a
       while(this.min >=60){
        this.min -= 60
        this.hora +=1
       }
       while(this.hora >=24){
        this.hora -=24
        this.dia +=1
       }
       while(this.dia >=30){
        this.dia -=30
        this.mes +=1 
       }
    },
    checarData: function(){
        console.log(`Mês: ${this.mes} Dia: ${this.dia}             `)
        console.log(`Hora: ${this.hora}h ${this.min}min        
---------------------------------`)
    }
}
const personagem = {
    energia : 100,
    patrimonio : 2000,
    expTecnicaVocal : 0,
    expMelodia : 0,
    carisma : 0,
    nivelDeCanto : 1,
    statusSocial : 10,
    sexAppeal : 0,
    filantropia : 0,
    album : 0,
    albuns(){      
        if(this.album <=8 ){
            this.album+=1
        } 
    },

    ganharEnergia(z){
        if(this.energia < 100){
            this.energia += z
        }//VERIFICAR SE ESTAR FUNCIONANDO
    },

    energiamax (){
        if(this.energia >= 150 ){
            this.energia = 150
        }
    }, 
    statusSocialMax(){
        if(this.statusSocial >= 150){
            this.statusSocial = 150
        }
    },
    ganharXp: function(){
        this.expTecnicaVocal += 25
        if (this.expTecnicaVocal >= 100){
            this.expTecnicaVocal -= 100
            this.nivelDeCanto += 1
        }

    },

    adcExp: function(){
        this.expMelodia += 10
        if(this.expMelodia >= 100){
            this.expMelodia == 100
        }
    },
    gastarEnergia: function(a) {
        if (a == 'cantar') {if (personagem.energia >= 20){personagem.energia -= 20;return true} else {return false}}
        if(a=='melodia'){if(personagem.energia >=15){personagem.energia -=15;return true} else {return false}}
        if( a== 'espelho'){if(personagem.energia >=10){personagem.energia -=10;return true} else {return false}}
        if(a == 'mudar cabelo'){if(this.energia >=10){this.energia -=10;return true} else{return false}}
        if(a == 'academia'){if(this.energia >= 20){this.energia -= 20;return true} else{return false}}
        if(a == 'maquiagem'){if(this.energia >= 10){this.energia -=10;return true} else{return false}}
        if(a == 'publicidade'){if(this.energia >= 20){this.energia -=20 ; return true} else{return false}}
        if(a == 'evento'){if(this.energia >=20){this.energia -=20; return true} else{ return false}}
        if(a == 'fazer show'){if(this.energia >=40){this.energia -=40; return true} else{return false}}
        if(a == 'gravar album'){if(this.energia >=50){this.energia -=50; return true} else {return false}}
        if(a == 'festival'){if(this.energia >=40){this.energia -= 40; return true} else{return false}}
        if(a == 'show beneficente'){if(this.energia >=40){this.energia -=40; return true} else{return false}}
        if(a == 'viagem'){if(this.energia >= 40){this.energia -= 40; return true} else{return false}}
        if(a == 'humanitarias'){if(this.energia >= 20){this.energia-=20;return true} else{return false}}
     },
     checarStatus(){
        console.log(`   [STATUS ATUAL DO PERSONAGEM ] 

ENERGIA: ${personagem.energia}
CARISMA: ${personagem.carisma}
SEX APPEAL: ${personagem.sexAppeal}
FAMA: ${personagem.statusSocial}
NÍVEL DE CANTO: ${personagem.nivelDeCanto}  
XP DE TÉCNICA: ${personagem.expTecnicaVocal}
XP DE MELODIA: ${personagem.expMelodia}
FILANTROPIA: ${personagem.filantropia} 
PATRIMÔNIO: ${personagem.patrimonio}
ÁLBUNS:${personagem.album}
LANÇADOS: ${albunsStudio}
`)
     }
}
const nivelCanto ={

    estudarTecnica(){ 
        if(personagem.gastarEnergia('cantar') == true) {
            console.clear()
            console.log (`
            [ AQUECENDO CORDAS VOCAIS... ]`)
            syncDelay(1000)
            console.log(`
            [ ESTUDANDO ESCALAS... ]`);
            syncDelay(1000)
            console.log(`
            [ ACHANDO O TOM... ]`);

        personagem.ganharXp()
        tempo.resetMin(240)
        syncDelay(2000)
        console.log(` 
Sua técnica vocal foi para ${personagem.expTecnicaVocal} e seu nível de canto é ${personagem.nivelDeCanto}.

---------------------------------`)
tempo.checarData()
personagem.checarStatus()
    ;
          } else {
              console.log(" SEM ENERGIA SUFICIENTE. VÁ ENCONTRAR UMA FORMA DE RESTAURAR SUA VITALIDADE.")
          }

        
        
    },

    praticarMelodia(){
        if(personagem.gastarEnergia('melodia') == true){
            console.clear()
            console.log(`
            [ AFINANDO COM DIAPASÃO ... ] `)
            syncDelay(1000)
            console.log(`
            [ TREINANDO MELODIAS ... ]`);
            syncDelay(1000)
            console.log(`
            [ARRANHANDO NO VIOLÃO ... ]`);
        personagem.ganharXp()
        personagem.adcExp()
        tempo.resetMin(180)
        syncDelay(2000)
        console.log(` 
Sua experiência melódica foi para ${personagem.expMelodia} e seu nível de canto é ${personagem.nivelDeCanto}.

---------------------------------`)
tempo.checarData()
personagem.checarStatus()

        } else {
            console.clear()
            console.log('SEM ENERGIA SUFICIENTE. VÁ FAZER ALGO PARA RESTAURAR SUA VITALIDADE.')
        }
    
    },
    praticarNoEspelho(){
        if(personagem.gastarEnergia('espelho') == true){
            console.clear()
        console.log(`
        [ ENCONTRANDO INSPIRAÇÃO... ]`)
        syncDelay(1000)
        console.log(`
        [ PRATICANDO DISCURSO... ]`);
        syncDelay(1000)
        console.log(`
        [ FAZENDO CARAS E BOCAS ENQUANTO CANTA... ]`);
        personagem.carisma +=5
        tempo.resetMin(60)
        syncDelay(2000)
        console.log(` 
        O seu carisma aumentou para ${personagem.carisma}.
---------------------------------------`)
tempo.checarData()
personagem.checarStatus()
}

        else {
            console.clear()
            console.log('SEM ENERGIA SUFICIENTE. VÁ FAZER ALGO PARA RESTAURAR SUA VITALIDADE.')
        }
    }

}
const upSexAppeal = {
   mudarCabelo(){
        if(personagem.gastarEnergia('mudar cabelo') == true){
            console.clear()
            console.log(`
            [ PREPARANDO PRODUTOS ... ]`)
            syncDelay(1000)
            console.log(`
            [ FAZENDO TRANÇA ... ]`);
            syncDelay(1000)
            console.log(`
            [ COLOCANDO LACE ... ]`);
        personagem.sexAppeal +=10
        tempo.resetMin(60)
    
        syncDelay(2000)
        console.log(` 

Seu sex appeal aumentou para ${personagem.sexAppeal}.

---------------------------------`);
tempo.checarData();
personagem.checarStatus();  
} else{
        console.clear()
        console.log('SEM ENERGIA SUFICIENTE. VÁ FAZER ALGO PARA RESTAURAR SUA VITALIDADE.')
       }
    },
    academia(){
        if(personagem.gastarEnergia('academia') == true){
        console.clear()
        console.log(`
        [ INDO PARA A ACADEMIA... ]`)
        syncDelay(1000)
        console.log(`
        [ FAZENDO AQUECIMENTO... ]`);
        syncDelay(1000)
        console.log(`
        [ LEVANTANDO PESOS... ]`);
        personagem.sexAppeal += 15
        tempo.resetMin(180)
        syncDelay(2000)

        console.log(` 
Cuidar do corpo nunca fez mal :D.

---------------------------------`)
tempo.checarData()
personagem.checarStatus()
    }
     else{
        console.clear()
        console.log('SEM ENERGIA SUFICIENTE. VÁ FAZER ALGO PARA RESTAURAR SUA VITALIDADE.')
    } 
},
    maquiagem(){
        if(personagem.gastarEnergia('maquiagem') == true){
        console.clear()
        console.log(`
        [ SEPARANDO COSMÉTICOS...]`)
        syncDelay(1000)
        console.log(`
        [ CONSULTANDO PALETA... ]`);
        syncDelay(`
        [ FINALIZANDO... ]`)
        personagem.sexAppeal += 10
        tempo.resetMin(30) 
    syncDelay(2000)
    console.log(` 
Seu sex appeal foi para ${personagem.sexAppeal} .

---------------------------------`)
tempo.checarData()
personagem.checarStatus()
        }
        else{
            console.clear()
        console.log('SEM ENERGIA SUFICIENTE. VÁ FAZER ALGO PARA RESTAURAR SUA VITALIDADE.')
        }
    }
}

const restaurarEnergia = {
    cafe(){
        console.clear()
        console.log(`
        [ MOENDO CAFÉ ] ...`)
        syncDelay(1000)
        console.log(`
        [ DANDO START NA CAFETEIRA ]...`)
        syncDelay(1000)
        console.log(`
        [ TOMANDO EM GOLADAS ] ... [ GLUB , GLUB, GLUB ]`)
        syncDelay(1500)
        personagem.ganharEnergia(20)
        tempo.resetMin (15)
        personagem.dinheiro -= 10
        personagem.energiamax()
        personagem.sexAppeal -=5
        personagem.statusSocial -= 5
        console.log(` 
-----------------------------------------------------------------
APÓS ESSE CAFÉ FORTE SUA ENERGIA AGORA É ${personagem.energia}
---------------------------------`)
   tempo.checarData()
   personagem.checarStatus()
},
    soneca(){
        console.clear()
        console.log(`
        [ FECHANDO OS OLHOS... ] `)
        syncDelay(1000)
        console.log(`
        [ SONHANDO COM O ESTRELATO... ] `)
        syncDelay(1000)
        console.log(`
        [ BABANDO NO TRAVESSEIRO... ] `)
        syncDelay(1500)
        personagem.energia += 50
        tempo.resetMin(90) 
        personagem.energiamax()
        personagem.sexAppeal -=5
    console.log(`
------------------------------------------
APÓS ESSA SONECA REVIGORANTE ME SINTO ÓTIMA! :D 
---------------------------------`)
tempo.checarData()
personagem.checarStatus()},
    energetico(){
        console.clear()
        console.log(`
        [ ABRINDO LATA... ]`)
        syncDelay(1000)
        console.log(`
        [ TOMANDO EM GOLADAS... ]`)
        syncDelay(1500)
        personagem.energia += 40
        tempo.resetMin(5)
        personagem.dinheiro -= 15
        personagem.energiamax()
        personagem.sexAppeal -= 15
        personagem.statusSocial -= 15
        console.log(`
--------------------------------
Me sinto como uma botija, com todo o gás! O.o 
--------------------------------`)
tempo.checarData()
personagem.checarStatus()
    },
    banho(){
        console.clear()
        console.log(`
        [ INDO PARA O BANHO... ]`)
        syncDelay(1000)
        console.log(`
        [ CANTANDO NO CHUVEIRO... ]`)
        syncDelay(1000)
        console.log(`
        [ RELAXANDO...]`);
        syncDelay(1500);
        personagem.energia =+30
        tempo.resetMin(15)
        personagem.energiamax
        personagem.sexAppeal += 15
        personagem.expTecnicaVocal +=10
    console.log(`
----------------------------------------------------------

NADA COMO UM BOM BANHO PARA RESTAURAR AS ENERGIAS :D`)
tempo.checarData()
personagem.checarStatus();}
}
const subirStatusSocial = {
    
    publicidade(){
        if(personagem.gastarEnergia('publicidade') == true){
            let num1 = Math.floor(4 * Math.random());
            let num2 = Math.floor(4 * Math.random());
            console.clear();
            console.log(`
            [ TIRANDO FOTOS ... ]`)
            syncDelay(1000)
            console.log(`
            [ GRAVANDO PROPAGANDAS ... ]`);
            syncDelay(1000)
            console.log(`
            [ POSTANDO NAS REDES SOCIAIS ... ]`);
        personagem.statusSocial += 5
        personagem.patrimonio +=500
        tempo.resetMin(240)
        syncDelay(2000)
        console.log(`
-------------------------------------------
A SUA FAMA SUBIU PARA ${personagem.statusSocial} E VOCÊ GANHOU $500.
        `)
    tempo.checarData()
personagem.checarStatus()
if (num1 == num2){
    personagem.statusSocial -=15
    personagem.patrimonio -=1500
    console.log(`------------------   EVENTO ALEATORIO ----------------
    VOCÈ FOI TRABALHAR EM UM PÉSSIMO MOMENTO E NÃO FOI PRODUTIVA. 
    SUA FAMA FOI PARA ${personagem.statusSocial} E VOCÊ PRECISOU GASTAR $1500 PARA SEU NOME SAIR DOS TABLOIDES. `);
personagem.checarStatus()}}
        else{

        console.clear()
        console.log('SEM ENERGIA SUFICIENTE. VÁ FAZER ALGO PARA RESTAURAR SUA VITALIDADE.')
        }
    
    },
    eventos(){
        if(personagem.gastarEnergia('evento') == true){
            let num1 = Math.floor(5 * Math.random());
            let num2 = Math.floor(5 * Math.random());
            console.clear();
            console.log(`
            [ POSANDO PARA FOTOS... ]`);
            syncDelay(1000)
            console.log(`
            [CLICK] [CLICK] [CLICK]`)
            syncDelay(1000)
            console.log(`
            [ CONVERSANDO COM CONVIDADOS... ]`);
        personagem.carisma += 5
        personagem.statusSocial += 8
        personagem.patrimonio += 1000
        tempo.resetMin(180)
        syncDelay(2000)
        console.log(`
A SUA FAMA SUBIU PARA ${personagem.statusSocial}, SEU CARISMA É ${personagem.carisma}, E VOCÊ GANHOU $1000.
---------------------------------------------------------------------------------------`)
tempo.checarData()
personagem.checarStatus()
if (num1==num2) {
    personagem.patrimonio +=10000
    console.log(`
--------------------- EVENTO ALEATÓRIO --------------------

 OS PRODUTORES DO EVENTO FICARAM ENCANTADOS E LHE APRESENTARAM UM DESIGNER FAMOSO QUE OFERECEU UM CONTRATO.
 NOVAS JORNADAS A CAMINHO... UMA PARTE JÁ ESTÁ NO SEU PATRIMÔNIO.  `);
    
}
personagem.checarStatus();
        // CONVITE ALEATORIO PARA ATIVAR COACHELLA OU RIR
    } else{
        console.clear()
        console.log('SEM ENERGIA SUFICIENTE. VÁ FAZER ALGO PARA RESTAURAR SUA VITALIDADE.')
    }
},
    fazerShow(){
         if(personagem.nivelDeCanto >=3){
            if (personagem.gastarEnergia('fazer show') == true) {
            let num1 = Math.floor(5 * Math.random());
            let num2 = Math.floor(5 * Math.random());
            console.clear()
            console.log(`
            [ PASSANDO SOM... ] `)
            syncDelay(1000)
            console.log(`
            [ PREPARO NO BACKSTAGE... ]`);
            syncDelay(1000)
            console.log(`
            [ SOLTANDO O GOGÓ NO PALCO... ]`);
            syncDelay(1500)
        personagem.statusSocial += 15
        personagem.patrimonio +=5000
        tempo.resetMin(180)
        //APENAS NO LVL 3 DE NIVEL DE CANTO
        console.log();
        console.log(` A SUA FAMA FOI PARA ${personagem.statusSocial} E VOCÊ GANHOU $5000 PELO SHOW.
-------------------------------------------------------------------------------------`)
tempo.checarData();
personagem.checarStatus()
if(num1==num2){
    personagem.statusSocial +=15
    personagem.carisma +=30
    personagem.patrimonio +=20000
    convite = true
    //CRIAR OPÇAO FESTIVAL NO MENU PRINCIPAL ONDE SÓ É POSSIVEL SE EVENTO ALEATORIO VIRAR TRUE
    console.log(`------------------- EVENTO ALEATÓRIO -------------------

    APÓS UM SHOW INCRÍVEL VOCÊ FOI CONVIDADA PARA CANTAR EM UM FESTIVAL MUNDIAL! VÁ AGORA MESMO, FESTIVAL DESBLOQUEADO!
     `);
}
} else { 
        console.log('SEM ENERGIA SUFICIENTE. VÁ FAZER ALGO PARA RESTAURAR SUA VITALIDADE.')
    } } else {
        console.log('VOCÊ NÃO TEM PERMISSÃO PARA FAZER ISSO! VÁ ESTUDAR MAIS E ATINJA NIVEL 3...')} 
    } ,
    gravarAlbum(){ 
        if(personagem.gastarEnergia('gravar album') == true){
        if(personagem.nivelDeCanto >= 3){
            if(personagem.album < 8){
            personagem.statusSocial += 20
        personagem.patrimonio +=10000        
        personagem.carisma -=20
        personagem.sexAppeal -=20
        personagem.energia == 0
        personagem.patrimonio -= 2000
        tempo.resetMin(7200)
        //push do album 
        console.clear()
        console.log(`
        [ AQUECENDO NO STUDIO... ] `);
        syncDelay(1000)
        console.log(`
        [ GRAVANDO DEMO... ]`);
        syncDelay(1500)
        console.log(`
        [ REGRAVANDO... ]`);
        syncDelay (1500)
        console.log(`
        [ADICIONANDO MELODIA ... ]`);
        syncDelay (1000)
        personagem.albuns()

        if(personagem.album == 1){ albunsStudio.push('Music of the Sun')}
        else if(personagem.album == 2){ albunsStudio.push(' Pon de Replay')}
        else if(personagem.album == 3){ albunsStudio.push(' Good Girl Gone Bad')}
        else if(personagem.album == 4){ albunsStudio.push(' Loud')}
        else if(personagem.album == 5){ albunsStudio.push(' Rated R')}
        else if(personagem.album == 6){ albunsStudio.push(' Talk that talk')}
        else if(personagem.album == 7){ albunsStudio.push(' Unapologetic')}
        else if(personagem.album == 8){ albunsStudio.push(' Anti')}
        console.log(`
        GRAVAR É EXTREMAMENTE TRABALHOSO MAS VALE A PENA NO FINAL ;) 
        STATUS GERAL: 
        ENERGIA: ${personagem.energia}
        CARISMA: ${personagem.carisma}
        SEX APPEAL: ${personagem.sexAppeal}
        STATUS SOCIAL : ${personagem.statusSocial}
        GASTO COM ÁLBUM: $2000
        SALDO: $${personagem.patrimonio}
        ÁLBUNS:${personagem.album}
        LANÇADOS: ${albunsStudio}
----------------------------------------------`)
        tempo.checarData();}  
        
        else{ console.clear()
             console.log(` ESSA PERSONAGEM ATINGIU O STATUS DE EX CANTORA, NENHUM ALBUM SERÁ LANÇADO...
    [ DICA: COMECE A INVESTIR SEU PATRIMÔNIO EM COSMÉTICOS E MODA.] `)}
        } else{ console.log('VOCÊ NÃO TEM PERMISSÃO PARA FAZER ISSO! ATINJA NO MINIMO NIVEL 3 DE CANTO!')}
        
        
        // A PARTIR DO NIVEL 3, FAZER LIMITE DE ALBUNS ATÉ O 8 E AVANÇAR TEMPO E DESCER ALGUNS STATUS
        // COLOCAR UM WHILE Q EMQUANTO PERSONAGEM NIVEL DE CANTO FOR MENOR QUE 4 FAZER SLICE ATÉ O 4 , PERMITIR 8 ALBUNS APENAS A PARTIR DO 4
    //FAZER UM RANDOM PARA ESTOURAR UM DOS NUMEROS DO ARRAY E RECEBER 100000 DOLARES
    } else{
        console.log('SEM ENERGIA SUFICIENTE. VÁ FAZER ALGO PARA RECUPERAR A VITALIDADE')
    }
},
    festival(){
        if(convite == true){
            if(personagem.gastarEnergia('festival')== true){
            console.clear()
            console.log(`
            [ PASSANDO SOM... ]`);
            syncDelay(1000)
            console.log(`
            [ ANSIOSA PARA CANTAR PARA O PÚBLICO... ]`);
            syncDelay(1000)
            console.log(`
            [ ENTRANDO NO PALCO... ]`);
            syncDelay(1000)
            console.log(`
            [ FAZENDO UM SHOW MEMORÁVEL... ]`);
            syncDelay(1500)
            console.log(`
            NUNCA ME ESQUECEREI DESSE DIA! EU AMO TODOS VOCÊS <3`);
            personagem.statusSocial += 25
            personagem.carisma +=15
            personagem.sexAppeal +=20
            personagem.patrimonio += 50000
            tempo.resetMin(240)
            personagem.checarStatus()
            tempo.checarData()
            convite=false }
            else{ console.clear
            console.log('VOCÊ NÃO POSSUI ENERGIA SUFICIENTE.');}
        } else{ console.clear()
        console.log(' VOCÊ NÃO FOI CONVIDADA PARA ISSO!')}
    }
}
const filantropo = {
    showB(){
        if(personagem.patrimonio >= 50000){
            if(personagem.gastarEnergia('show beneficente') == true){
                console.log(`
                [ MONTANDO ESTRUTURA... ]`)
                syncDelay(1000)
                console.log(`
                [ SOLTANDO O GOGÓ NO PALCO... ]`);
                syncDelay(1000)
                console.log(`
                [ FAZENDO DOAÇÃO DO DINHEIRO ARRECADADO... ]`);
                syncDelay(1500)
                console.log(`
                POR MAIS SHOWS ASSIM :) `);
                personagem.patrimonio -=25000
                personagem.filantropia +=10
                personagem.statusSocial +=15
                tempo.resetMin(180)
                personagem.checarStatus()
                tempo.checarData()
            } else{ console.clear()
                console.log('SEM ENERGIA SUFICIENTE. VÁ FAZER ALGO PARA RESTAURAR SUA VITALIDADE.')}
        } else{ console.log('VOCÊ É POBRE, NÃO CONSEGUE AJUDAR NEM A SI MESMO');}
    },
    viagem(){
        if(personagem.patrimonio >= 50000){
            if(personagem.gastarEnergia('viagem') == true){
                console.clear()
                console.log(`
                [ INDO PARA O AEROPORTO... ]`);
                syncDelay(1000)
                console.log(`
                [ CONHECENDO PROJETOS E ONG'S... ]`)
                syncDelay(1000)
                console.log(`
                [ INTERAGINDO COM A COMUNIDADE... ]`);
                syncDelay(1000)
                console.log(`
                [ FAZENDO DOAÇÃO DE $50000... ]`)
                syncDelay(2000)
                console.log(`
VIVER ESSA EXPERIÊNCIA FOI MARAVILHOSA... ME MOTIVA A CONTINUAR O QUE ESTOU FAZENDO ;)
HORA DE VOLTAR ... `);
                personagem.patrimonio -=50000
                personagem.filantropia +=20
                personagem.statusSocial +=10
                tempo.resetMin(8000)
                personagem.sexAppeal -=10
                personagem.checarStatus()
                tempo.checarData()
            } else{ console.clear()
            console.log( 'VOCÊ NÃO POSSUI ENERGIA SUFICIENTE. VÁ AUMENTAR SUA VITALIDADE')}
        } else{ console.clear()
            console.log(' VOCÊ NÃO POSSUI PATRIMÔNIO SUFICIENTE PARA ISSO !!');}

    },
    humanitaria(){
        if(personagem.patrimonio > 20000){
            if(personagem.gastarEnergia('humanitarias') == true){
                let num1 = Math.floor(3 * Math.random());
                let num2 = Math.floor(3 * Math.random());
                console.clear()
                console.log(`
                [ ESTUDANDO SOBRE PROJETOS HUMANITÁRIOS... ]`)
                syncDelay(1000)
                console.log(`
                [ CONVERSANDO COM RESPONSÁVEIS... ]`);
                syncDelay(1000)
                console.log(`
                [ FAZENDO DOAÇÃO DE $20000... ]`);
                syncDelay(2000)
                console.log(`
AJUDAR AS PESSOAS... ISSO É O QUE MOVE O MUNDO. TODAS AS VIDAS IMPORTAM!`);
                personagem.patrimonio -=20000
                personagem.filantropia +=10
                personagem.statusSocial +=10
                // aleatorio
                if(num1 == num2){
                    console.log(`
                    ----------------------- [ EVENTO ALEATORIO ] ------------------------
                    
VOCÊ CAIU NUM CLICKBAIT, VOCÊ PERDEU SEU DINHEIRO E AINDA FOI HACKEADA. SUAS INTIMIDADES CAÍRAM NA INTERNET :O`);
                    personagem.statusSocial -=20
                    personagem.filantropia -=10
                    personagem.carisma -=10
                }
                tempo.resetMin(320)
                personagem.checarStatus()
                tempo.checarData()
            } else{console.clear()
            console.log('VOCÊ NÃO POSSUI ENERGIA SUFICIENTE. AUMENTE A VITALIDADE ANTES DE CONTINUAR.')}
        }   else{ console.clear()
        console.log(' VOCÊ NÃO POSSUI PATRIMÔNIO SUFICIENTE.')}
    }

} 
tutorial();
while(true){
console.log(`
                       [MENU PRINCIPAL] 
                       
O que deseja fazer?

[1] ESTUDAR [2] MELHORAR SEX APPEAL [3] TRABALHAR [4] RESTAURAR ENERGIA [5] FILANTROPIA [0] SAIR`)
let opcao = +prompt()

if (opcao == 1){
    console.log('[1] ESTUDAR TÉCNICA [2] PRATICAR MELODIA [3] PRATICAR NO ESPELHO')
    let escolha = +prompt()
    if (escolha ==1){
        nivelCanto.estudarTecnica()
    } else if (escolha == 2){
        nivelCanto.praticarMelodia()
    } else if(escolha == 3){
        nivelCanto.praticarNoEspelho()
    }
}
if(opcao == 2){
    console.log(` [MENU SEX APPEAL]
    [1] MUDAR CABELO [2] IR A ACADEMIA [3] FAZER MAKE`)
    let escolha = +prompt()
    if (escolha == 1){
       upSexAppeal.mudarCabelo()
    }
    if (escolha == 2){
        upSexAppeal.academia()
    }
    if(escolha ==3){
        upSexAppeal.maquiagem()
    }
}
if(opcao == 3){
    console.clear()
    console.log( ` [ MENU TRABALHAR ]
    [1] PUBLICIDADE [2] EVENTOS [3] FAZER SHOW [4] GRAVAR ALBUM [5] FESTIVAL  `)
    let escolha = +prompt()
    if(escolha == 1){
        subirStatusSocial.publicidade()
    }
    if(escolha == 2){
        subirStatusSocial.eventos()
    }
    if(escolha == 3){
        subirStatusSocial.fazerShow()
    }
    if(escolha == 4){
        subirStatusSocial.gravarAlbum()
    }
    if(escolha == 5){
        subirStatusSocial.festival()
    }
} 
if(opcao == 4){
console.clear()
console.log(`     [MENU RESTAURAR ENERGIA ]
[1] CAFÉ [2] SONECA [3] ENERGETICO [4] TOMAR BANHO  `)
let escolha = +prompt()
if(escolha ==1){
    restaurarEnergia.cafe()
}
if(escolha == 2){
    restaurarEnergia.soneca()
}
if(escolha == 3){
    restaurarEnergia.energetico()
}
if(escolha == 4){
    restaurarEnergia.banho()
}
}
if(opcao == 5){
    console.clear()
    console.log(`       [ MENU FILANTROPIA ] 
[1] FAZER SHOW BENEFICENTE [2] VIAJAR PARA PAÍSES NECESSITADOS [3] AJUDAR CAUSAS HUMANITÁRIAS `);
let escolha =+prompt()
if (escolha == 1){
    filantropo.showB()
}
if (escolha == 2){
    filantropo.viagem()
}
if (escolha == 3){
    filantropo.humanitaria()
}
}
if(opcao == 0){
    process.exit(1)
}
}
