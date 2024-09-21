import { PillIcon, NotesIcon, DeliveryIcon } from "../components/CustomIcons";
import AnimatedBlock from "../components/AnimatedBlock";

export const SellingPointsSecondary = () => {
  return (
    <div className="bg-beige flex justify-center">
      <AnimatedBlock className="w-full md:w-10/12 px-5 py-11 md:px-0 md:py-14">
        <div>
          <div className="text-xs font-semibold uppercase">
            Wie es funktioniert
          </div>
          <div className="font-semibold md:font-bold text-2xl md:text-3xl text-titleColor opacity-85">
            Erektile Dysfunktion überwinden, <br /> online zum erfüllten
            Liebesleben
          </div>
        </div>
        <div className="flex flex-col flex-wrap md:flex-row gap-5 mt-4 md:mt-10">
          <div className="border rounded-2xl py-12 px-5 md:p-14 bg-white flex flex-row md:flex-col gap-4 md:gap-0 justify-between items-center text-lg flex-1 md:text-center">
            <PillIcon />
            <div className="flex-1 text-base md:text-lg">
              <div className="md:mt-3 md:mb-7 font-semibold">
                Medikament wählen
              </div>
              Wähle ein sicheres und zugelassenes Medikament.
            </div>
          </div>
          <div className="border rounded-2xl py-12 px-5 md:p-14 bg-white flex flex-row md:flex-col gap-4 md:gap-0 justify-between items-center text-lg flex-1 md:text-center">
            <NotesIcon />
            <div className="flex-1 text-base md:text-lg">
              <div className="md:mt-3 md:mb-7 font-semibold">
                Kurzen Fragebogen beantworten
              </div>
              Diese Fragen helfen uns, deine gesundheitliche Situation
              einzuschätzen.
            </div>
          </div>
          <div className="border rounded-2xl py-12 px-5 md:p-14 bg-white flex flex-row md:flex-col gap-4 md:gap-0 justify-between items-center text-lg flex-1 md:text-center">
            <DeliveryIcon />
            <div className="flex-1 text-base md:text-lg">
              <div className="md:mt-3 md:mb-7 font-semibold">
                Schnelle Lieferung
              </div>
              Das Medikament wird schnell und diskret an deine Wunschadresse
              geliefert.
            </div>
          </div>
        </div>
      </AnimatedBlock>
    </div>
  );
};
