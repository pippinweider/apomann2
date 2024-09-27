import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { CloseIcon } from "./CustomIcons";
import cn from "classnames";
import { isDesktop } from "react-device-detect";
import useViewportHeight from "../utilities/useViewportHeight";

const Modal = ({
  children,
  onClose,
  isOpen,
  customClass,
  customProps,
  showClose,
  position = "fixed",
  isHalfHeight,
}) => {
  const [visible, setVisible] = useState(isOpen);

  useEffect(() => {
    setVisible(isOpen);
  }, [isOpen]);
  useEffect(() => {
    if (visible) {
      document.body.classList.add("no-scroll");
    }
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [visible]);
  useViewportHeight();
  return (
    <AnimatePresence mode="wait">
      {visible && (
        <>
          <motion.div
            className={cn("inset-0 bg-gray100 bg-opacity-30 z-40", position)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            key={"modal"}
            initial={{ translateY: "100%" }}
            animate={{ translateY: 0 }}
            exit={{ translateY: "100%" }}
            className={cn(
              "overscroll-none z-50 top-0 bg-white flex flex-col items-center left-0 md:left-auto md:w-1/3 right-0",
              customClass,
              position
            )}
            transition={{
              ease: "easeInOut",
              duration: 0.5,
            }}
            {...customProps}
            style={
              isHalfHeight && isDesktop
                ? {
                    height: "calc(var(--vh, 1vh) * 50)",
                  }
                : {
                    height: "calc(var(--vh, 1vh) * 100)",
                  }
            }
          >
            {showClose && (
              <button className="absolute p-5 right-0 top-0" onClick={onClose}>
                <CloseIcon />
              </button>
            )}
            {children}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Modal;
