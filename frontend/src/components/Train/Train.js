import {trainsActions} from "../../redux";
import {useDispatch} from "react-redux";

import css from '../Schedule/Schedule.module.css'

export const Train = ({train, train: {_id: id, name, kind}}) => {

    const dispatch = useDispatch()

    const deleteById = async () => {
        await dispatch(trainsActions.deleteById({id}));
    }
    const updateById = async () => {
        await dispatch(trainsActions.setTrainForUpdate({train}))
    }

    return (
        <div style={{border: "solid 2px black", padding: "5px", margin: "5px", background:"white", display:"flex", justifyContent:"space-between"}}>
            <div>{id} -- {name} -- {kind}</div>
            <div>
                <button className={css.buttonDelete} onClick={deleteById}>delete</button>
                <button className={css.buttonUpdate} onClick={updateById}>update</button>
            </div>
        </div>
    );
};
