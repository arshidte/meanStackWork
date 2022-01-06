var mobiles = [
    [1001,"samsung","samsung A51",32000,"snapdragon","AMOLED","5G"],
    [1002,"redmi","note 10 pro",15000,"snapdragon","LED","4g"],
    [1003,"redmi","mi 11 lite",30000,"mediatek","LED","4g"],
    [1004,"apple","12 pro",72000,"snapdragon","AMOLED","4g"],
    [1005,"apple","12 pro max",100000,"snapdragon","AMOLED","5G"],
    [1006,"one plus","nord 2",29000,"snapdragon","AMOLED","4g"],
    [1007,"one plus","nord 2",15000,"mediatek","LED","4g"],
]

// var ans = mobiles.reduce((m1,m2)=>m1[3]<m2[3]?m1:m2)[3];
// var max = mobiles.filter(mob=>mob[3]===ans);
// console.log(max);

//some (Is there any mobiles available below 10,000)
//returns boolean values

// var isAvailable = mobiles.some(mob=>mob[3]<=16000);
// console.log(isAvailable);

// var check = mobiles.some(mob=>mob[3]>=10000 && mob[3]<=15000);
// console.log(check);

// var find = mobiles.find(mob=>mob[0]==1000);
// console.log(find);

var covid_data = [
    [1,"Tvm",40000,200,38000,8,5],
    [2,"Kollam",35000,250,33000,7,3],
    [3,"Ktym",50000,500,45000,5,2],
    [4,"Alapy",25000,150,24000,9,5],
    [5,"Ekm",70000,500,65000,9,5],
    [6,"Tsr",65000,550,60000,8,7],
    [7,"idk",1000,50,9500,10,6],
]

//Highest cases
// var highcase = covid_data.reduce((c1,c2)=>c1[2]>c2[2]?c1:c2);
// console.log(highcase);

//Highest first dose vaccination
// var highdose = covid_data.reduce((c1,c2)=>c1[5]>c2[5]?c1:c2)[5]
// var dist = covid_data.filter(val=>val[5]==highdose);
// console.log(dist);

//Lowest death cases
// var lowCase = covid_data.reduce((c1,c2)=>c1[3]<c2[3]?c1:c2)[3];
// var dist = covid_data.filter(val=>val[3]==lowCase);
// console.log(dist);

//Sort districts based on first dose
// var sortFirst = covid_data.sort((c1,c2)=>c2[5]-c1[5]);
// console.log(sortFirst);

//Is there any dist with +ve cases gt 60000
// var isThere = covid_data.some(c1=>c1[2]>60000);
// console.log(isThere);

//Print thrissur details
// var tsr = covid_data.filter(c1=>c1[1]=="Tsr");
// console.log(tsr);

//Total number of positive cases
// var totalPos = covid_data.reduce((c1,c2)=>c1[2]+c2[2]);
// console.log(totalPos);

