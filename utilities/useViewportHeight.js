import { useEffect } from "react";

const useViewportHeight = () => {
  useEffect(() => {
    const updateHeight = () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    // Set the initial height
    updateHeight();

    // Update the height when the window is resized
    window.addEventListener("resize", updateHeight);

    // Clean up the event listener on unmount
    return () => window.removeEventListener("resize", updateHeight);
  }, []);
};

export default useViewportHeight;
