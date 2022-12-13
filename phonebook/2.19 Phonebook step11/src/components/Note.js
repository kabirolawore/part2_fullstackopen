const Note = ({ note }) => {
  return (
    <span>
      {note.name} {note.number}
    </span>
  );
};

export default Note;
