import {trainsActions} from "../../redux";
import {useDispatch} from "react-redux";

import css from '../Schedule/Schedule.module.css'
import {useNavigate} from "react-router-dom";

export const Train = ({train, train: {_id: id, name, kind}}) => {
    const navigate = useNavigate();

    const dispatch = useDispatch()

    const deleteById = async () => {
        await dispatch(trainsActions.deleteById({id}));
    }
    const updateById = async () => {
        await dispatch(trainsActions.setTrainForUpdate({train}))
    }
    const getDetailsById = () => {
        navigate(`${id}`)
    }

    return (
        <div style={{border: "solid 2px black", padding: "5px", margin: "5px", background:"white", display:"flex", justifyContent:"space-between"}}>
            <div>{id} -- {name} -- {kind}</div>
            <div>
                <button className={css.buttonDelete} onClick={deleteById}>delete</button>
                <button className={css.buttonUpdate} onClick={updateById}>update</button>
                <button className={css.buttonGetDetails} onClick={getDetailsById}>get Details</button>
            </div>
        </div>
    );
};
