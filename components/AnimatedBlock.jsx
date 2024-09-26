import { cn } from "@nextui-org/theme";
import { useInView } from "react-intersection-observer";

const AnimatedBlock = ({ children, className }) => {
  const { ref, inView } = useInView({
    threshold: 0.1, // Percentage of the element visible in the viewport to trigger the effect
  });

  return (
    <div
      ref={ref}
      className={cn(className, {
        inView: inView,
        outOfView: !inView,
      })}
    >
      {children}
    </div>
  );
};

export default AnimatedBlock;
