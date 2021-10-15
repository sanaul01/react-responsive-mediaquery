import logo from './logo.svg';
import './App.css';
import Services from './Pages/Home/Services/Services';
import Header from './Pages/Home/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';

function App() {
  return (
    <div className="App">
      <Home></Home>
    </div>
  );
}

export default App;
