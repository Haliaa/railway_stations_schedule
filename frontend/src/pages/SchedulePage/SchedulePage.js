import {useEffect, useState} from "react";
import {useLocation, useParams} from "react-router-dom";
import {useSelector} from "react-redux";

import {schedulesService} from "../../services";
import {ScheduleForm, ScheduleDetails} from "../../components";

export const SchedulePage = () => {
    const [schedule, setSchedule] = useState(null)
    const {scheduleForUpdate} = useSelector(state => state.schedules);
    const {state} = useLocation()
    const {id} = useParams()

    useEffect(()=>{
        if(state){
            setSchedule(state)
        }else {
            schedulesService.getById(id).then(({data}) => setSchedule(data))
        }
    },[scheduleForUpdate])

    return (
        <div>
            <ScheduleForm/>
            {schedule && <ScheduleDetails schedule={schedule}/>}
        </div>
    );
};
