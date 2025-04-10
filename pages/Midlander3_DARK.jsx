"use client";

export default function Midlander3_DARK() {
  return (
    <div>
      <div
        className="min-h-screen flex flex-col justify-between overflow-y-auto"
        style={{
          height: "calc(var(--vh, 1vh) * 100)",
          backgroundImage: "url('./Midlander3.png')",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <h2 className="text-shadow text-offwhite text-center uppercase font-bold text-3xl md:text-4xl lg:text-6xl m-[5%] montserrat">
          Apomann
        </h2>

        <h2 className="text-offwhite montserrat my-[10%] mx-[5%] flex-1 text-right landscape:my-0  flex flex-col items-end justify-between ">
          <ul className="flex flex-col gap-4 text-2xl md:text-3xl lg:text-4xl text-shadow mb-10">
            <li>Online Rezept</li>
            <li>Kostenloser Versand</li>
            <li>Bester Preis</li>
          </ul>
          <div className="rugby px-8 py-3 text-lg md:text-xl lg:text-2xl bg-green rounded-full flex flex-col text-center">
            ab 0,99€
            <span className="text-xs md:text-md lg:text-xl">pro Pille</span>
          </div>
        </h2>
        <div className="flex justify-center m-[5%]">
          <a
            href="https://tracker.cmclicks000.com/click.php?lp=1"
            className="text-offwhite font-semibold text-3xl md:text-4xl lg:text-6xl montserrat bg-green hover:bg-accent500 transition-all py-1 px-6 rounded-full shadow-[0_0px_20px_0px_rgb(55,55,55)]"
          >
            online kaufen
          </a>
        </div>
      </div>
    </div>
  );
}
