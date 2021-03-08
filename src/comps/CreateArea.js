import React from 'react'

function CreateArea(props) {
  return (
    <div>
      <form>
        <input type="text" placeholder="title" name="title"/>
        <p>
           <textarea name="content" placeholder="note content"></textarea>
        </p>
      </form>      
    </div>
  )
}

export default CreateArea;
