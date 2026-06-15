import { useCallback } from "react";

export default function TaskBoard() {
  const handleAddCard = useCallback((column: string) => {
    console.log(`Add card to ${column}`);
  }, []);

  const columns = [
    { id: "backlog", title: "بک لاگ" },
    { id: "in-progress", title: "در حال انجام" },
    { id: "pending", title: "در انتظار" },
    { id: "done", title: "انجام شده" },
  ];

  return (
    <div className="h-full overflow-x-auto p-4">
      <div className="flex gap-4 min-w-[1100px] justify-center h-full">

        {columns.map((column) => (
          <section
            key={column.id}
            className="flex flex-col w-[260px] bg-slate-100 rounded-xl border border-slate-200"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-slate-200">
              <span className="font-semibold text-slate-800">
                {column.title}
              </span>

             
            </div>

            {/* Cards Container */}
            <div className="flex-1 overflow-y-auto p-3 space-y-3">

              {/* کارت‌ها بعداً اینجا رندر می‌شوند */}

            </div>

            {/* Footer */}
            <div className="p-3 border-t border-slate-200">
              <button
                onClick={() => handleAddCard(column.id)}
                className="
                  w-full
                  rounded-lg
                  border
                  border-dashed
                  border-slate-300
                  py-2
                  text-sm
                  text-slate-600
                  hover:bg-slate-200
                  transition
                "
              >
                + افزودن کارت
              </button>
            </div>
          </section>
        ))}

      </div>
    </div>
  );
}