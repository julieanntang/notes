import React from "react";

const Notes = (props) => {
  return (
    <div>
      <h1>Notes</h1>
      {props.notes.map((note) => {
        return (
        <div key={note.id}>
        <p>{note.title}</p>
        <p>{note.description}</p>
        </div>
        );
      })}
    </div>
  );
};

export default Notes;