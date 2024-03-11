import Tablet from "@/assets/list-pic.png";
import Image from "next/image";
import GetText from "@/Components/GetText";
import useAlllangDataStore from "@/store/LangKeyStore";
import useLangStore from "@/store/LangStore";

const HeroSection = () => {
  const { AlllangData } = useAlllangDataStore();
  const { langData } = useLangStore();

  return (
    <div className="py-8 md:px-5">
      <div className="flex items-center justify-between gap-12">
        <div className=" hidden lg:block">
          <Image src={Tablet} alt="Tablet Pic" className="" />
        </div>
        <div className="md:w-1/2">
          <h2 className=" text-justify font-extrabold md:text-2xl">
            {AlllangData ? (
              <GetText data={AlllangData} keys="Home3Text1" lang={langData} />
            ) : (
              <>
                Diginums - service for private registration at online resources
              </>
            )}
          </h2>
          <p className="mt-6 text-justify font-normal md:mt-14 md:text-lg">
            {AlllangData ? (
              <GetText data={AlllangData} keys="Home3Text2" lang={langData} />
            ) : (
              <>
                We give you the opportunity to anonymously use the phone number
                online to receive SMS to register on sites and application.
              </>
            )}
          </p>
          <p className="mt-4 text-justify font-normal md:text-lg">
            {AlllangData ? (
              <GetText data={AlllangData} keys="Home3Text3" lang={langData} />
            ) : (
              <>
                At the same time, you can be sure that no one but you will have
                access to it.
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
