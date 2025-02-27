import { marqueeItems } from "../utilities/consts";
import Ticker from "framer-motion-ticker";

export const Marquee = () => {
  return (
    <div
      id="prozess"
      className="p-3 text-sm md:p-10 text-white bg-green scroll-mt-14"
    >
      <Ticker duration={25} offset={0}>
        {marqueeItems.map((item, i) => (
          <div key={`marquee-item--${i}`} className="px-4 uppercase text-sm">
            {item}
          </div>
        ))}
      </Ticker>
    </div>
  );
};
