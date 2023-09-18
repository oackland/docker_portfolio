import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Header from "./components/Header";
import CreateArea from "./components/CreateArea";
import { useState } from "react";
function App() {
    const [, setNotes] = useState([]);
    function addNote(newNote) {
        setNotes((prevNotes) => {
            return [...prevNotes, newNote];
        });
    }
    return (_jsxs("div", { className: "App", children: [_jsx(Header, {}), _jsx(CreateArea, { onAdd: addNote })] }));
}
export default App;
