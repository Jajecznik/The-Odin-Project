import homeTab from './modules/home.js';
import menuTab from './modules/menu.js';
import contactTab from './modules/contact.js';

const content = document.getElementById('content');

// header
const header = document.createElement('header');
const ul = document.createElement('ul');
const li = document.createElement('li');

ul.classList.add('header-ul');
li.classList.add('header-li');

ul.appendChild(li.cloneNode(true));
ul.appendChild(li.cloneNode(true));
ul.appendChild(li.cloneNode(true));

ul.children[0].textContent = "HOME";
ul.children[0].setAttribute('id', 'home');
ul.children[1].textContent = "MENU";
ul.children[1].setAttribute('id', 'menu');
ul.children[2].textContent = "CONTACT";
ul.children[2].setAttribute('id', 'contact');
header.appendChild(ul);

// main elements
const tabContent = document.createElement('div');
tabContent.setAttribute('id', 'tab-content');

// footer
const footer = document.createElement('footer');
footer.textContent = "Copyright \u00a9 Marcin Leśniak";

content.appendChild(header);
content.appendChild(tabContent);
content.appendChild(footer);
homeTab();

const home = document.getElementById('home');
const menu = document.getElementById('menu');
const contact = document.getElementById('contact');

home.addEventListener('click', () => {
    tabContent.textContent = '';
    homeTab();
});

menu.addEventListener('click', () => {
    tabContent.textContent = '';
    menuTab();
});

contact.addEventListener('click', () => {
    tabContent.textContent = '';
    contactTab();
});
