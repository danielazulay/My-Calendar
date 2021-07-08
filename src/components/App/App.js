import { BrowserRouter, Route } from "react-router-dom";

import Agenda from "../Agenda/Agenda";
import "../Days/Days.css";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={Agenda} />
    </BrowserRouter>
  );
}

export default App;
