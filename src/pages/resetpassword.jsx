import { useForm } from "react-hook-form";
import { useState } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/router";

const ResetPassword = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [hidden, setHidden] = useState(false);

  const [input, setInput] = useState({
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState({
    password: "",
    confirmPassword: "",
  });

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
    validateInput(e);
  };

  const validateInput = (e) => {
    let { name, value } = e.target;
    setError((prev) => {
      const stateObj = { ...prev, [name]: "" };

      switch (name) {
        case "password":
          if (!value) {
            stateObj[name] = "Please enter Password.";
          } else if (input.confirmPassword && value !== input.confirmPassword) {
            stateObj["confirmPassword"] =
              "Password and Confirm Password does not match.";
          } else {
            stateObj["confirmPassword"] = input.confirmPassword
              ? ""
              : error.confirmPassword;
          }
          break;

        case "confirmPassword":
          if (!value) {
            stateObj[name] = "Please enter Confirm Password.";
          } else if (input.password && value !== input.password) {
            stateObj[name] = "Password and Confirm Password does not match.";
          }
          break;

        default:
          break;
      }

      return stateObj;
    });
  };

  const VerifyPassword = async ({ email }) => {
    try {
      const response = await axios.post(
        "https://api.diginums.com/api" + "/forgotPassword",
        {
          email,
        },
        {
          timeout: 30000,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      toast.success(response.data.msg);
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data.msg || "No response from the server.");
    }
  };
  const [errorMsg, setErrorMsg] = useState("");
  const onSubmit = async ({ code }) => {
    try {
      const response = await axios.post(
        "https://api.diginums.com/api" + "/verifyForgotPassword",
        {
          newpass: input.confirmPassword,
          code: code,
        },
        {
          timeout: 30000,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      toast.success(response.data.msg);
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data.msg || "No response from the server.");
    }
  };

  return (
    <div className="flex h-screen w-full items-center justify-center bg-color-bg_primary-500">
      <div className="mx-auto w-full max-w-lg text-center">
        <>
          {hidden ? (
            ""
          ) : (
            <>
              <h3 className="my-4 text-center text-h2Size font-bold">
                Type in your email address
              </h3>
              <form
                onSubmit={handleSubmit(VerifyPassword)}
                className="flex flex-col items-center justify-items-center space-y-4"
              >
                <input
                  {...register("email", { required: true })}
                  type="email"
                  required
                  placeholder="Enter your email address"
                  className="w-full rounded-lg border border-color-primary_black px-4 py-3 text-xs text-color-primary_black focus:border-color-primary_black focus:outline-dashed sm:text-lg"
                />
                <button
                  onClick={() =>
                    setTimeout(() => {
                      setHidden(true);
                    }, 3000)
                  }
                  className="group relative w-full overflow-hidden rounded-3xl bg-color-primary py-3 text-sm font-bold text-color-white md:text-lg lg:py-4 lg:text-xl"
                >
                  <span className="absolute left-0 top-0 mt-16 h-20 w-full rounded-3xl bg-color-primary_black transition-all duration-300 ease-in-out group-hover:-mt-4"></span>
                  <span className="relative">Get code</span>
                </button>
              </form>
            </>
          )}
        </>

        {hidden && (
          <>
            <h3 className="my-4 text-center text-h2Size font-bold">
              Change your password
            </h3>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col items-center justify-items-center space-y-4"
            >
              <input
                {...register("code", { required: true })}
                required
                placeholder="Enter confirmation code"
                className="w-full rounded-lg border border-color-primary_black px-4 py-3 text-xs text-color-primary_black focus:border-color-primary_black focus:outline-dashed sm:text-lg"
              />
              <input
                type="password"
                name="password"
                required
                placeholder="Enter new password"
                value={input.password}
                onChange={onInputChange}
                onBlur={validateInput}
                className="w-full rounded-lg border border-color-primary_black px-4 py-3 text-xs text-color-primary_black focus:border-color-primary_black focus:outline-dashed sm:text-lg"
              />
              {error.password && (
                <span className="text-xs text-color-api-red-700">
                  {error.password}
                </span>
              )}
              <input
                type="password"
                name="confirmPassword"
                required
                placeholder="Enter confirm password"
                value={input.confirmPassword}
                onChange={onInputChange}
                onBlur={validateInput}
                className="w-full rounded-lg border border-color-primary_black  px-4 py-3 text-sm text-color-primary_black focus:border-color-primary_black focus:outline-dashed sm:text-lg"
              />
              {error.confirmPassword && (
                <span className="text-xs text-color-api-red-700">
                  {error.confirmPassword}
                </span>
              )}
              <button
                onClick={() =>
                  setTimeout(() => {
                    router.push("/success");
                  }, 2000)
                }
                className="group relative w-full overflow-hidden rounded-3xl bg-color-primary py-3 text-sm font-bold text-color-white md:text-lg lg:py-4 lg:text-xl"
              >
                <span className="absolute left-0 top-0 mt-16 h-20 w-full rounded-3xl bg-color-primary_black transition-all duration-300 ease-in-out group-hover:-mt-4"></span>
                <span className="relative">Change your Password</span>
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default ResetPassword;
