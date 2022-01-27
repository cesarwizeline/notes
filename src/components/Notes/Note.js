import React, { useEffect, useState, memo } from 'react';
import { Card, Modal, Button } from 'react-bootstrap';
import InputNote from '../InputNote';
import { useNotesContext } from '../../context/NotesContext';

const Note = ({ note }) => {
  const [showModal, setShowModal] = useState(false);
  const { state, deleteNoteHandler } = useNotesContext();

  useEffect(() => {
    setShowModal(false);
  }, [state]);

  const onClickDeleteHandler = () => {
    if (window.confirm('Do you really whant to delete this note?')) {
      deleteNoteHandler(note.id);
    }
  };
  console.log(`render ${note.id}`);
  return (
    <>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Title>Edit note</Modal.Title>
        <Modal.Body>
          <InputNote colorNote={note.color} text={note.text} noteId={note.id} />
        </Modal.Body>
      </Modal>

      <Card style={{ width: '190px', height: '230px' }}>
        <Card.Body style={{ color: note.color, overflow: 'scroll' }}>
          {note.text}
        </Card.Body>
        <Card.Footer>
          <Button
            variant="outline-secondary"
            onClick={() => setShowModal(true)}
          >
            {' '}
            Edit{' '}
          </Button>{' '}
          <Button variant="danger" onClick={onClickDeleteHandler}>
            {' '}
            Delete{' '}
          </Button>
        </Card.Footer>
      </Card>
    </>
  );
};

export default memo(Note);
