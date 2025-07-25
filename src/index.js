import './style.css';

const root = document.getElementById('root');

function createButton(text) {
    const button = document.createElement('button');
    button.classList.add('show-menu');
    button.textContent = text;

    return button;
}

function createDropDown(count) {
    const dropdownMenu = document.createElement('menu');

    dropdownMenu.classList.add('menu');
    dropdownMenu.classList.add('hidden');

    for (let i = 0; i < count; i++) {
        const listItem = document.createElement('li');
        const button = document.createElement('button');

        listItem.classList.add('menu-item');
        button.classList.add('menu-button');

        button.textContent = 'Menu Item';

        listItem.appendChild(button);

        dropdownMenu.appendChild(listItem);
    }

    return dropdownMenu;
}

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
