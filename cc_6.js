//TASK 1: FUNCTION DECLARATION - BUSINESS PROFIT CALCULATION

//Create functiojn to calculate total profit using Price, COGS, and unit sold
function calculateProfit(costPrice, sellingPrice, unitsSold) {
    return (sellingPrice - costPrice) * unitsSold
}

//Testing function using data provided and logging output to the console
console.log(`Total Profit: $${calculateProfit(20, 30, 100)}`);

console.log(`Total Profit: $${calculateProfit(50, 70, 200)}`);