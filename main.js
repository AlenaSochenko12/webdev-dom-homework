import { getApi } from "./getapi.js";

export let isAuth = false;

export function setAuth () {
  isAuth = true;
 }

 export let user = false;

 export function setUser (admin) {
  user = admin;
 }

 let comments = [];
  getApi({comments});