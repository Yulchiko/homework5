import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import {Service} from "../Service/Service";

export const getAllComments = createAsyncThunk(
    'comments/getAllComments',
    async (_, {rejectWithValue}) => {
        try {
            const data = await Service.getAllComments();
            console.log(data)
            return data
        } catch (e) {
                      return rejectWithValue(e.message)
        }
    }
)
const commentSlice = createSlice({
    name: 'posts',
    initialState: {
        comments: [],
        status: null,
        error: null
    },
    extraReducers: {
        [getAllComments.pending]: (state) => {
            state.status = 'loading'
            state.error = null
        },
        [getAllComments.fulfilled]: (state, action) => {
            state.status = 'resolved'
            state.cars = action.payload
        },
        [getAllComments.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        }
    }
})

const commentsReducer = commentSlice.reducer;
export default commentsReducer;

