import "./App.css";
import Splash from "./pages/Splash";

function App() {
  const test = () => {
    console.log("test");
  };

  test();

  return (
    <div>
      <Splash />
    </div>
  );
}

export default App;
