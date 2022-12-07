import {useEffect, useState} from "react";
import {useLocation, useParams} from "react-router-dom";

import {trainsService} from "../../services";
import {TrainDetails, TrainForm} from "../../components";

export const TrainPage = () => {
    const [train, setTrain] = useState(null)

    const {state} = useLocation()
    const {id} = useParams()

    useEffect(()=>{
        if(state){
            setTrain(state)
        }else {
            trainsService.getById(id).then(({data}) => setTrain(data))
        }
    },[])

    return (
        <div>
            <TrainForm/>
            {train && <TrainDetails train={train}/>}
        </div>
    );
};
