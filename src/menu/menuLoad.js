function createMenu() {
    const menu = document.createElement('div');
    menu.id = 'menu';

    return menu;
}

export function appendElements() {
    const content = document.getElementById('content');
    content.appendChild(createMenu());
}