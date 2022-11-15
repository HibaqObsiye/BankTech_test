class Transaction{
    constructor(account){
        this.account = account
    }

    dateNow(){
        const date = new Date
        return date.toLocaleString().split(',')[0]
    }

    deposit(amount){
        this.account.sumbitTransaction(this.dateNow(), amount )
    }

    withdraw(amount){
        this.account.sumbitTransaction(this.dateNow(), - amount)
    }


}

module.exports = Transaction;