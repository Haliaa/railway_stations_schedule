import {useEffect, useState} from "react";
import {useLocation, useParams} from "react-router-dom";

import {schedulesService} from "../../services";
import {Schedule, ScheduleForm} from "../../components";
import {useSelector} from "react-redux";

export const TrainSchedulePage = () => {
    const [trainSchedules, setTrainSchedules] = useState(null)
    const {state} = useLocation()
    const {trainId} = useParams()
    const {schedules} = useSelector(state => state.schedules);

    useEffect(()=>{
        if(state){
            setTrainSchedules(state)
        }else {
            schedulesService.getTrainSchedule(trainId).then(({data}) => setTrainSchedules(data))
        }
    },[schedules])

    return (
        <div>
            <ScheduleForm/>
            <div style={{textAlign:"center", fontSize:"30px"}}>TRAIN {trainId} SCHEDULE</div>
            {trainSchedules && trainSchedules.map(trainSchedule=><Schedule key={trainSchedule._id} schedule={trainSchedule}/>)}
        </div>
    );
};
