<<<<<<< HEAD:weatherTest/script.js

const key = "3be586936af409a6b8e0ff52f1bd92fd";

function colocarDadosNaTela (dados) {
	document.querySelector(".cidade").innerText = `Tempo em ${dados.name}`;
	document.querySelector(".temp").innerText = Math.floor(dados.main.temp) + " °C";
	document.querySelector(".texto-previsao").innerText = dados.weather[0].description;
	document.querySelector(".umidade").innerText = `${dados.main.humidity}%`;
	document.querySelector(".img-previsao").src =  `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}


async function buscarCidade (cidade) {
	const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then( response => response.json());

	colocarDadosNaTela(dados);
}


function clicaEnviar () {
	const cidade = document.querySelector(".input-cidade").value;
	
	buscarCidade(cidade);

}

=======

const key = "your-key";

function colocarDadosNaTela (dados) {
	document.querySelector(".cidade").innerText = `Tempo em ${dados.name}`;
	document.querySelector(".temp").innerText = Math.floor(dados.main.temp) + " °C";
	document.querySelector(".texto-previsao").innerText = dados.weather[0].description;
	document.querySelector(".umidade").innerText = `${dados.main.humidity}%`;
	document.querySelector(".img-previsao").src =  `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}


async function buscarCidade (cidade) {
	const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then( response => response.json());

	colocarDadosNaTela(dados);
}


function clicaEnviar () {
	const cidade = document.querySelector(".input-cidade").value;
	
	buscarCidade(cidade);

}

>>>>>>> 7b705d277790ce372e1a8b74f4cb9505175e5000:script.js
