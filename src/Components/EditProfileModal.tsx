import Inputs from "./Inputs";
import Buttons from "./Buttons";

export default function EditProfileModal({funcClose , formData , getData} ) {
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
        <div className="space-y-5 px-6 py-6">
          <Inputs type="text" label="نام" value={formData.firstName}   onChange={(event) => { getData(event.target.value);  }}/>
          <Inputs type="text" label="نام خانوادگی" value={formData.lastName} />
          <Inputs type="text" label="سن" value={formData.age} />
          <Inputs type="text" label="تاریخ تولد" value={formData.birthDate} />
          <Inputs type="email" label="ایمیل" value={formData.email} />
        </div>

        {/* Footer */}
        <div className="flex gap-3 border-t border-slate-200 px-6 py-4">
           <Buttons
            name="ذخیره تغییرات"
            onClick={() => {}}
            width="w-full"
            color="bg-indigo-600 py-3 text-white hover:bg-indigo-700"
          />
          <Buttons
            name="انصراف"
            onClick={() => {}}
            width="w-full"
            color="border-slate-300  text-slate-600  hover:bg-slate-100"
          />
        </div>
      </div>
    </div>
  );
}