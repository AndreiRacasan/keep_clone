import React, {useState} from 'react'
import Header from './comps/Header'
import CreateArea from './comps/CreateArea'
import Note from './comps/Note'

function App(props) {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevValue) => {
      return [...prevValue, newNote];

    })
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((note, index) => (
        <Note 
          key={index} 
          id={index} 
          title={note.title} 
          content={note.content} />
        ))}
    </div>
  )
}

export default App
