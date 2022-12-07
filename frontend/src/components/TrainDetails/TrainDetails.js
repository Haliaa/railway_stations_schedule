import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

import {trainsActions} from "../../redux";

export const TrainDetails = ({train, train:{_id:id, name, kind, createdAt, updatedAt}}) => {

    const dispatch = useDispatch()
    const navigate = useNavigate();

    const deleteById= async () => {
        await dispatch(trainsActions.deleteById({id}))
        navigate('/trains')
    }
    const updateById= async () => {
       await dispatch(trainsActions.setTrainForUpdate({train}))
    }
    return (
        <div>
            <h2>id: {id}</h2>
            <h2>name: {name}</h2>
            <h2>kind: {kind}</h2>
            <h2>createdAt:{createdAt}</h2>
            <h2>updatedAt:{updatedAt}</h2>
            <button onClick={deleteById}>delete</button>
            <button onClick={updateById}>update</button>
        </div>
    );
};
