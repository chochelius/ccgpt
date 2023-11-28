import "./App.css";
import Navbar from "./components/navBar/Navbar";
import Form from "./pages/Form/Form";
import Splash from "./pages/Splash/Splash";

function App() {
  const test = () => {
    console.log("test");
  };

  test();

  return (
    <div>
      <Navbar />
    <div className="pt-3">
          <Form  />
    </div>
      <div className="d-none">
        <Splash />
      </div>
    </div>
  );
}

export default App;
