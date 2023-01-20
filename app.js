// variaveis

const min = 1;
const max = 10;
let numero;
let pegaConteudo;
let pegaAcerto;
let pegaErro;
let jogarBtn;
let limpa;
let tentativas = 3;



numeroRandom();

function numeroRandom(){
  numero =Math.floor((Math.random()*10)+1);
  console.log(numero);
}

jogarBtn        = document.querySelector(".submit");
pegaAcerto   = document.querySelector(".resultado");
pegaTentativas  = document.querySelector(".tentativas");

document.querySelector(".texto").focus();
pegaTentativas.textContent = tentativas;



jogarBtn.addEventListener("click",function(){
  
  
    pegaConteudo=parseInt(document.querySelector(".texto").value);
    
    if (isNaN(pegaConteudo)==true){
      alert ("Digite o número !!");
    }
   
 
  
  if(numero !== pegaConteudo){
    
    tentativas--;
    pegaAcerto.textContent = "Resultado: Você Errou!!!!";
    pegaErro=document.querySelector(".resultado").style.color = "red";
    limpa=document.querySelector(".texto").value = "";
    document.querySelector(".texto").focus();
    pegaTentativas.textContent = tentativas;
  }
    
  
  if(pegaConteudo===numero){
    pegaAcerto.textContent = "Resultado: Você Ganhou!!!!";
    pegaAcerto=document.querySelector(".resultado").style.color = "green";
    jogarBtn.disabled=true;
  }

  if(tentativas ===0){

    pegaAcerto = document.querySelector('.resultado').textContent = "Voce Perdeu!";
    jogarBtn.disabled=true;

  }
 
});

