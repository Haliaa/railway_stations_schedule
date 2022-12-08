import {schedulesActions} from "../../redux";
import {useDispatch} from "react-redux";

import css from './Schedule.module.css'
import {useNavigate} from "react-router-dom";

export const Schedule = ({schedule, schedule: {_id: id, arrival, departure, stop, platform, trainId, stationId}}) => {

    const navigate = useNavigate();

    const dispatch = useDispatch()

    const deleteById = async () => {
        await dispatch(schedulesActions.deleteById({id}))
    }
    const updateById = async () => {
        await dispatch(schedulesActions.setScheduleForUpdate({schedule}))
    }
    const getDetailsById = () => {
        navigate(`${id}`)
    }

    return (
        <div style={{
            border: "solid 2px black",
            padding: "5px",
            margin: "5px",
            background: "white",
            display: "flex",
            justifyContent: "space-between"
        }}>

            <div>{id} -- {arrival} -- {departure} -- {stop} -- {platform} -- {trainId} -- {stationId}</div>
            <div>
                <button className={css.buttonDelete} onClick={deleteById}>delete</button>
                <button className={css.buttonUpdate} onClick={updateById}>update</button>
                <button className={css.buttonGetDetails} onClick={getDetailsById}>get Details</button>

            </div>
        </div>
    );
};
