import { Route, Routes } from "react-router";
import "./App.css";
import { Categories } from "./components/Categories/Categories";
import { CollectionList } from "./components/Collection/CollectionList";
import { ProductsList } from "./components/Products/ProductsList";
import Navbar from "./components/Header/Navbar/MainNav/Navbar";
import { SimpleSliderconst } from "./components/slider/Slider";
import { Footer } from "./components/Footer/Footer";
import { Cart } from "./components/Cart/Cart";
function App() {
  return (
    <div className="App">
      <Navbar />

      <Categories />
      <Routes>
        <Route
          path="/"
          excat
          element={
            <>
              <SimpleSliderconst /> <CollectionList />
            </>
          }
        ></Route>

        <Route path="/categories/:name" element={<ProductsList />} />
        {/* <Route path="/products/:id" element={<Product/>}/> */}
      </Routes>
      <Cart />
      <Footer />
    </div>
  );
}

export default App;
