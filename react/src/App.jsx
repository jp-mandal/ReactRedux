import KfButton from "./KfButton";
import {Next} from "./import"        //curley braces can be used for multiple exports.
import Hello from "./Hello";
import Random from "./Random";

function App(){

  return (
  
    <div>
  <h1>
    This is the best react course.
  </h1>
  <button>
    Suscribe
  </button>

  <button>
    Hello world
  </button>

  <KfButton></KfButton>

  <Next></Next>

  <Hello></Hello>

    <Random></Random>
    <Random></Random>
    <Random></Random>
    <Random></Random>
    <Random></Random>
    <Random></Random>

  </div>
  );
}

export default App;