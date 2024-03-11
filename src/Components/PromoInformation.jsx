import Image from "next/image";
import Mailbox from "@/assets/mailbox.png";
import {
  ClockIcon,
  EnvelopeIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";
import {
  ComputerDesktopIcon,
  GlobeAmericasIcon,
} from "@heroicons/react/24/solid";
import GetText from "@/Components/GetText";
import useAlllangDataStore from "@/store/LangKeyStore";
import useLangStore from "@/store/LangStore";

const PromoInformation = () => {
  const { AlllangData } = useAlllangDataStore();
  const { langData } = useLangStore();

  return (
    <section className="bg-color-bg_primary-500 pt-4 md:pt-10 lg:pb-20">
      <div className="mx-auto max-w-7xl lg:px-10">
        <div className="flex flex-col">
          <div className="lg:mb-10 lg:flex lg:items-center">
            <Image
              src={Mailbox}
              alt="test"
              className="hidden h-[350px] w-[350px] lg:flex"
            />
            <div>
              <h1 className="mx-auto mb-10 text-center font-extrabold md:w-3/4 md:text-2xl lg:w-4/5 lg:text-left">
                {AlllangData ? (
                  <GetText
                    data={AlllangData}
                    keys="Home6Text1"
                    lang={langData}
                  />
                ) : (
                  <>
                    You can buy a disposable phone number or rent one for up to
                    a month
                  </>
                )}
              </h1>
              <div className="flex h-28 items-baseline justify-between border-b border-blue-300 lg:h-0 lg:border-0">
                <div className="flex w-full justify-center border-r border-blue-300 px-2 lg:flex-col lg:justify-between lg:space-y-3 lg:border-0 lg:px-0">
                  <p className=" text-center text-base font-extrabold  md:text-xl lg:text-left">
                    {AlllangData ? (
                      <GetText
                        data={AlllangData}
                        keys="Home6Text2"
                        lang={langData}
                      />
                    ) : (
                      <>One-time number for sms</>
                    )}
                    <br />
                  </p>
                  <p className="hidden lg:flex lg:text-start">
                    {AlllangData ? (
                      <GetText
                        data={AlllangData}
                        keys="Home6Text3"
                        lang={langData}
                      />
                    ) : (
                      <>
                        Receive a one-time SMS to a virtual number from the one
                        website or application chosen when ordering.
                      </>
                    )}
                  </p>
                  <InformationCircleIcon className="h-6 w-6 text-blue-500 lg:hidden" />
                </div>
                <div className="flex w-full justify-center  lg:flex-col lg:justify-between lg:space-y-3">
                  <p className="text-base font-extrabold md:text-xl">
                    {AlllangData ? (
                      <GetText
                        data={AlllangData}
                        keys="Home6Text4"
                        lang={langData}
                      />
                    ) : (
                      <>Rent</>
                    )}
                  </p>
                  <p className="hidden lg:flex lg:text-start">
                    {AlllangData ? (
                      <GetText
                        data={AlllangData}
                        keys="Home6Text5"
                        lang={langData}
                      />
                    ) : (
                      <>
                        Rent a phone number to receive an unlimited number of
                        SMS from any website or app.
                      </>
                    )}
                  </p>
                  <InformationCircleIcon className="h-5 w-5 text-blue-500 lg:hidden" />
                </div>
              </div>
            </div>
          </div>
          <div className="px lg:grid lg:grid-cols-3 lg:pb-5">
            <div className="flex items-center justify-center space-x-1 text-sm">
              <ClockIcon className="h-6 w-6 text-blue-500" />
              <h1 className="font-bold text-blue-500 md:text-lg">
                {AlllangData ? (
                  <GetText
                    data={AlllangData}
                    keys="Home6Text6"
                    lang={langData}
                  />
                ) : (
                  <>Rent Duration</>
                )}
              </h1>
            </div>
            <div className="flex h-full justify-between border border-l-0 border-r-0 border-t-0 border-blue-300 lg:contents">
              <div className="border-r-3 flex h-full w-full border border-b-0 border-l-0 border-t-0 border-blue-300 px-1 lg:border-0">
                <p className="pl-2 text-center text-xs font-extrabold md:text-xl lg:pl-0">
                  {AlllangData ? (
                    <GetText
                      data={AlllangData}
                      keys="Home6Text10"
                      lang={langData}
                    />
                  ) : (
                    <>Up to 20 minutes</>
                  )}
                </p>
              </div>
              <div className="border-l-3 flex w-full items-center space-x-2 ">
                <p className="pl-4 text-center text-xs font-extrabold md:text-xl lg:pl-0">
                  {AlllangData ? (
                    <GetText
                      data={AlllangData}
                      keys="Home6Text14"
                      lang={langData}
                    />
                  ) : (
                    <>up to 90 days</>
                  )}
                </p>
              </div>
            </div>
          </div>
          <div className="lg:mb-5 lg:grid lg:grid-cols-3 lg:pb-5">
            <div className="mt-4 flex items-center justify-center space-x-1 text-sm">
              <EnvelopeIcon className="h-6 w-6 text-blue-500" />
              <h1 className="mb-1 font-bold text-blue-500 md:text-lg lg:mb-0">
                {AlllangData ? (
                  <GetText
                    data={AlllangData}
                    keys="Home6Text7"
                    lang={langData}
                  />
                ) : (
                  <>You can receive SMS</>
                )}
              </h1>
            </div>
            <div className="flex h-full items-baseline justify-between border border-l-0 border-r-0 border-t-0 border-blue-300 lg:contents">
              <div className="border-r-3 flex h-full w-full border border-b-0 border-l-0 border-t-0 border-blue-300 px-1 lg:border-0">
                <p className="pb-3 text-center text-xs font-extrabold md:w-4/5 md:text-xl lg:w-full lg:pb-0 lg:text-left">
                  {AlllangData ? (
                    <GetText
                      data={AlllangData}
                      keys="Home6Text11"
                      lang={langData}
                    />
                  ) : (
                    <>
                      From the one site/application you selected when ordering
                    </>
                  )}
                </p>
              </div>
              <div className="border-l-3 flex w-full items-center space-x-2 ">
                <p className="pl-4 text-center text-xs font-extrabold md:text-xl lg:pl-0">
                  {AlllangData ? (
                    <GetText
                      data={AlllangData}
                      keys="Home6Text15"
                      lang={langData}
                    />
                  ) : (
                    <>Unlimited</>
                  )}
                </p>
              </div>
            </div>
          </div>
          <div className="lg:grid lg:grid-cols-3 lg:pb-5">
            <div className="mt-4 flex items-center justify-center space-x-1 text-sm lg:mt-0">
              <GlobeAmericasIcon className="h-6 w-6 text-blue-500" />
              <h1 className="mb-2 font-bold text-blue-500 md:text-lg lg:mb-0">
                {AlllangData ? (
                  <GetText
                    data={AlllangData}
                    keys="Home6Text8"
                    lang={langData}
                  />
                ) : (
                  <>Number of Countries</>
                )}
              </h1>
            </div>
            <div className="flex h-10 items-baseline justify-between border border-l-0 border-r-0 border-t-0 border-blue-300 lg:contents lg:flex-row">
              <div className="border-r-3 flex h-full w-full border border-b-0 border-l-0 border-t-0 border-blue-300 px-1 lg:border-0">
                <p className="pl-20 text-center text-xs font-extrabold md:text-xl lg:pl-0">
                  {AlllangData ? (
                    <GetText
                      data={AlllangData}
                      keys="Home6Text2"
                      lang={langData}
                    />
                  ) : (
                    <>200+</>
                  )}
                </p>
              </div>
              <div className="border-l-3 flex w-full items-center space-x-2 ">
                <p className="pl-4 text-center text-xs font-extrabold md:text-xl lg:pl-0">
                  {AlllangData ? (
                    <GetText
                      data={AlllangData}
                      keys="Home6Text16"
                      lang={langData}
                    />
                  ) : (
                    <>16</>
                  )}
                </p>
              </div>
            </div>
          </div>
          <div className="lg:grid lg:grid-cols-3 lg:pb-5">
            <div className="mt-4 flex items-center justify-center text-sm lg:mt-0">
              <ComputerDesktopIcon className="h-6 w-6 text-blue-500" />
              <h1 className="font-bold text-blue-500 md:text-lg">
                {AlllangData ? (
                  <GetText
                    data={AlllangData}
                    keys="Home6Text9"
                    lang={langData}
                  />
                ) : (
                  <>Number of services</>
                )}
              </h1>
            </div>
            <div className="flex h-full items-baseline border border-l-0 border-r-0 border-t-0 border-blue-300 lg:contents">
              <div className="border-r-3 flex w-full border border-b-0 border-l-0 border-t-0 border-blue-300 px-1 lg:border-0">
                <p className="pl-20 text-center text-xs font-extrabold md:text-xl lg:pl-0">
                  {AlllangData ? (
                    <GetText
                      data={AlllangData}
                      keys="Home6Text13"
                      lang={langData}
                    />
                  ) : (
                    <>1000+</>
                  )}
                </p>
              </div>
              <div className="border-l-3 flex w-full items-center space-x-2 ">
                <p className="pl-4 text-center text-xs font-extrabold md:text-xl lg:pl-0">
                  {AlllangData ? (
                    <GetText
                      data={AlllangData}
                      keys="Home6Text17"
                      lang={langData}
                    />
                  ) : (
                    <>All possible services</>
                  )}
                </p>
              </div>
            </div>
          </div>
          <div className="width-full my-4 flex items-center justify-around text-center text-[0.5rem] font-extrabold text-color-white md:text-base lg:grid lg:grid-cols-3 lg:pb-5">
            <div className="relative hidden lg:block">
              <span className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 bg-[url('../assets/images/arrow.svg')] bg-contain bg-[50%] bg-no-repeat"></span>
            </div>
            <div className="text-left">
              <button className="group relative w-full overflow-hidden rounded-full bg-color-primary px-4 py-2 md:py-4 lg:w-2/3">
                <span className="absolute left-0 top-0 mt-20 h-20 w-full rounded-3xl bg-color-primary_black transition-all duration-300 ease-in-out group-hover:-mt-4"></span>
                <span className="relative">
                  {AlllangData ? (
                    <GetText
                      data={AlllangData}
                      keys="Home6Button1"
                      lang={langData}
                    />
                  ) : (
                    <>Buy a one-time number</>
                  )}
                </span>
              </button>
            </div>
            <div className="text-left">
              <button className="group relative w-full overflow-hidden rounded-full bg-color-primary_black px-4 py-2 md:py-4 lg:w-2/3">
                <span className="absolute left-0 top-0 mt-20 h-20 w-full rounded-3xl bg-color-primary transition-all duration-300 ease-in-out group-hover:-mt-4"></span>
                <span className="relative">
                  {AlllangData ? (
                    <GetText
                      data={AlllangData}
                      keys="Home6Button2"
                      lang={langData}
                    />
                  ) : (
                    <>Rent Number</>
                  )}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoInformation;
