const mensagens = [
    "Bom, é isso",
    "Quero te desejar um feliz aniversário 🥳🥳",
    "Quero que você saiba que você é uma pessoa muito importante na minha vida, e que eu te considero demais mesmo",
    "Eu sou um pouco fechado e as vezes pode não parecer mas eu gosto muito de você de verdade, eu gosto de ouvir vc contar de coisas aleatórias, ou histórias 'aumentadas' (até um certo pontokkkkk)",
    "Você é a minha dupla, o meu companheiro, e de verdade eu desejo tudo de melhor pra você",
    "E quem diria que nós iriamos fazer a faculdade juntos, temos pelo menos mais uns 5 anos juntos, e nesse primeiro ano ainda vamos ficar na mesma sala, basicamente vai ser o ensino médio parte 2",
    "Eu espero que quando tivermos uns 70 anos nós estejamos contando sobre os dias de hoje para nossos filhos e netos akkakakakka",
    "",
    "Aproveite cada momento! 🎁"
];

let indice = 0; // Controla qual mensagem será exibida

function trocarTexto() {
    indice = (indice + 1) % mensagens.length; // Avança na lista e reinicia ao chegar no fim
    document.getElementById("paragrafo1").innerHTML = mensagens[indice];
}