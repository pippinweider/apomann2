import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { CloseIcon } from "./CustomIcons";
import cn from "classnames";

const Modal = ({
  children,
  onClose,
  isOpen,
  customClass,
  customProps,
  showClose,
  position = "fixed",
}) => {
  const [visible, setVisible] = useState(isOpen);

  useEffect(() => {
    setVisible(isOpen);
  }, [isOpen]);

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
              "z-50 top-0 h-screen bg-white flex flex-col items-center left-0 md:left-auto md:w-1/3 right-0",
              customClass,
              position
            )}
            transition={{
              ease: "easeInOut",
              duration: 0.5,
            }}
            {...customProps}
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
