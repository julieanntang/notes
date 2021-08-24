import React from "react";

const Note = (props) => {
  return (
    <div>
      <p>{props.note.title}</p>
    </div>
  );
};

export default Note;
