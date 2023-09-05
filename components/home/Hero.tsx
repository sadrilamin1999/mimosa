import { cn } from "@/lib/utils";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const plafairDisplay = Playfair_Display({ subsets: ["latin"] });
const Hero = () => {
  return (
    <div className="wrapper section-padding h-[calc(100vh-5rem)]">
      <div className="grid grid-rows-8 h-full w-full items-center gap-5 relative">
        {/* FRIST ROW */}
        <div className="w-full h-[8rem] grid grid-cols-[30%_auto] gap-20">
          <div className="w-full h-full overflow-hidden rounded-[0px_50px_0px_50px]">
            <Image
              src="https://images.pexels.com/photos/3985360/pexels-photo-3985360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Crop woman in medical gloves removing cosmetic mask from face of female client in spa salon"
              width={640}
              height={360}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="w-full h-full flex items-center">
            <h2 className="headline-1 font-bold uppercase">Awaken Your</h2>
          </div>
        </div>

        <hr className="border-gray" />

        {/* SECOND ROW */}
        <div className="w-full  h-[8rem] grid grid-cols-[25%_auto_50%] gap-20">
          <div className="w-full h-full flex items-center">
            <h2
              className={cn(plafairDisplay.className, "headline-1 lowercase")}
            >
              Inner
            </h2>
          </div>
          <div className="h-full w-full overflow-hidden rounded-[50px_0px_50px_50px]">
            <Image
              src="https://images.pexels.com/photos/14256889/pexels-photo-14256889.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Girl in White Knit Cap Holding Yellow and White Snake"
              width={320}
              height={180}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="w-full h-full flex items-center">
            <h2 className="headline-1 font-bold uppercase">
              Goddess<span className="text-green">.</span>
            </h2>
          </div>
        </div>

        <hr className="border-gray" />

        {/* THIRD ROW */}
        <div className="grid h-[8rem] w-full grid-cols-[45%_auto] gap-20">
          <div className="flex h-full w-full items-center">
            <h2 className="headline-1 font-bold uppercase">Unveiling</h2>
          </div>
          <div className="h-full w-full overflow-hidden rounded-[0px_50px_0px_50px]">
            <Image
              src="https://images.pexels.com/photos/4156299/pexels-photo-4156299.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Woman in Bathtub With Water"
              width={1280}
              height={720}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <hr className="border-gray" />

        {/* FOURTH ROW */}
        <div className="w-full  h-[8rem] grid grid-cols-[35%_auto] gap-20">
          <div className="h-full w-full overflow-hidden rounded-[50px_50px_50px_0px]">
            <Image
              src="https://images.pexels.com/photos/17048909/pexels-photo-17048909/free-photo-of-photo-of-an-attractive-young-woman-with-tattoos-lying-on-a-blanket-in-nature.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Photo of an Attractive Young Woman with Tattoos Lying on a Blanket in Nature"
              width={1280}
              height={720}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="w-full h-full flex items-center">
            <h2 className="headline-1 font-bold uppercase">
              <span
                className={cn(
                  plafairDisplay.className,
                  "font-normal lowercase"
                )}
              >
                With
              </span>{" "}
              M
              <span
                className={cn(
                  plafairDisplay.className,
                  "font-normal lowercase text-pink"
                )}
              >
                i
              </span>
              mosa
              <span className="text-orange">.</span>
            </h2>
          </div>
        </div>

        <hr className="border-gray" />

        {/* PACKAGE BUTTON */}
        <Link
          href="/#packages"
          className="eq group absolute bottom-[13%] left-[37.5%] z-[1] flex h-40 w-40 items-center justify-center overflow-hidden rounded-full bg-dark/80 text-lg uppercase text-light shadow-2xl shadow-dark/50 backdrop-blur-lg hover:shadow-violet/50"
        >
          <p className="z-[3]">Packages</p>

          {/* FILLER 1*/}
          <span className="eq absolute bottom-0 left-0 right-0 top-full z-[2] h-1/2 w-full bg-violet group-hover:top-1/2"></span>

          {/* FILLER 2*/}
          <span className="eq absolute -top-full bottom-0 left-0 right-0 z-[2] h-1/2 w-full bg-violet group-hover:top-0"></span>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
