class bankAccount {
    constructor(name, balance, active, notFrozen){
        this._name = name
        this._accNo = this.generateAccountNo()
        this._balance = balance
        this._active = active 
        this._notFrozen = notFrozen 
        
    }

    generateAccountNo(){
        return Math.floor(1000000000 + Math.random() * 9000000000)

}   
    deposit(money){

        
        

        
        if(this._active && this._notFrozen && money > 0){
            this._balance += money
            return `Your balance: ${this._balance}`
        }else if(!this._active) {
            return 'Please visit bank to activate your account'
        }else if(!this._notFrozen){
            return 'Sorry, your account has been frozen'
        }else if(this._active && this._notFrozen && money == 0){
            return 'amount must be greater than 0'
        }
        
}

    withdraw(amount){
        if(this._active && this._notFrozen && amount < this._balance){
            this._balance -= amount
            console.log('Withdraw successful');
            
            return `Your balance: ${this._balance}`
        } else if (amount > this._balance){
            return 'Insufficient balance'
        }else if(!this._active || !this._notFrozen){
            return 'Your account is either deactivated or frozen, please kindly visit your bank'
        }
    }
    accountType(){
        if(this._balance <= 100000){
            return 'savings'
        }else if (this._balance > 100000 && this._balance < 1000000) {
            return 'current'
        }else {
            return 'invalid account type'
        }

}

        transfer(payment){
            let sender = this._active && this._notFrozen
            let receiver = this._active && this._notFrozen
            if(sender && receiver && payment < this._balance){
                 this._balance -= payment
                console.log('Transfer successful');
                
                return `Remaining balance: ${this._balance}`
            } else if(!sender || !receiver){
                return 'Failed transfer, please visit your bank for more details'
            } else if(payment >= this._balance){
                return 'Insufficient balance'
            }
        }
}

const user1 = new bankAccount('Doris',900000, true, true)

// console.log(user1);
// user1.deposit(1000)
// console.log(user1)
console.log(user1)
// console.log(user1.withdraw(2000));

// console.log(user1.accountType());
// console.log(user1.deposit(110));
console.log(user1.transfer(100));






