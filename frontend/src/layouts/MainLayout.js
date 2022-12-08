import React from 'react'
import {Header} from '../components'
import {Outlet} from "react-router-dom";


export const MainLayout = () => {
    return (
        <div>
            <Header/>
            <div style={{display: "flex", justifyContent: "center"}}><Outlet/></div>
        </div>
    )

};
