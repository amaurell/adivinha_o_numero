// variaveis

const min = 1;
const max = 10;
let numero;
let pegaConteudo;
let msgGanhou;
let msgErrou;
let jogarBtn;
let limpaInput;
let tentativas = 3;



numeroRandom();

// Gera o número aleatório
function numeroRandom(){
  numero =Math.floor((Math.random()*10)+1);
  console.log(numero);
}

jogarBtn        = document.querySelector(".submit"); 
msgGanhou       = document.querySelector(".resultado");
pegaTentativas  = document.querySelector(".tentativas");

document.querySelector(".texto").focus();
pegaTentativas.textContent = tentativas;



jogarBtn.addEventListener("click",function(){
  
  
    pegaConteudo=parseInt(document.querySelector(".texto").value);
    
    // Testa se o campo de digitação está vazio
    if (isNaN(pegaConteudo)==true){
      alert ("Digite o número !!");
    }
   
 
  // Testa se o número digitado é diferente do gerado randomicamente
  if(numero !== pegaConteudo){
    
    tentativas--;

    msgGanhou.textContent = "Resultado: Você Errou!!!!";
    msgErrou=document.querySelector(".resultado").style.color = "red";
    limpaInput=document.querySelector(".texto").value = "";
    document.querySelector(".texto").focus();
    pegaTentativas.textContent = tentativas;
  }
    
  // Testa se o número digitado é igual do gerado randomicamente
  if(pegaConteudo===numero){

    msgGanhou.textContent = "Resultado: Você Ganhou!!!!";
    msgGanhou=document.querySelector(".resultado").style.color = "green";
    jogarBtn.disabled=true;

  }

  // Testa se o número de tentativas terminou
  if(tentativas ===0){

    msgGanhou = document.querySelector('.resultado').textContent = "Voce Perdeu!";
    jogarBtn.disabled=true;

  }
 
});

