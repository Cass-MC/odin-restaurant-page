import './style.css';
import {appendElements as homeLoad} from './home/homeLoad.js';
import {appendElements as menuLoad} from './menu/menuLoad.js';

homeLoad();

function wipePage() {
    const contentNode = document.getElementById('content');

    for (let i = 0; i < contentNode.children.length; i++) {
        const currentNode = contentNode.children[i];
        if (currentNode.id == 'header' || currentNode.id == 'footer') { continue; }
        else { contentNode.removeChild(currentNode); i--; }
    }

}

function addListeners() {
    const menu = document.getElementsByClassName('headerNav')[1];
    menu.addEventListener('click', () => {
        wipePage();
        menuLoad();
    });
    
}

addListeners();