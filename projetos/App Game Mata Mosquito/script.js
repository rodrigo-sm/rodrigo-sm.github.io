var altura = 0
var largura = 0
var vida = 1
var tempo = 15
var tempoMosca
var time = function() {
	tempo--
	if(tempo < 0) {
		clearInterval(cronometro)
		clearInterval(criaMosca)
		window.location.href = 'vitoria.html'
	}
	else 
		document.getElementById('cronometro').innerHTML = tempo
}

var nivel = window.location.search
nivel = nivel.replace('?', '')

switch(nivel) {
	case 'normal':
		tempoMosca = 1500
		break
	case 'dificil':
		tempoMosca = 1000
		break
	case 'chuck':
		tempoMosca = 750 
		break
}

function ajusteDimensao () {
	altura = window.innerHeight
	largura = window.innerWidth
}

ajusteDimensao()

var cronometro = setInterval(time, tempoMosca)

function posRandom () {
	//Remover o mosquito anterior (caso exista)
	if(document.getElementById('mosquito')) {
		document.getElementById('mosquito').remove()
		document.getElementById('v' + vida).src = "imagens/coracao_vazio.png"
		vida++
		if(vida > 3) {
			window.location.href = 'fim.html'
		} else {
			document.getElementById('v' + vida).src = "imagens/coracao_vazio.png"
			vida++
		}
	}
	//Definir X e Y
	var posX = Math.ceil(Math.random() * largura) - 90
	var posY = Math.ceil(Math.random() * altura) - 90
	posX = posX < 0 ? 0 : posX
	posY = posY < 0 ? 0 : posY
	//Cria Elemento html
	var mosquito = document.createElement('img')
	mosquito.src = 'imagens/mosca.png'
	mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
	mosquito.style.left = posX + 'px'
	mosquito.style.top = posY + 'px'
	mosquito.style.position = 'absolute'
	mosquito.id = 'mosquito'
	mosquito.onclick = function() {
		this.remove()
	}
	document.body.appendChild(mosquito)
}

function tamanhoAleatorio() {
	var classe = Math.floor(Math.random() * 3)
	switch(classe) {
		case 0:
			return 'mosquito1'
		case 1:
			return 'mosquito2'
		case 2:
			return 'mosquito3'
	}
}

function ladoAleatorio() {
	var classe = Math.floor(Math.random() * 2)
	switch(classe) {
		case 0:
			return 'ladoA'
		case 1: 
			return 'ladoB'
	}
}