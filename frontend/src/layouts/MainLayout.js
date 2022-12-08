import React from 'react'
import {Outlet} from "react-router-dom";

import {Header} from '../components'

export const MainLayout = () => {
    return (
        <div>
            <Header/>
            <div style={{display: "flex", justifyContent: "center"}}><Outlet/></div>
        </div>
    )

};
