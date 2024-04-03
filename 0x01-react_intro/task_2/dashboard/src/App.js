import logo from './Holberton_Logo.jpg';
import {getFullYear, getFooterCopy} from './utils.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App.H1">School dashboard</h1>
      </header>
      <body className="App-body">
        <p>
          Login to access the full dashboard
        </p>
        <label className="email" htmlFor='email'>Email: </label>
        <input type="email" id="email" name="email"/>
        <label className="password" htmlFor='password'>Password: </label>
        <input type="password" id="password" name="password"/>
        <button className="label-button">OK</button>
      </body>
      <footer className="App-footer">
        <p>
          Copyright {getFullYear()} - {getFooterCopy(true)}
        </p>
      </footer>
    </div>
  );
}

export default App;
