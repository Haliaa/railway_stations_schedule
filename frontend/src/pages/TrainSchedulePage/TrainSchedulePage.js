// //data in through <Schedule/>
//
// import {useEffect, useState} from "react";
// import {useLocation, useParams} from "react-router-dom";
//
// import {schedulesService} from "../../services";
// import {Schedule, ScheduleForm} from "../../components";
// import {useSelector} from "react-redux";
//
// export const TrainSchedulePage = () => {
//     const [trainSchedules, setTrainSchedules] = useState(null)
//     const {state} = useLocation()
//     const {trainId} = useParams()
//     const {schedules} = useSelector(state => state.schedules);
//
//     useEffect(()=>{
//         if(state){
//             setTrainSchedules(state)
//         }else {
//             schedulesService.getTrainSchedule(trainId).then(({data}) => setTrainSchedules(data))
//         }
//     },[schedules])
//
//     return (
//         <div>
//             <ScheduleForm/>
//             <div style={{textAlign:"center", fontSize:"30px"}}>TRAIN {trainId} SCHEDULE</div>
//             {trainSchedules && trainSchedules.map(trainSchedule=><Schedule key={trainSchedule._id} schedule={trainSchedule}/>)}
//         </div>
//     );
// };

//data in through <Table/>
import {useEffect, useState} from "react";
import {useLocation, useParams} from "react-router-dom";

import {schedulesService} from "../../services";
import {ScheduleForm, Table} from "../../components";
import {useSelector} from "react-redux";

export const TrainSchedulePage = () => {
    const [trainSchedules, setTrainSchedules] = useState(null)
    const {state} = useLocation()
    const {trainId} = useParams()
    const {schedules, scheduleForUpdate} = useSelector(state => state.schedules);


    const columns = [
        {label: "№", accessor: "number", sortable: false},
        {label: "Arrival", accessor: "arrival", sortable: true, sortbyOrder: "asc"},
        {label: "Departure", accessor: "departure", sortable: false},
        {label: "Platform", accessor: "platform", sortable: true},
        {label: "TrainId", accessor: "trainId", sortable: true},
        {label: "StationId", accessor: "stationId", sortable: true},
        {label: "Actions", accessor: "actions", sortable: false},
    ];

    useEffect(() => {
        if (state) {
            setTrainSchedules(state)
        } else {
            schedulesService.getTrainSchedule(trainId).then(({data}) => setTrainSchedules(data))
        }
    }, [schedules, scheduleForUpdate])

    return (
        <div>
            <ScheduleForm/>
            <div style={{textAlign: "center", fontSize: "30px"}}>TRAIN {trainId} SCHEDULE</div>
            {trainSchedules && trainSchedules.length>0 &&
                <Table
                    data={trainSchedules}
                    columns={columns}
                />}
        </div>
    );
};

