const addpollBut = document.querySelector('#openModal');
const modal = document.getElementById('createPollModal');
const closeModal = modal.getElementsByClassName('createPoll-modal-close')[0];
const closeModalbut = modal.getElementsByClassName('createPoll-modal-close')[1];
const closeModalUpdtbut = modal.getElementsByClassName('createPoll-modal-close')[2];
const modalContainer = modal.getElementsByClassName('createPoll-modal-container')[0];
const modalOverlay = modal.getElementsByClassName('createPoll-modal-overlay')[0];
const errorDisplayModal = document.getElementById('myModal');
const errorcloseModal = errorDisplayModal.getElementsByClassName('error-modal-close')[0];
const errormodalContainer = errorDisplayModal.getElementsByClassName('error-modal-container')[0];
const errormodalOverlay = errorDisplayModal.getElementsByClassName('error-modal-overlay')[0];
addpollBut.addEventListener('click', () => {

  let postTitle = document.getElementById(`postTitle`)
  let postDetails = document.getElementById(`textArea`)
  postTitle.value = ""
  postDetails.value = ""

  let addPostBut = document.getElementById(`pollCreatedBut`)
  let updtPostBut = document.getElementById(`postCreatedBut`)

  if (addPostBut.classList.contains(`hidden`)) {
    addPostBut.classList.remove(`hidden`)
    updtPostBut.classList.add(`hidden`)
  }

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
closeModalbut.addEventListener('click', () => {
  modal.classList.remove('modal-open');
  modalContainer.classList.remove('modal-container-open');
  setTimeout(() => {
    modal.classList.add('hidden');
  }, 300);
});
closeModalUpdtbut.addEventListener('click', () => {
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

let openModal = (error) => {
  const modalText = document.getElementById(`Response`);
  modalText.innerText = `${error.response.data}`
  console.log(modalText.innerText)
  //console.log(error.data)
  errorDisplayModal.classList.remove('hidden');
  setTimeout(() => {
    errorDisplayModal.classList.add('modal-open');
    errormodalContainer.classList.add('modal-container-open');
  }, 50);
}
let succesOpenModal = (succes) => {
  const modalHeader = document.getElementById(`modalHeader`)
  const modalText = document.getElementById(`Response`);
  modalHeader.innerText = `Request Confirmed`
  modalText.innerText = `${succes.data}`
  console.log(modalText.innerText)
  //console.log(error.data)
  errorDisplayModal.classList.remove('hidden');
  setTimeout(() => {
    errorDisplayModal.classList.add('modal-open');
    errormodalContainer.classList.add('modal-container-open');
  }, 50);
}
let errorModel = () => {
  errorcloseModal.addEventListener('click', (event) => {
    event.preventDefault()
    errorDisplayModal.classList.remove('modal-open');
    errormodalContainer.classList.remove('modal-container-open');
    setTimeout(() => {
      errorDisplayModal.classList.add('hidden');
    }, 300);
  });
  errormodalOverlay.addEventListener('click', (event) => {
    event.preventDefault()
    errorDisplayModal.classList.remove('modal-open');
    errormodalContainer.classList.remove('modal-container-open');
    setTimeout(() => {
      errorDisplayModal.classList.add('hidden');
    }, 300);
  });
  errorcloseModal.addEventListener('click', (event) => {
    event.preventDefault()
    errorDisplayModal.classList.remove('modal-open');
    errormodalContainer.classList.remove('modal-container-open');
    setTimeout(() => {
      errorDisplayModal.classList.add('hidden');
    }, 300);
  });
  errormodalOverlay.addEventListener('click', (event) => {
    event.preventDefault()
    errorDisplayModal.classList.remove('modal-open');
    errormodalContainer.classList.remove('modal-container-open');
    setTimeout(() => {
      errorDisplayModal.classList.add('hidden');
    }, 300);
  });

}

let modalOpen = (postidRef) => {
  modal.classList.remove('hidden');
  setTimeout(() => {
    modal.classList.add('modal-open');
    modalContainer.classList.add('modal-container-open');
  }, 50);
  let postCreatedBut = document.getElementById(`pollCreatedBut`)
  postCreatedBut.classList.add(`hidden`)
  //let postidRef = idRef
  let updateBut = document.getElementById(`postCreatedBut`)
  updateBut.classList.remove(`hidden`)
  updateBut.setAttribute(`ref`, `${postidRef}`)
  let postTitle = document.getElementById(`postTitle`)
  let postDetails = document.getElementById(`textArea`)

  axios.get(`/api/v1/post/${postidRef}`)
    .then((postData) => {
      console.log(postData)
      postTitle.value = postData.data.title
      postDetails.value = postData.data.text

    })
    .catch((error) => {
      console.log(error)
      openModal(error)
      errorModel()
      //console.log(updateBut)
    })
}
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

      post.data.forEach((element) => {
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
        updateButton.setAttribute('ref', element.id)
        updateButton.setAttribute(`id`, `update`)
        updateButton.addEventListener(`click`, () => modalOpen(element.id))
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
        deleteButton.setAttribute('ref', element.id)
        deleteButton.addEventListener('click', delFunc)

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
  let postTitle = document.getElementById(`postTitle`)
  let postDetails = document.getElementById(`textArea`)
  let postContainer = document.getElementById(`postContainer`)
  axios.post(`/api/v1/post`, {
    title: postTitle.value,
    text: postDetails.value
  })
    .then((response) => {
      console.log(response.data);
      //document.querySelector("#result").innerHTML = response.data;
      //getAllPost();
      let successModalContainer = document.getElementsByClassName(`error-modal-container`)[0]
      if (!successModalContainer.classList.contains(`bg-purple-700`)) {
        successModalContainer.classList.add(`bg-purple-700`)
      }
      postTitle.value = " "
      postDetails.value = " "
      postContainer.innerHTML = " "
      succesOpenModal(response)
      errorModel()
      displayPost();
    })
    .catch((error) => {
      // handle error
      console.log(error.response.data);
      let successModalContainer = document.getElementsByClassName(`error-modal-container`)[0]
      if (!successModalContainer.classList.contains(`bg-purple-700`)) {
        successModalContainer.classList.add(`bg-purple-700`)
      }
      openModal(error)
      errorModel()
    })
}
//document.querySelector("#result").innerHTML = "error in post submission"


let postCreateBut = document.getElementById(`pollCreatedBut`)
postCreateBut.addEventListener(`click`, addPost)

//postCreateBut.addEventListener(`click`,displayPost)

let delFunc = (event) => {

  let postID = event.target.getAttribute('ref')
  axios.delete(`/api/v1/post/delete/${postID}`)
    .then((response) => {
      let successModalContainer = document.getElementsByClassName(`error-modal-container`)[0]
      if (!successModalContainer.classList.contains(`bg-green-700`)) {
        successModalContainer.classList.add(`bg-green-700`)
      }
      //successModalContainer.classList.add(`bg-green-700`)
      let postContainer = document.getElementById(`postContainer`)
      postContainer.innerHTML = ''
      displayPost();
      succesOpenModal(response)
      errorModel()

    })
    .catch((err) => {
      console.log(err);
      let successModalContainer = document.getElementsByClassName(`error-modal-container`)[0]
      if (!successModalContainer.classList.contains(`bg-green-700`)) {
        successModalContainer.classList.add(`bg-green-700`)
      }
      openModal(err)
      errorModel()
    });

}

const updtPostBut = document.querySelector('#postCreatedBut');

let Update = (event) => {

  let postContainer = document.getElementById(`postContainer`)
  postContainer.innerHTML = ""
  console.log(event.target);
  let theRef = event.target.attributes.ref.value;

  let postTitle = document.getElementById(`postTitle`)
  let postDetails = document.getElementById(`textArea`)

  axios.put(`/api/v1/post/update/${theRef}`, {
    title: postTitle.value,
    text: postDetails.value
  })
    .then((postData) => {
      console.log(postData)
      let successModalContainer = document.getElementsByClassName(`error-modal-container`)[0]
      if (!successModalContainer.classList.contains(`bg-indigo-700`)) {
        successModalContainer.classList.add(`bg-indigo-700`)
      }
      succesOpenModal(postData)
      errorModel()
      displayPost();
    })
    .catch((error) => {
      console.log(error)
      let successModalContainer = document.getElementsByClassName(`error-modal-container`)[0]
      if (!successModalContainer.classList.contains(`bg-indigo-700`)) {
        successModalContainer.classList.add(`bg-indigo-700`)
      }
      openModal(error)
      errorModel()
    })

}

updtPostBut.addEventListener(`click`, Update)



