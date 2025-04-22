// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
import Blog from './components/Blog';
import Login from './components/Login';
import Signup from './components/Signup';
import Food from './components/Food';
import Scholarship from './components/blogepost/Scholarship';
import Technology from './components/blogepost/Technology';
import LifeStyle from './components/blogepost/LifeStyle';
import AddBlog from './admin/AddBlog';
import Travel from './components/blogepost/Travel';
import Crypto from './components/blogepost/Crypto'
import Admin from './admin/Admin';
import Dashboard from './admin/adminCss/Dashboard';
import ScholarshipPost from './admin/ScholarshipPost';
import AiandMachine_learning from './components/blogepost/Ai&Mlearning';
import Brand from './components/Brand';

const App = () => {
  return (
   
    <>
 <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/category/food' element={<Food/>}/>
        <Route path='/scholarsip' element={<Scholarship/>}/>
        <Route path='/category/technology' element={<Technology/>}/>
        <Route path='/category/lifeStyle' element={<LifeStyle/>}/>
        <Route path='/category/Travel' element={<Travel/>}/>
        <Route path='/category/food' element={<Food/>}/>
       <Route path='/category/Crypto' element={<Crypto/>}/>
       <Route path='/dashboard' element={<Dashboard/>}/>
       <Route path='/add-blog' element={<AddBlog/>}/>
       <Route path='/add-scholarship' element={<ScholarshipPost/>}/>
       <Route path='/login-admin' element={<Admin/>}/>
       <Route path='/scholarsip' element={<Scholarship/>}/>
       <Route path='/category/ai-machine-learning' element={<AiandMachine_learning/>}/>
       <Route path='/category/brand' element={<Brand/>}/>
      </Routes>
    </Router>
    <Footer/>
    </>
  );
};

export default App;