import { navItems } from "../utilities/consts";
import { Tooltip } from "react-tooltip";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import cn from "classnames";

export const scrollToSection = (section, router) => {
  if (router?.pathname === "/") {
    let target = document.querySelector(`#${section}`);
    target.scrollIntoView({ behavior: "smooth" });
  } else {
    router?.push(`/#${section}`);
  }
};

export const StickyNav = ({
  setCartVisible,
  cartState,
  showSubmenu,
  activeSection,
}) => {
  const router = useRouter();
  const cartFull = cartState.cart.total > 0;

  return (
    <AnimatePresence>
      <motion.div
        className="bg-white sticky top-0 z-10 p-4 flex justify-center"
        initial={{ y: 300 }}
        animate={{ y: 0 }}
        exit={{ y: 300 }}
        transition={{
          ease: "easeInOut",
          duration: 0.4,
        }}
      >
        <div className="flex items-center justify-end md:justify-between w-full md:w-10/12">
          <div className="gap-4 hidden md:flex">
            {navItems.map((item, i) => (
              <button
                key={`sticky-nav--${i}`}
                className={cn("text-titleColor", {
                  "font-bold": activeSection === i,
                  "font-semibold": activeSection !== i,
                })}
                data-section={item.section}
                onClick={() => scrollToSection(item.section, router)}
              >
                {item.title}
              </button>
            ))}
          </div>
          <Link
            href="/"
            className="text-titleColor text-lg uppercase font-bold tracking-wider absolute left-1/2 montserrat -translate-x-1/2"
          >
            Apomann
          </Link>
          <div className="flex gap-4">
            <a
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Coming soon"
              data-tooltip-place="top"
            >
              <Image
                src="/user.svg"
                className="cursor-pointer"
                width={24}
                height={23}
                alt="User"
              />
            </a>
            <Tooltip
              id="my-tooltip"
              className="px-1 py-2 text-xs z-10"
              style={{
                backgroundColor: "#F2F2F2",
                color: "#000",
              }}
            />
            <button className="relative" onClick={() => setCartVisible(true)}>
              <Image
                src="/shopping-cart.svg"
                width={24}
                height={23}
                alt="Shopping cart"
              />
              {cartFull && (
                <div className="rounded-full absolute top-0 right-0 bg-red w-1 h-1"></div>
              )}
            </button>
          </div>
        </div>
        {/* Submenu */}
        <div
          className={cn(
            "md:hidden fixed left-0 right-0 bg-darkNavy text-white p-4 flex gap-4 items-center justify-evenly transition-all duration-300",
            {
              "top-14": showSubmenu,
              "-top-14": !showSubmenu,
            }
          )}
        >
          {navItems.map((item, i) => (
            <button
              key={`sticky-nav--${i}`}
              className={cn({
                "font-bold": activeSection === i,
                "font-semibold": activeSection !== i,
              })}
              data-section={item.section}
              onClick={() => scrollToSection(item.section, router)}
            >
              {item.title}
            </button>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};