class BankAccount {
    constructor(name, balance){
        this._name = name
        this._balance = balance
    }

    deposit(money){

        
        
        if(money === 0){
            return 'invalid amount'
        }else {
            this._balance += money
            return this._balance
        }
    }
    withdraw(amount){
        
        if (amount >= this._balance){
            return 'insufficient funds'
        }else if(amount < this._balance) {
            this._balance -= amount
            return this._balance
        }
        
    } 
    get balance(){
       return this._balance

    }
    set balance(value){
        if(value <= 0){
            console.log('invalid amount')
        }else {
            this._balance = value
            
        }
    }
    getInfo(){
        `You have ${this._balance}`
    }

    static bankName(){
        return "Guaranty Trust Bank"
    }

}
user1 = new BankAccount('Doris', -100)
user1.balance = -100
// console.log(user1);
// console.log(user1.deposit(10));
// console.log(user1.withdraw(4000));
console.log(BankAccount.bankName())
console.log(user1.balance);












