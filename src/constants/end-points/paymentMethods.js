import { DELETE, GET, PATCH, POST } from "../methods";
import API_URL from "./api";

export const GET_ALL_PAYMENT_METHOD = (companyId) => ({
    endPoint: API_URL + "method/all/" + companyId,
    method: GET
});
export const GET_PAYMENT_METHOD = (methodId) => ({
    endPoint: API_URL + "method/" + methodId,
    method: GET
});
export const CREATE_PAYMENT_METHOD = {
    endPoint: API_URL + "method",
    method: POST
};
export const UPDATE_PAYMENT_METHOD = (methodId) => ({
    endPoint: API_URL + "method/" + methodId,
    method: PATCH
});
export const DELETE_PAYMENT_METHOD = (methodId) => ({
    endPoint: API_URL + "method/" + methodId,
    method: DELETE
});
