import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";

import {schedulesActions} from "../../redux";
import {Schedule} from "../Schedule/Schedule";


export const Schedules = () => {
    const {schedules, status} = useSelector(state => state.schedules)
    const [schedulesUpdated, setSchedulesUpdated] = useState([])
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(schedulesActions.getAll())
            .then(data => setSchedulesUpdated(data?.payload))
    }, [schedules])


    return (
        <div>
            {status && <h1>{status}</h1>}
            <br/>
            {schedulesUpdated && schedulesUpdated.map(scheduleUpdated => <Schedule key={scheduleUpdated._id} schedule={scheduleUpdated}/>)}
        </div>
    );
};
