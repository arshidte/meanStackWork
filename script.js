// var text = "hello hai hello hai";
// var wc = {};
// var words = text.split(" ").map(word=>word in wc?wc[word]+=1:wc[word]=1);
// console.log(wc);
// for(let word of words){
//     if(word in wc){
//         wc[word]+=1;
//     }else{
//         wc[word] = 1;
//     }
// }
// console.log(wc);


//Recursive character

// var text = "ABAAC";
// var wc = {};
// for(let char of text){
//     if(char in wc){
//         console.log(`The first recursive character is ${char}`);
//         break;
//     }else{
//         wc[char]=1;
//     }
// }

//Method 2
// var op = [];
// text.split("").map(char=>char in wc?op.push(char):wc[char]=1);
// console.log(op[0]);

//Method 3
// Array.from(text).map(char=>char in wc?op.push(char):wc[char]=1);
// console.log(op[0]);

//Spread operator
// var findMax=((... args)=>args.reduce((n1,n2)=>n1>n2?n1:n2));
// console.log(findMax(10,20,40));

////////////////////////////////////////////////////////////////////////////////

//count each words
// var text = "car bus lorry bike car lorry auto bike";
// var wc={};
// text.split(" ").map(wd=>wd in wc?wc[wd]+=1:wc[wd]=1);
// console.log(wc);

// var words = text.split(" ");
// for(let el of words){
//     if(el in wc){
//         wc[el]+=1;
//     }else{
//         wc[el]=1;
//     }
// }
// console.log(wc);

//Recursive character

// var text = 'ASDGEDGHTS';
// var wc = {};

// for(let char of text){
//     if(char in wc){
//         console.log(`The first recursive character is ${char}`);
//         break;
//     }else{
//         wc[char]=1;
//     }
// }

// var op = [];
// text.split("").map(char=>char in wc?op.push(char):wc[char]=1)
// console.log(op[0]);
//or can be written like this
// Array.from(text).map(char=>char in wc?op.push(char):wc[char]=1);
// console.log(op[0]);

