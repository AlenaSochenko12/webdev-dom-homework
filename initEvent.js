import { renderStudents } from "./render.js";

export const initEventListeners = ({comments, listElement, textInputElement}, event) => {
    const commentElements = document.querySelectorAll(".like-button");
    for (const commentElement of commentElements) {
      commentElement.addEventListener("click", () => {
        const user = comments[commentElement.dataset.id];
        user.isLiked ? user.likes-- : user.likes++;
        user.isLiked = !user.isLiked;

        return renderStudents({comments, listElement, textInputElement});
      });
    };
  }