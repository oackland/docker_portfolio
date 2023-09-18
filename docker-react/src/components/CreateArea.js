import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
    return (_jsx("div", { children: _jsxs("form", { onSubmit: submitNote, children: [_jsx("input", { type: "text", name: "title", placeholder: "Title", value: note.title, onChange: handleChange }, "title"), _jsx("textarea", { name: "content", rows: 3, placeholder: "Add some notes...", value: note.content, onChange: handleChange }, "content"), _jsxs(Box, { sx: { position: "fixed", bottom: 20, right: 20 }, children: [_jsx(Fab, { size: "medium", color: "primary", "aria-label": "add", type: "submit", children: _jsx(AddIcon, {}) }), _jsx(Fab, { size: "medium", color: "secondary", "aria-label": "edit", onClick: handleEdit, children: _jsx(EditIcon, {}) }), _jsx(Fab, { size: "medium", color: "error", "aria-label": "delete", onClick: handleDelete, children: _jsx(DeleteIcon, {}) })] })] }) }));
}
export default CreateArea;
