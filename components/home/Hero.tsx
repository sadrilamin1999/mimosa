import Image from "next/image";

const Hero = () => {
  return (
    <div className="wrapper section-padding h-[calc(100vh-5rem)]">
      <div className="grid-rows-8 grid h-full w-full items-center gap-5">
        {/* FRIST ROW */}
        <div className="w-full h-[8rem] grid grid-cols-[30%_auto] gap-20">
          <div className="w-full h-full overflow-hidden rounded-[0px_50px_0px_50px]">
            <Image
              src="https://images.pexels.com/photos/9430980/pexels-photo-9430980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="aestathic women"
              width={640}
              height={360}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-full h-full flex items-center">
            <h2 className="text-8xl uppercase font-semibold">
              Lorem ipsum ipsum
            </h2>
          </div>
        </div>
        <hr className="border-gray" />
        {/* SECOND ROW */}
        <div className="w-full  h-[8rem] grid grid-cols-[25%_auto_50%] gap-20">
          <div className="w-full h-full flex items-center">
            <h2 className="text-8xl uppercase font-semibold">Lorems</h2>
          </div>
          <div className="w-full h-full overflow-hidden rounded-[50px_0px_50px_50px]">
            <Image
              src="https://images.pexels.com/photos/9430980/pexels-photo-9430980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="aestathic women"
              width={320}
              height={180}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full h-full flex items-center">
            <h2 className="text-8xl uppercase font-semibold">Lorems lorem</h2>
          </div>
        </div>
        <hr className="border-gray" />
        {/* THIRD ROW */}
        <div className="w-full  h-[8rem] grid grid-cols-[40%_auto] gap-20">
          <div className="w-full h-full flex items-center">
            <h2 className="text-8xl uppercase font-semibold">Lorems lor</h2>
          </div>
          <div className="w-full h-full overflow-hidden rounded-[0px_50px_0px_50px]">
            <Image
              src="https://images.pexels.com/photos/9430980/pexels-photo-9430980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="aestathic women"
              width={1280}
              height={720}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <hr className="border-gray" />
        {/* FOURTH ROW */}
        <div className="w-full  h-[8rem] grid grid-cols-[35%_auto] gap-20">
          <div className="w-full h-full overflow-hidden rounded-[50px_50px_50px_0px]">
            <Image
              src="https://images.pexels.com/photos/9430980/pexels-photo-9430980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="aestathic women"
              width={1280}
              height={720}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full h-full flex items-center">
            <h2 className="text-8xl uppercase font-semibold">
              Lorems lorem ips
            </h2>
          </div>
        </div>
        <hr className="border-gray" />
      </div>
    </div>
  );
};

export default Hero;
