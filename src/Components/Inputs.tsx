type InputProps = {
  type: string;
  placeholder: string;
  label?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Inputs(

{
  type,
  placeholder,
  label,
  value, 
  onChange,
}: InputProps

) {



    return(
         <div className="text-right">
                        <label
                          htmlFor={type}
                          className="block text-sm font-semibold text-gray-700 mb-1.5"
                        >
                          {label}
                        </label>
                        <div className="relative">
                          <input
                          onChange={onChange}
                          value={value}
                            type={type}
                            id={type}
                            name="password"
                            autoComplete="current-password"
                            required
                            className="block w-full px-4 py-3 text-gray-900 border border-gray-300 rounded-xl
                             bg-gray-50/50 focus:bg-white focus:ring-2
                             focus:ring-indigo-500 focus:border-indigo-500 transition-smooth text-right"
                            placeholder={placeholder}
                          />
                        </div>
                      </div>
    )
}