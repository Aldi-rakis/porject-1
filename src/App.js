import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Button from './components/Button';
import Avatar from './components/Avatar';






function App() {
  return (
    <div className="App">
      <header className="App-header">

      <Navbar />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          hello
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Avatar />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        
        <Button />

        <Button />
        <Button />






      </header>
      
       

      

    </div>
  );
}

export default App;
