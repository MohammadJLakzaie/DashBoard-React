type InputProps = {
  type: string;
  placeholder: string;
  label: string;
};

export default function Inputs(

{
  type,
  placeholder,
  label,
}: InputProps

) {



    return(
         <div>
                        <label
                          htmlFor={type}
                          className="block text-sm font-semibold text-gray-700 mb-1.5"
                        >
                          {label}
                        </label>
                        <div className="relative">
                          <input
                            type={type}
                            id={type}
                            name="password"
                            autoComplete="current-password"
                            required
                            className="block w-full px-4 py-3 text-gray-900 border border-gray-300 rounded-xl bg-gray-50/50 focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-smooth"
                            placeholder={placeholder}
                          />
                        </div>
                      </div>
    )
}