// async function hello() {
//   return "Hello World";
// }

// console.log(hello());

// hello().then((response) => console.log(response));
// const btn = document.querySelector("#postButton");

// btn.addEventListener("click", () => {
//   fetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then((response) => response.json())
//     .then((post) => {
//       console.log(post);

//       fetch(
//         `https://jsonplaceholder.typicode.com/comments?postId=${post.id}`
//       ).then((response) =>
//         response.json().then((comment) => console.log(comment))
//       );
//     });
// });

const postButton = document.querySelector("#responseButton");

postButton.addEventListener("click", async () => {
  const responsePost = await fetch(
    "https://jsonplaceholder.typicode.com/posts/1"
  );
  const post = await responsePost.json();

  const responseComment = await fetch(
    `https://jsonplaceholder.typicode.com/comments?postId=${post.id}`
  );

  const comment = await responseComment.json();
  console.log(post,comment);
});
