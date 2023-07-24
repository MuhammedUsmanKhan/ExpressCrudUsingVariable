const addpollBut = document.getElementById('openModal');
const modal = document.getElementById('createPollModal');
const closeModal = modal.getElementsByClassName('createPoll-modal-close')[0];
const modalContainer = modal.getElementsByClassName('createPoll-modal-container')[0];
const modalOverlay = modal.getElementsByClassName('createPoll-modal-overlay')[0];
addpollBut.addEventListener('click', () => {
  modal.classList.remove('hidden');
  setTimeout(() => {
    modal.classList.add('modal-open');
    modalContainer.classList.add('modal-container-open');
  }, 50);
});
closeModal.addEventListener('click', () => {
  modal.classList.remove('modal-open');
  modalContainer.classList.remove('modal-container-open');
  setTimeout(() => {
    modal.classList.add('hidden');
  }, 300);
});
modalOverlay.addEventListener('click', () => {
  modal.classList.remove('modal-open');
  modalContainer.classList.remove('modal-container-open');
  setTimeout(() => {
    modal.classList.add('hidden');
  }, 300);
});

window.displayPost = () => {

axios.get(`/api/v1/posts`)
.then((post) => {
      console.log(post)
      console.log(post.data) 
    let postArr = post.data.length
    //if (postArr.length > 0) {
    console.log(postArr)
  // post.data.forEach(element => {
  //let postsContainer = document.getElementById(`postContainer`)
      // Create main container
  
    // <div class="max-w-3xl mx-auto p-4">
    // <!-- Post Container -->
    // <div class="bg-white rounded-md shadow-md p-4 mb-4">
    //     <div class="text-2xl font-bold mb-4">
    //         <h1>Dummy Post Layout</h1>
    //     </div>
    //   <!-- Post Content -->
    //   <div class="text-gray-800 text-lg mb-4">
    //     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et mollis sapien. Nullam auctor semper dolor nec
    //       bibendum. Nullam sit amet varius nisi.</p>
    //   </div>
    //   <!-- Post Actions (e.g., Like, Share, etc.) -->
    //   <div class="flex items-center justify-between">
    //     <button class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
    //       Update
    //     </button>
    //     <button class="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">
    //       Delete
    //     </button>
    //   </div>
    // </div>
  post.data.forEach((element)=>{
       console.log(element)
       console.log(element.title)
       console.log(element.text)
       //console.log(postArr[i].title)
       const postContainer = document.createElement("div");
       postContainer.classList.add("max-w-3xl", "mx-auto", "p-4");
     
       // Create post element
       const postElement = document.createElement("div");
       postElement.classList.add("bg-white", "rounded-md", "shadow-md", "p-4", "mb-4");
     
       // Create post title
       const postTitle = document.createElement("div");
       postTitle.classList.add("text-2xl", "font-bold", "mb-4");
       postTitle.innerHTML = `<h1>${element.title}</h1>`;
     
       // Create post content
       const postContent = document.createElement("div");
       postContent.classList.add("text-gray-800", "text-lg", "mb-4");
       postContent.innerHTML =
         `<p>${element.text}</p>`;
     
       // Create post actions
       const postActions = document.createElement("div");
       postActions.classList.add("flex", "items-center", "justify-between");
     
       // Create "Update" button
       const updateButton = document.createElement("button");
       updateButton.classList.add(
         "bg-blue-500",
         "hover:bg-blue-600",
         "text-white",
         "font-semibold",
         "py-2",
         "px-4",
         "rounded"
       );
       updateButton.textContent = "Update";
     
       // Create "Delete" button
       const deleteButton = document.createElement("button");
       deleteButton.classList.add(
         "bg-green-500",
         "hover:bg-green-600",
         "text-white",
         "font-semibold",
         "py-2",
         "px-4",
         "rounded"
       );
       deleteButton.textContent = "Delete";
     
       // Append buttons to post actions
       postActions.appendChild(updateButton);
       postActions.appendChild(deleteButton);
     
       // Append elements to post container
       postElement.appendChild(postTitle);
       postElement.appendChild(postContent);
       postElement.appendChild(postActions);
       postContainer.appendChild(postElement);
     
       // Append post container to the desired parent container
       const parentContainer = document.getElementById("postContainer");
       parentContainer.appendChild(postContainer);
     })   
     
     // });  
     // // Create the main container div
  })
  .catch((error) => {
      console.log(error)
  })

}

//document.addEventListener()
let addPost = () => {
  let postTitle = document.getElementById(`postTitle`).value
  let postDetails = document.getElementById(`textArea`).value
  axios.post(`/api/v1/post`, {
    title: postTitle,
    text: postDetails
  })
  .then((response) => {
      console.log(response.data);
      //document.querySelector("#result").innerHTML = response.data;
      //getAllPost();
  })
  .catch((error) => {
      // handle error
      console.log(error.data);
      //document.querySelector("#result").innerHTML = "error in post submission"
  })
}
let postCreateBut = document.getElementById(`pollCreatedBut`)
postCreateBut.addEventListener(`click`, addPost)
//postCreateBut.addEventListener(`click`,displayPost)