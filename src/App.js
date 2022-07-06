import logo from './logo.svg';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from './component/Register';
import Login from './component/Login';
import Home from './component/Home';


function App() {
  return (<>
    {/* <h1 className=" text-3xl font-bold underline" >
      Hello world!
    </h1> */}
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </Router>
  </>

  );
}

export default App;
