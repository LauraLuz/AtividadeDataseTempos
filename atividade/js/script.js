

// Exercicio 4

function estiloClassico() {
    document.getElementById("declaracao").style.fontStyle = "italic";
    document.getElementById("declaracao").style.color = "blue";
    document.getElementById("declaracao").style.backgroundColor = "blue";
}

function estiloModerno() {
    document.getElementById("declaracao").style.fontStyle = "oblique";
    document.getElementById("declaracao").style.color = "blue";
    document.getElementById("declaracao").style.backgroundColor = "blue";

}

function estiloEsporte() {
    document.getElementById("declaracao").style.fontStyle = "normal";
    document.getElementById("declaracao").style.color = "blue";
    document.getElementById("declaracao").style.backgroundColor = "blue";

}

// Exercicio 5
document.getElementById('selectCarro').onclick = function(){
    var carro = document.getElementById('listaCarros')
    var img = document.getElementById('imgCarro')

    switch (carro.value) {
        case "1":
            img.style.display = "block"
            img.src = "./img/VW-Nivus.jpg"
            break;
        case "2":
            img.style.display = "block"
            img.src = "./img/Citroen-C5.jpg"
            break;
        case "3":
            img.style.display = "block"
            img.src = "./img/Honda-Fit.jpg"
            break;
        case "4":
            img.style.display = "block"
            img.src = "./img/Ford-Territory.jpg"
            break;
        case "5":
            img.style.display = "block"
            img.src = "./img/Jaguar-F-Type.jpg"
            break;    
        case "6":
            img.style.display = "block"
            img.src = "./img/Land-Rover-Defender.jpg"
            break;
        case "7":
            img.style.display = "block"
            img.src = "./img/Peugeout-208.jpg"
            break;
        case "8":
            img.style.display = "block"
            img.src = "./img/tarek.jpg"
            break;
        case "9":
            img.style.display = "block"
            img.src = "./img/Kia-Seltos.jpg"
            break;
        case "10":
            img.style.display = "block"
            img.src = "./img/Audi-Q7.jpg"
            break;

        default:
            console.log("erro, nenhuma opcao encontrada")
    }
}

