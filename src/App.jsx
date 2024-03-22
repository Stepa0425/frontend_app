import './App.css';
import ListUserComponent from "./components/ListUserComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import UserComponent from "./components/UserComponent";
function App() {
    return (
        <>
            <BrowserRouter>
                <HeaderComponent />
                <Routes>
                    <Route path="/" element={<ListUserComponent />} />
                    <Route path="/users" element={<ListUserComponent />} />
                    <Route path="/add-user" element={<UserComponent />} />
                </Routes>
                <FooterComponent />
            </BrowserRouter>
        </>
    );
}

export default App;
