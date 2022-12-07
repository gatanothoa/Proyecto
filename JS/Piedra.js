// 1 Es piedra, 2 es papel y 3 es tijera
let jugador = 0
let pc = Math.ceil(Math.random()*3)

jugador = prompt("Elije 1 para diamante, 2 para papel, 3 para tijera ")
// alert("Elegiste " + jugador)

    if (jugador == 1){
    alert("Elegiste 💎")    
    } else if (jugador == 2){
        alert("Elegiste 🧻")      
    } else if (jugador == 3){
        alert("Elegiste ✂")      
    } else{
        alert("Elegiste PERDER")
    }

        if (pc == 1){
        alert("PC elige 💎")    
        } else if (pc == 2){
            alert("PC elige  🧻")      
        } else if (pc == 3){
            alert("PC elige  ✂")      
        }

    //COMBATE

    if (pc == jugador){
        alert("EMPATE")
    } else if (jugador == 1 && pc == 3){
        alert("GANASTE")
    } else if (jugador == 2 && pc == 1){
        alert("GANASTE")
    } else if (jugador == 3 && pc == 2){
        alert("GANASTE")
    } else {
        alert("PERDISTE")
    }
 //De nuevo terminado