import { waitWindow } from "../utilities/global";
import { useState } from "react";
import { FAQSection } from "../components/FAQSection";
import { Marquee } from "../components/Marquee";
import { SellingPoints } from "../components/SellingPoints";
import { StickyNav } from "../components/StickyNav";
import { CartErrorModal } from "../components/CartErrorModal";
import { Products } from "../components/Products";
import { Footer } from "../components/Footer";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { navItems } from "../utilities/consts";
import useViewportHeight from "../utilities/useViewportHeight";
import { isMobile } from "react-device-detect";

export default function Homepage({ setCartVisible, cartState, previousPage }) {
  const router = useRouter();
  const windowAvailable = waitWindow();
  const [cartError, setCartError] = useState(false);
  const [showSubmenu, setShowSubmenu] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState(0);
  useViewportHeight();
  const closeCartError = () => {
    setCartError(false);
  };

  const reviewCart = () => {
    setCartError(false);
    setCartVisible(true);
  };

  const handleScroll = () => {
    let sections = navItems.map((item) =>
      document?.querySelector(`#${item.section}`)
    );
    const currentScrollY = window.scrollY;
    if (
      currentScrollY < lastScrollY &&
      currentScrollY > window.visualViewport.height
    ) {
      setShowSubmenu(true);
    } else {
      setShowSubmenu(false);
    }

    let activeSection = 0;
    sections.forEach((section, i) => {
      if (section?.querySelector(".inView")) {
        activeSection = i;
      }
    });

    setActiveSection(activeSection);

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  useEffect(() => {
    // If there is a hash in the URL, scroll to the target element
    if (router.asPath.includes("#")) {
      const elementId = router.asPath.split("#")[1].split("?")[0];
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    if (previousPage == "/quiz") {
      setCartVisible(true);
    }
  }, [router.asPath]);

  return (
    <>
      <StickyNav
        setCartVisible={setCartVisible}
        cartState={cartState}
        showSubmenu={showSubmenu}
        activeSection={activeSection}
      />
      <div className="relative -mt-14">
        <div
          className="box-border flex flex-col items-center md:bg-contain bg-contain bg-no-repeat"
          style={{
            height: "calc(var(--vh, 1vh) * 100)",
            backgroundImage:
              "url('./wallpaper.png'), linear-gradient(to bottom, #213569, #154a95)",
            backgroundPosition: "center 80%",
          }}
        >
          <SellingPoints />
        </div>
        <Marquee />
        <Products
          setCartVisible={setCartVisible}
          setCartError={setCartError}
          cartState={cartState}
          windowAvailable={windowAvailable}
        />
        <FAQSection />
        <Footer />
        <CartErrorModal
          cartError={cartError}
          reviewCart={reviewCart}
          closeCartError={closeCartError}
        />
      </div>
    </>
  );
}
