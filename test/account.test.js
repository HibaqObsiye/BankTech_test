const Account = require('../src/account')

describe('Account', () => {

    it('has an initial balance of 0', () => {
      const account = new Account;
      expect(account.balance).toEqual(0);
    });

    it('creates and stores a transaction inside an array', () => {
        const account = new Account;
        account.sumbitTransaction("15/11/2022",22)

        expect(account.transactions).toEqual([ { date: '15/11/2022', amount: 22, balance: 22 } ])
    });

    it('stores the correct balance of transactions made', () => {
        const account = new Account;
        account.sumbitTransaction("15/11/2022",22)
        account.sumbitTransaction("16/11/2022",40)
        expect(account.balance).toEqual(62)
    });

    it('stores an array of multiple transactions', () => {
        const account = new Account;
        account.sumbitTransaction("15/11/2022",22)
        account.sumbitTransaction("16/11/2022",40)
        
        expect(account.transactions).toEqual([
            { date: '15/11/2022', amount: 22, balance: 22 },
            { date: '16/11/2022', amount: 40, balance: 62 }
          ])
    })
    









});