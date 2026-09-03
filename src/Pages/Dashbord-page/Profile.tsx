import { useEffect, useState } from "react";
import ErrorSuccess from "../../Components/ErrorSuccess";
import Loader from "../../Components/Loader";
import Buttons from "../../Components/Buttons";
import EditProfileModal from "../../Components/EditProfileModal";
import type {UserTypes} from "../../Types/Types"

export default function Profile() {
  const [user, setUser] = useState<UserTypes | null>(null);
  const [error, setError] = useState(false);
  const [Loading, setLoading] = useState(true);
  const [isEditProfile, setIsEditProfile] = useState(false);

  useEffect(() => {
    async function getUser() {
      try {
        const response = await fetch("https://dummyjson.com/users/1");

        if (!response.ok) {
          throw new Error("Failed to fetch user");
        }

        const data = await response.json();

        const testobj = {
          firstName : data.firstName ,
          lastName : data.lastName ,
          age : data.age , 
          email : data.email ,
          birthDate : data.birthDate
        }

        setUser(testobj);
        console.log(data);
        console.log(testobj);
      } catch (error) {
        console.log(`this is the Error ${error}`);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    getUser();
  }, []);

  const closeEditProfile = () => {
    setIsEditProfile(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-start justify-center p-4">
      <div className="bg-white rounded-2xl shadow-md w-full max-w-md p-6">
        {/* محل نمایش ارور Cant fetch */}
        {error && (
          <ErrorSuccess
            message="عدم اتصال به سرور"
            color="bg-red-50 border border-red-300 text-red-700"
          />
        )}
        {Loading && <Loader />}
        {isEditProfile && (
          <EditProfileModal
            formData={user}
            setFormData={setUser}
            funcClose={closeEditProfile}
          />
        )}

        <br />
        {/* عکس پروفایل (placeholder) */}
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center">
            <img src={user?.image} alt="profile-user" />
          </div>
        </div>

        <h2 className="text-xl font-bold text-center text-gray-800 mb-6">
          پروفایل کاربر
        </h2>

        <div className="space-y-4">
          {/* اسم کاربر - از سرور میاد */}
          <div className="flex justify-between border-b border-gray-200 pb-2">
            <span className="text-gray-800">
              <p>
                {user?.firstName} {user?.lastName}
              </p>
            </span>
            <span className="text-gray-500 font-medium">:نام</span>
          </div>

          {/* سن کاربر - از سرور میاد */}
          <div className="flex justify-between border-b border-gray-200 pb-2">
            <span className="text-gray-800">
              <p>{user?.age}</p>
            </span>
            <span className="text-gray-500 font-medium">:سن</span>
          </div>

          {/* سال تولد - از سرور میاد */}
          <div className="flex justify-between border-b border-gray-200 pb-2">
            <span className="text-gray-800">
              <p>{user?.birthDate}</p>
            </span>
            <span className="text-gray-500 font-medium">:سال تولد</span>
          </div>

          {/* ایمیل کاربر - از سرور میاد */}
          <div className="flex justify-between pb-2">
            <span className="min-w-0">
              <p className="break-all">{user?.email}</p>
            </span>

            <span className="text-gray-500 font-medium">:ایمیل</span>
          </div>

          <Buttons
            name="ویرایش اطلاعات"
            color={`text-white ${Loading || error ? "bg-stone-500 hover:bg-stone-500" : "bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500"}`}
            width="w-full"
            onClick={() => {
              setIsEditProfile(true);
            }}
            disabled={Loading || error}
          />
        </div>
      </div>
    </div>
  );
}
