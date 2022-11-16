const Transaction = require('../src/transaction')
//Account = require('../src/account')

describe('Transaction', () => {

      it('has a "deposit money" feature', () => {
            const fakeAccount = {
            balance: 200,
            sumbitTransaction: (date, amount) => {}
            }
            const transaction = new Transaction(fakeAccount);
            transaction.deposit(200);
            expect(fakeAccount.balance).toBe(200);
      });

      it('has a "withdraw money" feature', () => {
            const fakeAccount = {
            balance: -10,
            sumbitTransaction: (date, amount) => {}
            }
            const transaction = new Transaction(fakeAccount);
            transaction.deposit(-10);
            expect(fakeAccount.balance).toBe(-10);
      });

      

});