import axios from "axios";

import baseURL from "../Component/Configs/Config";

export const AxiosService = axios.create({baseURL});