import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {stationsActions} from "../../redux";
import css from '../ScheduleForm/ScheduleForm.module.css'

export const StationForm = () => {

    const {reset, register, handleSubmit, setValue} = useForm();
    const dispatch = useDispatch()
    const {formErrors, stationForUpdate} = useSelector(state => state.stations);

    useEffect(() => {
        if (stationForUpdate) {
            const {name, platforms} = stationForUpdate
            setValue('name', name);
            setValue('platforms', platforms);
        }
    }, [stationForUpdate])


    const submit = async (newStation) => {
        if (stationForUpdate) {
            await dispatch(stationsActions.updateById({id: stationForUpdate._id, station: newStation}))
        } else {
            await dispatch(stationsActions.create({station: newStation}))
        }
        reset();
    }

    return (
        <form onSubmit={handleSubmit(submit)} style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <div>
                <div><label>name:<input type="text" {...register('name')}/></label></div>
                {formErrors.name && <span>{formErrors.name[0]}</span>}
                <div><label>platforms:<input type="text" {...register('platforms')}/></label></div>
                {formErrors.platforms && <span>{formErrors.platforms[0]}</span>}</div>
            <button className={css.buttonSubmit}>save</button>
        </form>
    );
};
