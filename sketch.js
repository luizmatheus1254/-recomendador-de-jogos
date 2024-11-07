// GTA, 18
// Call of duty ,15
// Free fire , 12
// block blast , 14
// fifa 22 , 17


let campoIdade;
let campoDeJogos;
let campoGostaDeJogosOnline;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de jogos");
  createSpan("Sua idade:");
  campoIdade = createInput("5");
  campoFantasia= createCheckbox("Gosta de Jogos?");
  campoDeJogosOnline= createCheckbox("gosto de jogos online")

}


function draw() {
    background("white");
    let idade = campoIdade.value();
    let gostaDeFantasia= campoFantasia.checked();
    let recomendacao = geraRecomendacao(idade, gostaDeFantasia);

    fill(color(76, 0, 115));
    textAlign(CENTER, CENTER);
    textSize(38);
    text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeJogos) {
    if (idade >= 12){
        if (idade >= 18) {
            return "GTA";
        } else {
            if (gostaDeJogos) {
                return "CALL OF DUTY ";
            } else {
                return "FREE FIRE"
            }
        }
    } else {
        if (gostaDeJogos) {
            return "FIFA 22"
        } else {
            return "BLOCK BLAST"
        }
    }
}