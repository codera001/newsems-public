import Image from "next/image";
const Logo = require("../assets/BlueLogo.png");
const FooterIcon = require("../assets/footer.png");
const FaceBook = require("../assets/socials/Facebook.svg");
const Gmail = require("../assets/socials/Gmail.svg");
const Whatsapp = require("../assets/socials/Whatsapp.svg");
const Youtube = require("../assets/socials/Youtube.svg");
import Link from "next/link";
import axios from "axios";
import { useState, useEffect } from "react";
import GetText from "@/Components/GetText";
import useLangStore from "@/store/LangStore";

export const Footer = () => {
  const { langData } = useLangStore();
  const [FullLangData, setFullLangData] = useState();
  const getData = async () => {
    await axios
      .get("https://api.diginums.com/api/admin/translation")
      .then((res) => {
        // console.log("role", res.data.result);
        setFullLangData(res.data.result);
      });
  };

  const [Language, setLanguage] = useState(
    sessionStorage.getItem("setLanguage") || "English"
  );
  useEffect(() => {
    getData();
    // console.log(sessionStorage.getItem("setLanguage"));
  }, []);
  return (
    <footer className="bg-color-bg_light-100">
      <div className="p-4">
        <div className="flex justify-center pb-16">
          <Image
            src={Logo}
            alt="Logo Image"
            className="h-20 w-36 object-contain "
          />
        </div>
        <div className="mx-auto max-w-6xl px-2">
          <ul className="flex flex-wrap justify-center gap-4 text-xs font-bold text-color-primary md:justify-between md:text-base">
            <Link href={"/"} className="hover:underline">
              <li>
                {FullLangData ? (
                  <GetText
                    data={FullLangData}
                    keys="FooterList1"
                    lang={langData}
                  />
                ) : (
                  <>Receive SMS Online</>
                )}
              </li>
            </Link>
            <Link href={"/rent"} className="hover:underline">
              <li>
                {FullLangData ? (
                  <GetText
                    data={FullLangData}
                    keys="FooterList2"
                    lang={langData}
                  />
                ) : (
                  <>Rent</>
                )}
              </li>
            </Link>
            <Link href={"/"} className="hover:underline">
              <li>
                {FullLangData ? (
                  <GetText
                    data={FullLangData}
                    keys="FooterList3"
                    lang={langData}
                  />
                ) : (
                  <>API Connection</>
                )}
              </li>
            </Link>
            <Link href={"/ref"} className="hover:underline">
              <li>
                {FullLangData ? (
                  <GetText
                    data={FullLangData}
                    keys="FooterList4"
                    lang={langData}
                  />
                ) : (
                  <>Referal Program</>
                )}
              </li>
            </Link>
            <Link href={"/partnership"} className="hover:underline">
              <li>
                {FullLangData ? (
                  <GetText
                    data={FullLangData}
                    keys="FooterList5"
                    lang={langData}
                  />
                ) : (
                  <>Partnership</>
                )}
              </li>
            </Link>
            <Link href={"/partners"} className="hover:underline">
              <li>
                {FullLangData ? (
                  <GetText
                    data={FullLangData}
                    keys="FooterList6"
                    lang={langData}
                  />
                ) : (
                  <>Partners</>
                )}
              </li>
            </Link>
            <Link href={"/blog"} className="hover:underline">
              <li>
                {FullLangData ? (
                  <GetText
                    data={FullLangData}
                    keys="FooterList7"
                    lang={langData}
                  />
                ) : (
                  <>Blog</>
                )}
              </li>
            </Link>
            <Link href={"/help"} className="hover:underline">
              <li>
                {FullLangData ? (
                  <GetText
                    data={FullLangData}
                    keys="FooterList8"
                    lang={langData}
                  />
                ) : (
                  <>Help</>
                )}
              </li>
            </Link>
          </ul>
        </div>
        <div className="flex items-center justify-center gap-5 p-5">
          <Link href="" target="_blank">
            <Image
              src={FaceBook}
              alt="Footer Icon"
              className="h-10 w-10 object-contain"
            />
          </Link>
          <Link href="" target="_blank">
            <Image
              src={Gmail}
              alt="Footer Icon"
              className="h-10 w-10 object-contain"
            />
          </Link>
          <Link href="" target="_blank">
            <Image
              src={Whatsapp}
              alt="Footer Icon"
              className="h-10 w-10 object-contain"
            />
          </Link>
          <Link href="" target="_blank">
            <Image
              src={Youtube}
              alt="Footer Icon"
              className="h-10 w-10 object-contain"
            />
          </Link>
          <Link href="" target="_blank">
            <Image
              src={FooterIcon}
              alt="Footer Icon"
              className="h-10 w-10 object-contain"
            />
          </Link>
        </div>
      </div>
      <div className="bg-color-bg_light p-6 text-center md:p-4">
        <ul className="flex w-full flex-col items-center text-xs text-slate-500/50 md:flex-row md:justify-center md:space-x-4 md:space-y-0 md:text-base lg:h-16">
          <Link href={"/privacy"} className="hover:underline">
            <li>
              {FullLangData ? (
                <GetText
                  data={FullLangData}
                  keys="FooterPolicy1"
                  lang={langData}
                />
              ) : (
                <>Privacy Policy</>
              )}
            </li>
          </Link>
          <Link
            href={"/terms"}
            className="border-slate-500/50 hover:underline md:border-x md:px-4"
          >
            <li>
              {FullLangData ? (
                <GetText
                  data={FullLangData}
                  keys="FooterPolicy2"
                  lang={langData}
                />
              ) : (
                <>Terms of Use</>
              )}
            </li>
          </Link>
          <Link href={"/payment-policy"} className="hover:underline">
            <li>
              {FullLangData ? (
                <GetText
                  data={FullLangData}
                  keys="FooterPolicy3"
                  lang={langData}
                />
              ) : (
                <>Payment & Refund</>
              )}
            </li>
          </Link>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
