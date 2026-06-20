import Buttons from '../../Components/Buttons' ;
import Inputs from '../../Components/Inputs' 
import { useNavigate } from "react-router-dom";
export default function Signi() {
 const navigate = useNavigate();
    return(
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
                  strokeLinejoin="round">
                    
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <span className="text-xl font-semibold tracking-tight text-gray-800">
                Trello CodeMenta Edition
              </span>
            </div>

            {/* Title area */}
            <div className="mb-8 text-right">
              <h1 className="text-2xl text-wrap sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
              به حساب خود وارد شوید 
              </h1>
              
            </div>

            {/* Form */}
            <form id="signinForm" className="space-y-6"  method="POST">
             
             <Inputs  type="text"   placeholder="نام کاربری خود راوارد کنید "  label="نام کاربری " />
             <Inputs type="password"   placeholder="••••••••"  label="پسورد"/>

            <div className="flex justify-end items-center gap-3">
            <label
             htmlFor="remember-me"
              className="text-sm font-medium text-gray-700 cursor-pointer select-none"
               >
              من را به یاد بسپار
             </label>

           <input
            id="remember-me"
            name="remember_me"
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 focus:ring-offset-0 transition cursor-pointer"
                   />
              </div>
            {/* button from Components*/}
              <Buttons onClick={() => navigate("/app") } name="ورود" className={"group relative w-full flex justify-center py-3 px-4 mt-2 border border-transparent text-sm font-semibold rounded-xl text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 shadow-md transition-all duration-200 transform hover:scale-[1.01] active:scale-[0.99]"} />
            </form>
          </div>
        </div>
    )
}