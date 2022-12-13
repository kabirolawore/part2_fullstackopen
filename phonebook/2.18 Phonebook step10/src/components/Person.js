import Note from "./Note";
import Button from "./Button";

const Person = ({ person, clickDelete }) => {
  return (
    <div>
      <Note note={person} /> <Button handleDelete={clickDelete} text="delete" />
    </div>
  );
};

export default Person;
