class LoginForm extends HTMLElement {
    constructor() {
        super();

        fetch('src/components/login-form/LoginForm.html')
            .then(response => response.text())
            .then(text => this.innerHTML = text)
    }
}

// Verificando se o campo email e senha foram preechidos
const isLoginFormValid = (email, password) => email !== '' && password !== '';

const createLoginPayload = () => {
    const email = document.querySelector('.email').value;
    const password = document.querySelector('.password').value;

    return { email, password };
}

// Função que Chama Modal para informar se os campos foram preenchidos
const showRequiredLoginFormFieldModal = () => {
    const dialog = document.querySelector('.required-field-modal');
    dialog.click();
}

const handleLogin = () => {
    const { email, password } = createLoginPayload();
    if (!isLoginFormValid(email, password)) {

        // Chamando função Modal 
        showRequiredLoginFormFieldModal()
        return;
    }
}

if ('customElements' in window) {
    customElements.define('app-login-form', LoginForm)
}