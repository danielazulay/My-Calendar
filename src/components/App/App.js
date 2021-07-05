import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";

import Agenda from "../Agenda/Agenda";
import NewEventModal from "../NewEventModal/NewEventModal";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={Agenda} />
      <NewEventModal />
    </BrowserRouter>
  );
}

export default App;
