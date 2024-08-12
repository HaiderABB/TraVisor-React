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
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPages from './Pages/Protected/MainPages';

function App() {


  return (
    <>
      <Navbar />
      <Routes>

        <Route exact path='/' element={<LogIn />} />
        <Route exact path='/SignUp' element={<SignUp />} />
        <Route exact path='/ForgotPassword' element={<ForgotPassword />} />
        <Route exact path='/CheckEmail' element={<CheckEmail />} />
        <Route exact path='/ResetPassword' element={<ResetPassword />} />
        <Route exact path='/SetNewPassword' element={<SetNewPassword />} />

        <Route path='/' element={<MainPages />}>
          <Route path='/Flights' element={<Flights />} />
          <Route path='/Hotels' element={<Hotels />} />
          <Route path='/Restaurants' element={<Restaurants />} />
          <Route path='/Guides' element={<Guides />} />
        </Route>

        <Route exact path='*' element={<h1>Error 404: Page not found</h1>} />
      </Routes >
    </>
  );
}
export default App;
