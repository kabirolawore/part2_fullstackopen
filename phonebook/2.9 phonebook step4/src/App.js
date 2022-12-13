import { useState } from "react";
import Note from "./components/Note";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newSearch, setNewSearch] = useState("");

  const addNote = (event) => {
    event.preventDefault();

    const phonebookObject = {
      name: persons.find((person) => person.name === newName)
        ? alert(`${newName} is already added to phonebook`)
        : newName,
      number: newNumber,
      id: persons.length + 1,
    };

    if (phonebookObject.name) setPersons(persons.concat(phonebookObject));

    setNewName("");
    setNewNumber("");
    // console.log(persons);
  };

  const handleNoteChange = {
    setName(event) {
      setNewName(event.target.value);
    },
    setNumber(event) {
      setNewNumber(event.target.value);
    },
    setSearch(event) {
      setNewSearch(event.target.value);
    },
  };

  const handleSearch = () => {
    // gets input and compare with persons array
    return persons.filter((person) =>
      person.name.toLowerCase().includes(newSearch.toLowerCase())
    );
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with{" "}
        <input value={newSearch} onChange={handleNoteChange.setSearch} />
      </div>
      <h2>add a new</h2>
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
        {handleSearch().map((person) => (
          <Note key={person.name} note={person} />
        ))}
      </div>
    </div>
  );
};

export default App;
