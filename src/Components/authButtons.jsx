import { Icon } from "@iconify/react";
import { signIn } from "next-auth/react";
import { app } from "../../fireconfig";
import { getAuth, signInWithPopup, GoogleAuthProvider, TwitterAuthProvider, FacebookAuthProvider, GithubAuthProvider } from "firebase/auth";
import useSessionDataStore from "@/store/SesionStore";

export function GithubSignInButton() {
  const { setSessionData } = useSessionDataStore()
  const handleClick = () => {
    // signIn("twitter", { callbackUrl: "https://diginums.com/" });
    const auth = getAuth();
    const provider = new GithubAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GithubAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        const sessiondata = {
          username: user.displayName,
          email: user.email
        }
        setSessionData(sessiondata)
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GithubAuthProvider.credentialFromError(error);
        // ...
      });
  };
  return (
    <button
      className="w-1/4 cursor-pointer rounded-md bg-color-black px-4"
      onClick={handleClick}
    >
      <Icon
        icon="octicon:mark-github-16"
        className="coltransition w-full text-5xl text-color-white duration-500 ease-in-out hover:opacity-75"
      />
    </button>
  );
}
export function FacebookSignInButton() {
  const { setSessionData } = useSessionDataStore()
  const handleClick = () => {
    // signIn("twitter", { callbackUrl: "https://diginums.com/" });
    const auth = getAuth();
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        const sessiondata = {
          username: user.displayName,
          email: user.email
        }
        setSessionData(sessiondata)
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = FacebookAuthProvider.credentialFromError(error);
        // ...
      });
  };
  return (
    <button
      className="w-1/4 rounded-md bg-[#4267b2] px-4 py-2"
      onClick={handleClick}
    >
      <Icon
        icon="teenyicons:facebook-solid"
        className="w-full text-4xl text-color-white transition duration-500 ease-in-out hover:opacity-75"
      />
    </button>
  );
}
export function TwitterSignInButton() {
  const { setSessionData } = useSessionDataStore()
  const handleClick = () => {
    // signIn("twitter", { callbackUrl: "https://diginums.com/" });
    const auth = getAuth();
    const provider = new TwitterAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = TwitterAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        const sessiondata = {
          username: user.displayName,
          email: user.email
        }
        console.log("first", user)
        setSessionData(sessiondata)
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = TwitterAuthProvider.credentialFromError(error);
        // ...
      });
  };
  return (
    <button
      onClick={handleClick}
      className="w-1/4 cursor-pointer rounded-md bg-[#03a9f4] px-4 py-2"
    >
      <Icon
        icon="bi:twitter"
        className=" w-full text-4xl text-color-white transition duration-500 ease-in-out hover:opacity-75"
      />
    </button>
  );
}

export function GoogleSignInButton() {

  const { setSessionData } = useSessionDataStore()
  const signGoogle = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        const sessiondata = {
          username: user.displayName,
          email: user.email
        }
        setSessionData(sessiondata)
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
  const handleClick = () => {
    // signIn("google", { callbackUrl: "https://diginums.com/" });
  };
  return (
    <button
      className="w-1/4 cursor-pointer rounded-md bg-[#d93025] px-4 py-2"
      onClick={signGoogle}
    >
      <Icon
        icon="cib:google"
        className="w-full text-4xl text-color-white transition duration-500 ease-in-out hover:opacity-75"
      />
    </button>
  );
}
