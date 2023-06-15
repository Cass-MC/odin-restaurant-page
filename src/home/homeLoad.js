//Create header, then create hero, then create info, then create footer, Then append them and export that function

function createHeader () {
    const head = document.createElement('div');
    head.id = 'header';

    const logo = document.createElement('div');
    logo.classList.add('headerNav');
    logo.textContent = 'logo';

    const menu = document.createElement('div');
    menu.classList.add('headerNav');
    menu.textContent = 'menu';

    const order = document.createElement('div');
    order.classList.add('headerNav');
    order.textContent = 'order';

    const about = document.createElement('div');
    about.classList.add('headerNav');
    about.textContent = 'about';

    head.appendChild(logo);
    head.appendChild(menu);
    head.appendChild(order);
    head.appendChild(about);
    return head;
}

function createHero() {
    const hero = document.createElement('div');
    hero.id = 'hero';

    return hero;
}

function createInfo() {
    const info = document.createElement('div');
    info.id = 'info';

    const map = document.createElement('div');
    map.classList.add('infoBox');

    const navInfo = document.createElement('div');
    navInfo.classList.add('infoBox');

    info.appendChild(map);
    info.appendChild(navInfo);
    return info;
}

function createFooter() {
    const footer = document.createElement('div');
    footer.id='footer';

    return footer;
}

function appendElements () {
    const content = document.getElementById('content');
    content.appendChild(createHeader());
    content.appendChild(createHero());
    content.appendChild(createInfo());
    content.appendChild(createFooter());
}

appendElements();