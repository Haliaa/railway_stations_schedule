import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {schedulesActions} from "../../redux";
import css from './ScheduleForm.module.css'

export const ScheduleForm = () => {

   const {reset, register, handleSubmit, setValue} = useForm();
   const dispatch = useDispatch()
   const {formErrors, scheduleForUpdate} = useSelector(state => state.schedules);

   useEffect(()=>{
       if (scheduleForUpdate){
            const {arrival, departure, stop, platform, trainId, stationId} = scheduleForUpdate
            setValue('arrival',arrival);
            setValue('departure',departure);
            setValue('stop',stop);
            setValue('platform',platform);
            setValue('trainId',trainId);
            setValue('stationId',stationId);
       }
   },[scheduleForUpdate])


   const submit = async (newSchedule) => {
       if(scheduleForUpdate){
        await dispatch(schedulesActions.updateById({id:scheduleForUpdate._id, schedule:newSchedule}))
       }else {
           await dispatch(schedulesActions.create({schedule: newSchedule}))
       }
        reset();
   }

    return (
        <form onSubmit={handleSubmit(submit)} style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <div><label>arrival:<input type="text" {...register('arrival')}/></label></div>
            {formErrors.arrival&&<span>{formErrors.arrival[0]}</span>}
            <div><label>departure:<input type="text" {...register('departure')}/></label></div>
            {formErrors.departure&&<span>{formErrors.departure[0]}</span>}
            <div><label>stop:<input type="text" {...register('stop')}/></label></div>
            {formErrors.stop&&<span>{formErrors.stop[0]}</span>}
            <div><label>platform:<input type="text" {...register('platform')}/></label></div>
            {formErrors.platform&&<span>{formErrors.platform[0]}</span>}
            <div><label>trainId:<input type="text" {...register('trainId')}/></label></div>
            {formErrors.trainId&&<span>{formErrors.trainId[0]}</span>}
            <div><label>stationId:<input type="text" {...register('stationId')}/></label></div>
            {formErrors.stationId&&<span>{formErrors.stationId[0]}</span>}
            <button className={css.buttonSubmit}>save</button>
        </form>
    );
};
