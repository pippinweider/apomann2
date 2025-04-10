"use client";

export default function Midlander4_EMOJI() {
  return (
    <div>
      <div
        className="min-h-screen flex flex-col items-center justify-between overflow-y-auto"
        style={{
          height: "calc(var(--vh, 1vh) * 100)",
          backgroundImage: "url('./Midlander4.png')",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <h2 className="text-offwhite uppercase font-bold text-3xl md:text-4xl m-[5%] montserrat">
          Apomann
        </h2>

        <h2 className="text-offwhite font-bold text-4xl md:text-6xl montserrat my-[10%] flex-1 text-center landscape:my-0">
          Sei das <span className="underline">Härteste</span> <br /> in inhrem
          Leben.
        </h2>

        <a
          href="https://tracker.cmclicks000.com/click.php?lp=1"
          className="text-offwhite font-semibold text-3xl md:text-4xl montserrat bg-green hover:bg-accent500 transition-all py-1 px-6 rounded-full m-[5%] shadow-[0_0px_20px_0px_rgb(55,55,55)]"
        >
          online kaufen
        </a>
      </div>
    </div>
  );
}
