import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DragDrop from "./components/DragDrop";
import Co from "./components/Co";
import Aaa from "./components/Aaa";
import Aaaa from "./components/Aaaa";

const App = () => {
  return (<>
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <DragDrop />
      </div>
    </DndProvider>
    <Aaa/>
    <Aaaa/>
    <Co/>


    </>
  );
};

export default App;
