const users = [
  {
    userId: 5,
    post: " Selin Istek 1",
  },

  {
    userId: 5,
    post: "Selin Istek 2",
  },
  {
    userId: 4,
    post: "Yilmaz Istek 1",
  },
  {
    userId: 1,
    post: " Sami Istek 1",
  },
];


function getUserId(){

    setTimeout(() => {

        return 5
        
    }, 1000);
}

function getPostByUserId(userId){
    console.log(userId);
    
    setTimeout(() => {
        users.forEach((user)=>{
            if(user.userId === userId){
                console.log(user.post);
                
            }
        })
    }, 500);

}

let userId = getUserId();
getPostByUserId(userId);
