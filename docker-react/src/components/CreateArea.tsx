import { useState } from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

function CreateArea() {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => ({
      ...prevNote,
      [name]: value,
    }));
  }

  function submitNote(event) {
    event.preventDefault();

    fetch("/api/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // handle success or error
      })
      .catch((error) => {
        console.error(error);
        // handle error
      });
  }

  function handleEdit() {
    // handle edit here
    console.log("Edit note");
  }

  function handleDelete() {
    // handle delete here
    console.log("Delete note");
  }

  return (
    <div>
      <form onSubmit={submitNote}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={note.title}
          onChange={handleChange}
          key="title"
        />
        <textarea
          name="content"
          rows={3}
          placeholder="Add some notes..."
          value={note.content}
          onChange={handleChange}
          key="content"
        />
        <Box sx={{ position: "fixed", bottom: 20, right: 20 }}>
          <Fab size="medium" color="primary" aria-label="add" type="submit">
            <AddIcon />
          </Fab>
          <Fab
            size="medium"
            color="secondary"
            aria-label="edit"
            onClick={handleEdit}
          >
            <EditIcon />
          </Fab>
          <Fab
            size="medium"
            color="error"
            aria-label="delete"
            onClick={handleDelete}
          >
            <DeleteIcon />
          </Fab>
        </Box>
      </form>
    </div>
  );
}

export default CreateArea;
