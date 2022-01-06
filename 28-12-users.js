var users = {
    1000: { accno: 1000, personName: "ram", balance: 5000, password: "userone", transactions: [
        {creditTransactions:[]},
        {debitTransactions:[]}
    ] },
    1001: { accno: 1001, personName: "ravi", balance: 7000, password: "usertwo", transactions: [
        {creditTransactions:[]},
        {debitTransactions:[]}
    ] },
    1002: { accno: 1002, personName: "raju", balance: 8000, password: "userthree", transactions: [
        {creditTransactions:[]},
        {debitTransactions:[]}
    ] },
    1003: { accno: 1003, personName: "vivek", balance: 15000, password: "userfour", transactions: [
        {creditTransactions:[]},
        {debitTransactions:[]}
    ] },
}

//These are nested objects. So, array methods cannot be applied here.(filter,reduce,map etc.)

//Name of 1003
// console.log(users[1003].personName);

//1005 exist or not
// console.log("1005" in users);


//Authentication

// function authenticate(ac_num,password){
//     if(ac_num in users){
//         let pwd = users[ac_num].password;
//         if(pwd==password){
//             return 1;
//             // console.log("Access granted");
//         }else{
//             return -1
//             // console.log("Invalid password");
//         }
//     }else{
//         return 0
//         // console.log("Invalid account number");
//     }
// }

// console.log(authenticate(1008,"userone"));

//Fund transfer
function acntValidate(acnt_no) {
    return acnt_no in users ? true : false;
}

function fundTransfer(from_acno, to_acno, amount) {
    if (acntValidate(from_acno) && acntValidate(to_acno)) {
        let bal = users[from_acno].balance;
        if (amount > bal) {
            console.log("Insuffiecient balance");
        } else {
            users[from_acno].balance -= amount;
            users[from_acno].transactions
                users[to_acno].balance += amount;
            console.log(`Account number ${from_acno}'s balance is ${balanceEnquiry(from_acno)}`);
            console.log(`Account number ${to_acno}'s balance is ${balanceEnquiry(to_acno)}`);

            crTrans = {from:`${from_acno}`, Amount:amount};
            dbTrans = {to: `${to_acno}`, Amount:amount};

            users[to_acno].transactions[0].creditTransactions.push(crTrans);
            users[from_acno].transactions[1].debitTransactions.push(dbTrans);
            console.log(users[to_acno].transactions[0]);
            console.log(users[from_acno].transactions[1]);
        }
    } else {
        console.log("Incorrect account number(s)");
    }
}

fundTransfer(1003, 1001, 4000);

//Balance enquiry

function balanceEnquiry(acnt_num) {
    if (acntValidate(acnt_num)) {
        return users[acnt_num].balance;
    } else {
        console.log("Invalid account number");
    }
}