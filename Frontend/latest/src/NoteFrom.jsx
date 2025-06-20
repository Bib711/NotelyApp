import { useState, useEffect } from "react"

function NoteForm({ onSave, initialData, onCancel, isEditing }) {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title || "")
      setContent(initialData.content || "")
    } else {
      setTitle("")
      setContent("")
    }
  }, [initialData])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!title.trim() || !content.trim()) return

    const note = {
      title: title.trim(),
      content: content.trim(),
      ...(initialData && { _id: initialData._id }),
    }

    onSave(note)

    if (!isEditing) {
      setTitle("")
      setContent("")
    }
  }

  const handleCancel = () => {
    setTitle("")
    setContent("")
    if (onCancel) onCancel()
  }

  return (
    <div className="note-form-container">
      <h2 className="form-title">{isEditing ? "Edit Note" : "Add New Note"}</h2>
      <form className="note-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            id="title"
            className="form-input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter note title..."
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="content" className="form-label">
            Content
          </label>
          <textarea
            id="content"
            className="form-textarea"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Write your note here..."
            rows="4"
            required
          />
        </div>

        <div className="form-actions">
          <button type="submit" className="btn btn-primary">
            {isEditing ? "Update Note" : "Save Note"}
          </button>
          {isEditing && (
            <button type="button" className="btn btn-secondary" onClick={handleCancel}>
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  )
}

export default NoteForm
