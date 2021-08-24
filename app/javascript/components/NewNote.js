import React from "react";

const NewNote = () => {
  return (
    <div>
      <p>Form here</p>
      <form action="/notes" method="post">
        <p>Title</p>
        <input name="note[title]" />
        <p>Description</p>
        <input name="note[description]" />
        <button type="submit">add</button>
      </form>
    </div>
  )
}

export default NewNote;