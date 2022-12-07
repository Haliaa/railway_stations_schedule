import {stationsActions} from "../../redux";
import {useDispatch} from "react-redux";

import css from '../Schedule/Schedule.module.css'

export const Station = ({station, station: {_id: id, name, platforms}}) => {

    const dispatch = useDispatch()

    const deleteById = async () => {
        await dispatch(stationsActions.deleteById({id}))
    }
    const updateById = async () => {
        await dispatch(stationsActions.setStationForUpdate({station}))
    }

    return (
        <div style={{border: "solid 2px black", padding: "5px", margin: "5px", background:"white", display:"flex", justifyContent:"space-between"}}>
            <div>{id} -- {name} -- {platforms}</div>
            <div>
                <button className={css.buttonDelete} onClick={deleteById}>delete</button>
                <button className={css.buttonUpdate} onClick={updateById}>update</button>
            </div>
        </div>
    );
};
