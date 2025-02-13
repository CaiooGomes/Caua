const mensagens = [
    "nao acabei ainda 🐨",
    "Quero te desejar um feliz aniversário 🥳🥳, e te dizer algumas coisas",
    "Você é uma pessoa com um coração enorme, sempre tenta fazer o bem, sempre trata todo mundo com respeito independente da pessoa já ter te tratado mal",
    "Você é uma pessoa que traz uma energia boa pra qualquer ambiente em que você entre",
    "Você é uma pessoa que qualquer um se sente bem em estar por perto",
    "Você é uma pessoa que me dá energia pra ver o lado bom da vida",
    "Você é o cara que me inspira a fazer um clutch 1v5 só pra te escutar dar um grito viking pra comemorar",
    "Você é o cara que me inspira a ser uma pessoa melhor",
    "Você é o cara que já passou por tanta coisa e ainda sim nunca deixou de ser você",
    "Você é o cara do sorriso bonito KAKAKKAKAK",
    "Você é o cara que eu tenho certeza que a ju se orgulha de ter conseguido alguém como você",
    "Você é alguém que eu tenho orgulho de chamar de melhor amigo",
    "Quero que você saiba que você é uma pessoa muito importante na minha vida, e que eu te considero demais mesmo",
    "Eu sou um pouco fechado e as vezes pode não parecer mas eu gosto muito de você de verdade, eu gosto de ouvir vc contar de coisas aleatórias, ou histórias 'aumentadas' (até um certo pontokkkkk)",
    "Eu nunca vou esquecer das assistências q vc me deu pra tentar armar alguém pra mim kakakakkaka",
    "Nunca vou esquecer das vezes que não deu certo e vc tava lá pra me ouvir nos momentos em que meu mundo desabou",
    "Nunca vou esquecer das vezes que vc pagou alguma coisa pra eu comer nos rolês",
    "Você é a minha dupla, o meu companheiro, e de verdade eu desejo tudo de melhor pra você",
    "Eu quero que você saiba que sempre que você precisar eu vou estar aqui pra você, nos momentos bons e nos momentos ruins",
    "E quem diria que nós iriamos fazer a faculdade juntos, temos pelo menos mais uns 5 anos juntos, e nesse primeiro ano ainda vamos ficar na mesma sala, basicamente vai ser o ensino médio parte 2",
    "Eu espero que quando tivermos uns 70 anos nós estejamos contando sobre os dias de hoje para nossos filhos e netos akkakakakka",
    "[link steam presente]",

];

let indice = 0; // Controla qual mensagem será exibida

function trocarTexto() {
    indice = (indice + 1) % mensagens.length; // Avança na lista e reinicia ao chegar no fim
    document.getElementById("paragrafo1").innerHTML = mensagens[indice];
}