/*

1. Palyginti du skaičius a ir b. Išvesti į konsolę, kuris didesnis arba jie lygūs. (4 taškai)
2. Naudojant ciklą, išvesti į konsolę skaičius nuo 1 iki 10. (5 taškai)
3. Naudojant ciklą, išvesti į konsolę skaičius nuo 0, 2, 4, 6, 8, 10. (5 taškai)
4. Naudojant ciklą, sugeneruoti penkis atsitiktinius skaičius nuo 1 iki 10. Išvesti juos konsolėje. (5 taškai)
5. Naudojant ciklą, spausdinti atsitiktinius skaičius nuo 1 iki 10. Paskutinis atspausdintas skaičius turi būti 5. (7 taškai)
6. Sukurti masyvą, kurio ilgis būtų nuo 20 iki 30, o reikšmės būtų skaičiai nuo 10 iki 30. Surasti antrą didžiausią masyvo reikšmę, nenaudojant sort funkcijos. (7 taškai)
7. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 100. Suskaičiuokite kiek yra kiekvienos raidės. (7 taškai)
8. Parašyti funkciją - lygineSuma. Funkcijos parametrai - du kintamieji. Testų reikalavimai - abu kitamieji turi būti arba skaičiai arba masyvai(negali būti vienas skaičius, kitas masyvas).
Jei kintamieji skaičiai, grąžinti skaičių sumą, jei kintamieji masyvai - grąžinti masyvų ilgių sumą. Jei suma nelyginė - grąžinti tekstą, kad suma nelyginė. (10 taškų)
9. Parašyti funkciją pirminisSkaicius. Funkcija turi vieną kintamąjį. Turi būti patikrinimas, kad kintamasis yra skaičius. Funkcija turi grąžinti ar pateiktas skaičius yra pirminis( pirminis
skaičius yra tas, kuris dalinasi tik iš savęs ir tik iš vieneto be liekanos.) (10 taškų)
10. Parašyti funkciją telefonoNumeris. Funkcija turi priimti vieną kintamąjį - masyvą. Masyvo elementai - skaičiai, ilgis - 10. Funkcija turi grąžinti telefono numerį tokiu formatu - 
"(XXX) XXX-XXXX". (10 taškų)

*/

// 1. Palyginti du skaičius a ir b. Išvesti į konsolę, kuris didesnis arba jie lygūs. (4 taškai
const a = 8;
const b = 8;

if (a > b) {
    console.log(`a didesnis uz b arba ${a} daugiau uz ${b}.`);
} else
if (a < b) {
 console.log(`a mazesnis uz b arba ${a} maziau uz ${b}.`);
 } else 
if (a === b) {
 console.log(`a lygu b arba ${a} = ${b}.`);
}

console.log('***************')


function compare(a, b) {
    if ((a === b) && (typeof a === "number") && (typeof b === "number"))  {
        return `skaičiai lygus arba ${a} = ${b}.`
    } else {
        if (a > b) {
            return `pirmas skaičius didesnis arba ${a} daugiau uz ${b}.`
        } else {
            if (b > a) {
                return `antras skaičius didesnis arba ${b} daugiau uz ${a}.`
            } else {
                return "Netinkami kintamieji"
            }
        }

    }
}

console.log(compare(7, 6));







console.log('*************************************')

// 2. Naudojant ciklą, išvesti į konsolę skaičius nuo 1 iki 10. (5 taškai)

let sk = '';
for (i = 1; i <= 10; i++) {
    sk += i;
    console.log(i)
}
console.log('*************************************')

// 3. Naudojant ciklą, išvesti į konsolę skaičius nuo 0, 2, 4, 6, 8, 10. (5 taškai)/

let sk2 = 0;
for (i = 0; i <= 10; i++) {
if (i % 2 === 0) {
    sk2 = i
    console.log(i)
}
}
  
console.log('*************************************')

// 4. Naudojant ciklą, sugeneruoti penkis atsitiktinius skaičius nuo 1 iki 10. Išvesti juos konsolėje. (5 taškai)


let rn = 0;
//  while (0 < rn < 11  && ir < sk4) {
    for (i = 0; i < 5; i++) {
        
rn = Math.round(Math.random() * 4) + 1;
console.log(`${i+1} ${rn}`)
}

console.log('*************************************')

// 5. Naudojant ciklą, spausdinti atsitiktinius skaičius nuo 1 iki 10. Paskutinis atspausdintas skaičius turi būti 5. (7 taškai)


let rm = 0;
for (i = 0; i < +Infinity; i++) {  
    rm = Math.round(Math.random() * 9) + 1;
    console.log(`${i+1} ${rm}`)
if (rm === 5) {
    break
    }
}
console.log('*************************************')


// 6. Sukurti masyvą, kurio ilgis būtų nuo 20 iki 30, o reikšmės būtų skaičiai nuo 10 iki 30. Surasti antrą didžiausią masyvo reikšmę, nenaudojant sort funkcijos. (7 taškai)

let mas = [];







// let x = 0; 
// while(x == 0){ 
//   x =  Math.random() * 10; 
// } 
// if (x % 2 === 0) {
//     x = i
// console.log(i)
// }

let arr = [];
while(arr.length > 20 && arr.length < 30){
var r = Math. floor(Math. random() * 10) + 1;
if(arr. indexOf(r) === -1) arr. push(r);
console. log(arr);
}


// generating a random number
// const g = '';
// sk7 = Math.random() * (10-1) + 1

// console.log(`Random value between 1 and 10 is ${sk7}`);
// console.log(Math.round(sk7))

