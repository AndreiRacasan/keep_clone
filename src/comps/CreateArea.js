import React, {useState} from 'react'

function CreateArea({onAdd}) {

  const [isExpanded, setExpanded] = useState(false);

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

  function handleExpanded() {
    setExpanded(true);
  }

  function submitButton(e) {
    onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    e.preventDefault();
  }

  return (
    <div>
      <form>
        {isExpanded && (
          <input value={note.title} 
          type="text" 
          placeholder="title" 
          name="title"
          onChange={handleChange}
          rows={isExpanded ? 3 : 1}
          />
        )}

        <p>
           <textarea 
               value={note.content}
               onClick={handleExpanded} 
               name="content" 
               placeholder="note content"
               onChange={handleChange}
               >
            </textarea>
        </p>
        <button onClick={submitButton}>+</button>
      </form>      
    </div>
  )
}

export default CreateArea;
