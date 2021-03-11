import React, {useState} from 'react'
import Header from './comps/Header'
import CreateArea from './comps/CreateArea'
import Note from './comps/Note'
import Count from './comps/Count'

function App(props) {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevValue) => {
      return [...prevValue, newNote];
    });
  }

  function deleteNotes(id) {
    setNotes(prevValue => {
      return [...prevValue.filter((note, index) =>
        index !==id )];
    });
  }

  return (
    <div>
      <Header />
      <Count count={notes.length === 0 ? 'No notes available' : `${notes.length} ${notes.length === 1 ? 'note' : 'notes'} saved in the DB`} />
      <CreateArea onAdd={addNote} />
      {notes.map((note, index) => (
        <Note 
          key={index} 
          id={index} 
          title={note.title} 
          content={note.content} 
          onDelete={deleteNotes}
          />
        ))}
    </div>
  )
}

export default App
