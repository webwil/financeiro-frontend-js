class Footer extends HTMLElement {
    constructor() {
        super();
    
        fetch('src/components/dashboard/footer/Footer.html')
        .then(response => response.text())
        .then(text => this.innerHTML = text)
    }
}
if ('customElements' in window) {
    customElements.define('app-footer', Footer);
}