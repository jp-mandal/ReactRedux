import "./App.css";
import ClockHeading from "./ClockHeadin/ClockHeading";
import CurrentTime from "./ClockHeadin/CurrentTime";
import ClockSlogan from "./ClockHeadin/ClockSlogan";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <center>
        <ClockHeading></ClockHeading>
        <ClockSlogan></ClockSlogan>
        <CurrentTime></CurrentTime>
      </center>
    </div>
  );
}

export default App;
