export function getComments() {
    return fetch("https://wedev-api.sky.pro/api/v1/alena-sochenko/comments", {
      method: "GET"
    })
      .then((response) => {
        if (response.status === 500) {
          throw new Error("Сервер упал");
        } else {
          return response.json();
        }
      })
}

export function postComment ({nameInputElement, textInputElement}) {
    return fetch("https://wedev-api.sky.pro/api/v1/alena-sochenko/comments", {
      method: "POST",
      body: JSON.stringify({
        text: textInputElement.value.replaceAll(">", "&gt;").replaceAll("<", "&lt;"),
        name: nameInputElement.value.replaceAll(">", "&gt;").replaceAll("<", "&lt;"),
      }),
    })
    .then((response) => {
        if (response.status === 500) {
          throw new Error("Сервер упал");
        } else if (response.status === 400) {
          throw new Error("Неверный формат данных");
        } else {
          return response.json();
        }
      })
}