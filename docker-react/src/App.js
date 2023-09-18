import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Header from "./components/Header";
import CreateArea from "./components/CreateArea.tsx";
import { useState } from "react";
function App() {
    const [notes, setNotes] = useState([]);
    function addNote(newNote) { }
    return (_jsxs("div", { className: "App", children: [_jsx(Header, {}), _jsx(CreateArea, { onAdd: addNote })] }));
}
export default App;
