//Create header, then create hero, then create info, then create footer, Then append them and export that function

//Create header
function createHeader () {
    const head = document.createElement('div');
    head.id = 'header';
    return head;
}

function appendElements () {
    const content = document.getElementById('content');
    content.appendChild(createHeader());
}

appendElements();