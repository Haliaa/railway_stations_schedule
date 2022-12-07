import {useSelector, useDispatch} from "react-redux";
import {useEffect, useState} from "react";
import {trainsActions} from "../../redux";
import {NavLink} from "react-router-dom";

export const List = (props) => {
    const dispatch = useDispatch()
    const {trains} = useSelector(state => state.trains);
    const [trainsUpdated, setTrainsUpdated] = useState([])

    useEffect(() => {
        dispatch(trainsActions.getAll())
            .then(data => {
                setTrainsUpdated(data?.payload)
            })
    }, [trains, dispatch])

    const data = [...trainsUpdated];

    const filteredData = data.filter((el) => {
        if (props.input === '') {
            return el;
        } else {
            return el.name.toLowerCase().includes(props.input)
        }
    })


    return (
        <ul>
            {filteredData.map((item) => (
                <NavLink key={item._id} to={`/schedules/trainSchedule/${item._id}`} style={{display:"flex", flexDirection:"column", textDecoration:"none", color:"black", fontSize:"30px", margin:"10px"}}><strong> {item.name}</strong></NavLink>
             ))}
        </ul>
    )
}
