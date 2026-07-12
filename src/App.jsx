import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router-dom'
import { StudentProvider } from './context/StudentContext'
import StudentListPage from './pages/StudentListPage'
import FavouriteStudentsPage from './pages/FavouriteStudentsPage'

function App() {
  return (
    <StudentProvider>
      <BrowserRouter>
        <div className="border-b border-slate-200 bg-white">
          <div className="mx-auto flex items-center justify-between px-4 py-4 bg-gradient-to-r from-cyan-500 to-blue-500">
            <div className="text-2xl  font-bold text-white">FAVOURITE STUDENTS</div>

            <nav className="flex items-center gap-4">
              
              <Link
                to="/students"
                className="rounded-lg px-3 py-2 text-sm font-medium text-white bg-amber-600 hover:bg-amber-700"
              >
                Students
              </Link>
              <Link
                to="/favourites"
                className="rounded-lg px-3 py-2 text-sm font-medium text-white bg-purple-600 hover:bg-purple-700"
              >
                Favourites
              </Link>
            </nav>
          </div>
        </div>

        <Routes>
          <Route path="/" element={<Navigate to="/students" replace />} />
          <Route path="/students" element={<StudentListPage />} />
          <Route path="/favourites" element={<FavouriteStudentsPage />} />
        </Routes>
      </BrowserRouter>
    </StudentProvider>
  )
}

export default App

