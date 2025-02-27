import { CheckIcon, StarGray, StarGreen } from "../components/CustomIcons";
import { Accordion, AccordionItem } from "../components/Accordion";
import Image from "next/image";
import { reviews, faqs } from "../utilities/consts";
import AnimatedBlock from "../components/AnimatedBlock";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { isMobile } from "react-device-detect";

export const FAQSection = () => {
  return (
    <div
      id="fragen"
      className="flex flex-col items-center py-11 bg-beige scroll-mt-14"
    >
      <AnimatedBlock className="flex flex-col w-full md:w-10/12">
        <div className="px-5 md:p-0">
          <h5 className="text-xs font-medium text-titleColor">VERTRAUEN</h5>
          <h3 className="text-2xl md:text-3xl font-bold text-titleColor">
            Kundenbewertungen sprechen für sich
          </h3>
        </div>
        <div className="lg:hidden flex pt-5 pb-10">
          <Swiper slidesPerView={1.3} spaceBetween={16}>
            {reviews.map((review, index) => (
              <SwiperSlide
                key={`review-${index}`}
                className="w-10/12 md:w-auto md:flex-1 rounded-lg border border-gray300 flex flex-col px-5 py-6 bg-white font-normal first-of-type:ml-5"
                style={{ backfaceVisibility: "visible" }}
              >
                <span className="text-lightGray whitespace-nowrap flex gap-2 items-center mb-5">
                  <CheckIcon /> Verifizierte Bewertung
                </span>
                <div className="flex gap-1 mb-3">
                  <StarGreen />
                  <StarGreen />
                  <StarGreen />
                  <StarGreen />
                  <StarGray />
                </div>
                <div className="uppercase font-semibold text-base">
                  {review.title}
                </div>
                {review.description}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="hidden lg:flex gap-4 pt-5 pb-10 md:pt-16 md:pb-20">
          {reviews.map((review, index) => (
            <div
              key={`review-${index}`}
              className="flex-1 rounded-lg border border-gray300 flex flex-col px-5 py-6 bg-white font-normal"
              style={{ backfaceVisibility: "visible" }}
            >
              <span className="text-lightGray whitespace-nowrap flex gap-2 items-center mb-5">
                <CheckIcon />
                <span className="whitespace-normal">
                  Verifizierte Bewertung
                </span>
              </span>
              <div className="flex gap-1 mb-3">
                <StarGreen />
                <StarGreen />
                <StarGreen />
                <StarGreen />
                <StarGray />
              </div>
              <div className="uppercase font-semibold text-base">
                {review.title}
              </div>
              {review.description}
            </div>
          ))}
        </div>
      </AnimatedBlock>
      <div className="flex w-full gap-8 md:w-10/12 flex-col md:flex-row p-5 md:p-0">
        <div className="flex flex-col flex-1">
          <h5 className="text-xs font-medium text-titleColor">FRAGEN</h5>
          <h3 className="text-3xl font-bold text-titleColor">
            Häufig gestellte Fragen
          </h3>
          <AnimatedBlock className="md:mt-auto -order-1 md:order-none mb-10 md:mb-0 flex justify-center md:block">
            <Image
              src="/pill.png"
              width={isMobile ? 150 : 250}
              height={isMobile ? 150 : 250}
              style={{ height: "auto" }}
              alt="Frequently Asked Questions"
            />
          </AnimatedBlock>
        </div>
        <AnimatedBlock className="flex-1">
          <Accordion>
            {faqs.map((faq, i) => (
              <AccordionItem
                key={`home-faq--${i}`}
                itemKey={i}
                title={faq.question}
              >
                {faq.answer}
              </AccordionItem>
            ))}
          </Accordion>
        </AnimatedBlock>
      </div>
    </div>
  );
};
