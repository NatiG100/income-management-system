import { createSlice } from "@reduxjs/toolkit";
export const userSlice = createSlice({
    name: 'user',
    initialState: null,
    reducers: {
        login: (state, action) => {
            state = action.payload
            return state;
        },
        logout: (state) => {
            state = null;
            return state;
        }
    }
})

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;