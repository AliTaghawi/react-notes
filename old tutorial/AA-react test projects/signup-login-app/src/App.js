import { Navigate, Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp";
import LogIn from './components/LogIn'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/*" element={ <Navigate to='/signup' /> } />
      </Routes>
    </div>
  );
}

export default App;
