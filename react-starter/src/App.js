import Navbar from './Components/Navbar.js';
import Allpatient from './Components/Allpatients.js';
import './App.css';
import Info from './Components/Info.js';

function App() {
  return (
    <div className="App">
      <Info/>
      <Allpatient/>
      <Navbar />
    </div>
  );
}

export default App;
