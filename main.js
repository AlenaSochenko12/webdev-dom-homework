import { renderStudents } from "./render.js";
import { getApi } from "./getapi.js";
import { buttonClick } from "./buttonClick.js";
import { buttonElement, listElement, nameInputElement, textInputElement, loader, comments } from "./variables.js";
import { renderLogin } from "./loginPage.js";

  getApi({comments, loader, listElement, textInputElement, buttonElement});

  renderLogin();
  //renderStudents({comments, listElement, textInputElement});


  buttonClick ({buttonElement, nameInputElement, textInputElement, comments, loader, listElement});