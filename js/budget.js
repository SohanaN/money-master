
// Get input from user 
function getInputValue(inputId) {
    debugger;
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    // clear input field
    // inputField.value = '';

    return amountValue;
}

// Income input 
document.getElementById('income-btn').addEventListener('click', function () {

    const newIncomeAmount = getInputValue('income-input');

    const incomeBalance = document.getElementById('income-amount');
    const previousIncomeText = incomeBalance.innerText;
    const previousIncomeAmount = parseFloat(previousIncomeText);

    incomeBalance.innerText = newIncomeAmount;
    // console.log(newincomeAmount);

})

// Calculate Expenses 
document.getElementById('calculate-button').addEventListener('click', function () {

    const newFoodAmount = getInputValue('food-input');
    const newRentAmount = getInputValue('rent-input');
    const newClotheAmount = getInputValue('clothe-input');

    const expensesBalance = document.getElementById('total-expenses');
    const previousExpensesText = expensesBalance.innerText;
    const previousExpensesAmount = parseFloat(previousExpensesText);

    expensesBalance.innerText = newFoodAmount + newRentAmount + newClotheAmount;
    // console.log(newincomeAmount);
})