
// Get input from user 
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    return amountValue;
}
// Update Amount 
function updateTotalField(totalFieldId, amount) {
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);
    totalElement.innerText = amount;
}

// Calculate
document.getElementById('calculate-button').addEventListener('click', function () {
    // Income input 
    const newIncomeAmount = getInputValue('income-input');
    // Calculate Expenses 
    const newFoodAmount = getInputValue('food-input');
    const newRentAmount = getInputValue('rent-input');
    const newClotheAmount = getInputValue('clothe-input');
    const totalAmount = newFoodAmount + newRentAmount + newClotheAmount;
    updateTotalField('total-expenses', totalAmount);

    // Calculate Balance 
    const totalBalance = newIncomeAmount - totalAmount;
    updateTotalField('balance-total', totalBalance);
})