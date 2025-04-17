/* Foydalanuvchi yil kiritadi. Agar kabisa bo‘lsa, “Kabisa yili”, bo‘lmasa “Oddiy yil” chiqsin.*/
// const year = prompt("Enter year: ")
// if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0){
//     console.log(`${year} kabisa yil `);
// }
// else{
//     console.log(`${year} kabisa emas`);
// }

/*3 ta son kiritiladi. Ular orasidan o‘rtadagi son aniqlansin.*/
// const num1 = +prompt("Enter number 1: ")
// const num2 = +prompt("Enter number 2: ")
// const num3 = +prompt("Enter number 3: ")
// if(num1 > num2 && num1 < num3){
//     console.log(`${num1} Bu son o'rtacha son`);
// }
// else if (num2 > num1 && num2 < num3){
//     console.log(`${num2} Bu son o'rtacha`);    
// }
// else if(num3 > num2 && num3 < num1 ){
//     console.log(`${num3} Bu son o'rtacha`);
// }
// // else if(num1 == num2 || num2 == num3 || num3 == num1){
// //     console.log("ikkita son bir xil o'rtacha topilmaydi bundan");
// // }
// else if (!/^\d+$/.test(num1,num2,num3)){
//     alert("Iltimos raqam kiriting")
// }
// else{
//     alert("Bir xil son kiritilgan bo'lishi mumkun bunday xolda o'rta raqam topilmaydi");
// }

 /*Foydalanuvchi parol kiritadi. Kuchli, o‘rtacha yoki zaif parol deb chiqsin.*/
// const password = prompt("Enter password")
// if(/[0-9]/.test(password) && /[a-zA-Z]/.test(password) && /[^a-zA-Z0-9]/.test(password) && password.length >= 10){
//     alert("Parolingiz juda kuchli 💪");
// }
// else if(/[0-9]/.test(password) &&  /[a-z]/.test(password) || password.length == 8 ){
//     alert("Parolingiz o'rtacha")
// }
// else{
//     alert("Parolingiz zaif almashtring")
// }

// let score = +prompt("Balingizni(0-100):");
// let grade = Math.floor(score / 10);

/*Foydalanuvchi 0–100 oralig‘ida baho kiritadi. switch orqali A/B/C/D/F reyting chiqsin*/
// switch (grade) {
//   case 10:
//   case 9:
//     alert("A - Zo'r 🌟");
//     break;
//   case 8:
//     alert("B - Yaxshi 😊");
//     break;
//   case 7:
//     alert("C - O‘rtacha 😐");
//     break;
//   case 6:
//     alert("D - Yomon 😕");
//     break;
//   default:
//     alert("F - Imtihondan o‘ta olmadingiz 😢");
// }
/*Foydalanuvchi login holatini va rolini kiritsin. Admin/editor/user bo‘lishi mumkin. Har biriga alohida xabar chiqsin.*/
// let isLogged = confirm("Tizimga kirdingizmi?");

// if (isLogged) {
// let vazifa = prompt("Vazifangizni kiriting: admin, editor yoki user");
//   if (vazifa === "admin") {
//     alert("Xush kelibsiz Admin! ");
//   } else if (vazifa === "editor") {
//     alert("Xush kelibsiz Tahrirchi! ");
//   } else if (vazifa === "user") {
//     alert("Xush kelibsiz Foydalanuvchi! 👤");
//   } else {
//     alert("Vazifa topilmadi ");
//   }
// } else {
//   alert("Iltimos, avval tizimga kiring ");
// }

// let age = +prompt("Yoshingizni kiriting");
// let result = age >= 18 ? "Voyaga yetgansz" : "siz voyaga yetmagansiz";
// console.log(result);

// const num = +prompt("Sonni kiriting");
// const evenOdd = num % 2 == 0 ? "bu son juft" : "bu raqam toq";
// alert(evenOdd);

const productPrice = +prompt("Xaridingiz umumiy narxi qancha?");
const seil = productPrice >= 100 ? `xaridingiz ${productPrice} bo'lgani uchun Sizga 12%chegirma qilamiz` : "sizga chegirma yo'q";
console.log(seil);

 
