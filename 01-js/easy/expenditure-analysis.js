/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {

  const catotal=transactions.reduce((acc,{category,price})=>{
    acc[category]=(acc[category]||0)+price
   return acc

  },{})






   return Object.entries(catotal).map(([category, totalSpent]) => ({
    category,
    totalSpent
  }));
}



console.log(calculateTotalSpentByCategory([
  { id: 1, price: 10, category: 'Food', itemName: 'Pizza' },
  { id: 2, price: 20, category: 'Food', itemName: 'Burger' },
  { id: 3, price: 30, category: 'Travel', itemName: 'Taxi' }
]))



module.exports = calculateTotalSpentByCategory;
