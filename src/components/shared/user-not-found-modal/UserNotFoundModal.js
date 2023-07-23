class UserNotFoundModal extends HTMLElement {
    constructor() {
        super();
    
        fetch('src/components/shared/user-not-found-modal/UserNotFoundmodal.html')
        .then(response => response.text())
        .then(text => this.innerHTML = text)
    }
}

if ('customElements' in window) {
    customElements.define('app-user-not-found-modal', UserNotFoundModal);
}