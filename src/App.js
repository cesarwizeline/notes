import Notes from './components/Notes';
import Searcher from './components/Searcher';
import InputNote from './components/InputNote';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NotesContextProvider } from './context/NotesContext';
import { Navbar, Container, Row } from 'react-bootstrap';
function App() {
  return (
    <div className="App">
      <NotesContextProvider>
        <Navbar bg="dark">
          <Container>
            <Row>
              <Searcher />
            </Row>
          </Container>
        </Navbar>
        <Container>
          <InputNote />
          <Notes />
        </Container>
      </NotesContextProvider>
    </div>
  );
}

export default App;
