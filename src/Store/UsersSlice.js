import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import {Service} from "../Service/Service";

export const getAllUsers = createAsyncThunk(
    'users/getAllUsers',
    async (_, {rejectWithValue}) => {
        try {
            const data = await Service.getAllUsers();
            console.log(data)
                       return data

        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)

const userSlice = createSlice({
    name: 'users',
    initialState: {
        users: [],
        status: null,
        error: null
    },

    extraReducers: {
        [getAllUsers.pending]: (state) => {
            state.status = 'loading'
            state.error = null
        },
        [getAllUsers.fulfilled]: (state, action) => {
            state.status = 'resolved'
            state.cars = action.payload
        },
        [getAllUsers.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        }
    }
})

const usersReducer = userSlice.reducer;
export default usersReducer;

