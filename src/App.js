import logo from './logo.svg';
import './App.css';
import RandomNumberGenerator from './components/RandomNumberGenerator';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
        <RandomNumberGenerator min={1} max={100} />
      </header>
    </div>
  );
}

export default App;
