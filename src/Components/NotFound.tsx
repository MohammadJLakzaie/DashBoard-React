// src/Pages/Dashbord-page/NotFound.tsx
import { useNavigate } from "react-router-dom";
import Buttons from "./Buttons";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 text-center">
      <div className="max-w-md w-full">
        {/* Big 404 */}
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-extrabold text-indigo-700">
          404
        </h1>

        <h2 className="mt-4 text-lg sm:text-xl font-semibold text-slate-800">
          صفحه مورد نظر پیدا نشد
        </h2>

        <p className="mt-2 text-sm text-slate-500">
         به نظر میرسد لینکی که دنبال آن بودید وجود ندارد یا جابجا شده است 
        </p>

        <div className="mt-8">
          <Buttons
            name="بازگشت به داشبورد"
            onClick={() => navigate("/app")}
            className="w-full rounded-lg bg-indigo-700 py-2 text-sm font-medium text-white transition-all duration-200 hover:bg-indigo-800 hover:-translate-y-0.5 hover:shadow-md active:scale-[0.98]"
          />
        </div>
      </div>
    </div>
  );
}