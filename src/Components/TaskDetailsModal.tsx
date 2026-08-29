import Buttons from "./Buttons" ;
import type {TaskDetailsModalProps} from "../Types/Types"



export default function TaskDetailsModal ({funcClose , title , taskId , onDeleteTask , description , setDescription} : TaskDetailsModalProps  ) {
    return(
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20  p-4">
      <div className="w-full max-w-lg sm:max-w-xl rounded-xl bg-white shadow-2xl max-h-[90vh] overflow-y-auto">

        {/* Header */}
        <div className="flex items-start justify-between gap-4 border-b border-gray-200 px-5 py-4 sm:px-6">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-900 wrap-break-word">
            {title}
          </h2>
          {/* close button */}
       <Buttons onClick={funcClose}  name="خروج" width="shrink-0" color="text-gray-600 hover:bg-gray-100 hover:text-gray-800 " />
        </div>

        {/* Body */}
        <div className="px-5 py-4 sm:px-6 space-y-5 overflow-auto">
          <div>
            <h3 className="text-sm flex justify-end font-semibold uppercase tracking-wide text-gray-500 mb-2">
             : توضیحات
            </h3>

           <textarea  value={description} onChange={(event) =>  { setDescription({ description : event.target.value})  }} placeholder="تسک خود را اینجا شرح دهید" className="block w-full h-48 px-4 py-3 text-gray-900 border border-gray-300 rounded-xl bg-gray-50/50 focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-smooth text-right"/>
            
          </div>
        </div>

        {/* Footer / Actions */}
        <div className="flex flex-col-reverse sm:flex-row sm:justify-end gap-2 sm:gap-3 border-t border-gray-200 px-5 py-4 sm:px-6">
          <button
          onClick={ () => {onDeleteTask (taskId)}}
            type="button"
            className="w-full sm:w-auto rounded-md border border-red-200 bg-red-50 px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-100 transition-colors"
          >
            حذف کارت
          </button>
          <button
            type="button"
            className="w-full sm:w-auto rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 transition-colors"
          >
            ویرایش
          </button>
        </div>

      </div>
    </div>
    </>
    )
}