import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
function CreateArea(props) {
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
        props.onAdd(note);
        setNote({
            title: "",
            content: "",
        });
        event.preventDefault();
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
        })
            .catch((error) => {
            console.error(error);
        });
    }
    return (_jsx("div", { children: _jsxs("form", { className: "create-note", onSubmit: submitNote, children: [_jsx("input", { type: "text", name: "title", placeholder: "Title", value: note.title, onChange: handleChange }, "title"), _jsx("textarea", { name: "content", rows: 3, placeholder: "Add some notes...", value: note.content, onChange: handleChange }, "content"), _jsx(Fab, { color: "primary", "aria-label": "add", children: _jsx(AddIcon, {}) })] }) }));
}
export default CreateArea;
