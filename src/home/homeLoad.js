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

function appendElements () {
    const content = document.getElementById('content');
    content.appendChild(createHeader());
}

appendElements();