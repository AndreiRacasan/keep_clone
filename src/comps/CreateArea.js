import React, {useState} from 'react'

function CreateArea(props) {

  const [note, setNote] = useState({
    title: '',
    content: ''
  });

  function handleChange(e) {
    const {name, value} = e.target
    setNote(preValue => {
      return {
        ...preValue,
        [name]: value
      }
    })
  }

  function addNote(pressButton) {
    pressButton.preventDefault()
    console.log(pressButton)
  }

  return (
    <div>
      <form>
        <input value={note.title} 
               type="text" 
               placeholder="title" 
               name="title"
               onChange={handleChange}
               />
        <p>
           <textarea 
               value={note.content} 
               name="content" 
               placeholder="note content"
               onChange={handleChange}
               >
            </textarea>
        </p>
        <button onClick={addNote}>+</button>
      </form>      
    </div>
  )
}

export default CreateArea;
