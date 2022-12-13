import { useState, useEffect } from "react";
import personService from "./services/persons";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Person from "./components/Person";
import Notification from "./components/Notification";

const App = () => {
  const [persons, setPersons] = useState([]);

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newSearch, setNewSearch] = useState("");
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [alert, setAlert] = useState(undefined);

  useEffect(() => {
    personService.getAll().then((intialPersons) => setPersons(intialPersons));
  }, []);

  //
  const addPerson = (event) => {
    event.preventDefault();

    const phonebookObject = {
      name: newName,
      number: newNumber,
    };

    persons.forEach((person) => {
      if (person.name === newName) {
        const isConfirm = window.confirm(
          `${phonebookObject.name} is already added to phonebook, replace the old number with a new one ?`
        );
        if (isConfirm) {
          personService
            .update(person.id, phonebookObject)
            .then((returnedPerson) => {
              setPersons(
                persons.map((n) => (n.id !== person.id ? n : returnedPerson))
              );
              setAlert("success");
              setSuccessMessage(`number updated for ${person.name}`);
              setTimeout(() => {
                setSuccessMessage(null);
              }, 3000);
            })
            .catch((returnedError) => {
              console.log(returnedError.message);
              setAlert("error");
              setErrorMessage(
                `Information of ${person.name} has already been removed from the server`
              );
              setTimeout(() => {
                setErrorMessage(null);
              }, 3000);
            });
        }
      }
    });

    if (
      phonebookObject.name &&
      !persons.some((person) => person.name === phonebookObject.name)
    ) {
      personService.create(phonebookObject).then((returnedPerson) => {
        setPersons(persons.concat(returnedPerson));
        setAlert("success");
        setSuccessMessage(`Added ${returnedPerson.name}`);
        setTimeout(() => {
          setSuccessMessage(null);
        }, 3000);
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

  const handleDelete = (id, name) => {
    const isConfirm = window.confirm(`Delete ${name} ?`);

    if (isConfirm) {
      personService.remove(id).then(() => {
        setPersons(persons.filter((person) => person.id !== id));
      });
    }
  };

  //
  const searchFilter = () => {
    // gets input and compare with persons array
    return persons.filter((person) =>
      person.name.toLowerCase().includes(newSearch.toLowerCase())
    );
  };

  return (
    <div>
      {alert === "success" && (
        <Notification message={successMessage} success="success" />
      )}
      {alert === "error" && <Notification message={errorMessage} success="" />}
      <h2>Phonebook</h2>
      <Filter
        handleValue={newSearch}
        handleChange={handleNoteChange.setSearch}
      />
      <h3>Add a new</h3>
      <PersonForm
        handleSubmit={addPerson}
        handleValueName={newName}
        handleValueNum={newNumber}
        noteChangeName={handleNoteChange.setName}
        noteChangeNum={handleNoteChange.setNumber}
      />
      <h3>Numbers</h3>
      {searchFilter().map((person) => (
        <Person
          key={person.name}
          person={person}
          clickDelete={() => handleDelete(person.id, person.name)}
        />
      ))}
    </div>
  );
};

export default App;
