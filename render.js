import { generateDate } from "./date.js";
import {initEventListeners} from "./initEvent.js";
import { replyComment } from "./reply.js";

export const renderStudents = ({comments, listElement, textInputElement}) => {
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

    listElement.innerHTML = commentsHTML;
    initEventListeners({comments, listElement, textInputElement});
    replyComment({textInputElement});
  };