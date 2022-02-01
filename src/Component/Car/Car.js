import {useDispatch} from "react-redux";

import {deleteCarThunk} from "../../Store/CarSlice";

const Car = ({car, setCarForUpdate}) => {
    const dispatch = useDispatch();
    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px', gap: '20px'}}>

            <div>Model: {car.model}</div>
            <div>Price: {car.price}</div>
            <div>Year: {car.year}</div>

            <button onClick={() => setCarForUpdate(car)}>Update</button>
            <button onClick={() => dispatch(deleteCarThunk(car.id))}>Delete</button>
        </div>
    );
};

export {Car};