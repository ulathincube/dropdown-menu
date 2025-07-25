import './style.css';
import createDropDown from './createMenu.js';
import createButton from './createButton.js';

const root = document.getElementById('root');

function createDropdown() {
    const button = createButton('Show Menu');
    root.appendChild(button);

    const dropdownMenu = createDropDown(4);
    root.appendChild(dropdownMenu);

    function handleMenuButtonClick() {
        const menu = document.querySelector('.menu');
        menu.classList.toggle('hidden');
        if (menu.classList.contains('hidden')) {
            button.textContent = 'Show Menu';
        } else {
            button.textContent = 'Hide Menu';
        }
    }

    button.addEventListener('click', handleMenuButtonClick);
}

addEventListener('load', () => {
    createDropdown();
});

export { createDropdown };
