import { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Logo from "../../assets/logo-white.png";
import Link from "next/link";
import { useRouter } from "next/router";
import { navlists } from "./navlists";
import axios from "axios";
import GetText from "../GetText";
import useLangStore from "@/store/LangStore";
import useAlllangDataStore from "@/store/LangKeyStore";

const languagesq = [
  { value: "", text: "Options" },
  { value: "en", text: "English" },
  { value: "hi", text: "Hindi" },
  { value: "bn", text: "Bengali" },
];
const Navbar = (props) => {
  const [authToken, setAuthToken] = useState(sessionStorage.getItem("id"));
  var instance = axios.create({
    validateStatus: function (status) {
      return status >= 200 && status < 300; // default
    },
  });
  const { setLangData } = useLangStore();
  const { setAlllangData } = useAlllangDataStore();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [Language, setLanguage] = useState("English");
  // const [langData, setlangData] = useState();
  const { AlllangData } = useAlllangDataStore();
  const { langData } = useLangStore();
  const getData = async () => {
    await axios
      .get("https://api.diginums.com/api/admin/translation")
      .then((res) => {
        setAlllangData(res.data.result);
      });
  };

  useEffect(() => {
    getData();
    function handleScroll() {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const getLanguages = async () => {
      const data = await instance.get(
        "https://api.diginums.com/api" + "/languages",
        { timeout: 30000 }
      );
      setLanguages(data?.data?.languages);
    };
    getLanguages();
  }, []);

  const [languages, setLanguages] = useState([]);

  const [lang, setLang] = useState("en");
  const handleChange = (e) => {
    setLanguage(e);
    sessionStorage.setItem("setLanguage", e);
    setLangData(e);
  };
  return (
    <nav
      className={`fixed top-0 z-50 flex h-20 w-full items-center justify-between bg-color-primary_darken p-4 text-white transition-all duration-500 ease-in-out ${isScrolled ? "navbar-scroll" : ""
        }`}
    >
      <div className="relative mx-auto flex max-w-6xl flex-grow items-center justify-between">
        <div onClick={() => router.push("/")}>
          <Image src={Logo} alt="Logo Image" className="h-auto w-20" />
        </div>
        <div className="hidden w-1/3 lg:inline-block">
          <ul className="flex flex-grow items-center justify-between text-sm">
            {navlists.map((lists, id) => {
              const isActive = router.asPath === lists.href;
              return (
                <Link
                  key={id}
                  href={lists.href}
                  className={
                    isActive
                      ? "border-b border-color-white py-2"
                      : "border-b-0 py-2 hover:border-b"
                  }
                >
                  <span className="duration-850 absolute bottom-0 left-0 w-0 bg-color-white transition-all ease-out group-hover:h-px group-hover:w-full"></span>
                  <li>
                    {AlllangData ? (
                      <GetText
                        data={AlllangData}
                        keys={lists.translationKey}
                        lang={langData}
                      />
                    ) : (
                      <>{lists.title}</>
                    )}
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
        {!authToken && (
          <div className="hidden text-sm font-extrabold lg:flex lg:justify-evenly lg:space-x-10">
            <button
              onClick={() => router.push("/signup")}
              className="group relative overflow-hidden rounded-full border border-white px-6 py-2 hover:border-0"
            >
              <span className="absolute -left-16 top-0 mt-12 h-64 w-60 rounded-full bg-color-primary transition-all duration-300 ease-out group-hover:-mt-4 group-hover:-rotate-180"></span>
              <span className="relative">
                {AlllangData ? (
                  <GetText
                    data={AlllangData}
                    keys="NavButton1"
                    lang={langData}
                  />
                ) : (
                  <>Sign Up</>
                )}
              </span>
            </button>
            <button
              onClick={() => router.push("/login")}
              className="group relative overflow-hidden rounded-full border border-white px-6 py-2 hover:border-0"
            >
              <span className="absolute -left-16 top-0 mt-12 h-64 w-60 rounded-full bg-color-primary transition-all duration-300 ease-out group-hover:-mt-4 group-hover:-rotate-180"></span>
              <span className="relative">
                {AlllangData ? (
                  <GetText
                    data={AlllangData}
                    keys="NavButton2"
                    lang={langData}
                  />
                ) : (
                  <>Log in</>
                )}
              </span>
            </button>
          </div>
        )}
        {authToken && (
          <div className="hidden text-sm font-extrabold lg:flex lg:justify-evenly lg:space-x-10">
            <button
              onClick={() => router.push("/user/receive-sms")}
              className="group relative overflow-hidden rounded-full border border-white px-6 py-2 hover:border-0"
            >
              <span className="group-hover:rotate-360 absolute -right-1 top-0 mt-12 h-10 w-48 rounded bg-color-primary transition-all duration-300 ease-out group-hover:-mt-1"></span>
              <span className="relative">
                {AlllangData ? (
                  <GetText
                    data={AlllangData}
                    keys="NavButton3"
                    lang={langData}
                  />
                ) : (
                  <>You are logged in</>
                )}
              </span>
            </button>
          </div>
        )}
        <div className="hidden lg:inline-block">
          <span
            onClick={() => handleChange("English")}
            className="cursor-pointer"
          >
            {"English"}/
          </span>
          {languages.map((language) => {
            return (
              <span
                onClick={() => handleChange(language.language)}
                className="cursor-pointer"
                key={language.id}
              >
                {language.language}/
              </span>
            );
          })}
        </div>
        <div className="lg:hidden">
          <Bars3Icon
            className="h-8 w-8 text-white"
            onClick={() => setIsOpen(true)}
          />
        </div>
      </div>

      {isOpen && (
        <div className="absolute bottom-0 left-0 right-0 top-0 z-50 flex h-screen w-screen flex-col items-center justify-center gap-y-5 overflow-x-hidden bg-color-primary_darken text-sm">
          <div className="flex flex-row-reverse items-baseline">
            <div className="lg:hidden">
              <XMarkIcon
                className="h-8 w-8 text-white"
                onClick={() => {
                  setIsOpen(false);
                }}
              />
            </div>
            <ul className="flex flex-grow flex-col items-center justify-between text-2xl">
              {navlists.map((lists, id) => (
                <Link
                  key={id}
                  onClick={() => setIsOpen(false)}
                  href={lists.href}
                >
                  {AlllangData ? (
                    <GetText
                      data={AlllangData}
                      keys={lists.translationKey}
                      lang={langData}
                    />
                  ) : (
                    <>{lists.title}</>
                  )}
                </Link>
              ))}
            </ul>
          </div>
          {!authToken && (
            <div className="flex space-x-10">
              <button
                onClick={() => {
                  router.push("/signup");
                  setIsOpen(false);
                }}
                className="rounded-full border-2 border-white px-12 py-2"
              >
                {AlllangData ? (
                  <GetText
                    data={AlllangData}
                    keys="NavButton1"
                    lang={langData}
                  />
                ) : (
                  <>Sign up</>
                )}
              </button>
              <button
                onClick={() => {
                  router.push("/login");
                  setIsOpen(false);
                }}
                className="rounded-full border-2 border-white px-12 py-2"
              >
                {AlllangData ? (
                  <GetText
                    data={AlllangData}
                    keys="NavButton2"
                    lang={langData}
                  />
                ) : (
                  <>Log in</>
                )}
              </button>
            </div>
          )}
          {authToken && (
            <button
              onClick={() => {
                router.push("/user/receive-sms");
                setIsOpen(false);
              }}
              className="rounded-full border-2 border-white px-12 py-2"
            >
              {AlllangData ? (
                <GetText data={AlllangData} keys="NavButton3" lang={langData} />
              ) : (
                <>You are logged in</>
              )}
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
