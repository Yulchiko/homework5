import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import {Service} from "../Service/Service";

export const getAllPosts = createAsyncThunk(
    'post/getAllPosts',
    async (_, {rejectWithValue}) => {
        try {
            const data = await Service.getAllPosts();
            console.log(data)
            return data
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)
const postSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
        status: null,
        error: null
    },
    extraReducers: {
        [getAllPosts.pending]: (state) => {
            state.status = 'loading'
            state.error = null
        },
        [getAllPosts.fulfilled]: (state, action) => {
            state.status = 'resolved'
            state.cars = action.payload
        },
        [getAllPosts.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        }
    }
})

const postsReducer = postSlice.reducer;
export default postsReducer;

