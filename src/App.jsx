import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import TilesView from './pages/TilesView/TilesView';
// import Kitchen1 from './pages/Rooms/Kitchen/Kitchen1';
import BedRoom1 from './pages/Rooms/BedRoom/BedRoom1';
import Loader from './components/Loader';

const Kitchen1 = lazy(() => import('./pages/Rooms/Kitchen/Kitchen1'));

function App() {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/tiles-view' element={<TilesView />} />

          {/* Room Routes */}
          <Route path='/kitchen/1' element={<Kitchen1 />} />
          <Route path='/livingroom/1' element={<Kitchen1 />} />
          <Route path='/livingroom/2' element={<Kitchen1 />} />
          <Route path='/meetingroom/1' element={<Kitchen1 />} />
          <Route path='/classroom/1' element={<Kitchen1 />} />
          <Route path='/bathroom/1' element={<Kitchen1 />} />

          <Route path='/bedroom/1' element={<BedRoom1 />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
