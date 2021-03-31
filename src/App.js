import logo from './logo.svg';
import './App.css';
import GuessWord from './components/guessWord/index'
import Gongrats from './components/congrats/index'
import Input from './components/input/index'
function App() {

  // TODO get props from shared state
  const success = false;
  const secretWord = 'party';
  const guessedWord = [];

  return (
    <div data-test="app-component" className="container">
    <h1>Jotto</h1>
      <Gongrats success={success} />
      <Input success={success} secretWord={secretWord}/>
      <GuessWord guessedWords={guessedWord}/> 
    </div>
  );
}

export default App;
