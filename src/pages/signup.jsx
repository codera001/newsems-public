import SignUpForm from "@/Components/SignUpForm";
import { useRouter } from "next/router";
import { useState } from "react";

const Signup = () => {
  const router = useRouter();
  // Accessing the query parameters
  const { id } = router.query;
  const [referrer, setreferrer] = useState(id);

  return (
    <section id="signup" className="bg-color-bg_light">
      <div className="mx-auto mt-14 pb-6 pt-14 md:w-4/5">
        <SignUpForm referrer={id} />
      </div>
    </section>
  );
};

export default Signup;
