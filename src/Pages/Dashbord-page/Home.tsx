import { Routes, Route, Link } from 'react-router-dom';


export default function Home() {
    return (
        <div>
               <nav className=' mx-auto bg-blue-800 py-4'>
        <div className='justify-center mx-auto flex flex-row gap-4'>
          <Link to="/Home" className="text-white">Home</Link>
        <Link to="/about" className="text-white">About</Link>
        <Link to="/profile/john" className="text-white">John'sProfile</Link>
        </div>
        
      </nav>
  <div className="max-w-[1440px] mx-auto px-4 sm:px-6 py-6 md:py-8">
    
    
    <div className="mb-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
      <div>
        <div className="flex items-center gap-2">
          <div className="h-8 w-1.5 rounded-full bg-indigo-500"></div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-800">My Task</h1>
        </div>
        <p className="text-slate-500 mt-1 text-sm md:text-base max-w-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
        </p>
      </div>
      
      <div className="hidden sm:block text-xs font-medium text-slate-400 bg-white px-3 py-1.5 rounded-full shadow-sm border border-slate-200">
        📅 May 17, 2026
      </div>
    </div>

   
    <div className="flex flex-col xl:flex-row gap-8">
      
      
      <div className="flex-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 auto-rows-fr">
          
          
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 flex flex-col h-full overflow-hidden transition-all">
            <div className="px-4 pt-4 pb-2 flex items-center justify-between border-b border-slate-100">
              <div className="flex items-center gap-2">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold">1</span>
                <h2 className="font-semibold text-slate-700 text-base tracking-wide">MON</h2>
              </div>
              <span className="text-xs text-slate-400 bg-slate-50 px-2 py-0.5 rounded-full">1 task</span>
            </div>
            <div className="p-4 space-y-3 flex-1">
              
              <div className="task-card bg-white rounded-xl p-3 border border-slate-200 shadow-sm">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-semibold text-slate-800 text-sm">Customer Journey</h3>
                  <div className="bg-amber-50 text-amber-700 text-[10px] font-medium px-2 py-0.5 rounded-full">in progress</div>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed mt-1">
                  This is description of group task. It can be long and covers user research, mapping touchpoints.
                </p>
                
                <div className="mt-3 flex items-center justify-between text-[11px] font-medium">
                  <span className="text-slate-500">Completion</span>
                  <span className="text-indigo-600 bg-indigo-50 px-1.5 py-0.5 rounded-md">5/12 COMPLETED</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-1.5 mt-1.5 overflow-hidden">
                  <div className="bg-indigo-500 h-1.5 rounded-full w-1/2 "></div>
                </div>
              </div>
              
              <div className="text-[11px] text-slate-400 flex items-center gap-1 pl-1">
                <span>📌</span> <span>Due: 28/02/2022 · 4 subtasks</span>
              </div>
            </div>
          </div>

          
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 flex flex-col h-full overflow-hidden">
            <div className="px-4 pt-4 pb-2 flex items-center justify-between border-b border-slate-100">
              <div className="flex items-center gap-2">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold">2</span>
                <h2 className="font-semibold text-slate-700 text-base tracking-wide">TUE</h2>
              </div>
              <span className="text-xs text-slate-400 bg-slate-50 px-2 py-0.5 rounded-full">1 task</span>
            </div>
            <div className="p-4 space-y-3 flex-1">
              <div className="task-card bg-white rounded-xl p-3 border border-slate-200 shadow-sm">
                <div className="flex justify-between items-start">
                  <h3 className="font-semibold text-slate-800 text-sm">This is task title</h3>
                  <span className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full">⚡ high</span>
                </div>
                <div className="flex items-center gap-2 text-[11px] text-slate-500 mt-1.5">
                  <span>🕒 15:00 22/03/2022</span>
                </div>
                <div className="mt-2 bg-indigo-50/50 rounded-md px-2 py-1.5 inline-block">
                  <span className="text-indigo-700 text-xs font-medium">Sprint 20 Retrospective</span>
                </div>
                <div className="flex justify-between items-center mt-2 text-[11px] text-slate-400 border-t border-slate-100 pt-2">
                  <span>📎 3 attachments</span>
                  <span>🧑‍🤝‍🧑 team</span>
                </div>
              </div>
            </div>
          </div>

          
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 flex flex-col h-full overflow-hidden">
            <div className="px-4 pt-4 pb-2 flex items-center justify-between border-b border-slate-100">
              <div className="flex items-center gap-2">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold">3</span>
                <h2 className="font-semibold text-slate-700 text-base tracking-wide">WED</h2>
              </div>
              <span className="text-xs text-slate-400 bg-slate-50 px-2 py-0.5 rounded-full">3 tasks</span>
            </div>
            <div className="p-3 space-y-3 flex-1 overflow-y-auto max-h-[420px]">
              <div className="task-card bg-white rounded-lg p-2.5 border border-slate-200 shadow-sm">
                <div className="flex items-start justify-between">
                  <h4 className="font-medium text-slate-800 text-xs">Update Design System - Forms</h4>
                  <span className="text-[10px] bg-slate-100 px-1.5 rounded text-slate-500">📅 28/02/2022</span>
                </div>
                <p className="text-[11px] text-slate-500 mt-0.5">Refactor input components, align with new tokens</p>
              </div>
              
              <div className="task-card bg-white rounded-lg p-2.5 border border-slate-200 shadow-sm">
                <div className="flex items-start justify-between">
                  <h4 className="font-medium text-slate-800 text-xs">Create a Data Studio Dashboard</h4>
                  <span className="text-[10px] bg-slate-100 px-1.5 rounded text-slate-500">📅 28/02/2022</span>
                </div>
                <p className="text-[11px] text-slate-500 mt-0.5">Tracking mobile app events, user retention & KPIs</p>
                <div className="mt-1 flex gap-1 text-[10px] text-cyan-600"><span>🔗 +2 datasources</span></div>
              </div>
              
              <div className="task-card bg-white rounded-lg p-2.5 border border-slate-200 shadow-sm">
                <div className="flex items-start justify-between">
                  <h4 className="font-medium text-slate-800 text-xs">Send monthly report to Product Director</h4>
                  <span className="text-[10px] bg-slate-100 px-1.5 rounded text-slate-500">📅 28/02/2022</span>
                </div>
                <div className="flex items-center gap-1 mt-1 text-[10px] text-slate-400"><span>✅</span> overdue review</div>
              </div>
            </div>
          </div>

          
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 flex flex-col h-full overflow-hidden">
            <div className="px-4 pt-4 pb-2 flex items-center justify-between border-b border-slate-100">
              <div className="flex items-center gap-2">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold">4</span>
                <h2 className="font-semibold text-slate-700 text-base tracking-wide">THU</h2>
              </div>
              <span className="text-xs text-slate-400 bg-slate-50 px-2 py-0.5 rounded-full">4 tasks</span>
            </div>
            <div className="p-3 space-y-3 flex-1 overflow-y-auto max-h-[420px]">
             
              <div className="task-card bg-white rounded-lg p-2.5 border-l-2 border-l-emerald-400 border border-slate-200 shadow-sm">
                <h4 className="font-medium text-slate-800 text-xs flex items-center gap-1">🔄 Sprint 20 Retrospective</h4>
                <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                  <span>⏰ 15:00 22/03/2022</span>
                  <span className="bg-emerald-50 px-1.5 rounded text-emerald-700">ceremony</span>
                </div>
              </div>
              
              <div className="task-card bg-white rounded-lg p-2.5 border border-slate-200 shadow-sm">
                <h4 className="font-medium text-slate-800 text-xs">Sprint 26 planning - Create local database for mobile app user and support offline sync</h4>
                <div className="flex items-center gap-2 mt-1 text-[10px] text-slate-400">
                  <span>📆 28/02/2022</span>
                  <span>🏷️ backend</span>
                </div>
              </div>
             
              <div className="task-card bg-white rounded-lg p-2.5 border border-slate-200 shadow-sm">
                <h4 className="font-medium text-slate-800 text-xs">Sprint 21 Planning</h4>
                <div className="flex justify-between mt-0.5 text-[10px] text-slate-400">
                  <span>📌 estimation session</span>
                  <span>📋 4 stories</span>
                </div>
              </div>
              
              <div className="task-card bg-white rounded-lg p-2.5 border border-slate-200 shadow-sm opacity-90">
                <h4 className="font-medium text-slate-800 text-xs flex gap-1">🎨 Update Design System - Forms (review)</h4>
                <div className="text-[10px] text-slate-500 mt-0.5">28/02/2022 · Alignment with design lead</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
   
      <div className="w-full xl:w-80 space-y-6">
        
        
        <div className="bg-white rounded-2xl shadow-md border border-slate-200 overflow-hidden">
          <div className="bg-gradient-to-r from-indigo-50 to-white px-5 py-4 border-b border-slate-100">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-slate-800 text-base tracking-tight">🏆 Sprints Ceremony</h3>
              <span className="text-[11px] bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded-full">active</span>
            </div>
            <p className="text-xs text-slate-500 mt-1">
              This is description of group task. It can be long — includes backlog grooming, sprint review, and planning.
            </p>
          </div>
          <div className="p-5">
            <div className="flex justify-between items-end mb-2">
              <span className="text-sm font-medium text-slate-600">Progress</span>
              <span className="text-indigo-700 font-semibold text-sm bg-indigo-50 px-2 py-0.5 rounded-full">5/18 COMPLETED</span>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-2.5">
              <div className="bg-indigo-500 h-2.5 rounded-full " ></div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3 text-center text-xs">
              <div className="bg-slate-50 rounded-lg p-2">
                <span className="block text-slate-500">total items</span>
                <span className="font-bold text-slate-700">18</span>
              </div>
              <div className="bg-slate-50 rounded-lg p-2">
                <span className="block text-slate-500">completed</span>
                <span className="font-bold text-emerald-600">5</span>
              </div>
            </div>
            <div className="mt-3 text-[11px] text-slate-400 flex items-center gap-1 pt-2 border-t border-slate-100">
              <span>📌 Next ceremony: Sprint 27 Review · June 2</span>
            </div>
          </div>
        </div>
        
        
        <div className="bg-white rounded-2xl shadow-md border border-slate-200 overflow-hidden">
          <div className="px-5 pt-5 pb-2">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-slate-800 text-base flex items-center gap-1">📈 Daily progress</h3>
              <div className="text-sm font-mono bg-slate-100 px-2 py-1 rounded-lg text-slate-700">65%</div>
            </div>
          </div>
          <div className="px-5 pb-2">
            <div className="flex justify-between text-xs text-slate-500 mb-1.5">
              <span>Completed tasks</span>
              <span className="font-medium text-slate-700">12/20</span>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-2.5">
              <div className="bg-emerald-500 h-2.5 rounded-full" ></div>
            </div>
            <div className="mt-3 flex items-center justify-between text-[11px] text-slate-400">
              <span>✅ +3 tasks since yesterday</span>
              <span className="bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full">on track</span>
            </div>
          </div>
          
          <div className="bg-slate-50/80 px-5 py-3 mt-2 flex justify-between text-xs border-t border-slate-100">
            <div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-emerald-400"></span> <span>Done: 12</span></div>
            <div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-amber-400"></span> <span>In progress: 6</span></div>
            <div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-slate-300"></span> <span>Todo: 2</span></div>
          </div>
        </div>

       
        <div className="bg-white/70 rounded-xl border border-slate-200 p-3 text-center text-xs text-slate-500 backdrop-blur-sm hidden xl:block">
          <span className="font-medium text-indigo-600">📌</span> This week focus: Q2 milestones · Retrospective actions
        </div>
      </div>
    </div>

    
    <footer className="mt-12 pt-6 pb-3 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm">
      <div className="flex items-center gap-6">
        <a href="#" className="text-slate-500 hover:text-indigo-600 transition flex items-center gap-1.5 text-sm font-medium">
          <span className="w-5 h-5 inline-flex items-center justify-center">⚙️</span> Config Layout
        </a>
        <a href="#" className="text-slate-500 hover:text-indigo-600 transition flex items-center gap-1.5 text-sm font-medium">
          <span className="w-5 h-5 inline-flex items-center justify-center">📊</span> All Dashboards
        </a>
      </div>
      <div className="text-xs text-slate-400 flex items-center gap-2">
        <span>© 2026 TaskFlow — agile board</span>
        <span className="w-1 h-1 rounded-full bg-slate-300"></span>
        <span>Last sync: today 09:42</span>
      </div>
    </footer>
  </div>


        </div>
    )
}

