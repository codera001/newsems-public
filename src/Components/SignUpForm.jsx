import { useState } from "react";
import Link from "next/link";
import { useSession, signIn, getSession } from "next-auth/react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { toast } from "react-hot-toast";
import stars from "../assets/random-shapes/christmas-stars.png";
import hashtag from "../assets/random-shapes/hashtag2.png";
import star from "../assets/random-shapes/shooting-star.png";
import Image from "next/image";
import ReCAPTCHA from "react-google-recaptcha";
import SocialMediaLogin from "./SocialMediaLogin";
import { signOut } from "firebase/auth";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import useSessionDataStore from "@/store/SesionStore";

const SignUpForm = ({ referrer }) => {
  const router = useRouter();
  const { SessionData } = useSession();
  const { setSessionData } = useSessionDataStore()



  const auth = getAuth();

  const signGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log("user ", user)
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }

  if (SessionData) {
    console.log("SessionData", SessionData)
    router.push("/user/receive-sms");
  }
  // Accessing the query parameters
  const { id } = router.query;
  // console.log("referrer",id )

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

  const onSubmit = async (data) => {
    try {
      const response = await instance.post(
        "https://api.diginums.com/api" + "/signup",
        {
          username: data.username,
          email: data.email,
          password: data.password,
          confirmPassword: data.confirmPassword,
          referrer: id,
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
    <div className="relative mx-2 rounded-2xl bg-color-white px-6 pb-12 pt-4 shadow-[0px_4px_15px_rgba(37,39,86,0.15)] md:m-auto md:max-w-md md:rounded-3xl lg:max-w-xl">
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
        src={star}
        width={120}
        alt="shooting-star"
        className="absolute -left-1/2 hidden lg:flex"
      />
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
                // await signOut({ redirect: false });

                setSessionData(null)
                const auth = getAuth();
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
        <h3 className="my-4 text-center text-h2Size font-bold">Sign up</h3>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-center justify-items-center space-y-4"
        >
          <input
            {...register("username", { required: true })}
            type="Username"
            required
            defaultValue={SessionData?.username || ""}
            placeholder="Enter your Username"
            className="w-full rounded-lg border border-color-primary_black px-4 py-3 text-xs text-color-primary_black focus:border-color-primary_black focus:outline-dashed sm:text-lg"
          />
          <input
            {...register("email", { required: true })}
            type="email"
            required
            defaultValue={SessionData?.email || ""}
            placeholder="Enter your email"
            className="w-full rounded-lg border border-color-primary_black px-4 py-3 text-xs text-color-primary_black focus:border-color-primary_black focus:outline-dashed sm:text-lg"
          />
          <input
            {...register("password", { required: true })}
            type="password"
            required
            placeholder="Create password"
            className="w-full rounded-lg border border-color-primary_black px-4 py-3 text-xs text-color-primary_black focus:border-color-primary_black focus:outline-dashed sm:text-lg"
          />
          <input
            {...register("confirmPassword", { required: true })}
            type="password"
            required
            placeholder="Confirm password"
            className="w-full rounded-lg border border-color-primary_black px-4 py-3 text-xs text-color-primary_black focus:border-color-primary_black focus:outline-dashed sm:text-lg"
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
            Sign up
          </button>
        </form>
        <p className="my-2 text-center text-sm text-color-text_light sm:my-4 md:text-base">
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
  );
};

export default SignUpForm;
