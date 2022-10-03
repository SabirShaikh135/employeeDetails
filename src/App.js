import './App.css';
import EmployeeForm from './employeeDetails/EmployeeForm';
import Header from './employeeDetails/Header';
import { Routes, Route, Link } from "react-router-dom";
import ShowData from './employeeDetails/ShowData';
import DemoTextfield from './employeeDetails/DemoTextfield';
function App() { 
    return (
    <div className="App">
    <Header/>
    <Routes>
        <Route path="/" element={<EmployeeForm/>} />
        <Route path="/showdata" element={<ShowData />} />
        <Route path="/editEmployee/:id" element={<EmployeeForm />} />
        <Route path="*" element={<DemoTextfield/>} />
    </Routes>
    </div>
  );
}

export default App;

