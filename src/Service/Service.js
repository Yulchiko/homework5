import {AxiosServiceUser} from "./AxiosServiceUser";
import baseUserURL from "../Component/Configs/configsUser";

export const Service = {
    getAllUsers: () => AxiosServiceUser.get(`${baseUserURL}/users`).then(value => value.data),
    getAllPosts: () => AxiosServiceUser.get(`${baseUserURL}/posts`).then(value => value.data),
    getAllComments: () => AxiosServiceUser.get(`${baseUserURL}/comments`).then(value => value.data),

};