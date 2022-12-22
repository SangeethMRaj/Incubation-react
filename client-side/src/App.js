
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Signup from './Pages/Signup'
import LoginPage from './Pages/Login';
import HomePage from './Pages/Home';
import AdminLogin from './Pages/AdminLogin';
import AdminHome from './Pages/AdminHome';
import SideBar from './Component/SideBar/SideBar'
import Application from './Pages/sidebar/Application';
import Approved from './Pages/sidebar/Approved';
import Dashboard from './Pages/sidebar/Dashboard';
import Declined from './Pages/sidebar/Declined';
import Booking from './Pages/sidebar/Booking';
import AdminLayout from './Pages/sidebar/AdminLayout';
import Confirm from './Component/ConfirmPage/Confirm';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<Signup/>} path="/signup" />
          <Route element={<LoginPage/>} path="/" />
          <Route element={<HomePage/>} path="/home" />
          <Route element={<Confirm/>} path="/confirm" />
        </Routes>

        <Routes>
          <Route element={<AdminLogin/>}  path='/admin/login'/>
          <Route element={<AdminHome/>} path='/admin/home'/>
          </Routes>
          {/* <SideBar> */}
        <Routes>
          <Route element={<AdminLayout></AdminLayout>} path='/admin/'>
          <Route element={<Dashboard/>}  path='/admin/dashboard'/>
          <Route element={<Application/>}  path='/admin/application'/>
          <Route element={<Approved/>}  path='/admin/approved'/>
          <Route element={<Declined/>}  path='/admin/declined'/>
          <Route element={<Booking/>}  path='/admin/booking'/>
          </Route>
       </Routes>
        {/* </SideBar> */}
        {/* </Routes> */}
        
       
      </Router>

     
        
     
    </div>
  );
}

export default App;
