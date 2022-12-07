import {useDispatch} from "react-redux";

import {schedulesActions} from "../../redux";

export const StationSchedule = ({stationSchedule, stationSchedule: {_id, arrival, departure, stop, platform, trainId, stationId}}) => {

    const dispatch = useDispatch()

    const deleteById = async () => {
        await dispatch(schedulesActions.deleteById({id: _id}))
    }
    const updateById = () => {
        // dispatch(schedulesActions.setTrainScheduleForUpdate({stationSchedule}))
    }

    return (
        <div>
            <div>id: {_id}</div>
            <div>arrival: {arrival}</div>
            <div>departure: {departure}</div>
            <div>stop: {stop}</div>
            <div>trainId: {trainId}</div>
            <div>stationId: {stationId}</div>
            <button onClick={deleteById} style={{background:"lightcoral"}}>delete</button>
            <button onClick={updateById} style={{background:"lightsteelblue"}}>update</button>
        </div>
    );
};
