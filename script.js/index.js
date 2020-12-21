import {radioPlayerInit} from "./radio.js";
import {videoPlayerInit} from "./video.js";
import {audioPlayerInit} from "./audio.js";


const navButton = document.querySelectorAll('.player-btn');
const playerBlock = document.querySelectorAll('.player-block');
const temp = document.querySelector('.temp');


function deactivation() {
    temp.style.display = none;
    playerBlock.forEach((item) => {
        item.classList.remove('active');
    });
    navButton.forEach((item) => {
        item.classList.remove('active');
    });
}

navButton.forEach((button, i) => {
    button.addEventListener('click', () => {
        deactivation();
        button.classList.add('active');
        playerBlock[i].classList.add('active');
    });

});


