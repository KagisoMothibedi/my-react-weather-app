import "./App.css";
import Weather from "./Weather.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Weather defaultCity="New York" />
      </header>
    </div>
  );
}

export default App;
