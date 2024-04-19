//========================================================================================================================================================
const likeBtn = document.querySelector(".user-utils__like button");
const dislikeBtn = document.querySelector(".user-utils__dislike button");
const likeNumber = document.querySelector(".like-number");
const dislikeNumber = document.querySelector(".dislike-number");
let isLiked = false;
let isDisliked = false;

likeNumber.textContent = 0;
dislikeNumber.textContent = 0;

likeBtn.addEventListener("click", () => {
  if (!isLiked) {
    likeNumber.innerHTML++;
    isLiked = true;
  } else {
    likeNumber.innerHTML--;
    isLiked = false;
  }
});

dislikeBtn.addEventListener("click", () => {
  if (!isDisliked) {
    dislikeNumber.innerHTML++;
    isDisliked = true;
  } else {
    dislikeNumber.innerHTML--;
    isDisliked = false;
  }
});

//========================================================================================================================================================
// Comments
const form = document.querySelector(".form");
const commentContainer = document.querySelector(".comments__com");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const textarea = document.getElementById("addComment");
  const nameInput = document.querySelector('.form input[type="text"]');

  const commentText = textarea.value;
  const name = nameInput.value;

  if (commentText.trim() === "" || name.trim() === "") {
    alert("Будь ласка, введіть ваше ім'я та коментар");
    return;
  }

  const commentElement = document.createElement("div");
  commentElement.classList.add("comment-box");
  commentElement.innerHTML = `
    <div class="user-info">
      <img src="./images/avatar.svg" alt="avatar" />
      <div class="user-info__box">
        <h2 class="user__name">${name}</h2>
        <p class="user__time">тільки що</p>
        <p class="user__com">${commentText}</p>
      </div>
    </div>
    <div class="user-utils">
      <div class="user-utils__reply">
        <button>
          <img src="./images/reply.svg" alt="reply" />
          <p class="reply__text">Відповісти</p>
        </button>
      </div>
      <div class="user-utils__actions">
        <div class="user-utils__like">
          <button>
            <img src="./images/like.svg" alt="like" />
          </button>
          <p class="like-number">0</p>
        </div>
        <div class="user-utils__dislike">
          <button>
            <img src="./images/dislike.svg" alt="dislike" />
          </button>
          <p class="dislike-number">0</p>
        </div>
        <button class="user-utils__more">
          <img src="./images/triple-dots.svg" alt="more" />
        </button>
      </div>
    </div>
  `;

  commentContainer.appendChild(commentElement);

  const newLikeBtn = commentElement.querySelector(".user-utils__like button");
  const newDislikeBtn = commentElement.querySelector(".user-utils__dislike button");
  const newLikeNumber = commentElement.querySelector(".like-number");
  const newDislikeNumber = commentElement.querySelector(".dislike-number");
  let isNewLiked = false;
  let isNewDisliked = false;

  newLikeNumber.textContent = 0;
  newDislikeNumber.textContent = 0;

  newLikeBtn.addEventListener("click", () => {
    if (!isNewLiked) {
      newLikeNumber.innerHTML++;
      isNewLiked = true;
    } else {
      newLikeNumber.innerHTML--;
      isNewLiked = false;
    }
  });

  newDislikeBtn.addEventListener("click", () => {
    if (!isNewDisliked) {
      newDislikeNumber.innerHTML++;
      isNewDisliked = true;
    } else {
      newDislikeNumber.innerHTML--;
      isNewDisliked = false;
    }
  });

  textarea.value = "";
  nameInput.value = "";
});
//========================================================================================================================================================
$(document).ready(function () {
  checkTime();
  setInterval(checkTime, 60000);
});

function checkTime() {
  const now = new Date();
  const hour = now.getHours();
  const minute = now.getMinutes();

  if (hour === 18 && minute >= 0 && minute < 20) {
    // С 18:00 по Киеву до 18:20 (Киев) - видео + комментарии
    showElement("video");
    showElement("comments");
    hideElement("comertial-traning");
    hideElement("img-for-video");
  } else if (hour === 18 && minute >= 20 && hour < 21) {
    // С 18:20 до 21:00: видео + баннеры + текст +комментарии
    showElement("video");
    showElement("comertial-traning");
    showElement("comments");
    showElement("gets");
    hideElement("img-for-video");
  } else {
    // А с 21:00 до 18:00 следующего дня должна быть картинка и комментарии
    showElement("img-for-video");
    showElement("comments");
    hideElement("video");
    hideElement("comertial-traning");
    hideElement("gets");
  }
}

function showElement(className) {
  $(`.${className}`).show();
}

function hideElement(className) {
  $(`.${className}`).hide();
}
