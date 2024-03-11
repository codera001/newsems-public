import Link from "next/link";
import { Icon } from "@iconify/react";
import blank from "../assets/random-shapes/blank.png";
import scribble from "../assets/random-shapes/scribble1.png";
import hashtag from "../assets/random-shapes/hashtag2.png";
import downArrow from "../assets/arrows/down-arrow.png";
import Image from "next/image";
import GetText from "@/Components/GetText";
import useAlllangDataStore from "@/store/LangKeyStore";
import useLangStore from "@/store/LangStore";
import {
  FacebookSignInButton,
  GithubSignInButton,
  GoogleSignInButton,
  TwitterSignInButton,
} from "./authButtons";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import axios from "axios";
import { useEffect } from "react";
import { toast } from "react-hot-toast";
import { getAuth, signOut } from "firebase/auth";
import useSessionDataStore from "@/store/SesionStore";
export default function SignUpSecton() {
  const { data: session } = useSession();
  const router = useRouter();
  const { AlllangData } = useAlllangDataStore();
  const { langData } = useLangStore();
  const { setSessionData } = useSessionDataStore()

  let instance = axios.create({
    validateStatus: function (status) {
      return status >= 200 && status < 300;
    },
  });

  const res = async () => {
    if (session) {
      const response = await instance.post(
        "https://api.diginums.com/api" + "/social_media_sign",
        {
          username: session?.user?.name,
          email: session?.user?.email,
        },
        {
          timeout: 30000,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response?.data?.user);
      sessionStorage.setItem("id", response?.data?.user?.id);
      sessionStorage.setItem("authToken", response?.data?.token);
      sessionStorage.setItem("refCode", response?.data?.user?.ref_code);
      // router.push(`/user/receive-sms/`);
      toast.success(response.data.msg);
    }
  };

  useEffect(() => {
    res();
  }, [session, instance, router]);
  return (
    <section className="over-flow-hidden relative bg-gradient-to-b from-color-primary_darken to-color-primary_black ">
      <Image
        src={blank}
        width={70}
        alt="blank"
        className="absolute bottom-10 left-7 hidden lg:flex"
      />
      <Image
        src={scribble}
        width={60}
        alt="scribble"
        className="absolute left-14 top-10 hidden lg:flex"
      />
      <Image
        src={hashtag}
        width={60}
        alt="hashtag"
        className="absolute bottom-20 right-32 hidden lg:flex"
      />
      <Image
        src={downArrow}
        width={50}
        alt="blank"
        className="absolute right-1/4 top-16 hidden lg:flex"
      />
      <div className="mx-auto max-w-full px-4 py-8 lg:py-14">
        {session ? (
          <div className="flex flex-col items-center justify-center gap-5 text-sm">
            <p>
              You are currently signed in,{" "}
              <span
                className="hover: font-bold text-color-primary_darken transition-all hover:cursor-pointer hover:tracking-widest hover:text-color-primary hover:underline"
                onClick={() => router.push("/user/receive-sms")}
              >
                Go to your dashboard
              </span>
            </p>
            <p>
              Or Click here to log out :{" "}
              <Link
                className="font-bold text-color-primary_darken underline transition-all hover:cursor-pointer hover:text-color-primary"
                href={"/"}
                onClick={async () => {


                  const auth = getAuth();

                  setSessionData(null)
                  signOut(auth).then(() => {
                    // Sign-out successful.
                  }).catch((error) => {
                    // An error happened.
                  });
                }}
              >
                Log Out
              </Link>
            </p>
          </div>
        ) : (
          ""
        )}
        <div className="m-auto max-w-sm lg:max-w-4xl xl:max-w-6xl">
          <h3 className="my-4 text-center text-2xl font-bold text-color-white md:text-4xl">
            {AlllangData ? (
              <GetText data={AlllangData} keys="Home4Text1" lang={langData} />
            ) : (
              <>Sign Up</>
            )}
          </h3>
          <form className="mb-2 flex flex-col items-center justify-between space-y-5 lg:flex-row lg:space-x-4 lg:space-y-0">
            <input
              type="email"
              placeholder={
                AlllangData ? (
                  <GetText
                    data={AlllangData}
                    keys="Home4Input1"
                    lang={langData}
                  />
                ) : (
                  "Enter your email address"
                )
              }
              className="w-full border border-color-primary_black bg-color-white px-4 py-3 text-sm text-color-primary_black placeholder-color-primary focus:border-color-primary_black focus:outline-none md:text-lg lg:w-1/3"
            />
            <input
              type="password"
              placeholder={
                AlllangData ? (
                  <GetText
                    data={AlllangData}
                    keys="Home4Input2"
                    lang={langData}
                  />
                ) : (
                  "Create password"
                )
              }
              className="w-full border border-color-primary_black bg-color-white  px-4 py-3 text-sm text-color-primary_black placeholder-color-primary focus:border-color-primary_black focus:outline-none md:text-lg lg:w-1/3"
            />
            <button className="group relative w-full overflow-hidden rounded-xl bg-color-primary py-3 font-bold text-color-white shadow-[0_4px_15px_rgba(231,237,250,.25)] md:py-4 md:text-lg lg:w-1/3 lg:text-xl">
              <span className="absolute left-0 top-0 mt-16 h-24 w-full rounded-3xl bg-color-primary_black transition-all duration-300 ease-in-out group-hover:-mt-4"></span>
              <span className="relative">
                {AlllangData ? (
                  <GetText
                    data={AlllangData}
                    keys="Home4Button1"
                    lang={langData}
                  />
                ) : (
                  <>Sign Up</>
                )}
              </span>
            </button>
          </form>
        </div>
        <div className="m-auto flex flex-col items-center justify-between space-y-4">
          <p className="text-center text-sm font-bold text-color-white opacity-50 md:text-base lg:text-xl">
            {AlllangData ? (
              <GetText data={AlllangData} keys="Home4Text2" lang={langData} />
            ) : (
              <>Or log in with your social network</>
            )}
          </p>
          <div className="flex items-center justify-center space-x-4 md:space-x-6">
            <GithubSignInButton />
            <FacebookSignInButton />
            <TwitterSignInButton />
            <GoogleSignInButton />
          </div>
          <div>
            <Link href="/">
              <button className="flex items-center justify-center space-x-4 rounded-md bg-[#54a9eb] px-4 py-2 text-center text-color-white transition duration-500 ease-in-out hover:opacity-75">
                <Icon icon="akar-icons:telegram-fill" className="text-3xl" />
                <span className="md:text-base">
                  {AlllangData ? (
                    <GetText
                      data={AlllangData}
                      keys="Home4Button2"
                      lang={langData}
                    />
                  ) : (
                    <>Log in with Telegram</>
                  )}
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
