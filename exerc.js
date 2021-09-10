// EXERCICIO: (UTILIZAR PARAMETRO)
//CALCULE A MEDIA DO ALUNO

//Questão: (UTILIZAR PARAMETRO)
//ETAPA 1 = Elaborar um programa que calcule a média do aluno.
//ETAPA 2 = Informar se ele foi aprovado(utilizar estrutura condicional)
//ETAPA 3 = GARANTIR que todos os campos serão preenchidos (Utilizar return)


// FIZ O EXERCÍCIO DE DUAS FORMAS; NODE E HTML.

/*function inserirNota() {
  let nota1 = Number.parseFloat(prompt("Informe a primeira nota:"));
  let nota2 = Number.parseFloat(prompt("Informe a segunda nota:"));
  let nota3 = Number.parseFloat(prompt("Informe a terceira nota:"));
  let nota4 = Number.parseFloat(prompt("Informe a quarta nota:"));

  function verificarAprovacao(n1, n2, n3, n4) {
    if (
      isNaN(n1) ||
      isNaN(n2) ||
      isNaN(n3) ||
      isNaN(n4) ||
      n1 == undefined ||
      n2 == undefined ||
      n3 == undefined ||
      n4 == undefined
    ) {
     let verificar = confirm("Informe todas as notas, por favor.");
     if(verificar == true){
      return inserirNota();
    }
  }
    let media = (nota1 + nota2 + nota3 + nota4) / 4;
    alert(`Sua média é: ${media}.`);
    if (media >= 6) {
      alert("Aluno aprovado com sucesso!");
    } else if (media > 2 && media < 6) {
      alert("Aluno irá fazer a recuperação.");
    }else if( isNaN(media)|| media == undefined){
      alert('Erro, tente novamente mais tarde.')
    } else {
      alert("Infelizmente, aluno está reprovado.");
    }
  }

  verificarAprovacao(nota1, nota2, nota3, nota4);
}

inserirNota();*/

//VOU FAZER AQUI COM O NODEJS

function calcularMedia(num1, num2, num3, num4) {
  let media = (num1 + num2 + num3 + num4) / 4;
  if (media >= 6) {
    console.log("Aluno aprovado com sucesso.");
  } else if (media > 3 && media < 6) {
    console.log("Aluno irá fazer a recuperação.");
  } else {
    console.log("Infelizmente, aluno reprovado.");
  }

  return media;
}

console.log(calcularMedia(4, 3, 3, 3));
