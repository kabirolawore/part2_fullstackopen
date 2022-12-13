const Button = (props) => {
  // console.log(props.handleClick());
  return <button onClick={props.handleClick}>{props.text}</button>;
};

export default Button;
