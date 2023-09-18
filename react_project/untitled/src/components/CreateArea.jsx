import React, { useState } from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const [isExpanded, setExpanded] = useState(true);

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  return (
    <div id="form">
      <form className="create-note" name="notes" onSubmit={submitNote}>
        <input
          type="text"
          name={"title"}
          rows={3}
          placeholder={"Title"}
          onChange={handleChange}
          value={note.title}
        />
        <div className={"line"}></div>
        <textarea
          className={"textarea"}
          name={"content"}
          rows={3}
          value={note.content}
          onChange={handleChange}
          placeholder="Take a note..."
        />
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
