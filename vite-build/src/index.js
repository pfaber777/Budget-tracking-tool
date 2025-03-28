alert('Hi from Vite!');

let currentBalance = document.querySelector(".current-balance");
let addBtn = document.querySelector(".add-btn");
let userInput = document.querySelector(".exp-input");
let budgetSelect = document.querySelector('.budget-select');
let listItem = document.querySelector('.list-item');
let addItem = document.querySelector('.add');
let accOptions = document.querySelector('#options');
let editBudgetBtn = document.querySelector('.edit-budget');
let resetBtn = document.querySelector('.reset');
let budgetDisplayArr = [];

//add accounts section
addBtn.addEventListener('click', () => {
  budgetSelect.classList.toggle('budget-select-hidden');
});

//add/edit budget
editBudgetBtn.addEventListener('click', () => {
  editBudget(); 
});

//add new item
addItem.addEventListener('click', () => {
  accountValidation();
  addExpense();
});

//reset All
resetBtn.addEventListener('click', () => {
  resetAll();
});


let accounts = {
  cheque: {
    chequeAcc: 'cheque',
    chequeBal: 0
  },
  savings: {
    savingsAcc: 'savings',
    savingsBal: 0 
  }
};

// Edit budget display -------------------------------
let budgetNum;
function editBudget() {
  let budgetInput = prompt("Please enter a budget to work with.");
  budgetNum = parseFloat(budgetInput);
  currentBalance.textContent = budgetNum;
}
//-------------------------------------------

function accountValidation() {
  let userVal = userInput.value;
  if (accOptions.value === 'savings') {
    accounts.savings['savingsBal'] = userVal;
    console.log(accounts.savings);
  } else if (accOptions.value === 'cheque'){
    accounts.cheque['chequeBal'] = userVal;
    console.log(accounts.cheque);
  }
  return accOptions;
}

function addExpense() {
  let num = parseFloat(userInput.value);
 if (!isNaN(num)) {
    let item = document.createElement('ul');
    let accountType = document.createElement('li');
    let amount = document.createElement('li');
    amount.textContent = num;
    accountType.textContent = accOptions.value;
    item.appendChild(accountType);
    accountType.classList.add('li-acc');
    item.appendChild(amount);
    amount.classList.add('li-price');
    listItem.appendChild(item);
    currentBalance.textContent -= num;
    userInput.value = "";
    } else {
    alert("Please enter a number.");
    userInput.value = "";
   }
 }

 function resetAll() {
    console.log(accounts.cheque['chequeBal'].valueOf = 0);
    console.log(accounts.savings['savingsBal'].valueOf = 0);
    currentBalance.textContent = 0;

 }
        