import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { useState } from "react";
import { CaretIconSecondary } from "./CustomIcons";

const AccordionItem = ({ title, children, itemKey }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-t border-gray overflow-hidden">
      <div
        className="flex font-semibold justify-between items-center py-5 cursor-pointer text-base md:text-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <motion.div
          className="mr-4"
          initial={{ rotate: 0 }}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{
            duration: 0.4,
            ease: "easeInOut",
          }}
        >
          <CaretIconSecondary />
        </motion.div>
      </div>
      {isOpen && (
        <motion.div
          key={`accordion-content-${itemKey}`}
          className="pb-5 font-normal"
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          exit={{ height: 0 }}
          transition={{
            ease: "easeInOut",
            duration: 0.4,
          }}
        >
          {children}
        </motion.div>
      )}
    </div>
  );
};

const Accordion = ({ children, className }) => {
  return (
    <div className={className}>
      <AnimatePresence mode="wait">
        <LayoutGroup className="accordion">{children}</LayoutGroup>
      </AnimatePresence>
    </div>
  );
};

export { Accordion, AccordionItem };
