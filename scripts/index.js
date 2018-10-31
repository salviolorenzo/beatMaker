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

const fx1 = new Audio('../sounds/fx/EDV_DROPPIN.wav');
const fx2 = new Audio('../sounds/fx/GET_vocal_huh.wav');
const fx3 = new Audio('../sounds/fx/JYKD_fx_ay.wav');
const fx4 = new Audio('../sounds/fx/KRNE_150_Dollar_Sines_Snare_Rise.wav');

const hat1 = new Audio('../sounds/hats/07_Audiotent_-_MTT_-_Hat.wav');
const hat2 = new Audio('../sounds/hats/SGH_Hat_01.wav');
const hat3 = new Audio('../sounds/hats/V_RIOT_hihat_closed_tschikah.wav');
const hat4 = new Audio('../sounds/hats/V_RIOT_hihat_open_classic_02.wav');

const snare1 = new Audio('../sounds/snares/Snare_808clap.wav');
const snare2 = new Audio('../sounds/snares/LEX_LUGER_snare_no.wav');
const snare3 = new Audio('../sounds/snares/KRNE_Propane_Bamboo_Snare.wav');
const snare4 = new Audio('../sounds/snares/GET_clap_spikey.wav');

const kick1 = new Audio('../sounds/kicks/V_RIOT_kick_12.wav');
const kick2 = new Audio('../sounds/kicks/GET_kick_crank.wav');
const kick3 = new Audio('../sounds/kicks/JUST_kick_box_boom.wav');
const kick4 = new Audio('../sounds/kicks/JUST_kick_blue_print.wav');

const buttonArray = [button1, button2, button3, button4, button5, button6, button7, button8, button9, button10, button11, button12, button13, button14, button15, button16];
const soundArray = [fx1, fx2, fx3, fx4, hat1, hat2, hat3, hat4, snare1, snare2, snare3, snare4, kick1, kick2, kick3, kick4];


function addClicks() {
    for (let index = 0; index < buttonArray.length; index++) {
        buttonArray[index].addEventListener('click', function () {
            soundArray[index].play();
            console.log(`clicked`);
        });
    }
}

function addColor() {
    for (button of buttonArray) {
        button.addEventListener('mousedown', function (event) {
            event.target.style.backgroundColor = 'red';
        })
        button.addEventListener('mouseup', function (event) {
            event.target.style.backgroundColor = 'rgb(161, 161, 161)';
        })
    }
}

addClicks();
addColor();