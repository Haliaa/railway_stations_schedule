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
import {useSelector} from "react-redux";

import {schedulesService, trainsService} from "../../services";
import {ScheduleForm, Table} from "../../components";

export const TrainSchedulePage = () => {
    const [trainSchedules, setTrainSchedules] = useState(null)
    const [trainName, setTrainName] = useState('')
    const {state} = useLocation()
    const {trainId} = useParams()

    const {schedules, scheduleForUpdate} = useSelector(state => state.schedules);


    const columns = [
        {label: "№", accessor: "number", sortable: false},
        {label: "Arrival", accessor: "arrival", sortable: true, sortbyOrder: "asc"},
        {label: "Departure", accessor: "departure", sortable: false},
        {label: "Platform", accessor: "platform", sortable: true},
        {label: "Train", accessor: "train", sortable: true},
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

    trainsService.getById(trainId).then(({data}) =>setTrainName(data.name))

    return (
        <div>
            <ScheduleForm/>
            <div style={{textAlign: "center", fontSize: "30px", margin: "20px"}}>Train <strong> {trainName} </strong> schedule</div>
            {trainSchedules && trainSchedules.length > 0 &&
                <Table
                    trainName={trainName}
                    data={trainSchedules}
                    columns={columns}
                />}
        </div>
    );
};

