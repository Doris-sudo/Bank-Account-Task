# 🏦 Bank Account System (JavaScript Class Challenge)

## 📌 Objective

Create a `BankAccount` class that simulates basic banking operations using JavaScript classes.

---

## 🔷 1. Constructor

Create a constructor that accepts:

* `name`
* `balance`

Store them as:

```js
this._name
this._balance
```

---

## 🔷 2. Deposit Method

Create a method:

```js
deposit(amount)
```

### Requirements:

* Adds `amount` to the balance
* Returns the updated balance

---

## 🔷 3. Withdraw Method

Create a method:

```js
withdraw(amount)
```

### Requirements:

* Subtracts `amount` from balance
* If `amount > balance` → return `"Insufficient funds"`
* Otherwise → return updated balance

---

## 🔷 4. Getter

Create a getter:

```js
get balance()
```

### Requirements:

* Returns the current balance

---

## 🔷 5. Setter (Validation)

Create a setter:

```js
set balance(value)
```

### Requirements:

* Balance cannot be negative
* If negative → return `"Invalid amount"`
* Otherwise → update the balance

---

## 🔷 6. Account Info Method

Create a method:

```js
getInfo()
```

### Requirements:

Return a string like:

```
"Doris has ₦5000"
```

---

## 🔷 7. Static Method

Create a static method:

```js
static bankName()
```

### Requirements:

Return:

```
"GT Bank"
```

### Usage:

```js
BankAccount.bankName()
```

---

## 🔷 8. Bonus (Optional)

Add a private property:

```js
#transactions = []
```

### Requirements:

* Record every deposit and withdrawal

---

## 🧪 Example Usage

```js
const acc = new BankAccount("Doris", 1000);

acc.deposit(500);       // 1500
acc.withdraw(200);      // 1300
acc.withdraw(2000);     // "Insufficient funds"

console.log(acc.balance);

acc.balance = -100;     // "Invalid amount"

console.log(acc.getInfo());
// "Doris has ₦1300"

console.log(BankAccount.bankName());
```

---

## 🚀 What You’ll Practice

* Classes & Constructors
* Methods
* Getters & Setters
* Static Methods
* Validation Logic
* Private Fields (Bonus)

---

💡 **Instructions:**
Write the full class implementation and test it using the example above.




------> Account Type Validation

Only two account types are allowed.

- Savings
- Current

If any other account type is entered, the application returns:

```
Invalid account type

------->Deposit

Users can deposit money into their accounts.

Conditions

- Account must be active.
- Account must not be frozen.
- Deposit amount must be greater than zero.
------> Withdrawal

Users can withdraw money.

Conditions

- Account must be active.
- Account must not be frozen.
- Balance must be sufficient.
-If balance is insufficient

```
Insufficient Balance
```

Otherwise

```
Sufficient Balance
Withdrawal Successful
------> Transfer

Users can transfer money to another account.

Conditions

- Sender account must be active.
- Receiver account must be active.
- Sender account must not be frozen.
- Receiver account must not be frozen.
- Sender must have sufficient balance.
-Successful Transfer

```
Sufficient Balance
Transfer Successful
```

Failed Transfer

```
Insufficient Balance
------>