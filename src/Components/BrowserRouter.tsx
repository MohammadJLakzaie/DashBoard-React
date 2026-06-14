import { Routes, Route,  } from 'react-router-dom';



export default function BrowserRouter(){
  <Routes>
        <Route path="/" element={<AuthLayout/>} />
        <Route path="/Home" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/profile/:username" element={<Profile/>} />
        <Route path="*" element={<NotFound />} /> {/* 404 catch-all */}
</Routes>
}