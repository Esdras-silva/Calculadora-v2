// Entrada de dados

let n1 = 
let n2 = prompt("Qual é a sua nota da segunda avaliação?")
let n3 = prompt("Qual é a sua nota da terceira avaliação?")
let n4 = prompt("Qual é a sua nota da quarta avaliação?")

// Calculo de dados
function mediaf() {
let n1x2 = n1*2
let n2x3 = n2*3
let n3x2 = n3*2
let n4x3 = n4*3
let media = n1x2 + n2x3 + n3x2 + n4x3
return media 
}


//Ações 


if(media >=50 && media <80){
     conceito = "Na media"
}else if(media <50 && media ){ 
    conceito = "Nota vermelha"
}else if(media >= 80 && media <=100){
     conceito ="Ótimo"
}else
{
  conceito = "invalido"
}

console.log(conceito)

switch(conceito){

    case "Na media":
        alert("Você está na media!")
        break

    case "Ótimo":
        alert("Parabéns, Você tirou uma nota excelente!")
        break

    case "Nota vermelha":
        alert("Vai precisar fazer recuperação!")
        break

    case "invalido":
        alert("Essa nota não está dentro do padrão.\nPortanto é invalida")
        break
}

alert("Até a proxima")

