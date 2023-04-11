// let factorial=5
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

let arr1 = [1, 2, 3, 4, 5, -6, 7, 78, 32, 36];
let max = (min = 0);

for (let i = 0; i < arr1.length; i++) {
  if (arr1[i] > max) {
    max = arr1[i];
  }
  if (arr1[i] < min) {
    min = arr1[i];
  }
}
console.log(max);
console.log(min);
