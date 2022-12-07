import {axiosService} from './axios.service';
import {urls} from '../constants';


export const stationsService = {
    getAll: () => axiosService.get(urls.stations),
    getById: (id) => axiosService.get(`${urls.stations}/${id}`),
    create: (station) => axiosService.post(urls.stations, station),
    updateById: (id, station) => axiosService.put(`${urls.stations}/${id}`, station),
    deleteById: (id) => axiosService.delete(`${urls.stations}/${id}`)
}
