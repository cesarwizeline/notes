import { useState } from 'react';
import { useNotesContext } from '../../context/NotesContext';
import { Button, InputGroup } from 'react-bootstrap';

const InputNote = ({ noteId, text, colorNote }) => {
  const { createNoteHandler, editNoteHandler } = useNotesContext();
  const [inputText, setInputText] = useState(text);
  const [color, setColor] = useState(colorNote);

  const clickHandler = () => {
    if (noteId) {
      editNoteHandler(noteId, inputText, color);
    } else {
      createNoteHandler(inputText, color);
    }
    setInputText('');
  };
  return (
    <>
      Select a color
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <InputGroup className="mb-4">
        <textarea
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        ></textarea>
        <Button variant="outline-secondary" onClick={clickHandler}>
          Save
        </Button>
      </InputGroup>
    </>
  );
};

InputNote.defaultProps = {
  text: '',
  colorNote: '#000000',
};

export default InputNote;
