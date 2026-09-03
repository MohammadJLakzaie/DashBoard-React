import { useState } from "react";
import Inputs from "./Inputs";
import Buttons from "./Buttons";
import ErrorSuccess from "./ErrorSuccess";
import type {EditProfileModalProps} from "../Types/Types"

export default function EditProfileModal({funcClose , formData  , setFormData } : EditProfileModalProps ) {
const [updateError, setUpdateError] = useState(false);
// const [updateSuccess, setUpdateSuccess] = useState(false);



const updateUser = async (e: React.SubmitEvent) => {
  e.preventDefault();
  try {
    const response = await fetch(
      "https://dummyjson.com/users/1",
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );
        if (!response.ok) {
        throw new Error("Failed to fetch user");
      }

    const updatedUser = await response.json();
    
    console.log(updatedUser);
    funcClose()
  } catch (error) {
    console.log(error);
    setUpdateError(true)
  }
};


  return (
    <div
      dir="rtl"
      className="fixed inset-0 z-100 flex items-center justify-center bg-black/50 p-4">
      <div className="flex w-full max-w-md max-h-[95vh] flex-col rounded-2xl bg-white shadow-xl overflow-auto">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4">
          
          <h2 className="text-lg font-semibold text-slate-800">
            ویرایش پروفایل
          </h2>
       <Buttons name="✕" color="hover:bg-red-700 hover:text-white" width="width-auto" onClick={funcClose} />
        </div>

        {/* Body */}
        {updateError && (<ErrorSuccess message="عملیات ناموفق بود" color="bg-red-50 border border-red-300 text-red-700"/>)}
       <form action="#" onSubmit={updateUser}>
 <div className="space-y-5 px-6 py-6">
          <Inputs type="text" label="نام" value={formData?.firstName}  onChange={(event) => { setFormData({...formData , firstName: event.target.value})  }}/>
          <Inputs type="text" label="نام خانوادگی" value={formData?.lastName} onChange={(event) => { setFormData({...formData , lastName: event.target.value})  }} />
          <Inputs type="text" label="سن" value={formData?.age} onChange={(event) => { setFormData({...formData , age: event.target.value})  }} />
          <Inputs type="text" label="تاریخ تولد" value={formData?.birthDate} onChange={(event) => { setFormData({...formData , birthDate: event.target.value})  }}/>
          <Inputs type="email" label="ایمیل" value={formData?.email} onChange={(event) => { setFormData({...formData , email: event.target.value})  }}/>
        </div>

        {/* Footer */}
        <div className="flex gap-3 border-t border-slate-200 px-6 py-4">
           <Buttons
            name="ذخیره تغییرات"
            width="w-full"
            color="bg-indigo-600 py-3 text-white hover:bg-indigo-700"
            type="submit"
          />
        </div>
       </form>
      </div>
    </div>
  );
}