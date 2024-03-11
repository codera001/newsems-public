import { useSession } from "next-auth/react";
import {
  FacebookSignInButton,
  GithubSignInButton,
  GoogleSignInButton,
  TwitterSignInButton,
} from "./authButtons";
import { useRouter } from "next/router";
import axios from "axios";
import { useEffect } from "react";
import { toast } from "react-hot-toast";
import useSessionDataStore from "@/store/SesionStore";

const SocialMediaLogin = () => {
  const { SessionData } = useSessionDataStore()
  // const { data: SessionData } = useSession();
  const router = useRouter();
  let instance = axios.create({
    validateStatus: function (status) {
      return status >= 200 && status < 300;
    },
  });
  const res = async () => {
    if (SessionData) {
      const response = await instance.post(
        "https://api.diginums.com/api" + "/social_media_sign",
        {
          username: SessionData?.username,
          email: SessionData?.email,
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
  }, [SessionData]);

  return (
    <div className="m-auto flex flex-col items-center justify-between space-y-4">
      <p className="text-center text-sm font-bold text-color-text_light md:text-base lg:text-xl">
        Or log in with your social network
      </p>
      <div className="flex items-center justify-center space-x-4">
        <GithubSignInButton />
        <FacebookSignInButton />
        <TwitterSignInButton />
        <GoogleSignInButton />
      </div>
    </div>
  );
};

export default SocialMediaLogin;
