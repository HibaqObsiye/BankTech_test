const BankStatement = require("../src/bankStatement");

describe('Account', () => {

    it('returns the statement layout', () => {
        const fakeAccount = {
            transactions: []
          }
        const statement = new BankStatement(fakeAccount);
        expect(statement.printStatement()).toBe('date || credit || debit || balance');
    });

    it('returns statement layout with a transaction included', () => {
        const fakeAccount = {
          transactions: [{date: '16/11/2022', amount: 20, balance: 20}]
        }
        const statement = new BankStatement(fakeAccount);
        expect(statement.printStatement()).toBe('date || credit || debit || balance\n16/11/2022 || 20.00 || 20.00');
      });
    
    it('returns multiple transaction lines', () => {
        const fakeAccount = {
          transactions: [
            {date: '16/11/2022', amount: 20, balance: 20},
            {date: '17/11/2022', amount: 20, balance: 40},
            {date: '18/11/2022', amount: 20, balance: 60},
          ]
        }
        const statement = new BankStatement(fakeAccount);
        expect(statement.printStatement()).toBe('date || credit || debit || balance\n18/11/2022 || 20.00 || 60.00\n17/11/2022 || 20.00 || 40.00\n16/11/2022 || 20.00 || 20.00');
    });

});