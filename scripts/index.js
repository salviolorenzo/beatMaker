const button1 = document.querySelector('[data-button1]');
const button2 = document.querySelector('[data-button2]');
const button3 = document.querySelector('[data-button3]');
const button4 = document.querySelector('[data-button4]');
const button5 = document.querySelector('[data-button5]');
const button6 = document.querySelector('[data-button6]');
const button7 = document.querySelector('[data-button7]');
const button8 = document.querySelector('[data-button8]');
const button9 = document.querySelector('[data-button9]');
const button10 = document.querySelector('[data-button10]');
const button11 = document.querySelector('[data-button11]');
const button12 = document.querySelector('[data-button12]');
const button13 = document.querySelector('[data-button13]');
const button14 = document.querySelector('[data-button14]');
const button15 = document.querySelector('[data-button15]');
const button16 = document.querySelector('[data-button16]');

const buttonArray = [button1, button2, button3, button4, button5, button6, button7, button8, button9, button10, button11, button12, button13, button14, button15, button16];

function buttonObjects(button, sound) {

}

const sound1 = new Audio('../sounds/fx/EDV_DROPPIN.wav');

button1.addEventListener('click', function () {
    sound1.play();
    console.log('clicked');
});