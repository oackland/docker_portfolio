import Header from "./components/Header";
import CreateArea from "./components/CreateArea.tsx";
import { useState } from "react";
function App() {
  const [notes, setNotes] = useState([]);
  function addNote(newNote) {}
  return (
    <div className={"App"}>
      <Header />
      <CreateArea onAdd={addNote} />
    </div>
  );
}

export default App;
