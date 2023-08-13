class Menu extends HTMLElement {
    constructor() {
        super();
    
        fetch('src/components/dashboard/menu/Menu.html')
        .then(response => response.text())
        .then(text => this.innerHTML = text)
    }

    connectedCallback() {
        setTimeout(() => {
            getImageUser();
            messageWelcome();
        }, 1000)
    }

}

// Exibe mensagem de boas vindas
const getMessageByHour = (hour) => {
    if (hour <= 5) {
        return 'Boa Madrugada!';
    }

    if (hour <= 12) {
        return 'Bom Dia!';
    }

    if (hour <= 18) {
        return 'Boa Tarde!';
    }

    return 'Boa Noite!';
}

const messageWelcome = () => {
    const messageContainer = document.querySelector('.message');

    const { name } = JSON.parse(localStorage.getItem('userInfo'));

    const currentHour = new Date().getHours();

    const greetingMessage = getMessageByHour(currentHour);

    const capitalizeUserName = capitalizeFirstLetter(name);

    messageContainer.innerHTML = `Olá <strong>${capitalizeUserName}</strong>, ${greetingMessage}`;
}

// Exibe imagem do usuário
const getImageUser = () => {
    const img = document.querySelector('.profile-img');

    const nameImage = JSON.parse(localStorage.getItem('userInfo'));

    window.downloadImage(`${window.apiURL}/download/image`, nameImage.image)
        .then(response => response.json())
        .then(response => {
            let url = 'data:image/jpg;base64, ' + response.image;
            img.src = url;
        })
}

if ('customElements' in window) {
    customElements.define('app-menu', Menu);
}