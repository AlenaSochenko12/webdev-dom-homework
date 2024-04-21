export function getComments() {
  return fetch("https://wedev-api.sky.pro/api/v2/alena-sochenko/comments", {
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

export let token;

export function setToken(newToken) {
  token = newToken;
}

export function postComment ({nameInputElement, textInputElement}) {
  return fetch("https://wedev-api.sky.pro/api/v2/alena-sochenko/comments", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
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

export function login({login, password}) {
  return fetch("https://wedev-api.sky.pro/api/user/login", {
    method: "POST",
    body: JSON.stringify({
      login,
      password,
    }),
  })
  .then((response) => {
    return response.json();
  });
}