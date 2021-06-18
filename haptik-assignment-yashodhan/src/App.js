import logo from './logo.svg';
import './App.css';
import { ContactList } from './components/ContactList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ContactList />
      </header>
    </div>
  );
}

export default App;
