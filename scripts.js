const inputEle = document.querySelector(".in-city");

function plotaDados(dados){
    document.querySelector(".city").innerHTML = "Tempo em "+dados.name;
    document.querySelector(".temp").innerHTML = dados.main.temp +"ºC";
    document.querySelector(".tipo").innerHTML = dados.weather[0].description;
    document.querySelector(".umid").innerHTML = "Umidade: " + dados.main.humidity + "%";
    document.querySelector(".img-temp").setAttribute("src","https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png");
    console.log(document.querySelector(".img-temp").scr);
}

async function bucarCidade(cidade, key){
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then( resposta => resposta.json());
    console.log(dados);
    plotaDados(dados);
}

async function clique() {
    const input = document.querySelector(".in-city").value;
    key = await fetch("./variavel.json").then( resposta => resposta.json());
    key = key.key
    console.log(key);
    bucarCidade(input, key);
}

document.addEventListener("keyup",function(e){
    if (e.key == 'Enter') {
        console.log(key)
         clique()
    }
}, false);  