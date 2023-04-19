// let factorial=
"use strict";
// let cavab = 1
// for(i=1; i<=factorial; i++){
//     cavab*=i
// }
// console.log(cavab);

// for(i=1; i<=100; i++){
//     if(i%6==0){
//         console.log(i);
//     }
// }

// let a=12;
// let cem=0;

// for(let i=0; i<=a; i++ ){
//     if(a%i==0){
//         console.log(i);
//         cem=cem+1;
//     }

// }console.log(cem);

// for (let i = 1; i <= 10; i++) {
//   if (i == 3 || i == 5 || i == 7) {
//     continue;
//   }
//   console.log(i);
// }

// let eded,cem,hasil,i;
// eded=8;
// cem=0;
// hasil=1;

// for(i=1; i<=eded; i++){
//     cem+=i;
//     hasil*=i;
//     console.log(i,"-ci addim");
//     console.log("cem: ", cem);
//     console.log("hasil: ", hasil);
// }

// let cem, eded, i;

// eded=10;
// cem=0;

// for(i=1; i<eded; i++){
//     if(i%2==0){
//         cem=cem+i;
//     }
// }
// console.log(`Cem: ${cem}`);

// let i=1;

// while(i<10){
//     console.log(i);
//     i++
// }

// do{
//     console.log(i);
//     i++;
// }while(i<10);
// const arr = ["lenkaran", "baki", "gence", "leerik"];
// console.log(arr.length);
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }
// let axtar = "baki";
// console.log(arr.length);

// for (let i = 0; i < arr.length; i++) {
//   if (axtar == arr[i]) {
//     console.log(i);
//   }
// }

// const arry = [1, 4, 36, 86, 234, 8, 90];

// for (let i = 0; i < arry.length; i++) {
//   if (arry[i] > 20) {
//     console.log(i);
//   }
// }
// let cem = 0;
// for (let i = 1; i < 100; i++) {
//   cem += i;
// }
// console.log(cem);

// let start = 1;
// let end = 100;
// let sum = (start + end / 2) * (end / 2);
// console.log(sum);

// let n = 1000;
// let s = 0;
// for (let i = 0; i < 1000; i++) {
//   if ((i % 3 == 0) / 2) {
//     s = s + 1;
//   }
// }
// console.log(s);

// let arr1 = [1, 2, 3, 4, 5, -6, 7, 78, 32, 36];
// let max = arr1[0];
// let min = arr1[0];

// for (let i = 0; i < arr1.length; i++) {
//   if (arr1[i] > max) {
//     max = arr1[i];
//   }
//   if (arr1[i] < min) {
//     min = arr1[i];
//   }
// }
// console.log(max);
// console.log(min);

// let telebe = ["kerim", "anar", "ferid"];

// console.log(telebe);

// for (let i = 0; i < telebe.length; i++) {
//   console.log(telebe[i]);
// }

// telebe[1] = "memmed";
// telebe[5] = "tugra";

// console.log(telebe);

// telebe.pop();
// telebe.push("sadiq");
// console.log(telebe);
// telebe.shift();
// console.log(telebe);
// telebe.unshift("mursel-fatime");
// console.log(telebe);

// let arr = [2, 9, -5, -4, "AzerBayCan", true, 12, "LENKARAN", "limon", 182, 4];
// console.log(arr);

// arr.pop();
// console.log(arr);

// arr.unshift(false);
// console.log(arr);

// arr.pop();
// console.log(arr);

// for (let arrs of arr) {
//   console.log(arrs);
// }

// for (let arrs of arr) {
//   if (arrs > 0) {
//     console.log(arrs);
//   }
// }

// for (let arrs of arr) {
//   if (arrs < 0) {
//     console.log(arrs);
//   }
// }

// for (let arrs of arr) {
//   if (arrs % 2 == 0 && arrs > 0) {
//     console.log(arrs);
//   }
// }

// for (let arrs of arr) {
//   if (arrs % 2 == -1 && arrs < 0) {
//     console.log(arrs);
//   }
// }

// let cem = 0;

// for (let arrs of arr) {
//   if (typeof arrs == "number") {
//     cem = cem + arrs;
//   }
// }
// console.log(cem);

// let cem = 0;

// for (let arrs of arr) {
//   if (typeof arrs == "number" && arrs>0) {
//     cem = cem + arrs;
//   }
// }
// console.log(cem);

// let cem = 0;

// for (let arrs of arr) {
//   if (typeof arrs == "number" && arrs > 0 && arrs % 2 == 0) {
//     cem = cem + arrs;
//   }
// }
// console.log(cem);

// for (let arrs of arr) {
//   if (typeof arrs =="string" && typeof arrs="uppercase"){
//     console.logb        ds rftgyu i9o0p-[=
//             nc bcbnmbmbbmgujc breakb
//   }
// }

// const adj = {
//   name: "un",
//   price: 12,
//   stack: 100,
// };

// console.log(adj);

// let myInput = prompt();
// console.log(adj[myInput]);

// delete adj.stack;
// adj.price = 32;

// console.log(adj);

// const arr = [
//   {
//     id: 4,
//     supplierId: 2,
//     categoryId: 3,
//     quantityPerUnit: "48 - 6 oz jars",
//     unitPrice: 22,
//     unitsInStock: 53,
//     unitsOnOrder: 0,
//     reorderLevel: 0,
//     discontinued: true,
//     name: "Chef Anton's Cajun Seasoning",
//     supplier: {},
//     category: {
//       id: 3,
//       description: "Desserts candies and sweet breads",
//       name: "Confections",
//     },
//   },
//   {
//     id: 5,
//     supplierId: 2,
//     categoryId: 2,
//     quantityPerUnit: "36 boxes",
//     unitPrice: 21.35,
//     unitsInStock: 0,
//     unitsOnOrder: 0,
//     reorderLevel: 0,
//     discontinued: true,
//     name: "Chef Anton's Gumbo Mix",
//   },
//   {
//     id: 6,
//     supplierId: 3,
//     categoryId: 2,
//     quantityPerUnit: "12 - 8 oz jars",
//     unitPrice: 25,
//     unitsInStock: 120,
//     unitsOnOrder: 0,
//     reorderLevel: 25,
//     discontinued: false,
//     name: "Grandma's Boysenberry Spread",
//   },
//   {
//     id: 7,
//     supplierId: 3,
//     categoryId: 7,
//     quantityPerUnit: "12 - 1 lb pkgs.",
//     unitPrice: 30,
//     unitsInStock: 15,
//     unitsOnOrder: 0,
//     reorderLevel: 10,
//     discontinued: false,
//     name: "Uncle Bob's Organic Dried Pears",
//   },
//   {
//     id: 8,
//     supplierId: 3,
//     categoryId: 2,
//     quantityPerUnit: "12 - 12 oz jars",
//     unitPrice: 40,
//     unitsInStock: 6,
//     unitsOnOrder: 0,
//     reorderLevel: 0,
//     discontinued: false,
//     name: "Northwoods Cranberry Sauce",
//   },
//   {
//     id: 9,
//     supplierId: 4,
//     categoryId: 6,
//     quantityPerUnit: "18 - 500 g pkgs.",
//     unitPrice: 97,
//     unitsInStock: 29,
//     unitsOnOrder: 0,
//     reorderLevel: 0,
//     discontinued: true,
//     name: "Mishi Kobe Niku",
//   },
//   {
//     id: 10,
//     supplierId: 4,
//     categoryId: 8,
//     quantityPerUnit: "12 - 200 ml jars",
//     unitPrice: 31,
//     unitsInStock: 31,
//     unitsOnOrder: 0,
//     reorderLevel: 0,
//     discontinued: false,
//     name: "Ikura",
//   },
//   {
//     id: 2,
//     supplierId: 1,
//     categoryId: 1,
//     quantityPerUnit: "24 - 12 oz bottles",
//     unitPrice: 19,
//     unitsInStock: 17,
//     unitsOnOrder: 40,
//     reorderLevel: 25,
//     discontinued: false,
//     name: "Chang",
//   },
//   {
//     id: 3,
//     supplierId: 1,
//     categoryId: 2,
//     quantityPerUnit: "12 - 550 ml bottles",
//     unitPrice: 10,
//     unitsInStock: 13,
//     unitsOnOrder: 70,
//     reorderLevel: 25,
//     discontinued: false,
//     name: "Aniseed Syrup",
//   },
//   {
//     id: 11,
//     supplierId: 5,
//     categoryId: 2,
//     quantityPerUnit: "1 kg pkg.",
//     unitPrice: 21,
//     unitsInStock: 22,
//     unitsOnOrder: 30,
//     reorderLevel: 30,
//     discontinued: false,
//     name: "Queso Cabrales 2",
//     supplier: {
//       id: 5,
//       companyName: "Cooperativa de Quesos 'Las Cabras'",
//       contactName: "Antonio del Valle Saavedra",
//       contactTitle: "Export Administrator",
//       address: {
//         street: "Calle del Rosal 4",
//         city: "Oviedo",
//         region: "Asturias",
//         postalCode: 33007,
//         country: "Spain",
//         phone: "(98) 598 76 54",
//       },
//     },
//     category: {
//       id: 4,
//       description: "Cheeses",
//       name: "Dairy Products",
//     },
//   },
//   {
//     id: 12,
//     supplierId: 5,
//     categoryId: 4,
//     quantityPerUnit: "10 - 500 g pkgs.",
//     unitPrice: 38,
//     unitsInStock: 86,
//     unitsOnOrder: 0,
//     reorderLevel: 0,
//     discontinued: false,
//     name: "Queso Manchego La Pastora",
//   },
//   {
//     id: 13,
//     supplierId: 6,
//     categoryId: 8,
//     quantityPerUnit: "2 kg box",
//     unitPrice: 6,
//     unitsInStock: 24,
//     unitsOnOrder: 0,
//     reorderLevel: 5,
//     discontinued: false,
//     name: "Konbu",
//   },
//   {
//     id: 14,
//     supplierId: 6,
//     categoryId: 7,
//     quantityPerUnit: "40 - 100 g pkgs.",
//     unitPrice: 23.25,
//     unitsInStock: 35,
//     unitsOnOrder: 0,
//     reorderLevel: 0,
//     discontinued: false,
//     name: "Tofu",
//   },
//   {
//     id: 15,
//     supplierId: 6,
//     categoryId: 2,
//     quantityPerUnit: "24 - 250 ml bottles",
//     unitPrice: 15.5,
//     unitsInStock: 39,
//     unitsOnOrder: 0,
//     reorderLevel: 5,
//     discontinued: false,
//     name: "Genen Shouyu",
//   },
// ];

// // for (let i = 0; i < arr.length; i++) {
// //   if (arr[i].unitPrice > 20) {
// //     console.log(arr[i]);
// //   }
// // }

// let arrInput = prompt();
// for (let i = 0; i < arr.length; i++) {
//   if (
//     arrInput.toLocaleLowerCase() === arr[i].name[0] ||
//     arrInput.toLocaleLowerCase() === arr[i].name[0]
//   ) {
//     console.log(arr[i].name);
//   }
// }

// for (let i = 0; i < arr.length; i++) {
//   if (arrInput.toLocaleLowerCase() === arr[i].name.toLocaleLowerCase()) {
//     console.log(arr[i].name);
//   }
// }

// let a = 5;
// let b = 6;

// function cem(x, y) {
//   return x + y;
// }

// console.log(cem(a, b));

// function ferq(x, y) {
//   return y - x;
// }

// console.log(ferq(a, b));

// function muqayise(x, y) {
//   if (a > b) {
//     return x + " boyukdur";
//   } else if (a < b) {
//     return y + " boyukdur";
//   }
// }
// console.log(muqayise(a, b));

// function adSoy(ad, soyad) {
//   let obj = {
//     ad: ad,
//     soyad: soyad,
//   };
//   return obj;
// }

// console.log(adSoy("qurban", "qurbanzade"));

// function eded(ed1, ed2, ed3, ed4) {
//   let obj = {
//     eded1: ed1,
//     eded2: ed2,
//     eded3: ed3,
//     eded4: ed4,
//   };
//   return obj;
// }
// console.log(eded(3, 5, 7, 3));

// let arry = [3, 5, 6, 7, 10];
// let say = arry.length;
// let max = 0;

// function maxs() {
//   for (let i = 0; i < say; i++) {
//     if (arry[i] > max) {
//       max = arry[i];
//     }
//   }
//   return max;
// }

// console.log(maxs()
// let word = "men lenkaranda yasamiram   ";

// let yaz = word;

// yaz = word.length;
// yaz = word.slice(0, 3);
// yaz = word.substring(4);
// yaz = word.replace("men", "sen");
// yaz = word.toUpperCase();
// yaz = word.toLowerCase();
// yaz = word.concat(" sarida qaliram");
// yaz = word.trim();

// console.log(yaz);

let word =
  "Men bu gun Bakiya gedirem ki, yaxsi dincelim. Gelende kime ne alim? kiminse ureyi nesse istese ozu alsin...";

// let yazi = word;

// yazi = word.split(" ");

// console.log(yazi[1]);

// yazi = word.replace("Men", "sen");

// yazi = word.trim();

// function boyuk(word) {
//   let arr = [];
//   for (let i = 0; i < word.length; i++) {
//     if (word[i] === word[i].toLocaleUpperCase() && word[i] !== " ") {
//       arr.push(word[i]);
//     }
//   }
//   console.log(arr);
// }

// boyuk(word);

// function say(word){

// }
