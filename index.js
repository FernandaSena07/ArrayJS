var nome;

function apresentar(){
   nome = prompt("Digite um nome");
  
   while(nome.length <3){
     alert("Você não digitiou um nome válido!")
    nome = prompt("Digite um nome");
  } alert("Olá " + nome)
 }