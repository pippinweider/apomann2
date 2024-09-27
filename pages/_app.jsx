import Head from "next/head";
import { AnimatePresence, motion } from "framer-motion";
import Cart from "../components/Cart";
import { useState } from "react";
import useCartState from "../utilities/cart";
import "@/styles/global.css";
import { useEffect } from "react";

const defaultAnimProps = {
  initial: { translateY: "100%" },
  animate: { translateY: 0 },
  exit: { translateY: "100%" },
  transition: {
    type: "spring",
    duration: 0.4,
    mass: 1,
    stiffness: 80,
    damping: 20,
  },
};

const fadeProps = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: {
    type: "ease",
    duration: 0.4,
  },
};

export default function MyApp({ Component, pageProps }) {
  const [cartVisible, setCartVisible] = useState(false);
  const [customProps, setCustomProps] = useState(defaultAnimProps);
  const cartState = useCartState();

  const fadeCart = async () => {
    setCustomProps(fadeProps);
    await new Promise((r) => setTimeout(r, 300));
    setCartVisible(false);
    setCustomProps(defaultAnimProps);
  };
  useEffect(() => {
    if (cartVisible) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [cartVisible]);
  return (
    <>
      <Head>
        <title>Apomann</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <AnimatePresence {...fadeProps}>
        <Component
          key={"page-content"}
          {...pageProps}
          setCartVisible={setCartVisible}
          cartState={cartState}
        />
      </AnimatePresence>
      <AnimatePresence mode="wait">
        {cartVisible && (
          <motion.div
            key={"cart-content"}
            className="overscroll-none fixed top-0 left-0 right-0 bottom-0 overflow-y-auto overflow-x-hidden z-50"
            {...customProps}
          >
            <Cart
              setCartVisible={setCartVisible}
              fadeCart={fadeCart}
              cartState={cartState}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
