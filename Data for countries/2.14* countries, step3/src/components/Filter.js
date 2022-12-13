const Filter = (props) => {
  return (
    <div>
      find countries{" "}
      <input value={props.handleValue} onChange={props.handleChange} />
    </div>
  );
};

export default Filter;
