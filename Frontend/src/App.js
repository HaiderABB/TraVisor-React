/* eslint-disable no-unused-vars */
import './App.css';
import SignUp from './Pages/Auth/SignUp';
import LogIn from './Pages/Auth/LogIn';
import ForgotPassword from './Pages/Auth/ForgotPassword';
import CheckEmail from './Pages/Auth/CheckEmail';
import ResetPassword from './Pages/Auth/ResetPassword';
import SetNewPassword from './Pages/Auth/SetNewPassword'
function App() {
  return (
    <div className="App">
      {/* <SignUp /> */}
      {/* <LogIn /> */}
      {/* <ForgotPassword /> */}
      {/* <CheckEmail /> */}
      {/* <SetNewPassword /> */}
      <ResetPassword></ResetPassword>
    </div>
  );
}
export default App;
