const capitalizeFirstLetter = (string) => {
    return string.substring(0, 1).toUpperCase() + string.substring(1);
}


// Chama modal de adicionar tranzação financeira pelo tipo
const openDialogFinancial = (financialType) => {
    const dialogSelector = (financialType === 'income') ? '.add-income-modal' : '.add-expense-modal';
    const dialog = document.querySelector(dialogSelector);
    dialog.click();
}