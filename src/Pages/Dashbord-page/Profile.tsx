import { useEffect } from "react";

export default function Profile() {
  useEffect(() => {
    async function getUser() {
      try {
        const response = await fetch("https://dummyjson.com/users/1");
        const data = await response.json();

        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }

    getUser();
  }, []);

  return (
        <div className="min-h-screen bg-gray-100 flex items-start justify-center p-4">
      <div className="bg-white rounded-2xl shadow-md w-full max-w-md p-6">
        {/* عکس پروفایل (placeholder) */}
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center">
            <span className="text-gray-500 text-sm">عکس</span>
          </div>
        </div>

        <h2 className="text-xl font-bold text-center text-gray-800 mb-6">
          پروفایل کاربر
        </h2>

        <div className="space-y-4">
          {/* اسم کاربر - از سرور میاد */}
          <div className="flex justify-between border-b border-gray-200 pb-2">
            <span className="text-gray-800"><p>علی رضایی</p></span>
            <span className="text-gray-500 font-medium">:نام</span>
          </div>

          {/* سن کاربر - از سرور میاد */}
          <div className="flex justify-between border-b border-gray-200 pb-2">
            <span className="text-gray-800"><p>25</p></span>
            <span className="text-gray-500 font-medium">:سن</span>
          </div>

          {/* سال تولد - از سرور میاد */}
          <div className="flex justify-between border-b border-gray-200 pb-2">
            <span className="text-gray-800"><p>25 آذر 1375</p></span>
            <span className="text-gray-500 font-medium">:سال تولد</span>
          </div>

          {/* ایمیل کاربر - از سرور میاد */}
          <div className="flex justify-between pb-2">
            <span className="text-gray-800"><p>example.com</p></span>
            <span className="text-gray-500 font-medium">:ایمیل</span>
          </div>
        </div>
      </div>
    </div>
  );
  
}