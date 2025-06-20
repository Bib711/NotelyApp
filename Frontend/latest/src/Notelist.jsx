function NoteList({ notes, onEdit, onDelete }) {
  if (notes.length === 0) {
    return (
      <div className="note-list-container">
        <h2 className="section-title">Your Notes</h2>
        <div className="empty-state">
          <p>No notes yet. Create your first note above! ✨</p>
        </div>
      </div>
    )
  }

  return (
    <div className="note-list-container">
      <h2 className="section-title">Your Notes ({notes.length})</h2>
      <div className="note-grid">
        {notes.map((note) => (
          <div key={note._id} className="note-card">
            <div className="note-content">
              <h3 className="note-title">{note.title}</h3>
              <p className="note-text">{note.content}</p>
            </div>
            <div className="note-actions">
              <button className="btn btn-edit" onClick={() => onEdit(note)} aria-label={`Edit ${note.title}`}>
                ✏️ Edit
              </button>
              <button className="btn btn-delete" onClick={() => onDelete(note._id)} aria-label={`Delete ${note.title}`}>
                🗑️ Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default NoteList
