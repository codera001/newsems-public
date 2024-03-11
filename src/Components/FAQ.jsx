import { faq } from "../Components/faq/faq";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import GetText from "@/Components/GetText";
import useAlllangDataStore from "@/store/LangKeyStore";
import useLangStore from "@/store/LangStore";

const FAQ = () => {
  const { AlllangData } = useAlllangDataStore();
  const { langData } = useLangStore();

  const [activeIndex, setActiveIndex] = useState(0);

  function handleClick(index) {
    setActiveIndex(index === activeIndex ? -1 : index);
  }

  return (
    <section className="bg-color-bg_light py-10">
      <div className="mx-auto max-w-7xl px-5">
        <h1 className="mb-7 text-center text-2xl font-extrabold">
          {AlllangData ? (
            <GetText data={AlllangData} keys="Home10Text1" lang={langData} />
          ) : (
            <>Frequently Asked Questions</>
          )}
        </h1>
        <div className="mx-auto max-w-5xl space-y-6 rounded-lg">
          {faq.map((faqs, index) => (
            <div key={index}>
              <div className="accordion-faqs rounded-3xl bg-color-bg_primary-500 p-6 md:px-16">
                <div
                  className="accordion-title flex cursor-pointer justify-between text-xs font-bold sm:text-base md:text-xl"
                  onClick={() => handleClick(index)}
                >
                  {AlllangData ? (
                    <GetText
                      data={AlllangData}
                      keys={faqs.Qkey}
                      lang={langData}
                    />
                  ) : (
                    <>{faqs.question}</>
                  )}
                  {activeIndex === index ? (
                    <span className="pl-4">
                      <ChevronUpIcon className="h-6 w-6 font-extrabold" />
                    </span>
                  ) : (
                    <span className="pl-4">
                      <ChevronDownIcon className="h-6 w-6" />
                    </span>
                  )}
                </div>
                {activeIndex === index && (
                  <div className="accordion-content space-y-4 pt-2 text-xs sm:text-base md:pt-4 md:text-2xl">
                    <p>
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys={faqs.A1key}
                          lang={langData}
                        />
                      ) : (
                        <>{faqs.answer1}</>
                      )}
                    </p>
                    <p>
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys={faqs.A2key}
                          lang={langData}
                        />
                      ) : (
                        <>{faqs.answer2}</>
                      )}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
