import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {
  const [open, setOpen] = useState(false);

  const showCartHandler = () => {
    setOpen(true);
  };

  const hideCartHandler = () => {
    setOpen(false);
  };
  return (
    <CartProvider>
      {open && <Cart onClose={hideCartHandler} />}
      <Header onOpen={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
