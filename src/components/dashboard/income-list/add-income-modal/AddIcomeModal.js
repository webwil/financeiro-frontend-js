class AddIcomeModal extends HTMLElement {
    constructor() {
        super();
    
        fetch('src/components/dashboard/income-list/add-income-modal/AddIncomeModal.html')
        .then(response => response.text())
        .then(text => this.innerHTML = text)
    }

    connectedCallback() {
        setTimeout(() => {
            createSelectElement('income', 'add-income', '.select-container-income', 'Categoria da Receita', window.typeIncome, 12);
            createSelectElement('income', 'payment-method', '.select-container-payment-method-income', 'Método de Pagamento', window.paymentMethod, 9);
        }, 1000)
    }

}
if ('customElements' in window) {
    customElements.define('app-add-income-modal', AddIcomeModal);
}