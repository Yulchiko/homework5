import axios from "axios";

import baseUserURL from "../Component/Configs/configsUser";

export const AxiosServiceUser = axios.create({baseUserURL});