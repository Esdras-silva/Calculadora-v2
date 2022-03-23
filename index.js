
       
        var calc = document.getElementById("calco")

        calc.onclick= cal
        

   

function cal() {
    

if(calc= true){
    let studentname=prompt("Qual é o seu nome?")
    let n1=prompt("Sua nota da Primeira avaliação:")
    let n2=prompt("Sua nota da Segunda avaliação:")
    let n3=prompt("Sua nota da Terceira avaliação:")
    let n4=prompt("Sua nota da Quarta avaliação:")

// Calculo de dados
let n1x2 = n1*2
let n2x3 = n2*3
let n3x2 = n3*2
let n4x3 = n4*3
let media = n1x2 + n2x3 + n3x2 + n4x3

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
        rise()
        printcont(studentname + ', Você está na media \nEstá passado Parabéns 🥳') 
        break

    case "Ótimo":
        rise()
        printcont( studentname + ", Parabéns \n Você tirou uma nota excelente!👏🥳🎉")
        break

    case "Nota vermelha":
        rise()
        printcont(studentname+", Você vai precisar fazer recuperação! \nForça amigo!😔✊")
        break

    case "invalido":
        rise()
        printcont("Essa nota não está dentro do padrão.\nPortanto é invalida ❌❌❌❌")
        break
}


function rise() {
    let content = document.getElementById("content")
    content.style.display = "block"
}
}



function printcont(i) {
    var screen= document.getElementById("tela")
    screen.innerText = i
}


     
}