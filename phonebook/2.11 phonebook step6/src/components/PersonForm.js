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
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
