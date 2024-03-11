import { useEffect, useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useSession } from "next-auth/react";
import axios from "axios";
import { useRouter } from "next/router";
import { toast } from "react-hot-toast";
import Image from "next/image";
import stars from "../assets/random-shapes/christmas-stars.png";
import hashtag from "../assets/random-shapes/hashtag2.png";
import star from "../assets/random-shapes/shooting-star.png";
import ReCAPTCHA from "react-google-recaptcha";
import { getAuth, signOut } from "firebase/auth";
import SocialMediaLogin from "@/Components/SocialMediaLogin";
import useSessionDataStore from "@/store/SesionStore";

const Login = () => {
  const { SessionData } = useSessionDataStore();
  const { setSessionData } = useSessionDataStore()

  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  var instance = axios.create({
    validateStatus: function (status) {
      return status >= 200 && status < 300;
    },
  });

  const onSubmit = async (data) => {
    try {
      const response = await instance.post(
        "https://api.diginums.com/api" + "/loginUser",
        {
          email: data.email,
          password: data.password,
        },
        {
          timeout: 30000,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      sessionStorage.setItem("id", response?.data?.user?.id);
      sessionStorage.setItem("authToken", response?.data?.token);
      sessionStorage.setItem("refCode", response?.data?.user?.ref_code);
      router.push(`/user/receive-sms/`);
      toast.success(response.data.msg);
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data.msg || "No response from the server.");
    }
  };

  const [isVerified, setIsVerified] = useState(false);
  function onChange() {
    setIsVerified(!isVerified);
  }

  return (
    <section id="login" className="relative bg-color-bg_light">
      <Image
        src={stars}
        alt="stars"
        width={100}
        className="absolute right-20 top-20 hidden lg:flex"
      />
      <Image
        src={hashtag}
        width={70}
        alt="hashtag"
        className="absolute bottom-40 right-40 hidden lg:flex"
      />
      <Image
        src={star}
        width={120}
        alt="shooting-star"
        className="absolute left-20 top-40 hidden lg:flex"
      />
      <div className="mx-auto mt-14 pb-6 pt-14 md:w-4/5">
        <div className=" mx-2 rounded-2xl bg-color-white px-6 pb-12 pt-4 shadow-[0px_4px_15px_rgba(37,39,86,0.15)] md:m-auto md:max-w-md md:rounded-3xl lg:max-w-xl">
          {SessionData ? (
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
                    // const auth = getAuth();

                    // setSessionData(null)
                    // signOut(auth).then(() => {
                    //   // Sign-out successful.
                    // }).catch((error) => {
                    //   // An error happened.
                    // });
                  }}
                >
                  Log Out
                </Link>
              </p>
            </div>
          ) : (
            ""
          )}
          <div className="mx-auto max-w-xs">
            <h3 className="my-4 text-center text-h2Size font-bold">Log in</h3>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col items-center justify-items-center space-y-4"
            >
              <input
                {...register("email", { required: true })}
                type="email"
                required
                placeholder="Enter email"
                className="w-full rounded-lg border border-color-primary_black px-4 py-3 text-xs text-color-primary_black focus:border-color-primary_black focus:outline-dashed sm:text-lg"
              />
              <input
                {...register("password", { required: true })}
                type="password"
                required
                placeholder="Enter password"
                className="w-full rounded-lg border border-color-primary_black  px-4 py-3 text-sm text-color-primary_black focus:border-color-primary_black focus:outline-dashed sm:text-lg"
              />
              <ReCAPTCHA
                sitekey="6LdLX8UnAAAAAKC8AjLOAGtfkHxmTJ3HaTO8Wd8r"
                onChange={onChange}
              />
              <button
                disabled={!isVerified}
                className={
                  isVerified
                    ? "group relative w-full overflow-hidden rounded-3xl bg-color-primary py-3 text-sm font-bold text-color-white md:text-lg lg:py-4 lg:text-xl"
                    : "relative w-full cursor-not-allowed overflow-hidden rounded-3xl bg-color-primary py-3 text-sm font-bold text-color-white opacity-50 md:text-lg lg:py-4 lg:text-xl"
                }
              >
                <span className="absolute left-0 top-0 mt-16 h-20 w-full rounded-3xl bg-color-primary_black transition-all duration-300 ease-in-out group-hover:-mt-4"></span>
                <span className="relative">Sign in</span>
              </button>
              <span>
                <a
                  href="https://diginums.com/resetpassword/"
                  className="font-bold text-color-primary hover:underline"
                >
                  Forgot Password?
                </a>
              </span>
            </form>
            <p className="my-4 text-center text-sm text-color-text_light md:text-base">
              Don&apos;t have an account yet?{" "}
              <Link
                href="/signup"
                className="font-bold text-color-primary hover:underline"
              >
                Sign up
              </Link>
            </p>
          </div>
          <SocialMediaLogin />
        </div>
      </div>
    </section>
  );
};

export default Login;
