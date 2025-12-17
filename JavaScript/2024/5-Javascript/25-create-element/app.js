const body = document.querySelector("body");
const link = document.createElement("a");



link.id = "link";
link.className = "btn btn-light mt-3";
link.href = "https://www.youtube.com";
link.target = "_blank";
link.innerHTML = "youtube";

body.appendChild(link);

console.log(link);

