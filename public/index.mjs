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

let displayPost = () => {
  // Create the post container
  const postContainer = document.createElement("div");
  postContainer.className = "bg-white rounded-md shadow-md p-4 mb-4";

  // Create the post content
  const postContent = document.createElement("div");
  postContent.className = "text-gray-800 text-lg mb-4";
  postContent.textContent = content;

  // Create the post actions
  const postActions = document.createElement("div");
  postActions.className = "flex items-center justify-between";

  const likeButton = document.createElement("button");
  likeButton.className = "bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded";
  likeButton.textContent = "Like";

  const shareButton = document.createElement("button");
  shareButton.className = "bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded";
  shareButton.textContent = "Share";

  postActions.appendChild(likeButton);
  postActions.appendChild(shareButton);

  // Add post content and actions to the post container
  postContainer.appendChild(postContent);
  postContainer.appendChild(postActions);

  // Add the post container to the main container
  const postContainerWrapper = document.getElementById("postContainer");
  postContainerWrapper.appendChild(postContainer);
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
postCreateBut.addEventListener(`click`,addPost)