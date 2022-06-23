import "./App.css";
import Forecast from "./Forecast";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App container-fluid mx-auto d-block ">
      <div className="box">
        <Forecast defaultCity="london" />
      </div>
      <footer>
        <a
          href="https://github.com/nicole1312/forecast-react-app"
          target="-blank"
          rel="noopener noreferrer"
          className="open-source-link"
        >
          Open-source-code
        </a>
        by Nicoleta Serban
      </footer>
    </div>
  );
}

export default App;
