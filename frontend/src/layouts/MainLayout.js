import React from 'react';
import {NavLink, Outlet} from "react-router-dom";

import css from './MainLayout.module.css';
// import stationPhoto from '../images/station.jpg'
// import trainSchedule from '../images/clockS.jpeg'
// import trainsPhoto from '../images/trains.jpg'

export const MainLayout = () => {

    return (
        <div>
            <div>
                <div style={{display: "flex", flexDirection: "column"}}>
                    <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                        <div>
                            <NavLink className={css.trainsNav} to={'/trains'}><strong> TRAINS </strong></NavLink>
                            {/*<div><img style={{blockSize: "200px"}} src={trainsPhoto} alt={'trainsPhoto'}/></div>*/}
                        </div>
                        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                            <NavLink className={css.trainsNav} to={'/schedules'}><strong>SCHEDULES</strong></NavLink>
                            {/*<div><img style={{blockSize: "200px"}} src={trainSchedule} alt={'trainSchedulePhoto'}/></div>*/}
                        </div>
                        <div>
                            <NavLink className={css.trainsNav} to={'/stations'}><strong> STATIONS </strong></NavLink>
                            {/*<div><img style={{blockSize: "200px"}} src={stationPhoto} alt={'stationPhoto'}/></div>*/}
                        </div>
                    </div>
                    <div
                        style={{display: "flex", flexDirection: "row", justifyContent: "space-evenly", alignItems: "center"}}>
                        <NavLink className={[css.trainsNav, css.colorBlack_sizeS].join(" ")}
                                 to={'/schedules/stationSchedule'}><strong> STATION <div style={{fontSize:"20px", fontStyle:"italic"}}>SCHEDULE</div></strong></NavLink>
                        <NavLink className={[css.trainsNav, css.colorBlack_sizeS].join(" ")}
                                 to={'/schedules/trainSchedule'}><strong> TRAIN <div style={{fontSize:"20px", fontStyle:"italic"}}>SCHEDULE</div></strong></NavLink>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
            <div style={{display: "flex", justifyContent: "center"}}><Outlet/></div>
        </div>
    )
        ;
};
