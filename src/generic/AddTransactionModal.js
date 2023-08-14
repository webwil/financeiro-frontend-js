const selectInputsDom = (financialType) => {
    const transaction = document.querySelector(`.${financialType}-add-category`).value;
    const value = financialType === 'income' ? window.valueAddIncomeModal : window.valueAddExpenseModal;

    const paymentMethod = document.querySelector('.income-payment-method-category').value;
    const dueDate = document.querySelector(`.dueDate${capitalizeFirstLetter(financialType)}`).value;
    const category = financialType === 'expense' ? document.querySelector('.expense-add-category').value : null;
    const currentFutureFixed = document.querySelector(`.currentFutureFixed${capitalizeFirstLetter(financialType)}`).checked;
    const currentPastFixed = document.querySelector(`.currentPastFixed${capitalizeFirstLetter(financialType)}`).checked;
    const user = localStorage.getItem('user');

    const result = {
        [financialType] : transaction,
        value,
        dueDate,
        currentFutureFixed,
        currentPastFixed,
        user
    }

    if (financialType === 'expense') {
        result.category = category;
    }else if (financialType === 'income') {
        result.paymentMethod = paymentMethod;
    }

    return result;
}

const createObjTransactionDetails = (financialType) => {
    const {
        income, 
        expense, 
        category, 
        value, 
        dueDate, 
        currentFutureFixed, 
        currentPastFixed,
        paymentMethod 
    } = selectInputsDom(financialType);

    const transactionDetail = {
        value,
        dueDate,
        currentFutureFixed,
        currentPastFixed
    }

    if (financialType === 'income') {
        transactionDetail.income = income;
        transactionDetail.paymentMethod = paymentMethod;
    } else if (financialType === 'expense') {
        transactionDetail.expense = expense;
        transactionDetail.category = category;
    }

    return transactionDetail;

}

// Formatando campo valor para (Real do Brasil)
const formatCurrency = (event, financialType) => {
    const filterValue = event.target.value.replace(/\D/g, '');

    const currency = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(parseFloat(filterValue / 100))

    event.target.value = currency;
    const valueFormated = parseFloat(filterValue / 100);

    if (financialType === 'income') {
        window.valueAddIncomeModal = valueFormated;
    }else if (financialType === 'expense') {
        window.valueAddExpenseModal = valueFormated;
    }

}

// Função marcar somente um checkbox do adicionar receitas
const toggleCheckboxes = (currentFutureSelector, currentPastSelector) => {
    const currentFutureCheckbox = document.querySelector(currentFutureSelector);
    const currentPastCheckbox = document.querySelector(currentPastSelector);

    if (currentFutureCheckbox) {
        currentFutureCheckbox.addEventListener('change', () => {
            if (currentFutureCheckbox.checked) {
                currentPastCheckbox.disabled = true;
            } else {
                currentPastCheckbox.disabled = false;
            }
        })
    }

    if (currentPastCheckbox) {
        currentPastCheckbox.addEventListener('change', () => {
            if (currentPastCheckbox.checked) {
                currentFutureCheckbox.disabled = true;
            } else {
                currentFutureCheckbox.disabled = false;
            }
        })
    }
}