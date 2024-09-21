import Button from "../components/Button";
import { CaretIcon } from "../components/CustomIcons";
import Image from "next/image";

export const SellingPoints = () => {
  const scrollToNext = () => {
    let nextSection = document.querySelector("#produkte");
    nextSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-1 flex-col justify-center items-start text-white w-10/12 relative">
      <h1 className="font-semibold text-2xl md:text-5xl">
        Dein Schlüssel zu einem erfüllten Liebesleben, einfach online
      </h1>
      <div className="mt-10 text-base md:text-2xl">
        Medikamente direkt aus der Apotheke zur Dir nach Hause
      </div>
      <div className="bg-offwhite rounded-xl inline-flex flex-col gap-3 p-5 mt-6">
        <Image
          src="/trustpilot.svg"
          width={78}
          height={20}
          alt="Trustpilot logo"
        />
        <p className="text-gray500 text-sm">
          Unsere Kunden bewerten uns <br /> mit 4.5 von 5 Punkten.
        </p>
        <Image src="/rating.svg" width={114} height={20} alt="Rating" />
      </div>
      <Button
        className="absolute bottom-16 left-1/2 cursor-pointer animate-bounce"
        onClick={scrollToNext}
      >
        <CaretIcon />
      </Button>
    </div>
  );
};
