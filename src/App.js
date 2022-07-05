import logo from './logo.svg';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from './component/Register';
import Login from './component/Login';


function App() {
  return (<>
    {/* <h1 className=" text-3xl font-bold underline" >
      Hello world!
    </h1> */}
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/home" element={<Home />} /> */}
      </Routes>
    </Router>
  </>

  );
}

export default App;
