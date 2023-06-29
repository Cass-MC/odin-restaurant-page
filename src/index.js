import './style.css';
import {appendElements as homeLoad} from './home/homeLoad.js';
import {appendElements as menuLoad} from './menu/menuLoad.js';

homeLoad();

function wipePage(page = 'notMain') {
    const contentNode = document.getElementById('content');

    if (page == 'notMain') {
        for (let i = 0; i < contentNode.children.length; i++) {
            const currentNode = contentNode.children[i];
            if (currentNode.id == 'header' || currentNode.id == 'footer') { continue; }
            else { contentNode.removeChild(currentNode); i--; }
        }
    }

    if (page == 'main') {
        for (let i = 0; i < contentNode.children.length; i++) {
            const currentNode = contentNode.children[i];
            contentNode.removeChild(currentNode);
            i--;
        }
    }

}

function addListeners() {
    const main = document.getElementsByClassName('headerNav')[0];
    main.addEventListener('click', () => {
        wipePage('main');
        homeLoad();
        addListeners();
    })

    const menu = document.getElementsByClassName('headerNav')[1];
    menu.addEventListener('click', () => {
        wipePage();
        menuLoad();
        addListeners();
    });
    
}

addListeners();