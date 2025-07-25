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

export default createDropDown;
