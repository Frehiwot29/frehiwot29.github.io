"use strict";
const banks = { transactionsDB: [], };
banks.transactionsDB = [
    { customerId: 1, customerTransactions: [10, 50, -40] },
    { customerId: 2, customerTransactions: [10, 10, -10] },
    { customerId: 3, customerTransactions: [5, -5, 55] }];
    banks.getCostemer=function(id){
      const coun=this.transactionsDB.find((custemer)=>custemer.customerId===id);
      return coun;
    };
    banks.getBalance = function (id) {
        const cust = this.getCostemer(id);
        let currentBalance=cust.customerTransactions.reduce((sum,item)=>sum +item,0);
        return currentBalance;
        
    };
    banks.saveTransaction=function (id,amount) {
        const cust = this.getCostemer(id);
        let saving=cust.customerTransactions.push(amount);
        return saving;
        
    };
    banks.debit=function (id,amount){
        const cust = this.getCostemer(id);
        let balance=this.getBalance(id);
        if(balance<amount){
            return "insufficent";
        }else{
            this.saveTransaction(cust,amount);
            return "successfull";
        }
        
    };
    banks.credit=function (id,amount) {
        const cust = this.getCostemer(id);
        this.saveTransaction(id,amount);
        return "succsfull";
        
    };
    banks.totalAllBalance=function () {
        let totalAll=0;
        for(const elem of transactionsDB){
            
        }
        
    }

