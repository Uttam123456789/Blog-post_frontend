
import './index.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from './component/Register';
import Login from './component/Login';
import Home from './component/Home';
import Post from './component/Post';
import DashBoard from './component/DashBoard';
import NavBar from './component/NavBar';
import Category from './component/Category';
import Protected from './component/Protected';
import Logout from './component/Logout';


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<NavBar />}>

            <Route path="/login" element={<Login />} />
            <Route path="home" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route element={<Protected />}>
              <Route path="/post/:id" element={<Post />} />
            
              <Route path="/Dashboard/:id" element={<DashBoard />} />
              <Route path="/Dashboard" element={<Protected prop={"dashboard"} />} />
              <Route path="/category/:id" element={<Category />} />
            </Route>
          </Route>
          <Route path="/logout/:id" element={<Logout />} />
          <Route path='*' element={<h1> provide a proper url</h1>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
