import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Importar Router de react-router-dom
import Navbar from "../components/navBar/Navbar";
import Form from "../pages/Form/Form";
import Page2 from "../pages/Page2/Page2";
import Chat from "../pages/Chat/Chat";
import Footer from "../components/footer/Footer";


const RouterComponent = () => {

    // routes are defined here using the Route component and the path and component props Chat and Form are imported from the pages folder

    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/form" element={<Page2 />} />
                <Route path="/" element={<Form />} />
                <Route path="/chat" element={<Chat />} />
            </Routes>
            <Footer />
        </Router>
    );

};

export default RouterComponent;