import { useState } from "react";
import Note from "./components/Note";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-1234567" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const addNote = (event) => {
    event.preventDefault();
    // console.log("button clicked!", event.target);

    const phonebookObject = {
      name: persons.find((person) => person.name === newName)
        ? alert(`${newName} is already added to phonebook`)
        : newName,
      number: newNumber,
      date: new Date().toISOString(),
      id: persons.length + 1,
    };

    if (phonebookObject.name) setPersons(persons.concat(phonebookObject));

    setNewName("");
    setNewNumber("");
  };

  const handleNoteChange = {
    setName(event) {
      setNewName(event.target.value);
    },
    setNumber(event) {
      setNewNumber(event.target.value);
    },
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNote}>
        <div>
          name: <input value={newName} onChange={handleNoteChange.setName} />
        </div>
        <div>
          number:{" "}
          <input value={newNumber} onChange={handleNoteChange.setNumber} />
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
