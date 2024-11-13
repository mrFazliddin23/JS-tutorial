//Task1
const age = +prompt("How old are you?", '')
if (age >= 50){
    console.log("Siz qariyabsz")
}
else{
    console.log("Siz yoshsiz");
    
}
/* Task2:*/
const price = +prompt("Somsa narxi qancha?")
if (price > 3000){
    console.log("Qimmat");
}
else{
    console.log("Arzon");
}
//Task3:
const password = prompt("Enter Password")
switch(password){
    case 'sarimsoqpiyoz':
        alert("Hello");
        break;
    default:
        alert("Parol xato");
}
//Task4
const salary = Number(prompt("Oyligingiz soliqlardan tashqari qancha?"))
let perYear = 0
for (let i = 1; i <= 12; i++){
    perYear += salary 
}
console.log(`Sizning yillik topadigan pulingiz ${perYear} mln`);
//Task5:
// const salary = Number(prompt("Oyligingiz soliqlardan tashqari qancha?"))
// let xarajatlar = (salary * 90)/100;
// let birOydaYigilganPul = salary - xarajatlar
// let birYildaToplanganPul = birOydaYigilganPul * 12
// console.log("Siz bir yilda " + birYildaToplanganPul + " mln pul yig'asz");







