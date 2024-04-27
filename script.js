let chave = "cebcd482eda57fa9a6714c1c2ba91885"

function colocarNaTela(dados){
 console.log(dados)

 
 document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name

 document.querySelector(".graus").innerHTML = Math.floor(dados.main.temp) + "ºC"

 document.querySelector(".icone") .src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`

 document.querySelector(".umidade") .innerHTML = "Umidade " + dados.main.humidity + "%"

}

function cliqueinobotao(){
  let cidade = document.querySelector(".input-cidade").value
 BuscarCidade(cidade)



}

async function BuscarCidade (cidade){
  let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" +
  cidade +
  "&appid=cebcd482eda57fa9a6714c1c2ba91885&units=metric").then( resposta => resposta.json())
  
  colocarNaTela(dados)
}

document.querySelector("input").onkeydown = function (ev) {
  if (ev.key == "Enter") cliqueinobotao()
}
