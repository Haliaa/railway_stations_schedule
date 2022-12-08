import {NavLink} from "react-router-dom";
import css from './Header.module.css';


export const Header =()=>{ return (
        <div>
            <div>
                <div style={{display: "flex", flexDirection: "column"}}>
                    <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                        <div>
                            <NavLink className={css.trainsNav} to={'/trains'}><strong> TRAINS </strong></NavLink>
                        </div>
                        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                            <NavLink className={css.trainsNav} to={'/schedules'}><strong>SCHEDULES</strong></NavLink>
                        </div>
                        <div>
                            <NavLink className={css.trainsNav} to={'/stations'}><strong> STATIONS </strong></NavLink>
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
        </div>
    );}
