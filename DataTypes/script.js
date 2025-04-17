/* S  Y   M  B  O  L  datatypes */ 
/* Har bir Symbol() chaqiruvi — hatto bir xil nom bilan bo‘lsa ham — yangi va yagona qiymat beradi.*/
/* Symbol yaratishda description berish mumkin — bu faqat tushunishga yordam beradi, lekin qiymatga ta'sir qilmaydi.*/
// let sym = Symbol("userID");
// console.log(sym.description); // "userID"
/*Object key sifatida ishlatiladi: Symbol'lar odatdagi property key'lar kabi ishlatiladi, ammo ular:
Object.keys(), for...in, JSON.stringify() orqali ko‘rinmaydi
Faqat Object.getOwnPropertySymbols() bilan ko‘rinadi*/

// const secretID = Symbol("myId");
// const user ={
//     name: 'Fazliddin',
//     year: 2003,
//     [secretID]: '02032003f'
// };
// console.log(Object.keys(user));

// for (let key in user){
//     console.log(user[key]);
// }

 ////sizda React bo‘lmagan oddiy JS komponent bor, va siz unda ichki, maxfiy qiymatni saqlamoqchisiz:
// const internalId = Symbol("componentID");
// function createComponent (name){
//     return {
//         name,
//         [internalId]: Math.random().toString(36).slice(5)
//     };
// }
// const comp = createComponent("Button");
// console.log(comp.name); ///Button
// console.log(comp[internalId]); ///example: 2nj23j2j
// console.log(Object.keys(comp)); ///['name'] 0:"name" length: 1
///Symbol yordamida  komponentaning ichki ID’si yashirin qoladi.

// console.log(typeof(null));
// console.log(typeof(String));
// console.log(typeof(Object));

// let checkEquality = null == undefined;//type coercion
// console.log(checkEquality); //true
// let checkEquality2 = null === undefined;
// console.log(checkEquality2);//false

/* Nan - raqam emas degani 
isNaN - raqam yoki raqam emasligini tekshiradi */
console.log(typeof(NaN)); //number
console.log(0 / 0);        // NaN
console.log("hello" - 5);  // NaN
console.log(Math.sqrt(-1)); // NaN

console.log(typeof(isNaN));//function
console.log(isNaN("hello"));     // true ❗️
console.log(isNaN("123"));       // false
console.log(isNaN(undefined));   // true ❗️













