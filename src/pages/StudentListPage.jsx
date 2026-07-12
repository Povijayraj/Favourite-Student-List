import { useContext } from 'react'
import { StudentContext } from '../context/StudentContext'

const STUDENTS = [
  { id: '101', name: 'Vijay' },
  { id: '102', name: 'Ajith' },
  { id: '103', name: 'Suriya' },
  { id: '104', name: 'Kamal' },
  { id: '105', name: 'Rajni' },
  { id: '106', name: 'Vikram' },
  { id: '107', name: 'Priya' },
  { id: '108', name: 'Santa' },
  { id: '109', name: 'Sandhiya' },
  { id: '110', name: 'Younus' },
  { id: '111', name: 'Viji' },
  { id: '112', name: 'Lakshmi' },
  { id: '113', name: 'Raj' },
  { id: '114', name: 'Santhosh' },
  { id: '115', name: 'Selva' },
  { id: '116', name: 'Arul' },
  { id: '117', name: '' },
]

export default function StudentListPage() {
  const { favouriteStudents, addToFavourite } = useContext(StudentContext)

  const isFavourite = (id) => favouriteStudents.some((s) => s.id === id)

  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-900">Student List</h1>
        <p className="mt-2 text-slate-600">Add students to see them in your favourites.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {STUDENTS.map((student) => {
          const fav = isFavourite(student.id)
          return (
            <div
              key={student.id}
              className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-base font-semibold text-slate-900">{student.name}</p>
                  <p className="mt-1 text-sm text-slate-500">Roll No: {student.id}</p>
                </div>

                <button
                  type="button"
                  onClick={() => addToFavourite(student)}
                  disabled={fav}
                  className={
                    fav
                      ? 'cursor-not-allowed rounded-lg bg-slate-200 px-3 py-2 text-sm font-medium text-slate-600'
                      : 'rounded-lg bg-indigo-600 px-3 py-2 text-sm font-medium text-white hover:bg-indigo-700'
                  }
                >
                  {fav ? 'Added' : 'Add to Favourite'}
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

