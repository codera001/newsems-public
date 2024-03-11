import Link from "next/link";
// import { Icon } from "@iconify/react";
import chatting from "../assets/images/chatting.png";
import Image from "next/image";
import stars from "../assets/random-shapes/christmas-stars.png";
import hashtag from "../assets/random-shapes/hashtag.png";
import arrow from "../assets/arrows/broken-arrow.png";
import { useSession, signIn, } from "next-auth/react";
import { getAuth, signOut } from "firebase/auth";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { toast } from "react-hot-toast";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";
import { useState } from "react";
// import GetText from "@/Components/GetText";
import useAlllangDataStore from "@/store/LangKeyStore";
import useLangStore from "@/store/LangStore";
import GetText from "./GetText";
import SocialMediaLogin from "./SocialMediaLogin";
import useSessionDataStore from "@/store/SesionStore";

export default function About() {
  const { AlllangData } = useAlllangDataStore();
  const { langData } = useLangStore();
  const { setSessionData } = useSessionDataStore()

  const { data: session } = useSession();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const instance = axios.create({
    validateStatus: function (status) {
      return status >= 200 && status < 300; // default
    },
  });

  // const providers = [
  //   {
  //     name: "github",
  //   },
  //   {
  //     name: "twitter",
  //   },
  //   {
  //     name: "google",
  //   },
  //   {
  //     name: "facebook",
  //   },
  // ];

  // const handleOAuthSignIn = (provider) => () =>
  //   signIn(provider, {
  //     callbackUrl: `${window.location.origin}/signup`,
  //   });

  const onSubmit = async (data) => {
    try {
      const response = await instance.post(
        "https://api.diginums.com/api" + "/signup",
        {
          username: data.username,
          email: data.email,
          password: data.password,
          confirmPassword: data.confirmPassword,
        },
        {
          timeout: 30000,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      toast.success(response.data.msg);
      router.push("/");
    } catch (error) {
      toast.error(error.response.data.msg);
    }
  };

  const [isVerified, setIsVerified] = useState(false);
  function onChange() {
    setIsVerified(!isVerified);
  }

  return (
    <section className="bg-color-bg_light">
      <div className="m-auto px-4 py-2">
        <div className="relative mx-auto max-w-2xl py-14 text-justify md:text-xl">
          <Image
            src={stars}
            alt="stars"
            width={100}
            className="absolute -left-40 bottom-40 hidden lg:flex"
          />
          <Image
            src={hashtag}
            width={70}
            alt="hashtag"
            className="absolute -right-40 top-40 hidden lg:flex"
          />
          <Image
            src={arrow}
            width={120}
            alt="arrow"
            className="absolute -bottom-16 right-1/2 hidden lg:flex"
          />
          <p className="my-4">
            {AlllangData ? (
              <GetText data={AlllangData} keys="Home7Text1" lang={langData} />
            ) : (
              <>
                &quot;Diginums&quot; gives you the opportunity to rent a virtual
                number to receive SMS. The leased number can be used for
                registration on almost any platform that requires a mobile
                number for registration.
              </>
            )}
          </p>
          <p className="my-4">
            {AlllangData ? (
              <GetText data={AlllangData} keys="Home7Text2" lang={langData} />
            ) : (
              <>
                Many online services require you to confirm your phone number
                via SMS to register. This means that you can&apos;t register an
                additional account in your favorite messenger or social network
                without a phone number. But to apply for a new SIM card, you
                have to come to a cell phone shop, give your passport details
                and pay a lot of money...... Tremendous.
              </>
            )}
          </p>
          <p className="my-4">
            {AlllangData ? (
              <GetText data={AlllangData} keys="Home7Text3" lang={langData} />
            ) : (
              <>
                If you rent a number on our service, you will be able to receive
                SMS on the rented number during the entire rental period. This
                will allow you to register an unlimited number of accounts for
                WhatsApp, Telegram, Gmail, Facebook, Tinder and any other
                services that require SMS verification!
              </>
            )}
          </p>
          <p className="my-4">
            {AlllangData ? (
              <GetText data={AlllangData} keys="Home7Text4" lang={langData} />
            ) : (
              <>
                Number rental on the service &quot;Diginums&quot; has many
                advantages, which you can find below:
              </>
            )}
            <br />
            {AlllangData ? (
              <GetText data={AlllangData} keys="Home7Text5" lang={langData} />
            ) : (
              <>
                - A rented number will help you preserve your anonymity in
                social networks and messengers.
              </>
            )}
            <br />
            {AlllangData ? (
              <GetText data={AlllangData} keys="Home7Text6" lang={langData} />
            ) : (
              <>
                - You will finally be able to register as many social network
                accounts as you want
              </>
            )}
            <br />
            {AlllangData ? (
              <GetText data={AlllangData} keys="Home7Text7" lang={langData} />
            ) : (
              <>
                - Renting a number will cost you much less than getting a new
                SIM-card. Prices Diginums is one of the lowest.
              </>
            )}
            <br />
            {AlllangData ? (
              <GetText data={AlllangData} keys="Home7Text8" lang={langData} />
            ) : (
              <>
                - You do not need to have special skills to rent a number. You
                can do it in a couple of minutes.
              </>
            )}
            <br />
          </p>
          <p className="my-4">
            {AlllangData ? (
              <GetText data={AlllangData} keys="Home7Text9" lang={langData} />
            ) : (
              <>You can rent a number right now!</>
            )}
          </p>
        </div>
      </div>
      <div>
        <div className="container m-auto py-12">
          <div className="flex items-end justify-around lg:space-x-8">
            <Image
              src={chatting}
              alt="texting"
              className="hidden w-1/3 lg:block"
            />
            <div className="w-full bg-color-white px-10 pb-12 shadow-[0px_4px_15px_rgba(37,39,86,0.15)] md:w-9/12 md:rounded-3xl lg:w-2/4">
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
              <div className="m-auto max-w-xs">
                <h3 className="my-4 text-center text-h2Size font-bold">
                  Sign Up
                </h3>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="flex flex-col items-center justify-between space-y-4"
                >
                  <input
                    {...register("email", { required: true })}
                    defaultValue={session?.user?.email || ""}
                    type="email"
                    required
                    placeholder="Enter your email"
                    className="w-full rounded-lg border border-color-primary_black px-4 py-3 text-xs text-color-primary_black focus:border-color-primary_black focus:outline-dashed md:text-lg"
                  />
                  <input
                    {...register("username", { required: true })}
                    defaultValue={session?.user?.name || ""}
                    type="username"
                    required
                    placeholder="Enter your username"
                    className="w-full rounded-lg border border-color-primary_black px-4 py-3 text-xs text-color-primary_black focus:border-color-primary_black focus:outline-dashed md:text-lg"
                  />
                  <input
                    {...register("password", { required: true })}
                    type="password"
                    required
                    placeholder="Create password"
                    className="w-full rounded-lg border border-color-primary_black  px-4 py-3 text-xs text-color-primary_black focus:border-color-primary_black focus:outline-dashed md:text-lg"
                  />
                  <input
                    {...register("confirmPassword", { required: true })}
                    required
                    type="password"
                    placeholder="Confirm password"
                    className="w-full rounded-lg border border-color-primary_black px-4 py-3 text-xs text-color-primary_black focus:border-color-primary_black focus:outline-dashed sm:text-lg"
                  />
                  <ReCAPTCHA
                    // 6Lf33bYnAAAAAHFOILnLyadbG8uEAMgsQO-UKW_X
                    sitekey="6LdLX8UnAAAAAKC8AjLOAGtfkHxmTJ3HaTO8Wd8r"
                    //sitekey- 6Lep1rYnAAAAAO8oCDyYWH9xbmiCQfSA-toG6S1o
                    // secretekey 6Lep1rYnAAAAAHYIviEzjLaCQMA-eUqM1_vIybpz

                    onChange={onChange}
                  />
                  <button
                    disabled={!isVerified}
                    className="group relative w-full overflow-hidden rounded-3xl bg-color-primary py-3 text-center text-sm font-bold text-color-white md:text-lg lg:py-4 lg:text-xl"
                  >
                    <span className="absolute left-0 top-0 mt-16 h-20 w-full rounded-3xl bg-color-primary_black transition-all duration-300 ease-in-out group-hover:-mt-4"></span>
                    <span className="relative">Sign up</span>
                  </button>
                </form>
                <p className="my-4 text-center text-sm text-color-text_light md:text-base">
                  Already have an account?{" "}
                  <Link
                    href="/login"
                    className="font-bold text-color-primary hover:underline"
                  >
                    Sign in.
                  </Link>
                </p>
              </div>
              <SocialMediaLogin />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
