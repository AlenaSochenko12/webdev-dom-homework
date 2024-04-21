import { getComments } from "./api.js";
import { renderStudents } from "./render.js";

export const getApi = ({comments, loader, listElement, textInputElement, buttonElement}) => {
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
