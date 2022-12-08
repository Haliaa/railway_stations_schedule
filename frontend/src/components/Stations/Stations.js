import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";

import {stationsActions} from "../../redux";
import {Station} from "../Station/Station";

export const Stations = () => {
    const {stations, status} = useSelector(state => state.stations)
    const [stationsUpdated, setStationsUpdated] = useState([])
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(stationsActions.getAll())
            .then(data => setStationsUpdated(data?.payload))
    }, [stations])

    return (
        <div>
            {status && <h1>{status}</h1>}
            <br/>
            {stationsUpdated && stationsUpdated.map(stationUpdated => <Station key={stationUpdated._id} station={stationUpdated}/>)}
        </div>
    );
};
