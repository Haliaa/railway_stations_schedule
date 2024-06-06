import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {trainsActions} from "../../redux";
import css from '../ScheduleForm/ScheduleForm.module.css'

export const TrainForm = () => {

    const {reset, register, handleSubmit, setValue} = useForm();
    const dispatch = useDispatch()
    const {formErrors, trainForUpdate} = useSelector(state => state.trains);

    const submit = async (newTrain) => {
        if (trainForUpdate) {
            await dispatch(trainsActions.updateById({id: trainForUpdate._id, train: newTrain}))
        } else {
            await dispatch(trainsActions.create({train: newTrain}))
        }
        reset();
    }
    useEffect(() => {
        if (trainForUpdate) {
            const {name, kind} = trainForUpdate
            setValue('name', name);
            setValue('kind', kind);
        }
    }, [trainForUpdate, submit])

    return (
        <form onSubmit={handleSubmit(submit)} style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <div><label>name:<input type="text" {...register('name')}/></label></div>
            {formErrors.name && <span>{formErrors.name[0]}</span>}
            <div><label>kind:<input type="text" {...register('kind')}/></label></div>
            {formErrors.kind && <span>{formErrors.kind[0]}</span>}
            <button className={css.buttonSubmit}>save</button>
        </form>
    );
};
