import { useState, useEffect } from "react"
import NoteForm from "./NoteFrom"
import NoteList from "./Notelist"
import "./App.css"

function App() {
  const [notes, setNotes] = useState([])
  const [editingNote, setEditingNote] = useState(null)
  const [darkMode, setDarkMode] = useState(false)

  const fetchNotes = async () => {
    try {
      const res = await fetch("http://localhost:3000/")
      const data = await res.json()
      setNotes(data)
    } catch (error) {
      // For demo purposes, we'll use mock data when API is not available
      setNotes([
        {
          _id: "1",
          title: "Welcome to Notely",
          content: "This is your first note! Click Edit to modify it or Delete to remove it.",
        },
        {
          _id: "2",
          title: "Getting Started",
          content: "Create new notes using the form above. Keep your thoughts organized and accessible.",
        },
      ])
    }
  }

  useEffect(() => {
    fetchNotes()
    // Load dark mode preference from localStorage
    const savedDarkMode = localStorage.getItem("darkMode") === "true"
    setDarkMode(savedDarkMode)
  }, [])

  useEffect(() => {
    // Apply dark mode class to document
    document.documentElement.setAttribute("data-theme", darkMode ? "dark" : "light")
    localStorage.setItem("darkMode", darkMode)
  }, [darkMode])

  const addNote = async (note) => {
    try {
      const res = await fetch("http://localhost:3000/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(note),
      })
      const newNote = await res.json()
      setNotes([...notes, newNote])
    } catch (error) {
      // For demo purposes, add note locally
      const newNote = { ...note, _id: Date.now().toString() }
      setNotes([...notes, newNote])
    }
  }

  const updateNote = async (note) => {
    try {
      const res = await fetch(`http://localhost:3000/${note._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(note),
      })
      const updated = await res.json()
      setNotes(notes.map((n) => (n._id === updated._id ? updated : n)))
      setEditingNote(null)
    } catch (error) {
      // For demo purposes, update note locally
      setNotes(notes.map((n) => (n._id === note._id ? note : n)))
      setEditingNote(null)
    }
  }

  const deleteNote = async (id) => {
    try {
      await fetch(`http://localhost:3000/${id}`, { method: "DELETE" })
      setNotes(notes.filter((n) => n._id !== id))
    } catch (error) {
      // For demo purposes, delete note locally
      setNotes(notes.filter((n) => n._id !== id))
    }
  }

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div className="app">
      <div className="container">
        <header className="header">
          <div className="header-content">
            <h1 className="title">📝 Welcome To Notely</h1>
            <p className="subtitle">The simplest note-taking app. Fast. Clean. Functional.</p>
            <p className="subtitle">Created By: 1.Bibin Benny 2.Athul George 3.Emmanuel Benoy George 4.Tom vinod </p>
          </div>
          <button className="theme-toggle" onClick={toggleDarkMode} aria-label="Toggle dark mode">
            {darkMode ? "☀️" : "🌙"}
          </button>
        </header>

        <main className="main">
          <NoteForm
            onSave={editingNote ? updateNote : addNote}
            initialData={editingNote}
            onCancel={() => setEditingNote(null)}
            isEditing={!!editingNote}
          />
          <NoteList notes={notes} onEdit={setEditingNote} onDelete={deleteNote} />
        </main>
      </div>
    </div>
  )
}

export default App
