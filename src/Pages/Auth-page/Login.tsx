import Buttons from '../../Components/Buttons' ;
import Inputs from '../../Components/Inputs'
export default function Login () {
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
             
             <Inputs  type="text"   placeholder="Enter your username"  label="Username" />
             <Inputs type="password"   placeholder="••••••••"  label="password"/>

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
                > Remember Me
                </label>
              </div>
            {/* button from Components*/}
              <Buttons/>
            </form>
          </div>
        </div>
    )
}