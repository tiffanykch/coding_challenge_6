//TASK 1: FUNCTION DECLARATION - BUSINESS PROFIT CALCULATION

//Create function that calculate total profit using Price, COGS, and unit sold
function calculateProfit(costPrice, sellingPrice, unitsSold) {
    return (sellingPrice - costPrice) * unitsSold
}

//Testing function using data provided and logging output to the console
console.log(`Total Profit: $${calculateProfit(20, 30, 100)}`);

console.log(`Total Profit: $${calculateProfit(50, 70, 200)}`);

//TASK 2: FUNCTION EXPRESSION - SALES TAX COMPUTATION

//Create function that calculates sales tax using amount and tax rate
function calculateSalesTax(amount, taxRate) {
    return amount * taxRate
}

//Testing function using data provided and logging output to the console
console.log(`Sales Tax: $${Math.floor(calculateSalesTax(100, 0.07))}`)
//Use Math.floor to avoid excess decimals

console.log(`Sales Tax: $${calculateSalesTax(500, 0.1)}`)

//TASK 3: ARROW FUNCTION - EMPLOYEE BONUS CALCULATION

//Create arrow function that calculates employee bonus using salary and performance rating
const calculateBonus = (salary, performanceRating) => {
    if (performanceRating === "Excellent") {
        bonus = salary * 0.2;
    } else if (performanceRating === "Good") {
        bonus = salary * 0.1;
    } else if (performanceRating === "Average") {
        bonus = salary * 0.05
    }

    return bonus
};

//Testing function using data provided and logging output to the console
console.log(`Bonus: $${calculateBonus(5000, "Excellent")}`);

console.log(`Bonus: $${calculateBonus(7000, "Good")}`)

//TASK 4: PARAMETERS AND ARGUMENTS - SUBSCRIPTION PRICING MODEL

//Create function that calculates subscription cost using plan, month, and discount
function calculateSubscriptionCost(plan, months, discount = 0) {
    if (plan === "Basic") {
        cost = (10 * months) - discount;
    } else if (plan === "Premium") {
        cost = (20 * months) - discount;
    } else if (plan === "Enterprise") {
        cost = (50 * months) - discount;
    }

    return cost
};

//Testing function using data provided and logging output to the console
console.log(`Total Cost: $${calculateSubscriptionCost("Basic", 6, 10)}`);

console.log(`Total Cost: $${calculateSubscriptionCost("Premium", 12, 0)}`);

//TASK 5: RETURNING VALUES - CURRENCY CONVERSION

//Create function that convert currencies using amount and exchange rate
function convertCurrency(amount, exchangeRate) {
    return (amount * exchangeRate).toFixed(2);
};

//Testing function using data provided and logging output to the console
console.log(`Converted Amount: $${convertCurrency(100, 1.1)}`)

console.log(`Converted Amount: $${convertCurrency(250, 0.85)}`)

//TASK 6: HIGHER-ORDER FUNCTIONS - DISCOUNT STRATEGY FOR BULK ORDERS

//Declare array containing five order amounts (using data provided)
let orders = [200, 600, 1200, 450, 800];

//Write higher order function to apply bulk discounts using orders array and discount function
//First function to calculate discount
function applyBulkDiscount(orders, discountFunction) {
    return orders.map(order => discountFunction(order));
}

//Testing function using data provided and logging output to the console
console.log(applyBulkDiscount(orders, amount => amount > 500 ? amount * 0.9 : amount));

//TASK 7: CLOSURES - BUSINESS EXPENSE TRACKER

//Create function to add expenses and keep a running total
function createExpenseTracker() {
    let total = 0;

        return function(amount) {
            total += amount
            return `Total Expenses: $${total}`;
    };
}

//Testing function using data provided and logging output to the console
let tracker = createExpenseTracker();

console.log(tracker(200));
console.log(tracker(150));

//TASK 8: RECURSION - EMPLOYEE PROMOTION EVALUATION

//Create recursive function to calculate years to promotion
function calculateYearsToPromotion(employeeLevel) {
    if (employeeLevel >= 10) {
        return 0
    } else {
        return 2 + calculateYearsToPromotion(employeeLevel + 1)
    }
}

//Testing function using data provided and logging output to the console
console.log(`Years to Level 10: ${calculateYearsToPromotion(7)}`);

console.log(`Years to Level 10: ${calculateYearsToPromotion(5)}`);