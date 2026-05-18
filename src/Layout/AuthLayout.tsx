import { Routes, Route,Link  } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
export default function AuthLayout() {
  // <Routes>
  //   <Route path="/A" element={<Home />} />
  // </Routes>
 const navigate = useNavigate();

  const handleSignIn = () => {
    
    navigate('/Home');
  };

  return (
    <div
      className="min-h-screen   bg-no-repeat"
      style={{
        backgroundImage: "url('/src/assets/Auth/Frame (3).svg')", 
       
      }}
    >
      {/* Container for centering the card on small screens */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center  justify-center lg:justify-end ">
        <div className="w-full max-w-md bg-white/75 rounded-2xl lg:mx-60 shadow-card overflow-hidden transition-all duration-300 hover:shadow-2xl">
          <div className="px-4 py-6 sm:px-8 sm:py-10">
            {/* Logo area */}
            <div className="flex justify-start items-center gap-2 mb-6">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-r from-indigo-500 to-indigo-700 shadow-md">
                <svg
                  className="h-5 w-5 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <span className="text-xl font-semibold tracking-tight text-gray-800">
                Your Logo
              </span>
            </div>

            {/* Title area */}
            <div className="mb-8">
              <h1 className="text-2xl text-wrap sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
                Sign Into
                Your Account
              </h1>
              <div className="mt-2 h-1 w-12 bg-indigo-500 rounded-full"></div>
            </div>

            {/* Form */}
            <form id="signinForm" className="space-y-6"  method="POST">
              <div>
                <label
                  htmlFor="company-id"
                  className="block text-sm font-semibold text-gray-700 mb-1.5"
                >
                  Company ID
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="company-id"
                    name="company_id"
                    autoComplete="organization"
                    required
                    className="block w-full px-4 py-3 text-gray-900 border border-gray-300 rounded-xl bg-gray-50/50 focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-smooth"
                    placeholder="ACME-corp / employeeID"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-semibold text-gray-700 mb-1.5"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    autoComplete="current-password"
                    required
                    className="block w-full px-4 py-3 text-gray-900 border border-gray-300 rounded-xl bg-gray-50/50 focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-smooth"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              <div className="flex items-center gap-3">
                <input
                  id="remember-me"
                  name="remember_me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 focus:ring-offset-0 transition cursor-pointer"
                />
                <label
                  htmlFor="remember-me"
                  className="text-sm font-medium text-gray-700 cursor-pointer select-none"
                >
                  Remember Me
                </label>
              </div>

              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-3 px-4 mt-2 border border-transparent text-sm font-semibold rounded-xl text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 shadow-md transition-all duration-200 transform hover:scale-[1.01] active:scale-[0.99]"
                >
                  <button type="button" onClick={handleSignIn}>Sign In</button>
                  
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}