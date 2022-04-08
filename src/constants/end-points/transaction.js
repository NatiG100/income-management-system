import { GET, POST } from "../methods";
import API_URL from "./api";

export const GET_ALL_TRANSACTIONS = {
    endPoint: API_URL + "transaction",
    method: GET
};
export const GET_TRANSACTION = (transactionId) => ({
    endPoint: API_URL + "transaction/" + transactionId,
    method: GET
});
export const PAY = {
    endPoint: API_URL + "transaction",
    method: POST
};
