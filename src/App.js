import './App.css';
import FormComponens from './komponens/FormComponens';

function App() {
  function adatkuld(adatObj){
    
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Űrlap</h1>
      </header>
      <article>
      <FormComponens adatkuld={adatkuld}/>
      </article>
    </div>
  );
}

export default App;
