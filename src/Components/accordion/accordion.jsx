import { useState } from "react";
import { items } from "./accordionItem";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import GetText from "@/Components/GetText";
import useAlllangDataStore from "@/store/LangKeyStore";
import useLangStore from "@/store/LangStore";

const Accordion = () => {
  const { AlllangData } = useAlllangDataStore();
  const { langData } = useLangStore();
  const [activeIndex, setActiveIndex] = useState(0);
  function handleClick(index) {
    setActiveIndex(index === activeIndex ? -1 : index);
  }

  return (
    <section className="mx-auto max-w-2xl space-y-12 rounded-lg bg-color-bg_primary-500 p-6 md:rounded-3xl md:px-16 lg:max-w-4xl">
      {items.map((item, index) => (
        <div key={index}>
          <div className="accordion-item">
            <div
              className="accordion-title flex cursor-pointer justify-between text-xs font-bold sm:text-base md:text-xl"
              onClick={() => handleClick(index)}
            >
              {AlllangData ? (
                <GetText data={AlllangData} keys={item.Qkey} lang={langData} />
              ) : (
                <>{item.title}</>
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
              <div className="accordion-content pt-2 text-xs sm:text-base md:pt-4 md:text-2xl">
                {AlllangData ? (
                  <GetText
                    data={AlllangData}
                    keys={item.Akey}
                    lang={langData}
                  />
                ) : (
                  <>{item.content}</>
                )}
              </div>
            )}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Accordion;
