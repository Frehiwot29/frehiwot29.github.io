"use strict";
/*eslint-disable*/
/**
 * Create an object named bank with the following methods
 * Q1.debit(id ,amount):,deduct amount from customer transaction , but only if the amount 
 * is less than the current balance 
 * Q2.credit(id ,amount):,adds positive amount to customer transaction list
 * Q3. getBalance(id): returns current balance of that customer.The balance should be 
 * computed as the sum of all recoreded transaction amounts.
 * Q4. saveTransaction(id,amount):saves this transaction amount to the customer
 *  Transaction list for this customer 
 * Q5.getBankBalance:return sum of all customer balances
 */
const banks = { };
banks.transactionsDB = [
    { customerId: 1, customerTransactions: [10, 50, -40] },
    { customerId: 2, customerTransactions: [10, 10, -10] },
    { customerId: 3, customerTransactions: [5, -5, 55] }];

    banks.debit=function(id, amount) {
        let currentBalance=banks.getBalance(id)
        if(currentBalance<amount)
          return "insufficient balance"
        banks.saveTransaction(id ,-1*amount)
        return "succffully"+ "  -$"+amount
    }
    banks.credit=function (id ,amount) {
        banks.saveTransaction(id ,amount)
        return "succffully"+ "  +$"+amount
    }
    banks.getBalance=function(id) {
    return banks.transactionsDB.find((cust)=>cust.customerId===id).customerTransactions.reduce((sum,value)=>sum+value,0)
    }
    banks.saveTransaction =function(id,amount) {
        banks.transactionsDB.find((cust)=>cust.customerId===id).customerTransactions.push(amount)
        
    }
    banks.overAllBalance=function() {
        let totalBalance=0;
        for(let cust of banks.transactionsDB){
            totalBalance+=banks.getBalance(cust.customerId)
        }
      return totalBalance  
    }
    console.log("before: "+banks.overAllBalance())
    console.log(banks.getBalance(1))
    console.log(banks.debit(1,10))
    console.log(banks.getBalance(1))
    console.log(banks.credit(1,100))
    console.log(banks.getBalance(1))
    console.log("after:"+banks.overAllBalance())
    console.log(banks.transactionsDB)
   
    
