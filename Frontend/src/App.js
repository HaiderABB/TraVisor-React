/* eslint-disable no-unused-vars */
import './App.css';
import SignUp from './Pages/Auth/SignUp';
import LogIn from './Pages/Auth/LogIn';
import ForgotPassword from './Pages/Auth/ForgotPassword';
import CheckEmail from './Pages/Auth/CheckEmail';
import ResetPassword from './Pages/Auth/ResetPassword';
import SetNewPassword from './Pages/Auth/SetNewPassword'
import Navbar from './Components/Navbar';
import Transport from './Pages/Menu/Transport';
function App() {
  return (
    <div className="App">
      {/* <SignUp /> */}
      {/* <LogIn /> */}
      {/* <ForgotPassword /> */}
      {/* <CheckEmail /> */}
      {/* <SetNewPassword /> */}
      {/* <ResetPassword></ResetPassword> */}
      <Transport></Transport>
    </div>
  );
}
export default App;
