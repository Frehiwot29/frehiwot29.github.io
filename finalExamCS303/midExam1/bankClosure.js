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
function  makeAcount() {
    const banks = { };
 const transactionsDB = [
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
    return transactionsDB.find((cust)=>cust.customerId===id).customerTransactions.reduce((sum,value)=>sum+value,0)
    }
    banks.saveTransaction =function(id,amount) {
        transactionsDB.find((cust)=>cust.customerId===id).customerTransactions.push(amount)
        
    }
    banks.overAllBalance=function() {
        let totalBalance=0;
        for(let cust of transactionsDB){
            totalBalance+=banks.getBalance(cust.customerId)
        }
      return totalBalance  
    }
    return banks
}
const bank=makeAcount()
    console.log("before: "+bank.overAllBalance())
    console.log(bank.getBalance(1))
    console.log(bank.debit(1,10))
    console.log(bank.getBalance(1))
    console.log(bank.credit(1,100))
    console.log(bank.getBalance(1))
    console.log("after:"+bank.overAllBalance())
    console.log(bank.transactionsDB)

  
   
    
