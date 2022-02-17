
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
// Food Expenses
document.getElementById('food-btn').addEventListener('click', function () {

    const newFoodAmount = getInputValue('food-input');
    const foodBalance = document.getElementById('food-exp-amount');
    const previousFoodText = foodBalance.innerText;
    const previousFoodAmount = parseFloat(previousFoodText);

    foodBalance.innerText = newFoodAmount;
    console.log(newFoodAmount);

})
// Rent Expenses
document.getElementById('rent-btn').addEventListener('click', function () {

    const newRentAmount = getInputValue('rent-input');

    const rentBalance = document.getElementById('rent-exp-amount');
    rentBalance.innerText = newRentAmount;
})
// Clothe Expenses
document.getElementById('clothe-btn').addEventListener('click', function () {

    const newClotheAmount = getInputValue('clothe-input');
    const clotheBalance = document.getElementById('clothes-exp-amount');
    clotheBalance.innerText = newClotheAmount;
})
