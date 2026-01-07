const bankAccount = {
  owner: "Harun",
  balance: 1000,

  deposit(amount) {
    this.balance += amount;
    console.log(`Yeni bakiye :${this.balance}`);
  },

  withdraw(amount) {
    if (amount > this.balance) {
      console.log("Yetersiz Bakiye");
    } else {
      this.balance -= amount;
      console.log("Kalan Bakiye :" + this.balance);
    }
  },

  showBalance() {
    console.log(`Mevcut bakiye: ${this.balance}`);
  },
};

bankAccount.deposit(2000);
bankAccount.deposit(-2000);
bankAccount.showBalance();
