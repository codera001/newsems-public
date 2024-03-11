import Image from "next/image";
import Landline from "@/assets/247-support.png";
import Hand from "@/assets/group-chat.png";
import Robot from "@/assets/telegram-bot.png";
import Windows from "@/assets/desktop-sms.png";
import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import GetText from "@/Components/GetText";
import useAlllangDataStore from "@/store/LangKeyStore";
import useLangStore from "@/store/LangStore";

const Advantages = () => {
  const { AlllangData } = useAlllangDataStore();
  const { langData } = useLangStore();
  return (
    <div className="bg-color-bg_light px-5 py-20">
      <h1 className="mb-10 text-center text-2xl font-extrabold">
        {AlllangData ? (
          <GetText data={AlllangData} keys="Home8Text1" lang={langData} />
        ) : (
          <>Online SMS receive service for your convenience</>
        )}
      </h1>
      <div className="mx-auto grid max-w-5xl grid-cols-1 place-items-center space-y-6 md:grid-cols-2 md:space-y-0 lg:grid-cols-4">
        <div className="grid place-items-center space-y-4 lg:place-items-start">
          <Image src={Landline} width={100} alt="LandLine" className="" />
          <h2 className="mb-5 text-center text-xl font-bold lg:text-left">
            {AlllangData ? (
              <GetText
                data={AlllangData}
                keys="Home8Card1Text1"
                lang={langData}
              />
            ) : (
              <>24/7 Support</>
            )}
          </h2>
          <p className="mb-1 justify-self-center text-center text-sm font-medium md:w-4/6 lg:w-full lg:text-left">
            {AlllangData ? (
              <GetText
                data={AlllangData}
                keys="Home8Card2Text2"
                lang={langData}
              />
            ) : (
              <>Any questions? Our manager will help to understand!</>
            )}
          </p>
          <Link
            href={"/contact"}
            className="group flex items-center justify-center font-extrabold text-color-primary hover:opacity-[0.8] md:w-4/5 lg:justify-start"
          >
            {AlllangData ? (
              <GetText
                data={AlllangData}
                keys="Home8Card1Text3"
                lang={langData}
              />
            ) : (
              <>Ask a Question</>
            )}
            <span className="relative -top-2.5 ml-8">
              <ChevronRightIcon
                width={20}
                className="absolute top-0 group-hover:translate-x-1"
              />
            </span>
          </Link>
        </div>
        <div className="grid place-items-center space-y-4 lg:place-items-start">
          <Image src={Robot} width={100} alt="LandLine" />
          <h2 className="mb-5 text-center text-xl font-bold lg:text-left">
            {AlllangData ? (
              <GetText
                data={AlllangData}
                keys="Home8Card2Text1"
                lang={langData}
              />
            ) : (
              <>Telegram bot</>
            )}
          </h2>
          <p className="mb-1 justify-self-center text-center text-sm font-medium md:w-4/6 lg:w-full lg:text-left">
            {AlllangData ? (
              <GetText
                data={AlllangData}
                keys="Home8Card2Text2"
                lang={langData}
              />
            ) : (
              <>Receive SMS through the service directly in Telegram!</>
            )}
          </p>
          <Link
            href={"/contact"}
            className="group flex items-center justify-center font-extrabold text-color-primary_darken hover:opacity-[0.8] md:w-4/5 lg:justify-start"
          >
            {AlllangData ? (
              <GetText
                data={AlllangData}
                keys="Home8Card2Text3"
                lang={langData}
              />
            ) : (
              <>Connect</>
            )}
            <span className="relative -top-2.5 ml-8">
              <ChevronRightIcon
                width={20}
                className="absolute top-0 group-hover:translate-x-1"
              />
            </span>
          </Link>
        </div>
        <div className="grid place-items-center space-y-4 lg:place-items-start">
          <Image src={Hand} width={100} alt="LandLine" />
          <h2 className="mb-5 text-center text-xl font-bold lg:text-left">
            {AlllangData ? (
              <GetText
                data={AlllangData}
                keys="Home8Card3Text1"
                lang={langData}
              />
            ) : (
              <>Group Chat</>
            )}
          </h2>
          <p className="mb-1 justify-self-center text-center text-sm font-medium md:w-4/6 lg:w-full lg:text-left">
            {AlllangData ? (
              <GetText
                data={AlllangData}
                keys="Home8Card3Text2"
                lang={langData}
              />
            ) : (
              <>We&apos;ve created a special Telegrem group chat for users</>
            )}
          </p>
          <Link
            href={"/contact"}
            className="group flex items-center justify-center font-extrabold text-color-primary hover:opacity-[0.8] md:w-4/5 lg:justify-start"
          >
            {AlllangData ? (
              <GetText
                data={AlllangData}
                keys="Home8Card3Text3"
                lang={langData}
              />
            ) : (
              <>Join</>
            )}
            <span className="relative -top-2.5 ml-8">
              <ChevronRightIcon
                width={20}
                className="absolute top-0 group-hover:translate-x-1"
              />
            </span>
          </Link>
        </div>
        <div className="grid place-items-center space-y-4 lg:place-items-start">
          <Image
            src={Windows}
            width={100}
            alt="LandLine"
            // className="h-52 w-48 justify-self-center object-contain"
          />
          <h2 className="mb-5 text-center text-xl font-bold lg:text-left">
            {AlllangData ? (
              <GetText
                data={AlllangData}
                keys="Home8Card4Text1"
                lang={langData}
              />
            ) : (
              <>Get SMS on desktop!</>
            )}
          </h2>
          <p className="mb-1 justify-self-center text-center text-sm font-medium md:w-4/6 lg:w-full lg:text-left">
            {AlllangData ? (
              <GetText
                data={AlllangData}
                keys="Home8Card4Text2"
                lang={langData}
              />
            ) : (
              <>
                We made a special solution for those who want to use PC version
                of Diginums!
              </>
            )}
          </p>
          <Link
            href={"/contact"}
            className="group flex items-center justify-center font-extrabold text-color-primary_darken hover:opacity-[0.8] md:w-4/5 lg:justify-start"
          >
            {AlllangData ? (
              <GetText
                data={AlllangData}
                keys="Home8Card4Text3"
                lang={langData}
              />
            ) : (
              <>Download</>
            )}
            <span className="relative -top-2.5 ml-8">
              <ChevronRightIcon
                width={20}
                className="absolute top-0 group-hover:translate-x-1"
              />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
