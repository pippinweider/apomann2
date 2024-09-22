import { useState } from "react";
import { StickyNav } from "../components/StickyNav";
import { CartErrorModal } from "../components/CartErrorModal";
import { Footer } from "../components/Footer";
import AnimatedBlock from "../components/AnimatedBlock";

export default function Deutschland({ setCartVisible, cartState }) {
  const [cartError, setCartError] = useState(false);

  const closeCartError = () => {
    setCartError(false);
  };

  const reviewCart = () => {
    setCartError(false);
    setCartVisible(true);
  };

  return (
    <>
      <StickyNav setCartVisible={setCartVisible} cartState={cartState} />
      <div className="flex flex-col items-center py-11 bg-beige min-h-screen">
        <AnimatedBlock className="flex flex-col w-10/12 text-titleColor">
          <h3 className="text-3xl font-bold">Bedingungen und Auflagen</h3>
          <p className="py-7">
            August 2024
            <br />
            <br />
           Lorem Impsum
          </p>
        </AnimatedBlock>
      </div>
      <Footer />
      <CartErrorModal
        cartError={cartError}
        reviewCart={reviewCart}
        closeCartError={closeCartError}
      />
    </>
  );
}
