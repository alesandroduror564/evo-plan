/*
Filename: ComplexJavaScriptCode.js

Description:
This code demonstrates a complex and sophisticated JavaScript program that implements a banking system.
It includes various functionalities such as creating accounts, depositing and withdrawing money, transferring funds between accounts, and calculating interest.

Please note that this code is for demonstration purposes only and may not be a fully functional banking system.
*/

// Define a class for Bank Account
class BankAccount {
  constructor(accountNumber, accountHolderName, balance) {
    this.accountNumber = accountNumber;
    this.accountHolderName = accountHolderName;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
    console.log(`Amount ${amount} deposited successfully. New balance: ${this.balance}`);
  }

  withdraw(amount) {
    if (this.balance >= amount) {
      this.balance -= amount;
      console.log(`Amount ${amount} withdrawn successfully. New balance: ${this.balance}`);
    } else {
      console.log(`Insufficient balance. Available balance: ${this.balance}`);
    }
  }

  getAccountInfo() {
    console.log(`Account Number: ${this.accountNumber}`);
    console.log(`Account Holder Name: ${this.accountHolderName}`);
    console.log(`Current Balance: ${this.balance}`);
  }
}

// Define a class for Bank
class Bank {
  constructor(name) {
    this.name = name;
    this.accounts = [];
  }

  createAccount(accountNumber, accountHolderName, initialBalance) {
    const account = new BankAccount(accountNumber, accountHolderName, initialBalance);
    this.accounts.push(account);
    console.log(`Account created successfully. Account Number: ${accountNumber}`);
  }

  deposit(accountNumber, amount) {
    const account = this.findAccount(accountNumber);
    if (account) {
      account.deposit(amount);
    } else {
      console.log(`Account with number ${accountNumber} not found.`);
    }
  }

  withdraw(accountNumber, amount) {
    const account = this.findAccount(accountNumber);
    if (account) {
      account.withdraw(amount);
    } else {
      console.log(`Account with number ${accountNumber} not found.`);
    }
  }

  transfer(sourceAccountNumber, destinationAccountNumber, amount) {
    const sourceAccount = this.findAccount(sourceAccountNumber);
    const destinationAccount = this.findAccount(destinationAccountNumber);

    if (sourceAccount && destinationAccount) {
      if (sourceAccount.balance >= amount) {
        sourceAccount.withdraw(amount);
        destinationAccount.deposit(amount);
        console.log(`Transferred ${amount} from account ${sourceAccountNumber} to account ${destinationAccountNumber}`);
      } else {
        console.log(`Insufficient balance in account ${sourceAccountNumber}.`);
      }
    } else {
      console.log(`One or both accounts not found.`);
    }
  }

  findAccount(accountNumber) {
    return this.accounts.find(account => account.accountNumber === accountNumber);
  }
}

// Create a new Bank instance
const myBank = new Bank("My Bank");

// Create some accounts
myBank.createAccount(1001, "John Doe", 1000);
myBank.createAccount(1002, "Jane Smith", 500);
myBank.createAccount(1003, "Mike Johnson", 2000);

// Deposit money into an account
myBank.deposit(1001, 500);

// Withdraw money from an account
myBank.withdraw(1002, 200);

// Transfer funds between accounts
myBank.transfer(1002, 1001, 300);

// Get account information
myBank.findAccount(1001).getAccountInfo();
myBank.findAccount(1002).getAccountInfo();
myBank.findAccount(1003).getAccountInfo();
