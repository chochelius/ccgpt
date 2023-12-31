import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Importar Router de react-router-dom
import Navbar from "../components/navBar/Navbar";
import Form from "../pages/Form/Form";
import Page2 from "../pages/Page2/Page2";
import Chat from "../pages/Chat/Chat";
import Footer from "../components/Footer/Footer"
import Data from "../pages/Data/Data";


const RouterComponent = () => {

    // routes are defined here using the Route component and the path and component props Chat and Form are imported from the pages folder

    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/chat" element={<Chat />} />
                <Route path="/page2" element={<Page2 />} />
                <Route path="/" element={<Form />} />
                <Route path="/data" element={<Data />} />
            </Routes>
            <Footer />
        </Router>
    );

};

export default RouterComponent;