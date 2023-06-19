import heroImg from './nadyaSpetnitskayaHero.jpg';
import logoImg from './aster.png';
import mapImg from './JohtoMap.png';

//Create header, then create hero, then create info, then create footer, Then append them and export that function

function createHeader () {
    const head = document.createElement('div');
    head.id = 'header';

    const logo = document.createElement('div');
    logo.classList.add('headerNav');
    logo.style.backgroundImage = 'url(' + logoImg + ')';
    logo.style.backgroundSize = 'contain';
    logo.style.backgroundRepeat = 'no-repeat';
    logo.style.backgroundPosition = 'center';

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

    hero.style.backgroundImage = "url(" + heroImg + ")";
    hero.style.backgroundPosition = "center";
    hero.style.backgroundSize = "100%";

    const heroTitle = document.createElement('div');
    heroTitle.id = 'heroTitle';
    heroTitle.textContent = 'Aster\'s Bakery';

    hero.appendChild(heroTitle);

    return hero;
}

function createInfo() {
    const info = document.createElement('div');
    info.id = 'info';

    const map = document.createElement('div');
    map.classList.add('infoBox');
    map.style.backgroundImage = 'url(' + mapImg + ')';
    map.style.backgroundPosition = 'center';

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

export function appendElements () {
    const content = document.getElementById('content');
    content.appendChild(createHeader());
    content.appendChild(createHero());
    content.appendChild(createInfo());
    content.appendChild(createFooter());
}