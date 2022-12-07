import {useEffect, useState} from "react";
import {useLocation, useParams} from "react-router-dom";

import {stationsService} from "../../services";
import {StationDetails} from "../../components";

export const StationPage = () => {
    const [station, setStation] = useState(null)
    const {state} = useLocation()
    const {id} = useParams()

    useEffect(()=>{
        if(state){
            setStation(state)
        }else {
            stationsService.getById(id).then(({data}) => setStation(data))
        }
    },[])

    return (
        <div>
            {station && <StationDetails station={station}/>}
        </div>
    );
};
