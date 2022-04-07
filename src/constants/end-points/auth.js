import { DELETE, GET, PATCH, POST } from "../methods";
import API_URL from "./api";

export const LOGIN = {
    endPoint: API_URL + "auth/login",
    method: POST,
};
export const LOGOUT = {
    endPoint: API_URL + "auth/logout",
    method: DELETE,
};
export const ME = {
    endPoint: API_URL + "auth/me",
    method: GET,
}