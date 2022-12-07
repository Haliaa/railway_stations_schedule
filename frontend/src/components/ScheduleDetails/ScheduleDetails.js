import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

import {schedulesActions} from "../../redux";

export const ScheduleDetails = ({schedule, schedule:{_id:id, arrival, departure, stop,
    platform, trainId, stationId, createdAt, updatedAt}}) => {

    const dispatch = useDispatch()
    const navigate = useNavigate();

    const deleteById= async () => {
        await dispatch(schedulesActions.deleteById({id}))
        navigate('/schedules')
    }
    const updateById= async () => {
       await dispatch(schedulesActions.setScheduleForUpdate({schedule}))
    }
    return (
        <div>
            <h2>id: {id}</h2>
            <h2>arrival: {arrival}</h2>
            <h2>departure: {departure}</h2>
            <h2>stop: {stop}</h2>
            <h2>platform: {platform}</h2>
            <h2>trainId: {trainId}</h2>
            <h2>stationId: {stationId}</h2>
            <h2>createdAt:{createdAt}</h2>
            <h2>updatedAt:{updatedAt}</h2>
            <button onClick={deleteById}>delete</button>
            <button onClick={updateById}>update</button>
        </div>
    );
};
