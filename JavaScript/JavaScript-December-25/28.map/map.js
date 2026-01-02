let users = ["ahmet", "MeHMet", "  ayşe ", "ALİ", "eLiF"];

let newmap = users.map((user) => {
  user.trim();

  user = user.toLowerCase();
  user = user[0].toUpperCase() + user.slice(1);
  if (user.length < 5) {
    user = user + "(kisa)";
  }

  return user;
});

console.log(newmap);
