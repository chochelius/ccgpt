import "./App.css";
import Form from "./pages/Form/Form";
import Splash from "./pages/Splash/Splash";

function App() {
  const test = () => {
    console.log("test");
  };

  test();

  return (
    <div>
    <div className="d-none">
      
    <Splash />
    </div>
      
      <Form />
    </div>
  );
}

export default App;
