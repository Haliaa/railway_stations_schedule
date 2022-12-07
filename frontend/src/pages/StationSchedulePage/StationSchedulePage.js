import {useEffect, useState} from "react";
import {useLocation, useParams} from "react-router-dom";

import {schedulesService} from "../../services";
import {Schedule, ScheduleForm} from "../../components";
import {useSelector} from "react-redux";

export const StationSchedulePage = () => {
    const [stationSchedules, setStationSchedules] = useState(null)
    const {state} = useLocation()
    const {stationId} = useParams()
    const {schedules} = useSelector(state => state.schedules);

    useEffect(()=>{
        if(state){
            setStationSchedules(state)
        }else {
            schedulesService.getStationSchedule(stationId).then(({data}) => setStationSchedules(data))
        }
    },[schedules])

    return (
        <div>
            <ScheduleForm/>
            <div style={{textAlign:"center", fontSize:"30px"}}>STATION {stationId} SCHEDULE</div>
            {stationSchedules && stationSchedules.map(stationSchedule=><Schedule key={stationSchedule._id} schedule={stationSchedule}/>)}
        </div>
    );
};
