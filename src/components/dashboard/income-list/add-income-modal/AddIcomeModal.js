class AddIcomeModal extends HTMLElement {
    constructor() {
        super();
    
        fetch('src/components/dashboard/income-list/add-income-modal/AddIncomeModal.html')
        .then(response => response.text())
        .then(text => this.innerHTML = text)
    }
}
if ('customElements' in window) {
    customElements.define('app-add-income-modal', AddIcomeModal);
}