/*Task1: Foydalanuvchidan yoshni so’raydigan dasturni tuzing. Yosh 50 dan yuqori bo’lsa, dastur “Siz kattasiz” deb chiqarib berishi kerak. Yosh 50 dan past bo’lsa “Siz yoshsiz” deb chiqarib berishi kerak*/
const age = +prompt("How old are you?", '')
if (age >= 50){
    console.log("Siz qariyabsz")
}
else{
    console.log("Siz yoshsiz");
    
}