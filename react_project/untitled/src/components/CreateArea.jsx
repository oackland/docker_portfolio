import React, { useState } from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

/* importing */

function CreateArea() {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  return (
    <div id={"form"}>
      <form className={"create-note"} name={"notes"}>
        <input
          type="text"
          name={"title"}
          placeholder={"Title"}
          onChange={handleChange}
          value={note.title}
        />
        <textarea
          name={"content"}
          rows={3}
          placeholder={"Add a Task"}
          value={note.content}
          onChange={handleChange}
        ></textarea>

        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </form>
    </div>
  );
}
export default CreateArea;
