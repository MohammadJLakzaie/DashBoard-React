
// import { useNavigate } from 'react-router-dom';
import Login from '../Pages/Auth-page/Login'
export default function AuthLayout() {
  // <Routes>
  //   <Route path="/A" element={<Home />} />
  // </Routes>
//  const navigate = useNavigate();

  // const handleSignIn = () => {
    
  //   navigate('/Home');
  // };

  return (
    <div
      className="min-h-screen   bg-no-repeat"
      style={{
        backgroundImage: "url('/src/assets/Auth/Frame (3).svg')", 
       
      }}
    >

      {/* Container for centering the card on small screens */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center  justify-center lg:justify-end ">
            <Login/>
      </div>
    </div>
  );
}