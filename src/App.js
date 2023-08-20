import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./components/HomeScreen";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<HomeScreen />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<Singin />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/product/:id" element={<ProductScreen />} />
          <Route path="/:category" element={<Category />} />
          <Route path="/:categori" element={<ProductCategory />} />
          <Route path="/home&lifestyle" element={<HomeLifestyle />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
