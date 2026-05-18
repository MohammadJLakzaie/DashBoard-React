import { Routes, Route,  } from 'react-router-dom';
import Home from './Pages/Dashbord-page/Home' ;
import About from './Pages/Dashbord-page/About';
import Profile from './Pages/Dashbord-page/Profile';
import NotFound from './Pages/Dashbord-page/NotFound';
import AuthLayout from './Layout/AuthLayout'
import './App.css'
export default function App() {
  return (
    <div>
      {/* Navigation – will be visible on all pages */}
     

      {/* Routes section – only one Route renders at a time */}
      <Routes>
        <Route path="/" element={<AuthLayout/>} />
        <Route path="/Home" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/profile/:username" element={<Profile/>} />
        <Route path="*" element={<NotFound />} /> {/* 404 catch-all */}
      </Routes>
      
    </div>
  );
}