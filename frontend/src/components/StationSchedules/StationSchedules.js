import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {StationSchedule} from '../StationSchedule/StationSchedule'
import {schedulesActions} from "../../redux";

export const StationSchedules = () => {
    const {schedule, status} = useSelector(state => state.schedules)
    const dispatch = useDispatch()

    useEffect(()=>{
        // dispatch(schedulesActions.getStationSchedule(stationId))
    },[])

    return (
        <div>
            {status&&<h1>{status}</h1>}
            {schedule.map(stationSchedule=><StationSchedule key={stationSchedule._id} stationSchedule={stationSchedule}/>)}
        </div>
    );
};
