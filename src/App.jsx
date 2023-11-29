import "./App.css";
import Navbar from "./components/navBar/Navbar";
import Form from "./pages/Form/Form";
import Splash from "./pages/Splash/Splash";
import Chat from "./pages/Chat/Chat";

function App() {
  const test = () => {
    console.log("test");
  };

  test();

  return (
    <div>
      <div className="mt-3">
      <Navbar />
        <Chat />
      </div>
      <div className="d-none">
        <Form />
        <Splash />
      </div>
    </div>
  );
}

export default App;
