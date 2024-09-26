import { cn } from "@nextui-org/theme";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { useState } from "react";
import { CaretIconSecondary } from "./CustomIcons";

const AccordionItem = ({ title, children, itemKey }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-t border-gray overflow-hidden">
      <div
        className="flex font-semibold justify-between items-start py-5 cursor-pointer text-base md:text-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <motion.div
          className="mr-4 p-2"
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
      <div
        key={`accordion-content-${itemKey}`}
        className={cn("font-normal transition-all duration-400 ease-in-out", {
          "h-auto opacity-100": isOpen,
          "h-0 opacity-0": !isOpen,
        })}
      >
        {children}
        <br />
        <br />
      </div>
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
