import { renderStudents } from "./render.js";
import { postComment } from "./api.js";
import { getApi } from "./getapi.js";
import { user } from "./main.js";

export function buttonClick ({comments}) {
  const buttonElement = document.getElementById("write-button");

  const nameInputElement = document.getElementById("name-input");
  if (user) {
    nameInputElement.disabled = true;
    nameInputElement.value = user;
  }
  const textInputElement = document.getElementById("text-input");

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
        comments.push(newComment);
        getApi({comments});
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

      renderStudents({comments});
  });
}