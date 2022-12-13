import Part from "./Part";
import Total from "./Total";

const Content = ({ parts }) => {
  //
  const sum = parts
    .map((part) => part.exercises)
    .reduce((acc, next) => acc + next);

  return (
    <div>
      {parts.map((part) => (
        <Part key={part.id} part={part.name} exercises={part.exercises} />
      ))}
      <Total sum={sum} />
    </div>
  );
};

export default Content;
