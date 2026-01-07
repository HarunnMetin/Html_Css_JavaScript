/*

🎯 İstenen:

admin var mı?

user sayısı

settings key sayısı


*/

const data = {
  users: [
    { name: "Ali", role: "admin" },
    { name: "Ayşe", role: "user" },
  ],
  settings: {
    theme: "dark",
    version: 2,
  },
};

let adminVarMi = data.users.some((user) => user.role === "admin");
if (adminVarMi) {
  console.log("Admin var");
}
let userCount = data.users.length;
console.log("User sayisi :" + userCount);

let settingKeyCount = Object.keys(data.settings).length;
console.log("Setting key sayisi :" + settingKeyCount);
