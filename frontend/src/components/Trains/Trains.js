import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";

import {trainsActions} from "../../redux";
import {Train} from "../Train/Train";


export const Trains = () => {
    const {trains, status,trainForUpdate } = useSelector(state => state.trains)
    const [trainsUpdated, setTrainsUpdated] = useState([])
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(trainsActions.getAll())
            .then(data => {
                setTrainsUpdated(data?.payload)
            })
    }, [trainsUpdated])


    return (
        <div>
            {status && <h1>{status}</h1>}
            <br/>
            {trainsUpdated && trainsUpdated.map(trainUpdated => <Train key={trainUpdated._id} train={trainUpdated}/>)}
        </div>
    );
};
