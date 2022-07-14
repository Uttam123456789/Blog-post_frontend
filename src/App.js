import logo from './logo.svg';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from './component/Register';
import Login from './component/Login';
import Home from './component/Home';
import Post from './component/Post';
import DashBoard from './component/DashBoard';
import NavBar from './component/NavBar';
import Category from './component/Category';


function App() {

  return (<>
    {/* <h1 className=" text-3xl font-bold underline" >
      Hello world!
    </h1> */}

    <Router>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route path="home" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/post/:id" element={<Post />} />
          <Route path="/Dashboard/:id" element={<DashBoard />} />
          <Route path="/category/:id" element={<Category />} />
        </Route>
      </Routes>
    </Router>
  </>

  );
}

export default App;
