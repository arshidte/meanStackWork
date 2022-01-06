class Bank {
    accounts = {
        1000: {
            accno: 1000, personName: "ram", balance: 5000, password: "userone", transactions: {
                creditTransactions: [],
                debitTransactions: []
            }
        },
        1001: {
            accno: 1001, personName: "ravi", balance: 7000, password: "usertwo", transactions: {
                creditTransactions: [],
                debitTransactions: []
            }
        },
        1002: {
            accno: 1002, personName: "raju", balance: 8000, password: "userthree", transactions: {
                creditTransactions: [],
                debitTransactions: []
            }
        },
        1003: {
            accno: 1003, personName: "vivek", balance: 15000, password: "userfour", transactions: {
                creditTransactions: [],
                debitTransactions: []
            }
        },
    }
    session = {}
    validateAccountNumber(acno) {
        return acno in this.accounts ? true : false;
    }

    authenticate(acno, password) {
        if(this.validateAccountNumber(acno)){
            let pwd = this.accounts[acno].password;
            if(password==pwd){
                console.log('Access granted');
                this.session['user']=acno
            }else{
                console.log('Password is incorrect');
            }
        }else{
            console.log('Invalid account number');
        }
    }


    getBalance(acno){
        return this.accounts[acno].balance;
    }

    balanceEnquiry(){
        if(this.session['user']){
            let loggedUser = this.session['user'];
            console.log(this.getBalance(loggedUser));
        }else{
            console.log('Sorry! Please login.');
        }
    }
    loginRequired(){
        return 'user' in this.session ? true : false;
    }

    loggedUser(){
        return this.loginRequired()?this.session['user']:false;
    }
    fundTransfer(to_acno,amount){
        if(this.loginRequired()){
            if(this.validateAccountNumber(to_acno)){
                let myAcno = this.session['user'];
                let bal = this.getBalance(myAcno);
                if(amount>bal){
                    console.log('Insufficient balance');
                }else{
                    this.accounts[myAcno].balance-=amount;
                    this.accounts[to_acno].balance+=amount;

                    let credTrans = {from:myAcno, amount:amount};
                    let debTrans = {to:to_acno, amount:amount};

                    this.accounts[to_acno].transactions.creditTransactions.push(credTrans);
                    this.accounts[myAcno].transactions.debitTransactions.push(debTrans);
                    console.log(this.accounts[myAcno].transactions);
                    console.log(this.accounts[to_acno].transactions);
                }
            }else{
                console.log('Incorrect to_account number');
            }
        }else{
            console.log('Sorry! Please login.');
        }
    }

    debitTransactions(){
        let user = this.loggedUser()
        if(user){
            console.log(this.accounts['user'].transactions);
        }
    }

}


var bank = new Bank();

console.log(bank.validateAccountNumber(1000));
bank.authenticate(1000,'userone');
bank.balanceEnquiry();
bank.fundTransfer(1001,1000)
bank.fundTransfer(1002,1000)
bank.debitTransactions();