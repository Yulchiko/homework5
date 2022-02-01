import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {useEffect} from "react";

import {createCar, updateCarThunk} from "../../Store/CarSlice";

import "./Form.css"

const Form = ({carUpdate: {id, model, price, year}}) => {
    const {handleSubmit, register, reset, setValue} = useForm();
    const dispatch = useDispatch();

    const submit = (data) => {
        if (id) {
            dispatch(updateCarThunk({id, data}));
        } else {
            dispatch(createCar({data}));
        }
        reset();
    };

    useEffect(() => {
        setValue('model', model);
        setValue('price', price);
        setValue('year', year);
    }, [id]);

    return (
        <form onSubmit={handleSubmit(submit)}>
            <div className="Form">
            <label>Model: <input type="text" {...register('model')}/></label>
            <label>Price: <input type="text" {...register('price')}/></label>
            <label>Year: <input type="text" {...register('year')}/></label>
            <button>{id ? 'Update' : 'Save'}</button>
                           </div>
        </form>
    );
};

export {Form};