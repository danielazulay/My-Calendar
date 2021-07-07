import { BrowserRouter, Route } from "react-router-dom";
import './components/App/App.css';
import DeleteEventDay from './DeleteEventDay.jsx'
import Agenda from './components/Agenda/Agenda'

function App() {
  return (
   
    <BrowserRouter>
   

    <Route path="/" component={Agenda} />
    <Route path="/delete-eventDay/:id" component={DeleteEventDay} />

   
    </BrowserRouter>

  );
}

export default App;
