function createContactForm() {
    const contactForm = document.createElement('form');
    contactForm.setAttribute('method', 'post');
    contactForm.setAttribute('action','submit');
    contactForm.id = 'contactForm';

    const inputNameLabel = document.createElement('label');
    inputNameLabel.setAttribute('for','input_name');
    inputNameLabel.innerText = 'Name';
    const inputName = document.createElement('input');
    inputName.setAttribute('type', 'text');
    inputName.setAttribute('id', 'input_name')

    contactForm.appendChild(inputNameLabel);
    contactForm.appendChild(inputName);
    
    return contactForm;
}

function createContact() {
    const contactBox = document.createElement('div');
    contactBox.id = 'contactBox';

    const contactFormBox = document.createElement('div');
    contactFormBox.id = 'contactFormBox';
    contactFormBox.appendChild(createContactForm());


    const contactInfo = document.createElement('div');
    contactInfo.id = 'contactInfo';
    contactInfo.textContent = 'Want to have an event catered? Any general questions? Ask and I\'ll talk to my dog about it. Maybe your answer will be given maybe not. Dictum fusce ut placerat orci nulla pellentesque. Rhoncus dolor purus non enim praesent elementum. Vel elit scelerisque mauris pellentesque. Tristique et egestas quis ipsum suspendisse ultrices gravida dictum. Ultrices sagittis orci a scelerisque purus semper eget. Integer vitae justo eget magna fermentum iaculis eu non diam. Quis ipsum suspendisse ultrices gravida dictum fusce ut. Tristique sollicitudin nibh sit amet commodo. Ridiculus mus mauris vitae ultricies leo integer malesuada nunc vel. Et magnis dis parturient montes nascetur ridiculus mus. ';

    contactBox.appendChild(contactFormBox);
    contactBox.appendChild(contactInfo);

    return contactBox;
}

export function appendElements() {
    const content = document.getElementById('content');
    content.appendChild(createContact());
}