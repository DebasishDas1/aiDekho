import NavBar from './containers/NavBar';
import Submit from './pages/Submit';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import { Routes, Route } from "react-router-dom";

import styles from './app.module.css';

const App = () => {
    return (
        <div className={styles.app} >
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/submit" element={<Submit />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </div>
    );
};

export default App;