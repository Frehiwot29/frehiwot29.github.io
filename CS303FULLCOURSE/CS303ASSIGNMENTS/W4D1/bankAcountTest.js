"use strict";
/*eslint-disable*/
/* global describe */
/* global it */
/* global assert */
/* global Account */
/* global SavingsAccount */
/* global CheckingAccount */
/* global Bank */
/* global require */
/*const assert = require("assert");
const acc = require("./account.js");
const bnk = require("./bank.js");
const chk = require("./checkingaccount.js");
const sav = require("./savingsaccount.js");*/
describe("Account class", () => {
    let account = undefined;
    describe("constructor(number)", () => {
        it("takes a number which becomes the account number", () => {
            account = new acc.Account(1);
            assert.strictEqual(account.getNumber(), 1);
            assert.strictEqual(account.constructor, acc.Account);
        });
    });
    describe("getNumber() method", () => {
        it("returns the account number", () => {
            assert.strictEqual(account.getNumber(), 1);
        });
    });
    describe("getBalance() method", () => {
        it("returns the current account balance", () => {
            assert.strictEqual(account.getBalance(), 0);
            account.deposit(5);
            assert.strictEqual(account.getBalance(), 5);
        });
    });
    describe("deposit(amount) method", () => {
        it("adds amount to the current balance", () => {
            assert.strictEqual(account.getBalance(), 5);
            account.deposit(5);
            assert.strictEqual(account.getBalance(), 10);
        });
        it("throws a RangeError if you give a number <= 0", () => {
            let makeError = () => {
                account.deposit(-1);
            };
            assert.throws(makeError, RangeError, "Deposit amount has to be greater than zero");
        });
    });
    describe("withdraw(amount) method", () => {
        it("removes amount from the current balance", () => {
            assert.strictEqual(account.getBalance(), 10);
            account.withdraw(4);
            assert.strictEqual(account.getBalance(), 6);
        });
        it("throws a RangeError if you give a number <= 0", () => {
            let makeError = () => {
                account.withdraw(-1);
            };
            assert.throws(makeError, RangeError, "Withdraw amount has to be greater than zero");
        });
        it("throws an Error if you try to withraw money you don't have", () => {
            let makeError = () => {
                account.withdraw(1000);
            };
            assert.throws(makeError, Error, "Insufficient funds");
        });
    });
    describe("toString() method", () => {
        it("returns a string representation of the account", () => {
            assert.strictEqual(account.toString(), "Account 1: balance 6");
        });
    });
    describe("endOfMonth() method", () => {
        it("returns an empty string", () => {
            assert.strictEqual(account.endOfMonth(), "");
        });
    });
});
describe("SavingsAccount", () => {
    let savings = undefined;
    describe("constructor(number, interest)", () => {
        it("takes a number and an interest rate and makes a SavingsAccount", () => {
            savings = new sav.SavingsAccount(1, 5);
            assert.strictEqual(savings.getNumber(), 1);
            assert.strictEqual(savings.getInterest(), 5);
            assert.strictEqual(savings.constructor, sav.SavingsAccount);
        });
    });
    describe("interest getter / setter", () => {
        it("can get the interest rate for this account", () => {
            assert.strictEqual(savings.getInterest(), 5);
        });
        it("can set the interest rate for this account", () => {
            savings.setInterest(6);
            assert.strictEqual(savings.getInterest(), 6);
        });
    });
    describe("addInterest() method", () => {
        it("adds the calculated interest to this account", () => {
            savings.setInterest(5);
            savings.deposit(100);
            savings.addInterest();
            assert.strictEqual(savings.getBalance(), 105);
        });
    });
    describe("toString() method", () => {
        it("returns a string representation of the SavingsAccount", () => {
            assert.strictEqual("SavingsAccount 1: balance: 105 interest: 5", savings.toString());
        });
    });
    describe("endOfMonth() method", () => {
        it("returns a string saying that interest was added", () => {
            savings.withdraw(5);
            assert.strictEqual(savings.endOfMonth(), "Interest added SavingsAccount 1: balance: 100 interest: 5");
        });
    });

});
describe("CheckingAccount", () => {
    let checking = undefined;
    describe("constructor(number, overdraft)", () => {
        it("takes a number and the overdraft limit and makes a checking account", () => {
            checking = new chk.CheckingAccount(1, 200);
            assert.strictEqual(checking.getNumber(), 1);
            assert.strictEqual(checking.getOverdraft(), 200);
            assert.strictEqual(checking.constructor, chk.CheckingAccount);
        });
    });
    describe("overdraft getter / setter", () => {
        it("can get the overdraft limit for this account", () => {
            assert.strictEqual(checking.getOverdraft(), 200);
        });
        it("can set the overdraft limit for this account", () => {
            checking.setOverdraft(250);
            assert.strictEqual(checking.getOverdraft(), 250);
        });
    });
    describe("withdraw(amount) method", () => {
        it("can withdraw into negative up to the overdraft limit", () => {
            checking.withdraw(200);
            assert.strictEqual(checking.getBalance(), -200);
        });
        it("throws an error if you go beyond the limit", () => {
            let makeError = () => {
                checking.withdraw(100);
            };
            assert.throws(makeError, Error, "Insufficient funds, cannot withdraw beyond overdraft limit");
        });
        it("throws a RangeError if you give a number <= 0", () => {
            let makeError = () => {
                checking.deposit(-1);
            };
            assert.throws(makeError, RangeError, "Deposit amount has to be greater than zero");
        });
    });
    describe("toString() method", () => {
        it("returns a string representation of the SavingsAccount", () => {
            assert.strictEqual("CheckingAccount 1: balance: -300 overdraft limit: 250", checking.toString());
        });
    });
    describe("endOfMonth() method", () => {
        it("returns a warning string when the balance is below zero", () => {
            assert.strictEqual(checking.endOfMonth(), "Warning, low balance CheckingAccount 1:balance: -300 overdraft limit: 250");
        });
        it("returns an empty string when balance above zero", () => {
            checking.deposit(1000);
            assert.strictEqual(checking.endOfMonth(), "");
        });
    });
});
describe("Bank Class", () => {
    let bank = undefined;
    describe("constructor()", () => {
        it("creates a Bank object", () => {
            bank = new bnk.Bank();
            assert.strictEqual(bank.constructor, bnk.Bank);
            assert.strictEqual(bank._accounts.length, 0);
        });
    });
    describe("addAccount()", () => {
        it("adds an Account object to it array", () => {
            bank.addAccount();
            assert.strictEqual(bank._accounts[0].getNumber(), 1);
            assert.strictEqual(bank._accounts[0].getBalance(), 0);
        });
    });
    describe("addSavingsAccount(interest)", () => {
        it("adds an SavingsAccount object to it array", () => {
            bank.addSavingsAccount(2.5);
            assert.strictEqual(bank._accounts[1].getNumber(), 2);
            assert.strictEqual(bank._accounts[1].getBalance(), 0);
            assert.strictEqual(bank._accounts[1].getInterest(), 2.5);
        });
    });
    describe("addCheckingAccount(overdraft)", () => {
        it("adds an CheckingAccount object to it array", () => {
            bank.addCheckingAccount(500);
            assert.strictEqual(bank._accounts[2].getNumber(), 3);
            assert.strictEqual(bank._accounts[2].getBalance(), 0);
            assert.strictEqual(bank._accounts[2].getOverdraft(), 500);
        });
    });
    describe("closeAccount(number)", () => {
        it("closes the account with the given number", () => {
            bank.closeAccount(1);
            assert.strictEqual(bank._accounts.length, 2);
            assert.strictEqual(bank._accounts[1].getNumber(), 3);
            assert.strictEqual(bank._accounts[1].getBalance(), 0);
            assert.strictEqual(bank._accounts[1].getOverdraft(), 500);
        });
    });
    describe("accountReport()", () => {
        it("returns a string describing all accounts", () => {
            assert.strictEqual(bank.accountReport(), "SavingsAccount 2: balance: 0 interest: 2.5\nCheckingAccount 3: balance: 0 overdraft limit: 500\n");
        });
    });
    describe("endOfMonth()", () => {
        it("returns a string with actions related to the accounts", () => {
            bank._accounts[0].deposit(100);
            bank._accounts[1].withdraw(100);
            bank.addAccount();
            assert.strictEqual(bank.endOfMonth(), "Interest added SavingsAccount 2: balance: 102.5 interest: 2.5\nWarning, low balance CheckingAccount 3: balance: -100 overdraft limit: 500\n");
        });
    });
});