const mensagens = [
    "Quero te desejar um feliz aniversário 🥳🥳, e te dizer algumas coisas",
    "Você é uma pessoa com um coração enorme, que sempre tenta fazer o bem, sempre faz de tudo para tratar todo mundo com respeito independente de qualquer coisa que a pessoa pode já ter feito pra você",
    "Você é uma pessoa que traz uma energia boa pra qualquer ambiente em que você entra, aquele cara que conquista todo mundo só com o carisma",
    "Você é uma pessoa que qualquer um se sente bem só de você estar por perto",
    "Você é uma pessoa que me dá energia pra ver o lado bom da vida",
    "Você é o cara que me inspira a fazer um clutch 1v5 só pra te escutar dar um grito viking pra comemorar",
    "Você é o cara que me inspira a ser uma pessoa melhor do que eu era ontem",
    "Você é o cara que já passou por cada mau bocado, cada situação que a maioria das pessoas desanimariam completamente, e ainda sim nunca deixou de ser você",
    "Você é o cara que todo mundo fala que tem o sorriso bonito KAKAKKAKAK, e eu tenho certeza que não é só pelo sorriso, é pela imagem de uma pessoa gentil e simpática que seu sorriso transmite",
    "Você é o cara que eu tenho certeza absoluta que a ju se orgulha MUITO de ter alguém como você ao lado dela",
    "Você é alguém que eu admiro muito, eu fico impressionado de verdade com a facilidade que você tem de conversar com pessoas que nunca viu na vida como se fosse alguém que você conhece a anos, pra mim essa é a sua habilidade especial",
    "Você é alguém que eu tenho orgulho de poder falar que é o meu melhor amigo",
    "Eu nem consigo imaginar como a Lulu é feliz de ter um irmão como você na vida dela, com certeza ela vai sentir falta de te ver todo dia e ficar desligando seu pc no meio da partida kakakakkakak",
    "Quero que você saiba que você é uma pessoa muito importante na minha vida, e que eu te considero demais mesmo",
    "Eu sou um pouco fechado e as vezes pode não parecer mas eu gosto muito de você de verdade, eu gosto de ouvir vc contar de coisas aleatórias que vc viu no twitter, sobre algo que aconteceu no seu dia, ou suas histórias 'aumentadas' (até um certo pontokkkkk)",
    "Eu nunca vou esquecer das assistências q vc me deu pra tentar armar alguém pra mim kakakakkaka",
    "Nunca vou esquecer das vezes que não deu certo e vc tava lá pra me ouvir nos momentos em que meu mundo desabou",
    "Nunca vou esquecer das vezes que vc pagou alguma coisa pra eu comer nos rolês quando eu tava sem dinheiro",
    "Você é a minha dupla, o meu companheiro, e de verdade eu desejo tudo de melhor pra você",
    "Eu quero que você saiba que sempre que você precisar eu vou estar aqui pra você, nos momentos bons e nos momentos ruins",
    "E quem diria que nós iriamos fazer a faculdade juntos, temos pelo menos mais uns 5 anos juntos, e nesse primeiro ano ainda vamos ficar na mesma sala, basicamente vai ser o ensino médio parte 2",
    "Eu espero que quando tivermos uns 70 anos nós estejamos contando sobre os dias de hoje para nossos filhos e netos akkakakakka",
    "Quero que um dia nós sejamos iguais aqueles velhinhos que ainda tem o melhor amigo que carrega desde a infância 🙃",
    "Eu poderia escrever muitas outras coisas aqui, mas acho que isso é o suficiente pra vc ter uma ideia do que significa pra mim 😁. Seu presente já tá na steam por acaso kkkkkkkk (a seguir uma foto lendária)"
];

let indice = 0;

function trocarTexto() {
    const paragrafo = document.getElementById("paragrafo1");
    const imagem = document.getElementById("imagemFinal");

    if (indice < mensagens.length) {
        paragrafo.innerHTML = mensagens[indice];
        indice++;
    } else {
        paragrafo.style.display = "none"; // Esconde o texto
        imagem.style.display = "block"; // Mostra a imagem
    }
}