function getName(callback) {
  setTimeout(() => {
    let name = "Harun";
    callback(name);
  }, 1000);
}
function getSurname(name) {
  setTimeout(() => {
    let surName = "Metin";
    console.log(name, surName);
  }, 500);
}

// getName(getSurname);

// getName();
// getSurname();
