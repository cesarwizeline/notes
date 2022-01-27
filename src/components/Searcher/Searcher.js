import React, { useRef } from 'react';
import { useNotesContext } from '../../context/NotesContext';
const Searcher = () => {
  const { filterNotesHandler } = useNotesContext();
  const textRef = useRef();

  const findHandler = (text) => {
    let time;
    filterNotesHandler(text);
    return function () {
      clearTimeout(time);
      time = setTimeout(() => {
        console.log('print' + text);
        filterNotesHandler(text);
      }, 1000);
    };
  };
  return (
    <div>
      <input
        placeholder="Search notes"
        ref={textRef}
        type="text"
        onChange={(e) => findHandler(e.target.value)}
      />
    </div>
  );
};

export default Searcher;
