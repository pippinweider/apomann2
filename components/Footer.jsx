import AnimatedBlock from "../components/AnimatedBlock";
import { navItems } from "../utilities/consts";
import Link from "next/link";
import Image from "next/image";
import { scrollToSection } from "../components/StickyNav";
import { useRouter } from "next/router";

export const Footer = () => {
  const router = useRouter();
  return (
    <div className="bg-navy flex flex-col items-center">
      <AnimatedBlock className="w-full md:w-10/12 flex flex-col py-6 px-5 md:p-0">
        <div className="flex flex-col items-center bg-white rounded-2xl w-full p-5 md:p-16 md:mt-16 mb-9">
          <h5 className="text-xs font-semibold text-titleColor">
            SICHER UND GESCHÜTZT
          </h5>
          <h3 className="text-lg md:text-3xl font-bold mb-8 text-center text-titleColor">
            Wir werden von allen relevanten <br /> Regulierungsbehörden in
            Deutschland reguliert
          </h3>
          <div className="flex justify-evenly w-full md:justify-center items-center md:gap-24">
            <Image src="/tuv.svg" width={74} height={75} alt="Certified" />
            <Image src="/legit.svg" width={92} height={79} alt="Certified" />
            <Image src="/trusted.svg" width={92} height={92} alt="Certified" />
          </div>
        </div>
        <div className="text-white flex flex-col md:flex-row gap-4 md:gap-8 items-start mb-6">
          <div className="flex-1">
            <h5 className="montserrat font-bold">APOMANN</h5>
            <div className="hidden md:block text-gray300 text-sm mt-7 whitespace-nowrap">
              Alle Rechte vorbehalten © 2024 Deutchland
            </div>
          </div>
          <div className="flex-1 flex gap-2 justify-center absolute right-5 md:static flex-wrap">
            <Image src="/master.svg" width={38} height={24} alt="Master Card" />
            <Image src="/visa.svg" width={38} height={24} alt="Visa" />
            <Image src="/klarna.svg" width={38} height={24} alt="Klarna" />
            <Image src="/paypal.svg" width={38} height={24} alt="Paypal" />
          </div>
          <div className="text-white flex-1">
            {navItems.map((item, i) => (
              <p
                key={`footer-nav--${i}`}
                className="text-sm cursor-pointer"
                data-section={item.section}
                onClick={() => scrollToSection(item.section, router)}
              >
                {item.title}
              </p>
            ))}
          </div>

          <div className="flex-1 text-sm">
            <Link href="/bedingungen-und-auflagen">
              Bedingungen und Auflagen
            </Link>
            <br />
            <Link href="/deutschland">Privacy Policy</Link>
          </div>
          <div className="text-gray300 text-sm mt-7 md:hidden whitespace-nowrap">
            Alle Rechte vorbehalten © 2024 Deutchland
          </div>
        </div>
      </AnimatedBlock>
    </div>
  );
};
