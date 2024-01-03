import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/NavBar';
import DiscordStatus from './components/profile';
import Scrollbar from './components/scrollbar'; // import the Scrollbar component

function App() {
  return (
    <Router>
      <DiscordStatus/>
      <NavBar />
      <Scrollbar /> {/* include the Scrollbar component */}
      {/* other components */}
    </Router>
  );
}

export default App;