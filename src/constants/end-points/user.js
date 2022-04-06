import { GET, PATCH, POST } from "../methods";
import API_URL from "./api";

export const GET_ALL_USERS = {
    endPoint: API_URL + "user",
    method: GET
};
export const GET_USER = (userId) => ({
    endPoint: API_URL + "user/" + userId,
    method: GET
});
export const CREATE_USER = {
    endPoint: API_URL + "user",
    method: POST
};
export const UPDATE_USER = (userId) => ({
    endPoint: API_URL + "user/" + userId,
    method: PATCH
});