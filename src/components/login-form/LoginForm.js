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

const showErrorModal = (error) => {
    if (error.message === 'Not Found') {
        alert('Usuario não encontrado na base!');
    }else if(error.message === 'Unprocessable Entity') {
        alert('Senha inválida!')
    }
}

// Função para autenticar usuario
const authenticateUser = async () => {
    const payload = createLoginPayload();
    const { email } = payload;

    try {
        const response = await window.login(`${window.apiURL}/auth/login`, payload);
        captureErrorRequest(response);
        const data = await response.json();
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", email);

    } catch (error) {
        showErrorModal(error);
    }
}

const handleLogin = () => {
    const { email, password } = createLoginPayload();
    if (!isLoginFormValid(email, password)) {

        // Chamando função Modal 
        showRequiredLoginFormFieldModal()
        return;
    }

    authenticateUser();

}

if ('customElements' in window) {
    customElements.define('app-login-form', LoginForm)
}