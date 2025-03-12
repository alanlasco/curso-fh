import { SimpleForm } from "./use-effect/SimpleForm.jsx";
import { SimpleFormConCustomHook } from "./use-effect/SimpleFormConCustomHook.jsx";
import { CounterApp } from "./use-State/CounterApp";
import { CounterWithCustomHook } from "./use-State/CounterWithCustomHook.jsx";

function App() {
  return (
    <div className="App">
      <h1>HooksApp</h1>
      <SimpleFormConCustomHook />
    </div>
  );
}

export default App;
