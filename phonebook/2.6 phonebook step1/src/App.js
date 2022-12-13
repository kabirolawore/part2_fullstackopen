import { useState } from "react";
import Note from "./components/Note";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const addNote = (event) => {
    event.preventDefault();

    const phonebookObject = {
      name: newName,
      date: new Date().toISOString(),
      id: persons.length + 1,
    };

    setPersons(persons.concat(phonebookObject));
    setNewName("");
  };

  const handleNoteChange = (event) => {
    setNewName(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNote}>
        <div>
          name: <input value={newName} onChange={handleNoteChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map((person) => (
          <Note key={person.name} note={person} />
        ))}
      </div>
    </div>
  );
};

export default App;
