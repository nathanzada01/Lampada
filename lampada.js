const turnOn = document.getElementById('turnOn')
const turnOff = document.getElementById('turnOff')
const lamp = document.getElementById('lamp')

function isLampBroken() {
    return lamp.src.indexof('quebrada') > -1
}

function lampOn() {
        lamp.src = './img/ligada.jpg';
}

function lampOff () {
        lamp.src = './img/desligada.jpg';
}

function lampBroken () {
        lamp.src = './img/quebrada.jpg';
}

turnOn.addEventListener('click', lampOn)
turnOff.addEventListener('click', lampOff)
lamp.addEventListener('mouseover', lampOn)
lamp.addEventListener('mouseleave', lampOff)
lamp.addEventListener('dblclick', lampBroken)