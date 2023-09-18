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

  return (
    <div className="App">
      <Header />
      <CreateArea onAdd={addNote} />
    </div>
  );
}

export default App;
