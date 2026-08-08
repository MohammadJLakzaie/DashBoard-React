type ButtonProps ={
   onClick: () => void;
  name?:string ;
  width : string ; 
  color : string ; 
  disabled? : boolean ; 
}

export default function Buttons (
   {onClick , name , width , color , disabled }  : ButtonProps 
) {
    return(
                <button
                disabled={disabled}
                onClick={onClick}
                  type="button"
                  className={`group relative ${width} ${color} flex justify-center py-3
                  px-4 mt-2 border border-transparent 
                  text-sm font-semibold rounded-xl  focus:outline-none focus:ring-2 
                  focus:ring-offset-2 shadow-md transition-all duration-200
                   transform hover:scale-[1.01] active:scale-[0.99]`}
                //   onClick={handleSignIn}
                >{name}</button>
              
              )
} 