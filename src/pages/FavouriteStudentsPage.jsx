
import { useContext } from 'react'
import { StudentContext } from '../context/StudentContext'

export default function FavouriteStudentsPage() {
  const { favouriteStudents, removeFromFavourite } = useContext(StudentContext)

  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-900">Favourite Students</h1>
        <p className="mt-2 text-slate-600">Remove any student from your favourites.</p>
      </div>

      {favouriteStudents.length === 0 ? (
        <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 px-6 py-10 text-center">
          <p className="text-slate-700">No favourite students added yet</p>
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2">
          {favouriteStudents.map((student) => (
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
                  onClick={() => removeFromFavourite(student.id)}
                  className="rounded-lg bg-rose-600 px-3 py-2 text-sm font-medium text-white hover:bg-rose-700"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

