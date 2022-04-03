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

console.log('*********---1. uzdavinys---***********')

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

console.log('--------------------------------');

// 1 var.

const c = 8;
const d = 2;

if (c > d) {
    console.log(`c didesnis uz d arba ${c} daugiau uz ${d}.`);
} else
if (c < d) {
 console.log(`c mazesnis uz b arba ${c} maziau uz ${d}.`);
 } else {
 console.log(`c lygu b arba ${c} = ${d}.`);
}

console.log('--------------------------------');

// 2 var.

function compare(e, f) {
    if ((e === f) && (typeof e === "number") && (typeof f === "number"))  {
        return `skaičiai lygus arba ${e} = ${f}.`
    } else {
        if (e > f) {
            return `pirmas skaičius didesnis arba ${e} daugiau uz ${f}.`
        } else {
            if (f > e) {
                return `antras skaičius didesnis arba ${f} daugiau uz ${e}.`
            } else {
                return "Netinkami kintamieji"
            }
        }

    }
}

console.log(compare(7, 6));


console.log('*********---2. uzdavinys---***********')

// 2. Naudojant ciklą, išvesti į konsolę skaičius nuo 1 iki 10. (5 taškai)

// 1 var.

const za = [];
let sk = '';
for (i = 1; i <= 10; i++) {
    sk += i;
    za.push(i)
    console.log(i)

}
console.log('--------------------------------');

console.log(`Atsitiktiniu skaiciu eile masyve: `, za)

console.log('--------------------------------');

// 2 var.

for (let i=1;i<11;i++){
    console.log(i);
}


console.log('*********---3. uzdavinys---***********')

// 3. Naudojant ciklą, išvesti į konsolę skaičius nuo 0, 2, 4, 6, 8, 10. (5 taškai)/

// 1 var.

const ra = [];
let sk2 = 0;
for (i = 0; i <= 10; i++) {
if (i % 2 === 0) {
    sk2 = i
    ra.push(i)
    console.log(i)
}
}

console.log('--------------------------------');

console.log(ra)

console.log('--------------------------------');

// 2 var.

for(let i=0;i<11;i++){
    console.log(i++);
}
  
console.log('*********---4. uzdavinys---***********')

// 4. Naudojant ciklą, sugeneruoti penkis atsitiktinius skaičius nuo 1 iki 10. Išvesti juos konsolėje. (5 taškai)

// 1 var.

const pa = [];
let rn = 0;
//  while (0 < rn < 11  && ir < sk4) {
    for (i = 0; i < 5; i++) {
        
rn = Math.round(Math.random() * 4) + 1;
pa.push(rn)
console.log(`${i+1} ${rn}`)
}

console.log('--------------------------------');

console.log(`Atsitiktiniu skaiciu eile masyve: `, pa)

console.log('--------------------------------');

// 2 var.

for(let i=0;i<5;i++){
    console.log(Math.floor((Math.random() * 11)));
}


console.log('*********---5. uzdavinys---***********')

// 5. Naudojant ciklą, spausdinti atsitiktinius skaičius nuo 1 iki 10. Paskutinis atspausdintas skaičius turi būti 5. (7 taškai)

// 1 var.

const na = [];
let rm = 0;
for (i = 0; i < +Infinity; i++) {  
    rm = Math.round(Math.random() * 9) + 1;
    console.log(`${i+1} ${rm}`)
    na.push(rm); 
if (rm === 5) {
    break

    } 
}

console.log('--------------------------------');

console.log(`Atsitiktiniu skaiciu eile masyve: `, na)

console.log('--------------------------------');

// 2 var.

for(let a=0;a!=5;){
    a=Math.floor(Math.random() * 10);
    console.log(a);
}

console.log('*********---6. uzdavinys---***********')


// 6. Sukurti masyvą, kurio ilgis būtų nuo 20 iki 30, o reikšmės būtų skaičiai nuo 10 iki 30. Surasti antrą didžiausią masyvo reikšmę, nenaudojant sort funkcijos. (7 taškai)


const amasyvas = [];
for (i = 10; i <= 30; i++) {
amasyvas.push(i);
}
console.log(amasyvas);

console.log('--------------------------------');

// 1 var.


// Math.random() gali buti Math.ceil()
let mas = Math.round(Math.random() * 10 + 20) 
console.log('Masyvo ilgis -', mas);
let masyv = [];
for (let i = 0; i < mas; i++) {
    const p = Math.round(Math.random() * 20 + 10);
    masyv.push(p);
}
console.log('Masyvas yra ', masyv);
console.log('--------------------------------');

let big;
for (let i = 0; i < masyv.length; i++) { 
    for(let j = i + 1; j < masyv.length; j++) {
        if (masyv [i] > masyv [j]) {
            big = masyv[i];
            masyv [i] = masyv[j];
            masyv[j] = big;

        }
    }
}
let ans = masyv[masyv.length-1];
for (let z = masyv.length-1; z > 0 ; z--) { 
if (ans > masyv [z]) {
ans = masyv[z];
break;
}
}

console.log(`Masyvas su surusiuotomis reiksmemis yra`, masyv);
console.log('--------------------------------');
console.log(`Didziausia masyvo reiksme yra `, masyv[masyv.length-1]);
console.log('--------------------------------');
console.log(`Antra pagal dydi masyvo reiksme yra `, ans);


console.log('--------------------------------');

// 2 var.
   
console.log("6 uždavinis");
let ag = Math.round(Math.random() * 10 + 20);
console.log('Masyvo ilgis bus ', ag);
console.log('--------------------------------');
let cArray = [];
for (let i = 0; i < ag; i++) {
    const f = Math.round(Math.random() * 20 + 10);
    cArray.push(f);
}

console.log('Masyvas yra ', cArray);
console.log('--------------------------------');
// let bigNumber = -Infinity;
// let answer = -Infinity;
// for (let i = 0; i < cArray.length; i++) {
// if(cArray[i] > bigNumber) {
// answer = bigNumber;
// bigNumber = cArray[i];

// }    

// }

// if(isFinite(answer)){
//   console.log(`Antra pagal dydi masyvo reiksme yra `, answer);  
// } else {
//    console.log("Masyve yra viena verte ", bigNumber);
// }

console.log('--------------------------------');

// 3 var.

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  };
const arrayL=getRndInteger(20,30);
let nArray=[];
for (let i=0;i<arrayL;i++){
    nArray.push(getRndInteger(10,30));
};
const maxFromList=Math.max(...nArray);
console.log(maxFromList);



console.log('*********--- 7. uzdavinys ---***********')

//7. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 100. Suskaičiuokite kiek yra kiekvienos raidės. (7 taškai)


// const array = ['A', 'B', 'C', 'D'];
//     console.log(array);




//     console.log('--------------------------------');

//     const letterList=['A', 'B', 'C', 'D'];
//     const rList=[];
//     for (let i=0;i<100;i++){
//         rList.push(letterList[getRndInteger(0,4)]);
//     }

//     let count = {};
//     rList.forEach(function(i) { count[i] = (count[i]||0) + 1;});
    
//     console.log(rList);
//     console.log(count);

//     console.log('--------------------------------');

const raides = [`A`, `B`, `C`, `D`];
let masyvas = [];
for (let i = 0; i < 100; i++) {
    masyvas[i] = raides[Math.floor(Math.random() * 5)];
}
sumaA = 0;
sumaB = 0;
sumaC = 0;
sumaD = 0;
for (let i = 0; i < 100; i++) {
    if (masyvas[i] === `A`) {
        sumaA++;
    }
    if (masyvas[i] === `B`) {
        sumaB++;
    }
    if (masyvas[i] === `C`) {
        sumaC++;
    }
    if (masyvas[i] === `D`) {
        sumaD++;
    }
}
console.log(`A = ${sumaA} B = ${sumaB} C = ${sumaC}, D = ${sumaD}`);






console.log('*********--- 8. uzdavinys ---***********')

//8. Parašyti funkciją - lygineSuma. Funkcijos parametrai - du kintamieji. Testų reikalavimai - abu kitamieji turi būti arba skaičiai arba masyvai(negali būti vienas skaičius, kitas masyvas).

console.log('--------------------------------');

// function lygineSuma(a,b){
//     if(Number.isFinite(a) && Number.isFinite(b)){
//       if((a+b)%2===0){
//         console.log(`skaiciu ${a} ir ${b} suma lygine`);
//       }else{
//         console.log(`skaiciu ${a} ir ${b} suma nelygine`);
//       }
//      }
//     else if(Array.isArray(a) && Array.isArray(b)){
//         if((a.length+b.lengst)%2===0){
//             console.log(`masyvu ${a} ir ${b} ilgiu suma lygine`);
//           }else{
//             console.log(`masyvu ${a} ir ${b} ilgius suma nelygine`);
//           }
//      }
//      else{
//         console.log(`abu kintamieji turi buti masyvai arba skaicia`);
//      }
// };

// lygineSuma(1,2);
// lygineSuma("a",2);
// lygineSuma([1,1,1,1],[2]);

//     console.log('--------------------------------');

function lygineSuma(a, b) {
    if (!((Array.isArray(a) && Array.isArray(b)) || ((typeof a === 'number' && typeof b === 'number')))) {
        return `ERROR: kintamasis neatitinka salygos.`;
    }
    if(Array.isArray(a)) {
        if((a.length + b.length) % 2 === 0) {
            return a.length + b.length;
        } else {
            return `ERROR: suma yra nelygine.`;
        }
    } else {
        if((a + b) % 2 === 0) {
            return a + b;
        } else {
            return `ERROR: suma yra nelygine.`;
        }
    }
}

console.log(lygineSuma([`saule`,`dangus`], [`zeme`,`medis`]));
console.log(lygineSuma(20, 15));
console.log(lygineSuma(20, []));



console.log('*********--- 9. uzdavinys ---***********')
// 9. Parašyti funkciją pirminisSkaicius. Funkcija turi vieną kintamąjį. Turi būti patikrinimas, kad kintamasis yra skaičius. Funkcija turi grąžinti ar pateiktas skaičius yra pirminis( pirminisskaičius yra tas, kuris dalinasi tik iš savęs ir tik iš vieneto be liekanos.) (10 taškų)
 

console.log('--------------------------------');
// function pirminisSkaicius(a){
//     if(Number.isFinite(a)){
//         if(a%1===0){
//             console.log("sakicius priminis");
//         }
//      }
//      else{
//         console.log(`Error: kintamasis '${a}' nėra skaičiaus tipo`);
//      }
// }

// pirminisSkaicius(1);
// pirminisSkaicius(3);
// pirminisSkaicius('a');

//     console.log('--------------------------------');


function pirminisSkaicius (n) {
    if (typeof n !== `number` || !isFinite(n)) {
        return `ERROR: ne skaiciaus tipo reiksme.`
    }
    if (n === 1) {
        return `Skaicius yra nei pirminis nei sudetinis`;
    }
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return `Skaicius yra sudetinis.`
        }
    }
    return `Skaicius yra pirminis.`
}
console.log(pirminisSkaicius(7));



console.log('*********--- 10 uzdavinys ---***********')
//10. Parašyti funkciją telefonoNumeris. Funkcija turi priimti vieną kintamąjį - masyvą. Masyvo elementai - skaičiai, ilgis - 10. Funkcija turi grąžinti telefono numerį tokiu formatu - "(XXX) XXX-XXXX". (10 taškų)

console.log('--------------------------------');
//(XXX) XXX-XXXX
// function telefonoNumeris(n){
//     if(Array.isArray(n) && n.length===10){
//         //(XXX) XXX-XXXX
//     console.log(`(${n[0]}${n[1]}${n[2]}) ${n[3]}${n[4]}${n[5]}-${n[6]}${n[7]}${n[8]}${n[9]}`);
//     }
//     else{
//         console.log('error bad iput')
//     }
// }

// telefonoNumeris([0,1,2,3,4,5,6,7,8,9]);

// console.log('----------------');

// function telNr(x){
//     return `(${x[0]}${x[1]}${x[2]}) ${x[3]}${x[4]}${x[5]}-${x[6]}${x[7]}${x[8]}${x[9]} `;
//     }
    
//     console.log(telNr([1,1,1,1,1,1,1,1,1,1,]));

//     console.log('--------------------------------');

function telefonoNumeris(n) {
    if (!Array.isArray(n)) {
        return `ERROR: kintamasis nera masyvas.`
    }
    if (n.length !== 10) {
        return `ERROR: netinkamas elementu kiekis. Turi buti 10.`
    }
    
    for (let i = 0; i < n.length; i++) {
        if (typeof n[i] !== `number`) {
            return `ERROR: bent vienas is elementu nera skaicius.`
        }
        if ( n[i] > 9) {
          return `ERROR: elementai turi buti vienzenkliai skaiciai.`
        }
        if (n[i] % 1 !== 0) {
            return `ERROR: elementas yra ne sveikasis skaicius.`;
        }
        if (n[i] < 0) {
            return `ERROR: elementas negali buti neigiamas skaicius.`;
        }
    }
    return `(${n[0]}${n[1]}${n[2]}) ${n[3]}${n[4]}${n[5]}-${n[6]}${n[7]}${n[8]}${n[9]}`;
}

console.log(telefonoNumeris([3, 7, 0, 6, 1, 2, 7, 8, 9, 0]));





 
