import "./App.css";
import Forecast from "./Forecast";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App ">
      <div className="box">
        <Forecast />
      </div>
      <footer>
        <a
          href="https://github.com/nicole1312/forecast-react-app"
          target="-blank"
        >
          Open-source-code
        </a>
        by Nicoleta Serban
      </footer>
    </div>
  );
}

export default App;
