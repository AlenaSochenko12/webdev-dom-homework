import { getComments, postComment } from "./api.js";
import { renderStudents } from "./render.js";

  const buttonElement = document.getElementById("write-button");
  const listElement = document.getElementById("list");
  const nameInputElement = document.getElementById("name-input");
  const textInputElement = document.getElementById("text-input");
  const loader = document.getElementById("loader");

  let comments = [];

  const getApi = () => {
    getComments().then((responseData) => {
        comments = responseData.comments.map((comment) => {
          return {
            id: comment.id,
            name: comment.author.name,
            date: comment.date,
            comm: comment.text,
            likes: comment.likes,
            isLiked: comment.isLiked,
          }
        });
        loader.style.visibility = 'hidden';
        renderStudents({comments, listElement, textInputElement});
      })
      .catch((error) => {
        buttonElement.disabled = false;
        buttonElement.textContent = "Написать";
        alert("К сожалению, что-то пошло не так...");
        console.warn(error);
      });;
  }

  getApi();

  renderStudents({comments, listElement, textInputElement});

  buttonElement.addEventListener("click", () => {
    nameInputElement.classList.remove("error");
    textInputElement.classList.remove("error");

    if (nameInputElement.value.trim() === "") {
      nameInputElement.classList.add("error");
      return;
    }

    if (textInputElement.value.trim() === "") {
      textInputElement.classList.add("error");
      return;
    }

    buttonElement.disabled = true;
    buttonElement.textContent = "Элемент добавлятся...";
    
    postComment({nameInputElement, textInputElement})
      .then((responseData) => {
        const newComment = {
          name: nameInputElement.value.replaceAll(">", "&gt;").replaceAll("<", "&lt;"),
          comm: textInputElement.value.replaceAll(">", "&gt;").replaceAll("<", "&lt;"),
        };
        comments = comments.push(newComment);
        getApi();
      })
      .then(() => {
        buttonElement.disabled = false;
        buttonElement.textContent = "Написать";
        nameInputElement.value = "";
        textInputElement.value = "";
      })
      .catch((error) => {
        buttonElement.disabled = false;
        buttonElement.textContent = "Написать";
        if (error.message === "Сервер упал") {
          alert("Сервер упал");
        } else if (error.message === "Неверный формат данных") {
          alert("Неверный формат данных");
        } else {
          alert("Кажется, пора проверить интернет-соединение");
        }
        console.warn(error);
      });

      renderStudents({comments, listElement, textInputElement});
  });