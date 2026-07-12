import { createContext, useMemo, useState } from 'react'

export const StudentContext = createContext(null)

export function StudentProvider({ children }) {
  const [favouriteStudents, setFavouriteStudents] = useState([])

  const addToFavourite = (student) => {
    setFavouriteStudents((prev) => {
      const exists = prev.some((s) => s.id === student.id)
      if (exists) return prev
      return [...prev, student]
    })
  }

  const removeFromFavourite = (id) => {
    setFavouriteStudents((prev) => prev.filter((s) => s.id !== id))
  }

  const value = useMemo(
    () => ({
      favouriteStudents,
      addToFavourite,
      removeFromFavourite,
    }),
    [favouriteStudents],
  )

  return <StudentContext.Provider value={value}>{children}</StudentContext.Provider>
}

