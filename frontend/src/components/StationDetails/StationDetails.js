import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

import {stationsActions} from "../../redux";

export const StationDetails = ({station, station:{_id, name, platforms}}) => {

    const dispatch = useDispatch()
    const navigate = useNavigate();

    const deleteById= async () => {
        await dispatch(stationsActions.deleteById({id:_id}))
        navigate('/station')
    }
    const updateById= () => {
        dispatch(stationsActions.setStationForUpdate({station}))
    }
    return (
        <div>
            <h2>id:{_id}</h2>
            <h2>name:{name}</h2>
            <h2>platforms:{platforms}</h2>
            <button onClick={deleteById}>delete</button>
            <button onClick={updateById}>update</button>
        </div>
    );
};
