import { login, setToken } from "./api.js";
import { getApi } from "./getapi.js";
import { setAuth, setUser } from "./main.js";

export const renderLogin = ({ comments }) => {
    const appElement = document.getElementById("app");
    const loginHTML = `
    <div class="container">
        <div class="add-form">
            <input type="text" class="input-login" placeholder="Введите логин" id="login-input" />
            <input type="text" class="input-password" placeholder="Введите пароль" id="password-input" />
            <div class="login-row">
                <button class="write-button" id="login-button">Войти</button>
            </div>
        </div>
    </div>`;

    appElement.innerHTML = loginHTML;

    const buttonElement = document.getElementById("login-button");
    const loginInputElement = document.getElementById("login-input");
    const passwordInputElement = document.getElementById("password-input");

    buttonElement.addEventListener("click", () => {
        login({
            login: loginInputElement.value,
            password: passwordInputElement.value,
        }).then((responseData) => {
            setToken(responseData.user.token);
            setAuth();
            setUser(responseData.user.name);
        }).then(() => {
            getApi({comments});
        })
    })
}