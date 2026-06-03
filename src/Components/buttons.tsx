export default function Buttons (
   {name} 
) {
    return(
    <div>
                <button
                  type="button"
                  className="group relative w-full flex justify-center py-3 px-4 mt-2 border border-transparent text-sm font-semibold rounded-xl text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 shadow-md transition-all duration-200 transform hover:scale-[1.01] active:scale-[0.99]"
                //   onClick={handleSignIn}
                >{name}</button>
              </div>
              )
}