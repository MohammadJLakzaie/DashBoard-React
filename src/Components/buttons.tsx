export default function Buttons (
   {onClick , name , className}
) {
    return(
    <div>
                <button
                onClick={onClick}
                  type="button"
                  className={className}
                //   onClick={handleSignIn}
                >{name}</button>
              </div>
              )
}