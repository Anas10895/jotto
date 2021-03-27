import logo from './logo.svg';
import './App.css';
import GuessWord from './components/guessWord'
import Gongrats from './components/congrats'
function App() {
  return (
    <div className="container">
    <h1>Jotto</h1>
      <Gongrats success={true} />
      <GuessWord guessedWords={[   {guessedWord : 'train', litterMatchCount : 3},
        {guessedWord : 'agile', litterMatchCount : 1},
        {guessedWord : 'party', litterMatchCount : 5}]}/> 
    </div>
  );
}

export default App;
