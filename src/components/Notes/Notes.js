import React from 'react';
import Note from './Note';
import { useNotesContext } from '../../context/NotesContext';
import { Container, Row, Col } from 'react-bootstrap';
const Notes = () => {
  const { state, editNoteHandler, deleteNoteHandler } = useNotesContext();
  console.log(state);
  return (
    <Container>
      <Row>
        {state.filteredNotes &&
          state.filteredNotes.map((note, index) => (
            <Col style={{ marginBottom: '20px' }} xs={3}>
              <Note
                key={index}
                editNoteHandler={editNoteHandler}
                deleteNoteHandler={deleteNoteHandler}
                note={note}
              />
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default Notes;
