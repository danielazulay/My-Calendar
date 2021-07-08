import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";

import Agenda from "../Agenda/Agenda";
import "../Days/Days.css";


function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={Agenda} />
<<<<<<< HEAD
      {/* <Route path="/delete-eventDay/:id" component={DeleteEventDay} /> */}
=======
    
>>>>>>> b4e4bc1ee4899938c2cfbaf50901f11c76f13e2f
    </BrowserRouter>
  );
}

export default App;
