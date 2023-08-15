class AddIcomeModal extends HTMLElement {
    constructor() {
        super();
    
        fetch('src/components/dashboard/income-list/add-income-modal/AddIncomeModal.html')
        .then(response => response.text())
        .then(text => this.innerHTML = text)
    }

    connectedCallback() {
        setTimeout(() => {
            createSelectElement('income', 'add', '.select-container-income', 'Categoria da Receita', window.typeIncome, 12);
            createSelectElement('income', 'payment-method', '.select-container-payment-method-income', 'Método de Pagamento', window.paymentMethod, 9);

            toggleCheckboxes('.currentFutureFixedIncome', '.currentPastFixedIncome');
        }, 1000)
    }
}

const handleAddIncome = (event) => {
    event.preventDefault();

    const incomeDetails = createObjTransactionDetails('income');
    const buttonAddIncome = document.querySelector('.add-income');

    if (!verifyFieldFillTransaction('income', incomeDetails)) {
        buttonAddIncome.removeAttribute('data-dismiss');
        alert('Preencha os campos vazios!');
        return;
    }

}

if ('customElements' in window) {
    customElements.define('app-add-income-modal', AddIcomeModal);
}