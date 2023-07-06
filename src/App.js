
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import './App.css';
import Home from "./components/main/home"
function App() {
  return (
    <DndProvider backend={HTML5Backend}>
        <Home></Home>
  </DndProvider>
  );
}

export default App;
