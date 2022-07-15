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
import Protected from './component/Protected';
import Logout from './component/Logout';


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
          {/* <Route path="/Dashboard/:id" element={<Protected prop= { "dashboard/id" } />} /> */}
          <Route path="/Dashboard/:id" element={<DashBoard/>} />
          <Route path="/Dashboard" element={<Protected prop= { "dashboard" } />} />
          {/* <Route path="/category/:id" element={<Protected prop= { "category/id" } />} /> */}

          <Route path="/category/:id" element={<Category />} />
        </Route>
        <Route path="/logout/:id" element={ <Logout/>}/>
        <Route path='*' element={ <h1> provide a proper url</h1>}/>
      </Routes>
    </Router>
  </>

  );
}

export default App;
