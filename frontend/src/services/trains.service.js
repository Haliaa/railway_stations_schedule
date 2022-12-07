import {axiosService} from "./axios.service";
import {urls} from "../constants";


export const trainsService = {
    getAll: () => axiosService.get(urls.trains),
    getById: (id) => axiosService.get(`${urls.trains}/${id}`),
    create: (train) => axiosService.post(urls.trains, train),
    updateById: (id, train) => axiosService.put(`${urls.trains}/${id}`, train),
    deleteById: (id) => axiosService.delete(`${urls.trains}/${id}`)
}
