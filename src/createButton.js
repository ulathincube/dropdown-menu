function createButton(text) {
    const button = document.createElement('button');
    button.classList.add('show-menu');
    button.textContent = text;

    return button;
}

export default createButton;
