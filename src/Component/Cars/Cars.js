import {useDispatch, useSelector} from "react-redux";

import {Car} from "../Car/Car";
import {useEffect} from "react";
import {getAllCars} from "../../Store/CarSlice";

const Cars = ({setCarUpdate}) => {
    const {cars, status, error} = useSelector(state => state.cars);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCars());
    }, []);

    return (
        <div style={{margin: '50px'}}>
            {status === 'pending' && <h2>Loading...</h2>}
            {error && <h2>{error}</h2>}
            {cars.map(car => <Car key={car.id} car={car} setCarUpdate={setCarUpdate}/>)}
        </div>
    );
};

export {Cars};