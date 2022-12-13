import Button from "./Button";

const PersonForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        name:{" "}
        <input value={props.handleValueName} onChange={props.noteChangeName} />
      </div>
      <div>
        number:{" "}
        <input value={props.handleValueNum} onChange={props.noteChangeNum} />
      </div>
      <div>
        <Button text="add" />
      </div>
    </form>
  );
};

export default PersonForm;
