// ? PORMISE

// let check = true;
// const promise1 = new Promise((resolve, reject) => {
//   if (check) {
//     resolve("promise basarili");
//   } else {
//     reject("promise basarisiz");
//   }
// });

// console.log(promise1);

// let check = true;
// function createPromise(){

//   return new Promise((resolve,reject)=>{

//     if(check){
//       resolve("Promise dogru calisiyor");
//     }
//     else{
//       reject("Sorun var...")
//     }

//   })
// }

// createPromise()

// .then((response)=>{
//   console.log(response);

// })
// .catch((error)=>{
//   console.log(error);

// })
// .finally(()=> console.log("Herzaman calisir")
// )

// ? PROMİSE + XMLHTTPREQUEST

function readStudents(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    try {
      xhr.addEventListener("readystatechange", () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText));
        }
      })
    } catch (error) {
      reject(error);
    }
    xhr.open("GET", url);
    xhr.send();
  });
}
readStudents("student.json")
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
