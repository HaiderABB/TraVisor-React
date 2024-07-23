/* eslint-disable no-unused-vars */
import './App.css';
import SignUp from './Pages/Auth/SignUp';
import LogIn from './Pages/Auth/LogIn';
import ForgotPassword from './Pages/Auth/ForgotPassword';
import CheckEmail from './Pages/Auth/CheckEmail';
import ResetPassword from './Pages/Auth/ResetPassword';
import SetNewPassword from './Pages/Auth/SetNewPassword'
import Navbar from './Components/Common/Navbar';
import Flights from './Pages/Menu/Flights/Flights';
import Hotels from './Pages/Menu/Hotels/Hotels'
import Restaurants from './Pages/Menu/Restaurants/Restaurants';
import Guides from './Pages/Menu/Guides/Guides';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (

    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<LogIn />} />
        <Route path='/SignUp' element={<SignUp />} />
        <Route path='/ForgotPassword' element={<ForgotPassword />} />
        <Route path='/CheckEmail' element={<CheckEmail />} />
        <Route path='/ResetPassword' element={<ResetPassword />} />
        <Route path='/SetNewPassword' element={<SetNewPassword />} />
        <Route path='/Flights' element={<Flights />} />
        <Route path='/Hotels' element={<Hotels />} />
        <Route path='/Restaurants' element={<Restaurants />} />
        <Route path='/Guides' element={<Guides />} />
        <Route path='*' element={<h1>ERRORRR 404 : NOT FOUNDDD</h1>}></Route>
      </Routes >
    </>
  );
}
export default App;
