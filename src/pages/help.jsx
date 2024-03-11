import Link from "next/link";
import fast1 from "../assets/images/fast1.png";
import fast2 from "../assets/images/fast2.png";
import fast3 from "../assets/images/fast3.png";
import Image from "next/image";
import Accordion from "@/Components/accordion/accordion";
import recharge from "../assets/images/recharge_en.webp";
import payment from "../assets/images/payment_en.webp";
import receive from "../assets/images/receive_en.webp";
import receive2 from "../assets/images/receive_2_en.webp";
import getSMS from "../assets/images/getSms_1_en.webp";
import getSMS2 from "../assets/images/getSms_2_en.webp";
import getSMSNew from "../assets/images/getSmsNew_en.webp";
import getSmsCode from "../assets/images/getSmsCode_en.webp";
import getSmsCode2 from "../assets/images/getSmsCode_2_en.webp";
import howRent from "../assets/images/howRent_en.webp";
import howRent2 from "../assets/images/howRent_2_en.webp";
import stars from "../assets/random-shapes/christmas-stars.png";
import hashtag from "../assets/random-shapes/hashtag.png";
import GetText from "@/Components/GetText";
import useAlllangDataStore from "@/store/LangKeyStore";
import useLangStore from "@/store/LangStore";

function Help() {
  const { AlllangData } = useAlllangDataStore();
  const { langData } = useLangStore();

  const scrollTo = (id) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "center" });
  };
  return (
    <section className="mt-14 pb-20">
      <div className="bg-color-bg_light pb-24">
        <div className="relative mx-0 space-y-4 bg-color-bg_primary-500 px-4 sm:space-y-8 sm:pb-12 lg:pt-0">
          <Image
            src={stars}
            alt="stars"
            width={80}
            className="absolute right-1/4 top-10 hidden lg:flex"
          />
          <Image
            src={hashtag}
            width={50}
            alt="hashtag"
            className="absolute left-28 top-28 hidden lg:flex"
          />
          <h1 className="pt-24 text-center text-2xl font-extrabold sm:text-4xl">
            {AlllangData ? (
              <GetText data={AlllangData} keys="Help1Text1" lang={langData} />
            ) : (
              "Help Section"
            )}
          </h1>
          <p className="pb-32 text-center text-sm sm:text-xl md:mx-auto md:w-10/12 md:pb-16 md:text-2xl lg:max-w-[70%]">
            {AlllangData ? (
              <GetText data={AlllangData} keys="Help1Text2" lang={langData} />
            ) : (
              "Here you can find instructions on how to use Diginums service and answers to the most common questions"
            )}
          </p>
        </div>
        <div className="width-full mx-auto -mt-24 flex max-w-5xl flex-col text-center md:-mt-16 md:flex-row md:flex-wrap md:justify-center md:pb-16 lg:flex-nowrap">
          <div className="b-0 mb-8 basis-full px-3 md:basis-1/2 lg:basis-1/3">
            <div
              onClick={() => scrollTo("one-time")}
              className="block rounded-3xl bg-color-bg_light p-8 drop-shadow-3xl hover:drop-shadow-2xl"
            >
              <Image
                src={fast1}
                width={200}
                height={200}
                alt=""
                className="inline"
              />
              <h2 className="text-xs font-extrabold text-color-primary sm:text-lg">
                {AlllangData ? (
                  <GetText
                    data={AlllangData}
                    keys="Help1Text3"
                    lang={langData}
                  />
                ) : (
                  "How to get a number for one-time sign up?"
                )}
              </h2>
            </div>
          </div>
          <div className="mb-8 basis-full px-3 md:basis-1/2 lg:basis-1/3">
            <div
              onClick={() => scrollTo("bought")}
              className="block rounded-3xl bg-color-bg_light p-8 drop-shadow-3xl hover:drop-shadow-2xl"
            >
              <Image
                src={fast2}
                alt=""
                width={200}
                height={200}
                className="inline"
              />
              <h2 className="text-xs font-extrabold text-color-primary sm:text-lg">
                {AlllangData ? (
                  <GetText
                    data={AlllangData}
                    keys="Help1Text4"
                    lang={langData}
                  />
                ) : (
                  "How to get sms to a bought number?"
                )}
              </h2>
            </div>
          </div>
          <div className="basis-full px-3 md:basis-1/2 lg:basis-1/3">
            <div
              onClick={() => scrollTo("long-term")}
              className="block rounded-3xl bg-color-bg_light p-8 drop-shadow-3xl hover:drop-shadow-2xl"
            >
              <Image
                src={fast3}
                width={200}
                height={200}
                alt=""
                className="inline"
              />
              <h2 className="text-xs font-extrabold text-color-primary sm:text-lg">
                {AlllangData ? (
                  <GetText
                    data={AlllangData}
                    keys="Help1Text5"
                    lang={langData}
                  />
                ) : (
                  "How to get a long-term number?"
                )}
              </h2>
            </div>
          </div>
        </div>
        {/* Popular questions */}
        <div className="mx-auto mt-10 max-w-7xl lg:mx-auto">
          <h1 className="mb-7 text-center text-xl font-extrabold md:pb-10 md:text-2xl">
            {AlllangData ? (
              <GetText data={AlllangData} keys="Help2Text1" lang={langData} />
            ) : (
              "Popular Questions"
            )}
          </h1>
          <div className="mx-8">
            <Accordion />
          </div>
        </div>
      </div>
      {/* How-to section */}
      <div className="px-4 pt-10">
        <div>
          <h2 className="pb-10 text-center text-lg font-extrabold sm:text-2xl md:text-3xl">
            {AlllangData ? (
              <GetText data={AlllangData} keys="Help3Text1" lang={langData} />
            ) : (
              "Instructions for using the service"
            )}
          </h2>
        </div>
        <div className="flex max-w-6xl items-start justify-between md:mx-auto md:px-8">
          {/* side links */}
          <aside className="hidden max-w-[20rem] flex-1 md:block">
            <ul className="sticky-top sticky space-y-2">
              <li>
                <p
                  onClick={() => scrollTo("signup")}
                  className="text-sm text-color-primary"
                >
                  {AlllangData ? (
                    <GetText
                      data={AlllangData}
                      keys="Help3Text2"
                      lang={langData}
                    />
                  ) : (
                    "Sign Up"
                  )}
                </p>
              </li>
              <li>
                <p
                  onClick={() => scrollTo("topup")}
                  className="text-sm text-color-primary"
                >
                  {AlllangData ? (
                    <GetText
                      data={AlllangData}
                      keys="Help3Text3"
                      lang={langData}
                    />
                  ) : (
                    "How do I top up my balance?"
                  )}
                </p>
              </li>
              <li>
                <p
                  onClick={() => scrollTo("one-time")}
                  className="text-sm text-color-primary"
                >
                  {AlllangData ? (
                    <GetText
                      data={AlllangData}
                      keys="Help3Text4"
                      lang={langData}
                    />
                  ) : (
                    "Getting a registration number"
                  )}
                </p>
              </li>
              <li>
                <p
                  onClick={() => scrollTo("bought")}
                  className="text-sm text-color-primary"
                >
                  {AlllangData ? (
                    <GetText
                      data={AlllangData}
                      keys="Help3Text5"
                      lang={langData}
                    />
                  ) : (
                    "How do I get an SMS to a purchased number?"
                  )}
                </p>
              </li>
              <li>
                <p
                  onClick={() => scrollTo("long-term")}
                  className="text-sm text-color-primary"
                >
                  {AlllangData ? (
                    <GetText
                      data={AlllangData}
                      keys="Help3Text6"
                      lang={langData}
                    />
                  ) : (
                    "How to rent a number for a long time?"
                  )}
                </p>
              </li>
            </ul>
          </aside>
          {/* How-to instructions */}
          <div className="md:flex-1">
            <h3
              id="signup"
              className="text-center text-xs font-extrabold sm:text-lg md:text-left"
            >
              {AlllangData ? (
                <GetText data={AlllangData} keys="Help3Text7" lang={langData} />
              ) : (
                "How do I register on the site?"
              )}
            </h3>
            <p className="my-2 text-[10px] sm:text-sm">
              {AlllangData ? (
                <GetText data={AlllangData} keys="Help3Text8" lang={langData} />
              ) : (
                "To register for the service - go to the"
              )}
              <Link href="/signup" className="text-color-primary underline">
                <span>
                  {AlllangData ? (
                    <GetText
                      data={AlllangData}
                      keys="Help3Text9"
                      lang={langData}
                    />
                  ) : (
                    "registration page"
                  )}
                </span>
              </Link>
              {AlllangData ? (
                <GetText
                  data={AlllangData}
                  keys="Help3Text10"
                  lang={langData}
                />
              ) : (
                "and fill in the required fields by entering your valid email address or use a quick registration via social networks."
              )}
            </p>
            <h3
              id="topup"
              className="mb-2 text-center text-xs font-extrabold sm:text-lg md:text-left"
            >
              {AlllangData ? (
                <GetText
                  data={AlllangData}
                  keys="Help3Text11"
                  lang={langData}
                />
              ) : (
                "How do I top up my balance?"
              )}
            </h3>
            <ol
              role="list"
              className="list-decimal space-y-4 pl-8 text-[10px] sm:text-sm"
            >
              <li>
                <p className="mb-2">
                  {AlllangData ? (
                    <GetText
                      data={AlllangData}
                      keys="Help3Text12"
                      lang={langData}
                    />
                  ) : (
                    "In"
                  )}{" "}
                  <strong>
                    {AlllangData ? (
                      <GetText
                        data={AlllangData}
                        keys="Help3Text13"
                        lang={langData}
                      />
                    ) : (
                      "the top menu"
                    )}
                  </strong>
                  {AlllangData ? (
                    <GetText
                      data={AlllangData}
                      keys="Help3Text14"
                      lang={langData}
                    />
                  ) : (
                    <>
                      of the site click the button &quot;Replenish&quot;. This
                      will take you to the top-up section
                    </>
                  )}
                </p>
                <picture>
                  <Image src={recharge} alt="" className="h-auto" />
                </picture>
              </li>
              <li>
                <p className="mb-2">
                  {AlllangData ? (
                    <GetText
                      data={AlllangData}
                      keys="Help3Text15"
                      lang={langData}
                    />
                  ) : (
                    <>
                      Select the method of payment and specify the amount of
                      recharge (you can choose one of the presented options or
                      specify at your discretion), then press the
                      &apos;Pay&apos; button.
                    </>
                  )}
                </p>
                <picture>
                  <Image src={payment} alt="" className="h-auto" />
                </picture>
              </li>
              <li>
                <p className="mb-2">
                  {AlllangData ? (
                    <GetText
                      data={AlllangData}
                      keys="Help3Text16"
                      lang={langData}
                    />
                  ) : (
                    "To pay (enter your card details or other data required by the system) you will be redirected to the page of the payment_en system. If this does not happen, click continue.."
                  )}
                </p>
                <p>
                  <strong>
                    {AlllangData ? (
                      <GetText
                        data={AlllangData}
                        keys="Help3Text17"
                        lang={langData}
                      />
                    ) : (
                      " After the funds are credited, you will be able to see the account balance directly in your personal cabinet."
                    )}
                  </strong>
                </p>
              </li>
            </ol>

            <h3
              id="one-time"
              className="my-4 text-center text-xs font-extrabold sm:text-lg md:text-left"
            >
              {AlllangData ? (
                <GetText
                  data={AlllangData}
                  keys="Help3Text18"
                  lang={langData}
                />
              ) : (
                "How do I get a one-time registration number?"
              )}
            </h3>
            <ol className="list-decimal space-y-4 pl-8 text-[10px] sm:text-sm">
              <li>
                <p className="mb-2">
                  {AlllangData ? (
                    <GetText
                      data={AlllangData}
                      keys="Help3Text19"
                      lang={langData}
                    />
                  ) : (
                    "On the main page, select the,"
                  )}
                  <Link href="" className="text-color-primary underline">
                    {AlllangData ? (
                      <GetText
                        data={AlllangData}
                        keys="Help3Text19b"
                        lang={langData}
                      />
                    ) : (
                      "country and service"
                    )}
                  </Link>
                  {AlllangData ? (
                    <GetText
                      data={AlllangData}
                      keys="Help3Text20"
                      lang={langData}
                    />
                  ) : (
                    "where you want to pass the SMS confirmation."
                  )}
                </p>
                <picture>
                  <Image src={receive} alt="" className="h-auto" />
                </picture>
              </li>
              <li>
                <p className="mb-2">
                  {AlllangData ? (
                    <GetText
                      data={AlllangData}
                      keys="Help3Text21"
                      lang={langData}
                    />
                  ) : (
                    <>
                      To but virtual nuber, click on the &quot;Buy SMS&quot;
                      button in front of the selected service.
                    </>
                  )}
                </p>
                <picture>
                  <Image src={receive2} alt="" />
                </picture>
                <p className="mt-2">
                  <b>
                    {AlllangData ? (
                      <GetText
                        data={AlllangData}
                        keys="Help3Text22"
                        lang={langData}
                      />
                    ) : (
                      "The purchased virtual number will be automatically added to your personal Diginums account."
                    )}
                  </b>
                </p>
              </li>
            </ol>

            <h3
              id="bought"
              className="my-4 text-center text-xs font-extrabold sm:text-lg md:text-left"
            >
              {AlllangData ? (
                <GetText
                  data={AlllangData}
                  keys="Help3Text23"
                  lang={langData}
                />
              ) : (
                "How do I get an SMS to a purchased number?"
              )}
            </h3>
            <ol className="list-decimal space-y-4 pl-8 text-[10px] sm:text-sm">
              <li>
                <p className="mb-2">
                  {AlllangData ? (
                    <GetText
                      data={AlllangData}
                      keys="Help3Text24"
                      lang={langData}
                    />
                  ) : (
                    "Copy the number"
                  )}
                </p>
                <picture>
                  <Image src={getSMS} alt="" />
                </picture>
              </li>
              <li>
                <p className="mb-2">
                  {AlllangData ? (
                    <GetText
                      data={AlllangData}
                      keys="Help3Text25"
                      lang={langData}
                    />
                  ) : (
                    <>
                      Specify the number when registering with the selected
                      service (Telegram is shown in the example) and click
                      &quot;Continue&quot;.
                    </>
                  )}
                </p>
                <picture>
                  <Image src={getSMS2} alt="" />
                </picture>
              </li>
              <li>
                <p className="mb-2">
                  {AlllangData ? (
                    <GetText
                      data={AlllangData}
                      keys="Help3Text26"
                      lang={langData}
                    />
                  ) : (
                    "Go back to your personal Diginums cabinet and press the"
                  )}
                  <strong>
                    {AlllangData ? (
                      <GetText
                        data={AlllangData}
                        keys="Help3Text27"
                        lang={langData}
                      />
                    ) : (
                      "Get SMS"
                    )}
                  </strong>
                  {AlllangData ? (
                    <GetText
                      data={AlllangData}
                      keys="Help3Text28"
                      lang={langData}
                    />
                  ) : (
                    "button. If the number can not be used in this service or you have changed your mind to use it, you can cancel the number by clicking on the button"
                  )}{" "}
                  <strong>
                    {AlllangData ? (
                      <GetText
                        data={AlllangData}
                        keys="Help3Text29"
                        lang={langData}
                      />
                    ) : (
                      <>&quot;Cancel activation&quot;</>
                    )}
                  </strong>
                </p>
                <Image src={getSMSNew} alt="" />
                <p className="my-2">
                  <b>
                    {AlllangData ? (
                      <GetText
                        data={AlllangData}
                        keys="Help3Text30"
                        lang={langData}
                      />
                    ) : (
                      <>
                        When the verification code is received, you can see it
                        in the &quot;SMS&quot; field
                      </>
                    )}
                  </b>
                </p>
                <Image src={getSmsCode} alt="" />
              </li>
              <li>
                <p className="mb-2">
                  {AlllangData ? (
                    <GetText
                      data={AlllangData}
                      keys="Help3Text31"
                      lang={langData}
                    />
                  ) : (
                    "Enter the confirmation code from your Telegram SMS and click CONTINUE to complete the registration."
                  )}
                </p>
                <Image src={getSmsCode2} alt="" />
              </li>
            </ol>

            <h3
              id="long-term"
              className="my-4 text-center text-xs font-extrabold sm:text-lg md:text-left"
            >
              {AlllangData ? (
                <GetText
                  data={AlllangData}
                  keys="Help3Text32"
                  lang={langData}
                />
              ) : (
                "How to rent a number for a very long time?"
              )}
            </h3>
            <p className="mb-2 text-[10px] sm:text-sm">
              {AlllangData ? (
                <GetText
                  data={AlllangData}
                  keys="Help3Text33"
                  lang={langData}
                />
              ) : (
                "1. To rent a number, go to the"
              )}
              <Link href="/rent" className="text-color-primary underline">
                {AlllangData ? (
                  <GetText
                    data={AlllangData}
                    keys="Help3Text34"
                    lang={langData}
                  />
                ) : (
                  <>&quot;Rent Number&quot;</>
                )}
              </Link>
              {AlllangData ? (
                <GetText
                  data={AlllangData}
                  keys="Help3Text36"
                  lang={langData}
                />
              ) : (
                "tab."
              )}
              <br />
            </p>
            <picture>
              <Image src={howRent} alt="" />
            </picture>
            <p className="my-4 text-[10px] sm:text-sm">
              {AlllangData ? (
                <GetText
                  data={AlllangData}
                  keys="Help3Text37"
                  lang={langData}
                />
              ) : (
                <>
                  2. Specify the desired country and rental period (the minimum
                  rental period is 1 hour, and the maximum is a month). When all
                  the necessary information is specified, press the
                  &quot;Rent&quot; button.
                </>
              )}
              <br />
            </p>
            <picture>
              <Image src={howRent2} alt="" />
            </picture>
            <p className="my-2 text-[10px] sm:text-sm">
              {AlllangData ? (
                <GetText
                  data={AlllangData}
                  keys="Help3Text38"
                  lang={langData}
                />
              ) : (
                "3. The rented number will be added to your personal cabinet, where you can view the received SMS or end the rental at any time."
              )}

              <br />
            </p>
            <p className="mb-2 text-[10px] sm:text-sm">
              <strong>
                {AlllangData ? (
                  <GetText
                    data={AlllangData}
                    keys="Help3Text39"
                    lang={langData}
                  />
                ) : (
                  "Attention!"
                )}
              </strong>
              {AlllangData ? (
                <GetText
                  data={AlllangData}
                  keys="Help3Text40"
                  lang={langData}
                />
              ) : (
                "You can cancel a rented number only if no more than 20 minutes have passed since you rented it and you have not received any SMS."
              )}
            </p>
            <p className="mb-2 text-[10px] sm:text-sm">
              {AlllangData ? (
                <GetText
                  data={AlllangData}
                  keys="Help3Text41"
                  lang={langData}
                />
              ) : (
                "For any questions you may have when reviewing Diginums, there is a"
              )}{" "}
              <Link
                href="https://Diginums.com/feedback"
                className="text-color-primary underline"
              >
                <span>
                  {AlllangData ? (
                    <GetText
                      data={AlllangData}
                      keys="Help3Text42"
                      lang={langData}
                    />
                  ) : (
                    "feedback form"
                  )}
                </span>
              </Link>
              {AlllangData ? (
                <GetText
                  data={AlllangData}
                  keys="Help3Text43"
                  lang={langData}
                />
              ) : (
                "open to you. We try to respond promptly to help you with your problem."
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Help;
