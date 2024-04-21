import { getComments } from "./api.js";
import { renderStudents } from "./render.js";

export const getApi = ({comments}) => {
  renderStudents({comments});
  
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
        renderStudents({comments});
        const loader = document.getElementById("loader");
        loader.style.visibility = 'hidden'; //TODO
      })
      .catch((error) => {
        alert("К сожалению, что-то пошло не так...");
        console.warn(error);
      });;
  }
