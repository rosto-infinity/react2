
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './compoments/Home';
import Products from './compoments/Products';
import { useState, useEffect } from 'react';

function App() {
  const [currentRoute, setCurrentRoute] = useState();
  useEffect(() => {
    const path = window.location.pathname.toLowerCase();
    setCurrentRoute(path.slice(1, path.length));
  }, []);
  return (
    <BrowserRouter>
      <header>
        <div className="logo">
          <Link to={"/home"}>
            <img src="/images/obryl.jpg" alt="logo" height="55" />
          </Link>
        </div>
        <nav>
          <ul>
            <li>
              <Link
                onClick={() => setCurrentRoute("home")}
                className={
                  currentRoute === "home"
                    ? "lien-active"
                    : "lien"
                }
                to={"/home"}>Home</Link>
            </li>
            <li>
              <Link
                onClick={() => setCurrentRoute("products")}
                className={
                  currentRoute === "products"
                    ? "lien-active"
                    : "lien"
                }
                to={"/products"}>Products</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/Products" element={<Products />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
