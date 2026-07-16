type ButtonProps ={
   onClick: () => void;
  name?:string ;
  className : string ; 
}

export default function Buttons (
   {onClick , name , className}  : ButtonProps 
) {
    return(
                <button
                onClick={onClick}
                  type="button"
                  className={className}
                //   onClick={handleSignIn}
                >{name}</button>
              
              )
} 