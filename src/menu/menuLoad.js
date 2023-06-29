import wafflesImg from './CombeeWaffles.png';
import pancakesImg from './EeveePancakes.png';
import cupcakesImg from './AlcremieCupcakes.png';
import sandwichImg from './DugtrioSandwich.png';
import cocoaImg from './LitwickCocoa.png';
import cakeImg from './RibombeeCake.png';

function createMenuItem(node,img,title) {
    node.classList.add('menuItem');
    node.style.backgroundImage = 'url(' + img + ')';

    const itemTitle = document.createElement('p');
    itemTitle.classList.add('menuTitle');
    itemTitle.textContent = title;
    node.appendChild(itemTitle);
}

function createMenu() {
    const menu = document.createElement('div');
    menu.id = 'menu';

    const waffles = document.createElement('div');
    createMenuItem(waffles, wafflesImg, 'Combee Waffles');

    const pancakes = document.createElement('div');
    createMenuItem(pancakes, pancakesImg, 'Eevee Pancakes');

    const cupcakes = document.createElement('div');
    createMenuItem(cupcakes, cupcakesImg,'Alcremie Cupcakes');

    const sandwich = document.createElement('div');
    createMenuItem(sandwich, sandwichImg, 'Dugtrio Sandwich');

    const cocoa = document.createElement('div');
    createMenuItem(cocoa, cocoaImg, 'Litwick Cocoa');

    const cake = document.createElement('div');
    createMenuItem(cake, cakeImg, 'Ribombee Cake');

    menu.appendChild(waffles);
    menu.appendChild(pancakes);
    menu.appendChild(cupcakes);
    menu.appendChild(sandwich);
    menu.appendChild(cocoa);
    menu.appendChild(cake);

    const menuInfo = document.createElement('div');
    menuInfo.id = 'menuInfo';
    menu.appendChild(menuInfo);

    const menuInfoBox = document.createElement('div');
    menuInfoBox.id = 'menuInfoBox';
    menuInfoBox.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse facilisis varius magna, vel viverra magna viverra ac. Suspendisse luctus porttitor ultricies. Suspendisse pulvinar neque quis magna dapibus elementum. Donec finibus, nisl id dignissim gravida, dolor tortor ornare eros, non efficitur ipsum sem nec lorem. Sed finibus dictum tortor at laoreet. Integer tempor sem sit amet arcu tincidunt pulvinar. Donec vel vestibulum nunc. Nam facilisis justo massa, quis laoreet odio facilisis vel. Praesent posuere sed erat et egestas. Duis sit amet urna ultricies, pellentesque justo at, imperdiet quam. Cras vestibulum mauris eget ipsum semper, id tincidunt sem suscipit. Fusce tincidunt facilisis velit, in tempor nunc sollicitudin vel. Praesent a neque et dui pulvinar porta sit amet sit amet augue. Integer libero augue, consectetur sit amet iaculis ac, faucibus ut est. Proin leo lorem, euismod eget elit sit amet, dignissim commodo quam. Proin condimentum sem eget ante egestas faucibus. Nullam aliquet id ante in vulputate. ';
    menuInfo.appendChild(menuInfoBox);
    
    return menu;
}

export function appendElements() {
    const content = document.getElementById('content');
    content.appendChild(createMenu());
}