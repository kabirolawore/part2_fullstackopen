import { useState, useEffect } from "react";
import axios from "axios";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([]);

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newSearch, setNewSearch] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3001/persons")
      .then((response) => setPersons(response.data));
  }, []);

  //
  const addNote = (event) => {
    event.preventDefault();

    const phonebookObject = {
      name: persons.find((person) => person.name === newName)
        ? alert(`${newName} is already added to phonebook`)
        : newName,
      number: newNumber,
      // id: persons.length + 1,
    };

    if (phonebookObject.name) {
      axios
        .post("http://localhost:3001/persons", phonebookObject)
        .then((response) => {
          console.log(response);
          setPersons(persons.concat(phonebookObject));
        });
    }

    setNewName("");
    setNewNumber("");
  };

  //
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

  //
  const handleSearch = () => {
    // gets input and compare with persons array
    return persons.filter((person) =>
      person.name.toLowerCase().includes(newSearch.toLowerCase())
    );
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter
        handleValue={newSearch}
        handleChange={handleNoteChange.setSearch}
      />
      <h3>Add a new</h3>
      <PersonForm
        handleSubmit={addNote}
        handleValueName={newName}
        handleValueNum={newNumber}
        noteChangeName={handleNoteChange.setName}
        noteChangeNum={handleNoteChange.setNumber}
      />
      <h3>Numbers</h3>
      <Persons searchFunc={handleSearch} />
    </div>
  );
};

export default App;
