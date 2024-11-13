//Task1
// const age = +prompt("How old are you?", '')
// if (age >= 50){
//     console.log("Siz qariyabsz")
// }
// else{
//     console.log("Siz yoshsiz");
// }
/* Task2:*/
// const price = +prompt("Somsa narxi qancha?")
// if (price > 3000){
//     console.log("Qimmat");
// }
// else{
//     console.log("Arzon");
// }
//Task3:
// const password = prompt("Enter Password")
// switch(password){
//     case 'sarimsoqpiyoz':
//         alert("Hello");
//         break;
//     default:
//         alert("Parol xato");
// }
//Task4
// const salary = Number(prompt("Oyligingiz soliqlardan tashqari qancha?"))
// let perYear = 0
// for (let i = 1; i <= 12; i++){
//     perYear += salary 
// }
// console.log(`Sizning yillik topadigan pulingiz ${perYear} mln`);
//Task5:
// const salary = Number(prompt("Oyligingiz soliqlardan tashqari qancha?"))
// let xarajatlar = (salary * 90)/100;
// let birOydaYigilganPul = salary - xarajatlar
// let birYildaToplanganPul = birOydaYigilganPul * 12
// console.log("Siz bir yilda " + birYildaToplanganPul + " mln pul yig'asz");

// ------------------------------------//
//task: 6
// for (let i = 1; i <= 100; i++){
//     if(i % 3 == 0){
//         console.log("FIZZ");        
//     }
//     else if (i % 5 == 0) {
//         console.log("BUZZ");        
//     }
//     else if (i % 3 == 0 && i % 5 == 0){
//         console.log("FIZZBUZZ");
//     }
//     else{
//         console.log(i);   
//     }
    
// }

// TAsk7: uch xonali Armstrong raqamlarni topish
// const armstrongNums = [];
// const notArmstrong = [];
// for(let i = 100; i <= 999; i++){
//     lastNum = i % 10
//     middleNum = Math.floor((i % 100) / 10)
//     firstNum = Math.floor(i / 100)
//     lastNumKub = (lastNum*lastNum*lastNum )
//     middleNumKub = (middleNum*middleNum*middleNum)
//     firstNumkub = (firstNum*firstNum*firstNum)
//     sum = lastNumKub + middleNumKub + firstNumkub
//     if(i == sum){
//     armstrongNums.push(i);
//     }
//     else{
//         notArmstrong.push(i);
//     }
// }
// console.log(armstrongNums);
// console.log(notArmstrong);

/* Task8: 
*  
* *  
* * *  
* * * *  
* * * * * */
// let i, j, char = "";
// for(let i = 2; i < 10; i++){
//        for(let j = 1; j < i; j++){
//         char = char + ("*  ");
//     }    
//     console.log(char);
//     char = "";
// }

//Task9
let arr1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2]; 
let arr2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26];
let sumArr1 = 0;
let result;
for(let i = 0; i < arr1.length; i++){
    sumArr1 += arr1[i] 
}
let sumArr2 = 0;
let j = 0;
while (j < arr2.length){
    sumArr2 += arr2[j]
    j++;
}
console.log(result = sumArr1 + sumArr2);






