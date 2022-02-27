

// get all ID 
function calculate(recieveAllId) {
    return document.querySelector(recieveAllId);
};

const totalIncome = calculate("#total-income");
const foodInput = calculate("#food-input");
const rentInput = calculate("#rent-input");
const clothesInput = calculate("#clothes-input");
const totalExpense = calculate("#total-expenses");
const totalBalance = calculate("#total-balance");

const calculateBtn = calculate("#calculation-btn");
const saveInput = calculate("#saving-input");
const saveBtn = calculate("#save-button");
const savingAmount = calculate("#saving-amount");
const remainingBalance = calculate("#remaining-balance");
const erorrHandling = calculate(".remaining-alighn")



// start expenses sum 
function expenses(food, rent, clothes) {
    return parseInt(food) + parseInt(rent) + parseInt(clothes);
};

calculateBtn.addEventListener("click", function () {
    const IncomeTotal = parseInt(totalIncome.value);
    const expensesTotal = expenses(foodInput.value, rentInput.value, clothesInput.value);
    const balance = IncomeTotal - expensesTotal;


    if (IncomeTotal > expensesTotal) {
        totalBalance.innerText = balance;
        totalExpense.innerText = expensesTotal;
    }
    else if ( IncomeTotal < expensesTotal) {
        alert("your balance is low")
    }
    else if (foodInput.value == "" && rentInput.value == "" && clothesInput.value == "") {
        alert("Your Total Input or Expense is blank!")   
    }
    else{
        alert("You have no income"); 
    }
});
// end expenses sum



// start geting save money percentage 
function persent(divided) {
    const IncomeTotall = parseInt(totalIncome.value);
    const dividedNumber = parseInt(divided);
    return IncomeTotall * dividedNumber / 100;    
};


function remaining(add) {
    const IncomeTotall = parseInt(totalIncome.value);
    const intotalExpenses = parseInt(add);
    return IncomeTotall - intotalExpenses;    
};
// end save money percentage



// start remaining balance calculation 
function rmainingTotal() {
    const remainingInner = persent(saveInput.value);
    const IncomeTotal = parseInt(totalIncome.value);
    const expensesTotal = expenses(foodInput.value, rentInput.value, clothesInput.value);
    const balance = IncomeTotal - expensesTotal;
    return  balance - remainingInner;
}

    saveBtn.addEventListener("click", function () {
    const saveMoney = persent(saveInput.value);
    
    const IncomeTotal = parseInt(totalIncome.value);


        const remainingfinal = remainingBalance.innerText = rmainingTotal();
        savingAmount.innerText = saveMoney;
    
    if (remainingfinal > saveMoney ) {
        remainingBalance.innerText = rmainingTotal();
    }
    else {
        erorrHandling.innerText = "Your Balance is Low";
   }

});
// end remaining balance calculation 






