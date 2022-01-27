import React, { createContext, useContext } from 'react';
import useNotes from '../hooks/useNotes';
export const NotesContext = createContext();

export const useNotesContext = () => {
  return useContext(NotesContext);
};
export const NotesContextProvider = ({ children }) => {
  const {
    state,
    createNoteHandler,
    deleteNoteHandler,
    editNoteHandler,
    filterNotesHandler,
  } = useNotes();
  const context = {
    state,
    createNoteHandler,
    deleteNoteHandler,
    editNoteHandler,
    filterNotesHandler,
  };
  return (
    <NotesContext.Provider value={context}>{children}</NotesContext.Provider>
  );
};

export default NotesContext;
