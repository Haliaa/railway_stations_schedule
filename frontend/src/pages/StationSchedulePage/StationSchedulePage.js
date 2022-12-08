import {useEffect, useState} from "react";
import {useLocation, useParams} from "react-router-dom";

import {schedulesService, stationsService} from "../../services";
import {Schedule, ScheduleForm} from "../../components";
import {useSelector} from "react-redux";

export const StationSchedulePage = () => {
    const [stationSchedules, setStationSchedules] = useState(null)
    const {state} = useLocation()
    const {stationId} = useParams()
    const {schedules} = useSelector(state => state.schedules);
    const [stationName, setStationName] = useState('');
    useEffect(() => {
        if (state) {
            setStationSchedules(state)
        } else {
            schedulesService.getStationSchedule(stationId).then(({data}) => setStationSchedules(data))
        }
    }, [schedules])


     stationsService.getById(stationId).then(({data}) =>setStationName(data.name))


    return (
        <div>
            <ScheduleForm/>
            <div style={{textAlign: "center", fontSize: "30px", margin:"20px"}}>Station <strong> {stationName} </strong> schedule</div>
            {stationSchedules && stationSchedules.map(stationSchedule => <Schedule key={stationSchedule._id}
                                                                                   schedule={stationSchedule}/>)}
        </div>
    );
};
