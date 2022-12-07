import {axiosService} from "./axios.service";
import {urls} from "../constants";


export const schedulesService = {
    getAll:()=> axiosService.get(`${urls.schedules}` ),
    getStationSchedule:(stationId)=> axiosService.get(`${urls.schedules}/?stationId=${stationId}` ),
    getTrainSchedule:(trainId)=> axiosService.get(`${urls.schedules}/?trainId=${trainId}` ),
    getById:(id)=> axiosService.get(`${urls.schedules}/${id}`),
    create:(schedule)=> axiosService.post(urls.schedules, schedule),
    updateById:(id, schedule)=> axiosService.put(`${urls.schedules}/${id}`, schedule),
    deleteById:(id)=> axiosService.delete(`${urls.schedules}/${id}`),
}
