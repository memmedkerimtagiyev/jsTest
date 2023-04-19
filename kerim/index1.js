// const array = ["a", "b", "c"];
// array.forEach((element) => console.log(element));

// console.log(array.join("-"));

// let arr = ["Lenkaran", "baki", "masalli", "Lerik", "astara"];
// console.log(arr);

// arr.pop();
// console.log(arr);
// arr.reverse();
// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//   if (i % 2 !== 0) {
//     arr[i] += "Aze";
//   }
// }
// console.log(arr);

// arr.map((element, i) => {
//   if (i % 2 == 1) {
//     element += "Aze";
//   }
//   console.log(element);
// });

// arr.forEach((element) => console.log(element));

// console.log(arr.join(""));

// console.log(arr.length);

// arr.forEach((element, i) => {
//   if (i % 2 == 1) {
//     console.log(element);
//   }
// });

// arr.forEach((element) => {
//   if (element.length > 6) {
//     console.log(element);
//   }
// });

// const result = arr.map((el) => el.slice(0, 3));
// console.log(result);

// arr.map((element) =>{
//     if(element[0]==="L")
// })

// let res = arr.filter((el) => el[0] !== "L");
// console.log(res);

// arr.splice(1, 0, ["limon", "mandalin"]);
// console.log(arr);

let students = [
  {
    ad: "Senuber",
    soyad: "Besirzade",
    yas: "23",
    kesir: false,
    hobbies: ["gitara", "resm", "mahni"],
  },
  {
    ad: "Zeyneb",
    soyad: "Xanizovade",
    yas: "20",
    kesir: false,
    hobbies: ["musiqi", "gezmek"],
  },
  {
    ad: "Yusif",
    soyad: "Memmedov",
    yas: "28",
    kesir: false,
    hobbies: ["xarici dil", "alqoritm"],
  },
  {
    ad: "Cavid",
    soyad: "Zeynalov",
    yas: "22",
    kesir: false,
    hobbies: ["seir yazmaq", "xarici olkeler"],
  },
  {
    ad: "Yusif",
    soyad: "Tagiyev",
    yas: "23",
    kesir: false,
    hobbies: ["oyun", "futbol", "voleybol"],
  },
  {
    ad: "Adil",
    soyad: "Sefizade",
    yas: "21",
    kesir: false,
    hobbies: ["futbol", "voleybol", "at capmaq", "tarixi faklarla maraqlanmaq"],
  },
  {
    ad: "Adil",
    soyad: "Mediyev",
    yas: "28",
    kesir: true,
    hobbies: ["kofe duzeltmek", "jazz"],
  },
  {
    ad: "Vasif",
    soyad: "Ejderov",
    yas: "20",
    kesir: true,
    hobbies: ["futbol oynamaq", "masin surmek"],
  },
];
// students.forEach((element) => console.log(element.ad, element.soyad));

// students.forEach((element) => {
//   if (element.yas > 24) {
//     console.log(element.ad, element.soyad, element.yas);
//   }
// });

// students.forEach((x) => {
//   if (x.kesir == true) {
//     console.log(x.ad, x.hobbies);
//   }
// });

const newArr = [];
// students.forEach((x, i) => {
//   for (let j = i + 1; j < students.length; j++) {
//     if (x.ad === students[j].ad) {
//       newArr.push(x);
//       break;
//     }
//   }
// });

// console.log(newArr);

for (let i = 0; i < students.length; i++) {
  for (let j = i + 1; j < students.length; j++) {
    if (students[i].ad === students[j].ad) {
      newArr.push(students[i]);
    }
  }
}
console.log(newArr);
