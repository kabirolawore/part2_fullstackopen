import Note from "./Note";

const Persons = (props) => {
  return (
    <div>
      {props.searchFunc().map((person) => (
        <Note key={person.name} note={person} />
      ))}
    </div>
  );
};

export default Persons;
