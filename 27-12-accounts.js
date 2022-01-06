var accounts = [
    {
        acno: 1000, ac_type: "savings", balance: 5000, transactions: [
            { to: 1001, amount: 500, note: "ebill", method: "g-pay" },
            { to: 1002, amount: 600, note: "geto", method: "neft" },
            { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
        ]
    },
    {
        acno: 1001, ac_type: "savings", balance: 6000, transactions: [
            { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
            { to: 1002, amount: 500, note: "geto", method: "neft" },
            { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }

        ]
    },
    {
        acno: 1002, ac_type: "current", balance: 8000, transactions: [
            { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
            { to: 1001, amount: 5000, note: "geto", method: "neft" },
            { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }

        ]
    },
    {
        acno: 1003, ac_type: "current", balance: 16000, transactions: [
            { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
            { to: 1002, amount: 500, note: "geto", method: "neft" },
            { to: 1001, amount: 100, note: "erchrge", method: "phone-pay" }

        ]
    },
]

//1. Total number of accounts

// let acnts = accounts.length;
// console.log(acnts);


//2. Print all account numbers with ac-type savings

// let savingAcnts = accounts.filter(data=>data.ac_type=="savings").forEach(data=>console.log(data.acno));

//3. Print balance of acno=1000

// var balance = accounts.find(data=>data.acno==1000).balance
// console.log(balance);

//4. Print all g-pay transaction details of all accounts

// var gpay = accounts.map(data=>data.transactions).flat().filter(data=>data.method=="g-pay").forEach(data=>console.log(data));

//5. Print credit transactions of 1002

// var trans = accounts.map(data=>data.transactions).flat().filter(data=>data.to==1002).forEach(data=>console.log(data));

//6. Print highest balance account details

// var highBal = accounts.sort((d1,d2)=>d2.balance-d1.balance)[0];
// console.log(highBal);

// 7. Print transaction history of 1002 (Concatenated output of credit and debit transactions)

// var transout1002 = accounts.find(data=>data.acno==1002).transactions;
// var transout1002 = accounts.filter(data=>data.acno==1002).map(data=>data.transactions).flat();

// var transin1002 = accounts.map(data=>data.transactions).flat().filter(data=>data.to==1002);
// var res = {"Credit transactions":transin1002,"Debit transactions":transout1002};
// console.log(res);

//8. Note ercharge and method phone-pay

// var res = accounts.map(data=>data.transactions).flat().filter(data=>data.note=="erchrge"&&data.method=="phone-pay");
// console.log(res);