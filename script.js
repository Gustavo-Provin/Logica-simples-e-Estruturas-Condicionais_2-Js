  //-------------------Exercicio 1 ------------------------

  const celcius = Number(prompt("Temperatura em celcius: "));

  const fahrenheit = celcius * 1.8 + 32;
  
  document.write(`A temperatura de ${celcius}°C corresponde a ${fahrenheit}°F <br><br>`);
  
  //-------------------Exercicio 2 ------------------------
  
  const numero = Number(prompt("Digite um numero de 1 a 7: "));
  
  switch (numero) {
      case 1:
          document.write("Segunda");
          break;
          
      case 2:
          document.write("Terça");
          break;
          
      case 3:
          document.write("Quarta");
          break;
          
      case 4:
          document.write("Quinta");
          break;
          
      case 5:
          document.write("Sexta");
          break;
          
      case 6:
          document.write("Sabado");
          break;
          
      case 7:
          document.write("Domingo");
          break;
          
      default:
          document.write("Numero invalido");
  }
  
  document.write("<br><br>");
  
  //-------------------Exercicio 3 ------------------------
  
  const num = Number(prompt("Digite um número:"));
  
  if(num == 0){
      document.write("O número é zero");
  }
  else if(num > 0){
      document.write("O número é positivo");
  }
  else
      document.write("O número é negativo");
  
  document.write("<br><br>");
  
  //-------------------Exercicio 4 ------------------------
  
  const custFab = Number(prompt("Digite o custo de fabricação do carro:"));
  const distribporc = 0.28;
  const impostoporc = 0.45;
  
  const imposto = custFab * impostoporc;
  
  const distribuidor = custFab * distribporc;
  
  const total = custFab + imposto + distribuidor;
  
  document.write("O custo do carro é de R$"+total+"<br><br>"); 

  //-------------------Exercicio 5 ------------------------

 const altura = Number(prompt("altura:"));
 const peso = Number(prompt("peso:"));
 
 const imc = peso / (altura**2);
 
 if(imc < 18.5){
     document.write("Abaixo do peso");
 }
 
 else if(imc >= 18.5 && imc < 24.99){
     document.write("Peso ideal");
 }
 
 else if(imc >= 24){
     document.write("Acima do peso");
 }
 
 document.write("<br><br>");
 
  //-------------------Exercicio 6 ------------------------
 
 const num1 = Number(prompt("digite um número:"));
 const num2 = Number(prompt("digite outro número:"));
 
 const operacao = prompt("digite a operacao");
 
 if(operacao == "+"){
     document.write(num1 + num2);
 }
 
 else if(operacao == "-"){
     document.write(num1 - num2);
 }
 
 else if(operacao == "*"){
     document.write(num1 * num2);
 }
 
 else if(operacao == "/"){
     document.write(num1 / num2);
 }
 
 else {
     document.write("Operação invalida");
 }
 
 document.write("<br><br>");
 
  //-------------------Exercicio 7 ------------------------
 let saldo = 1000;
 
 const saque = Number(prompt("Digite o valor que deseja sacar (múltiplo de 5):"));
 
 if (saque > 0 && saque % 5 === 0 && saque <= saldo) {
   const taxaSaque = 4.5;
 
   if (saque + taxaSaque <= saldo) {
     saldo -= saque + taxaSaque;
     document.write(`Saque bem-sucedido. Saldo restante: R$ ${saldo.toFixed(2)}`);
    } 
   else
     document.write("Você não tem dinheiro suficiente em conta para realizar o saque.");
 
 } else {
     document.write("Valor de saque inválido. Certifique-se de que seja um número positivo, múltiplo de 5 e menor que o saldo.");
 }
 
 document.write("<br><br>")  


 //-------------------Exercicio 8 ------------------------

const idade1 = Number(prompt("Digite a idade do atleta:"));
const peso1 = parseFloat(prompt("Digite o peso do atleta (em kg):"));

let categoria = "";

if (idade1 <= 12) {
  categoria = "Infantil";
} else if (idade1 >= 13 && idade1 <= 16) {
  if (peso1 <= 40) {
    categoria = "Juvenil leve";
  } else {
    categoria = "Juvenil pesado";
  }
} else if (idade1 >= 17 && idade1 <= 24) {
  if (peso1 <= 45) {
    categoria = "Sênior leve";
  } else if (peso1 <= 60) {
    categoria = "Sênior médio";
  } else {
    categoria = "Sênior pesado";
  }
} else {
  categoria = "Veterano";
}

document.write(`Categoria do atleta: ${categoria}`);

document.write("<br><br>")

 //-------------------Exercicio 9 ------------------------

const velocidadeMaxima = 80;
const velocidade = parseFloat(prompt("Adicione a velocidade do veículo:"))

if (velocidade > velocidadeMaxima) {
  const kmAcimaDoLimite = velocidade - velocidadeMaxima;
  const valorMulta = kmAcimaDoLimite * 5;

  document.write("Você foi multado! Velocidade acima do limite.");
  document.write(`Multa: R$ ${valorMulta.toFixed(2)}`);
} else {
  document.write("Velocidade dentro do limite permitido.");
}

document.write("<br><br>");  






