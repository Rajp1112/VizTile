import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import TilesView from './pages/TilesView/TilesView';
import Loader from './components/Loader';
import ProductExplainSection from './pages/Home/ProductExplainSection/ProductExplainSection';
import Login from './pages/Home/Login';
import Register from './components/Register';
import Logout from './components/Logout';
import MainDashboard from './pages/Admin/MainDashboard';
const Kitchen1 = lazy(() => import('./pages/Rooms/Kitchen/Kitchen1'));

function App() {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/admin' element={<MainDashboard />} />

          {/* Home Route */}
          <Route path='/' element={<Home />} />
          <Route path='/tiles-view' element={<TilesView />} />

          {/* Room Routes */}
          <Route path='/kitchen/1' element={<Kitchen1 />} />
          <Route path='/livingroom/1' element={<Kitchen1 />} />
          <Route path='/livingroom/2' element={<Kitchen1 />} />
          <Route path='/meetingroom/1' element={<Kitchen1 />} />
          <Route path='/classroom/1' element={<Kitchen1 />} />
          <Route path='/bathroom/1' element={<Kitchen1 />} />
          <Route path='/bathroom/2' element={<Kitchen1 />} />
          <Route path='/product/:id' element={<ProductExplainSection />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
