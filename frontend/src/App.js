import {Route, Routes} from "react-router-dom";

import {MainLayout} from './layouts';
import {
    NotFoundPage,
    TrainsPage, TrainPage,
    TrainsSchedulePage, TrainSchedulePage,
    StationsPage, StationPage,
    SchedulesPage, SchedulePage,
    StationsSchedulePage, StationSchedulePage
} from './pages';

function App() {
    return (
        <Routes>
            <Route path='/' element={<MainLayout/>}>
                <Route path={'trains/:id'} element={<TrainPage/>}/>
                <Route path='trains' element={<TrainsPage/>}/>

                <Route path={'stations/:id'} element={<StationPage/>}/>
                <Route path='stations' element={<StationsPage/>}/>

                <Route path={'/schedules/stationSchedule/:stationId'} element={<StationSchedulePage/>}/>
                <Route path={'/schedules/trainSchedule/:trainId'} element={<TrainSchedulePage/>}/>

                <Route path={'/schedules/trainSchedule'} element={<TrainsSchedulePage/>}/>
                <Route path={'/schedules/stationSchedule'} element={<StationsSchedulePage/>}/>

                <Route path={'schedules/:id'} element={<SchedulePage/>}/>
                <Route path='schedules' element={<SchedulesPage/>}/>

                <Route path="*" element={<NotFoundPage/>}/>
            </Route>
        </Routes>
    );
}

export default App;
