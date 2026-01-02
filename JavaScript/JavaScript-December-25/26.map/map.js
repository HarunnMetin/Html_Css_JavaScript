// 1️⃣ 10000 üstüne %20 zam
// 2️⃣ 10000 altına %10 zam
// 3️⃣ Yegit add

let salaries = [8000, 12000, 6000, 15000];



let newSalaries = salaries.map((salary) => {
  return salary > 10000 ? salary + salary * 0.2 : salary + salary * 0.1;
});


console.log(newSalaries);
