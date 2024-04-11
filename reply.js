export const replyComment = ({textInputElement}) => {
    const commentTextElements = document.querySelectorAll(".comment-text");

    for (const commentTextElement of commentTextElements) {
      commentTextElement.addEventListener("click", () => {
        const text = commentTextElement.textContent.trim();
        const author = commentTextElement.parentNode.parentNode.querySelector(".header_comment").textContent;

        return textInputElement.value = `>${text} \n \n ${author}, `;
      });
    };
  }