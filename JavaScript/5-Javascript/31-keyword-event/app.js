//? KLAVYE EVENT

document.addEventListener("keypress", work);

function work(e) {
  // console.log(e.key);
  // console.log(e.keyCode);
  // console.log(e.which);
}

document.addEventListener("keydown", work2);

function work2(e) {
  // console.log(e.key);
}

document.addEventListener("keyup", work3);

function work3(e) {
  console.log(e.key);
}
