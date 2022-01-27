import { useReducer, useState } from 'react';

export const ACTIONS = {
  CREATE_NOTE: 'CREATE_NOTE',
  UPDATE_NOTE: 'UPDATE_NOTE',
  DELETE_NOTE: 'DELETE_NOTE',
  FILTER_NOTES: 'FILTER_NOTES',
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.CREATE_NOTE:
      return {
        ...state,
        notes: [...state.notes, action.payload],
        filteredNotes: [...state.notes, action.payload],
      };
    case ACTIONS.DELETE_NOTE:
      let newNotesDeleted = state.notes.filter(
        (note) => note.id !== action.noteId
      );
      return {
        ...state,
        notes: newNotesDeleted,
        filteredNotes: newNotesDeleted,
      };
    case ACTIONS.UPDATE_NOTE:
      let newNotesUpdated = state.notes.map((note) => {
        if (note.id === action.payload.id) {
          note = action.payload;
        }
        return note;
      });
      return {
        ...state,
        notes: newNotesUpdated,
        filteredNotes: newNotesUpdated,
      };
    case ACTIONS.FILTER_NOTES:
      return {
        ...state,
        filteredNotes: state.notes.filter((notes) =>
          notes.text.match(action.filteredNote)
        ),
      };

    default:
      return state;
  }
};

const useNotes = () => {
  const [state, dispatch] = useReducer(reducer, {
    notes: [],
    filteredNotes: [],
  });
  const [inputSearch, setInputSearch] = useState('');
  const createNoteHandler = (text, color) => {
    return dispatch({
      type: ACTIONS.CREATE_NOTE,
      payload: { id: Math.ceil(Math.random() * 100), text, color },
    });
  };

  const deleteNoteHandler = (noteId) => {
    return dispatch({ type: ACTIONS.DELETE_NOTE, noteId });
  };

  const editNoteHandler = (noteId, text, color) => {
    return dispatch({
      type: ACTIONS.UPDATE_NOTE,
      payload: { id: noteId, text, color },
    });
  };
  const filterNotesHandler = (text) => {
    return dispatch({ type: ACTIONS.FILTER_NOTES, filteredNote: text });
  };
  return {
    state,
    inputSearch,
    createNoteHandler,
    editNoteHandler,
    deleteNoteHandler,
    filterNotesHandler,
  };
};

export default useNotes;
