// ? FETH API

// console.log(this);

function getStudent(url) {
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
}
getStudent("student.json");

function getUsers(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
}
getUsers("https://jsonplaceholder.typicode.com/users");

function getPhotos(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
}

getPhotos("https://jsonplaceholder.typicode.com/photos");
