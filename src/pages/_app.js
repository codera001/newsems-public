import Layout from "@/Components/Layout";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import toast, { Toaster } from "react-hot-toast";
import { loadStripe } from "@stripe/stripe-js";
import { useRouter } from "next/router";
import { useEffect } from "react";
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe("pk_test_qblFNYngBkEdjEZ16jxxoWSM");

function App({ Component, pageProps: { session, ...pageProps } }) {
  const getLayout = Component.getLayout;
  const router = useRouter();
  useEffect(() => {
    const authq = sessionStorage.getItem("authToken")
    if (!authq && window.location.href.includes("user")) {
      router.push("../login")

    } else {
      router.push(window.location.href)

      // toast.success(window.location.href)
      console.log("window.location.href", window.location.href)
    }

  }, [])


  if (getLayout) {
    return getLayout(
      <SessionProvider session={session}>
        <Toaster position="top-center" />
        <Component {...pageProps} />
      </SessionProvider>
    );
  } else {
    return (
      <SessionProvider session={session}>
        <Layout>
          <Toaster position="top-center" />
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
    );
  }
}

export default App;
