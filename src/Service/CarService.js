import {urls} from "../Component/Configs/Config";
import {AxiosService} from "./AxiosService";


export const CarService = {
    getAllDataCar: () => AxiosService.get(`${urls.cars}`).then(value => value.data),
        getCreate: (car) => AxiosService.post(`${urls.cars}`, car).then(value => value.data),
    deleteById: (id) => AxiosService.delete(`${urls.cars}/${id}`).then(value => value.data),
        updateById: (id, car) => AxiosService.patch(`${urls.cars}/${id}`, car).then(value => value.data)

}