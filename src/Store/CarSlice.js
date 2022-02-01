import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import {CarService} from "../Service/CarService";

export const getAllCars = createAsyncThunk(
    'carSlice/getAllCars',
    async (_, {rejectWithValue}) => {
        try {
            const car = await CarService.getAllDataCar();
            return car;
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);

export const createCar = createAsyncThunk(
    'carSlice/createCar',
    async ({data: newCar}, {dispatch}) => {
        try {
            const car = await CarService.getCreate(newCar);
            console.log(car);
            dispatch(addCar({car}));
        } catch (e) {

        }
    }
);

export const updateCarThunk = createAsyncThunk(
    'carSlice/updateCar',
    async ({data: updatedCar, id}, {dispatch}) => {
        try {
            const car = await CarService.updateById(id, updatedCar);
            console.log(car);
            dispatch(updateCar({car}));
        } catch (e) {
            console.error(e);
        }
    }
);

export const deleteCarThunk = createAsyncThunk(
    'carSlice/deleteCar',
    async (id, {dispatch}) => {
        try {
            await CarService.deleteById(id);
            dispatch(deleteCar({id}));
        } catch (e) {

        }
    }
);

const carSlice = createSlice({
    name: 'carSlice',
    initialState: {
        cars: [],
        status: null,
        error: null
    },

    reducers: {
        addCar: (state, action) => {
            state.cars.push(action.payload.car);
        },
        deleteCar: (state, action) => {
            state.cars = state.cars.filter(car => car.id !== action.payload.id);
        },
        updateCar: (state, action) => {
            const {car: updatedCar} = action.payload;

            let currentCarIndex = state.cars.findIndex(car => car.id === updatedCar.id);
            if (currentCarIndex !== -1) {
                state.cars.splice(currentCarIndex, 1, updatedCar);
            }
        }
    },
    extraReducers: {
        [getAllCars.pending]: (state) => {
            state.status = 'pending';
            state.error = null;

        },
        [getAllCars.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.cars = action.payload;

        },
        [getAllCars.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;

        }
    }
});

const carReducer = carSlice.reducer;
export const {addCar, deleteCar, updateCar} = carSlice.actions;
export default carReducer;
