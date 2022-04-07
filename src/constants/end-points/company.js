import { DELETE, GET, PATCH, POST } from "../methods";
import API_URL from "./api";

export const GET_ALL_COMPANIES = {
    endPoint: API_URL + "company",
    method: GET
};
export const GET_COMPANY = (companyId) => ({
    endPoint: API_URL + "company/" + companyId,
    method: GET
});
export const CREATE_COMPANY = {
    endPoint: API_URL + "company",
    method: POST
};
export const UPDATE_COMPANY = (companyId) => ({
    endPoint: API_URL + "company/" + companyId,
    method: PATCH
});
export const DELETE_COMPANY = (companyId) => ({
    endPoint: API_URL + "company/" + companyId,
    method: DELETE
});
