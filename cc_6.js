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