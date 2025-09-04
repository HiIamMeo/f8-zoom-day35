import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "../../pages/Home";
import Counter from '../../pages/Counter'
import Todo from '../../pages/Todo'
import Profile from '../../pages/Profile'
import Products from '../../pages/Products'
import Comments from '../../pages/Comments'
import Weather from '../../pages/Weather'
import Buttons from '../../pages/Buttons'
import Navigation from "../../layouts/Navigation";

function AppRoutes() {
    return (
        <Router>
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/counter" element={<Counter />} />
                <Route path="/todo" element={<Todo />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/products" element={<Products />} />
                <Route path="/comments" element={<Comments />} />
                <Route path="/weather" element={<Weather />} />
                <Route path="/buttons" element={<Buttons />} />
            </Routes>
        </Router>
    );
}

export default AppRoutes;
