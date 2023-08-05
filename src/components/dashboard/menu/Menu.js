class Menu extends HTMLElement {
    constructor() {
        super();
    
        fetch('src/components/dashboard/menu/Menu.html')
        .then(response => response.text())
        .then(text => this.innerHTML = text)
    }
}
if ('customElements' in window) {
    customElements.define('app-menu', Menu);
}