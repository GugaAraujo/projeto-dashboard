var botoesNavegador = document.querySelectorAll(".menu")
var frameDados = document.querySelector("#frameDados")
var frameOver = document.querySelector("#frameOver")
var menuOver = document.querySelector("#menuOver")
var menuDados = document.querySelector("#menuDados")


botoesNavegador.forEach(botao => {
    

    botao.addEventListener('click',(event)=>{
            if(botao.textContent == "Overview"){
            frameOver.classList.remove('frameOculto')
            frameDados.setAttribute("class","frameOculto")
            menuDados.classList.remove('active')
            menuOver.classList.add('active')

        }
        else if(botao.textContent == "Dados Consolidados"){
            frameDados.classList.remove('frameOculto')
            frameOver.setAttribute("class","frameOculto")
            menuOver.classList.remove('active')
            menuDados.classList.add('active')
        }
    })   
});


// data

var data = new Date();
var dia = data.getDate();
var mes = data.getMonth();
var ano = data.getFullYear();
var hora = data.getHours();
var min = data.getMinutes();

var dataPainel = `${hora}:${min} - ${dia}/${mes+1}/${ano}`

document.getElementById('dataPainel').innerHTML = dataPainel;


