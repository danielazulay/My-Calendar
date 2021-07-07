import { BrowserRouter, Route } from "react-router-dom";
import "./components/App/App.css";
/* import DeleteEventDay from './DeleteEventDay.jsx' */
import Agenda from "./components/Agenda/Agenda";
/* import EditModal from '../src/components/EditModal/EditModal' */

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={Agenda} />
      {/*     <Route path="/delete-eventDay/:id" component={EditModal} /> */}
      {/*   <Route path="/Edit-event/:id" component={EditModal} /> */}
    </BrowserRouter>
  );
}

export default App;
