import {useEffect, useState} from "react";
import {useLocation, useParams} from "react-router-dom";
import {useSelector} from "react-redux";

import {stationsService} from "../../services";
import {StationDetails, StationForm} from "../../components";

export const StationPage = () => {
    const [station, setStation] = useState(null)
    const {stationForUpdate} = useSelector(state => state.stations)

    const {state} = useLocation()
    const {id} = useParams()

    useEffect(() => {
        if (state) {
            setStation(state)
        } else {
            stationsService.getById(id).then(({data}) => setStation(data))
        }
    }, [stationForUpdate])

    return (
        <div>
            <StationForm/>
            {station && <StationDetails station={station}/>}
        </div>
    );
};
