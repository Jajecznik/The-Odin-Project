export default function contactTab() {
    const tabContent = document.getElementById('tab-content');

    // create contact elements
    const pageTitle = document.createElement('p');
    const contact = document.createElement('div');
    const nameContainer = document.createElement('div');
    const valueContainer = document.createElement('div');

    // page title
    pageTitle.classList.add('page-title');
    pageTitle.textContent = "Contact us";

    // contact
    contact.classList.add('contact');
    nameContainer.classList.add('name-container');
    valueContainer.classList.add('value-container');
    contact.appendChild(nameContainer);
    contact.appendChild(valueContainer);

    for (let i = 0; i < 3; i++) {
        const name = document.createElement('div');
        name.classList.add('name');
        nameContainer.appendChild(name);
        const value = document.createElement('div');
        value.classList.add('value');
        valueContainer.appendChild(value);
    }

    nameContainer.children[0].textContent = "Email";
    nameContainer.children[1].textContent = "Phone number";
    nameContainer.children[2].textContent = "Address";
    valueContainer.children[0].textContent = "giga-restaurant@giga.com";
    valueContainer.children[1].textContent = "123 456 789";
    valueContainer.children[2].textContent = "Adamstown PCRN 1ZZ, Pitcairn Islands";

    tabContent.appendChild(pageTitle);
    tabContent.appendChild(contact);
}
