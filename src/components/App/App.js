import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";

import Agenda from "../Agenda/Agenda";
import "../Days/Days.css";
import DeleteEventDay from "../DeleteEvent/DeleteEventDay";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={Agenda} />
      <Route path="/delete-eventDay/:id" component={DeleteEventDay} />
    </BrowserRouter>
  );
}

export default App;
