//import logo from './logo.svg';
import './App.css';
// import { Form } from './components/Form';
// import IconTextField from './components/test';
// import InputIcon from './components/test';
//import the icons
// import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
// import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import Navbar from './components/navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './Pages/Home';
import { Login } from './Pages/Login';

function App() {
  return (
  <BrowserRouter>
      <Navbar />
    <Routes>

<Route path="/" element={<Home />} />      
<Route path="/login" element={<Login />} />


    </Routes>
  </BrowserRouter>
  );
}

export default App;
