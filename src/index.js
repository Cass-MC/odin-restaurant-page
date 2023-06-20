import './style.css';
import {appendElements as homeLoad} from './home/homeLoad.js';
import {appendElements as menuLoad} from './menu/menuLoad.js';

homeLoad();

function addListeners() {
    const menu = document.getElementsByClassName('headerNav')[1];
    menu.addEventListener('click', () => {
        menuLoad();
    });
    
}

addListeners();