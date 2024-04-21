import { generateDate } from "./date.js";
import {initEventListeners} from "./initEvent.js";
import { replyComment } from "./reply.js";

export const renderStudents = ({comments, listElement, textInputElement}) => {
  const appElement = document.getElementById("app");
  const commentsHTML = comments.map((comment, index) => {
      return `<li class="comment">
        <div class="comment-header">
          <div class="header_comment">${comment.name}</div>
          <div>${generateDate({comment})}</div>
        </div>
        <div class="comment-body">
          <div class="comment-text">
            ${comment.comm}
          </div>
        </div>
        <div class="comment-footer">
          <div class="likes">
            <span class="likes-counter">${comment.likes}</span> <span class="likes_span">лайка</span>
            <button class="like-button ${comment.isLiked ? '-active-like' : ''}" data-id='${index}'></button>
          </div>
        </div>
      </li>`;
    }).join("");

    const appHTML = `
    <div class="container">
    <p class="loader" id="loader">Подождите, комментарии загружаются...</p>
    <ul class="comments" id="list">${commentsHTML}</ul>
    <div class="add-form">
      <input type="text" class="add-form-name" placeholder="Введите ваше имя" id="name-input" />
      <textarea type="textarea" class="add-form-text" placeholder="Введите ваш коментарий" id="text-input" rows="4"></textarea>
      <div class="add-form-row">
        <button class="add-form-button" id="write-button">Написать</button>
      </div>
    </div>
  </div>`;


    appElement.innerHTML = appHTML;
    initEventListeners({comments, listElement, textInputElement});
    replyComment({textInputElement});
  };