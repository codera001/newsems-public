import UserDashboardLayout from "@/Components/UserDashboardLayout";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Visa from "@/assets/visa.png";
import PiggyBank from "@/assets/piggy-bank.svg";
import { useRouter } from "next/router";
import axios from "axios";
import Coinbase from "@/assets/coinbase.png";
import Usdt from "@/assets/usdt.png";
import { toast } from "react-hot-toast";
import { MD5 } from 'crypto-js';
// import { CheckCircleIcon } from "@heroicons/24/outline";
import { set } from "react-hook-form";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

const usePaymentState = () => {
  const [amount, setAmount] = useState(10);
  const [active, setActive] = useState(false);
  const [method, setMethod] = useState("stripe");

  return { amount, setAmount, active, setActive, method, setMethod };
};

const usePaymentHandlers = () => {
  const router = useRouter();

  const handleCheckOut = async (amount) => {
    try {
      const response = await axios.post(
        "https://api.diginums.com" + "/api/stripe/checkout",
        {
          amount: amount,
        },
        {
          timeout: 30000,
          params: {
            userId: sessionStorage.getItem("id"),
          },
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("authToken")}`,
          },
        }
      );
      router.push(response?.data?.url);
      sessionStorage.setItem("sessionID", response?.data?.id)
      sessionStorage.setItem("paymentAmount", amount)
    } catch (error) {
      toast.error(error?.response?.data.msg || "No response from the server.");
    }
  };

  const handlecryptomus = async (amount) => {
    try {
      const response = await axios.post(
        "https://api.diginums.com" + "/api/payment/cryptomusk",
        {
          amount: String(amount),
          userid: sessionStorage.getItem("id"),
        },
        {
          timeout: 30000,
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("authToken")}`,
          },
        }
      );
      console.log(response?.data)
      router.push(response?.data?.url);
      sessionStorage.setItem("cryptomusk", response?.data?.id)
      sessionStorage.setItem("paymentAmount", amount)
    } catch (error) {
      toast.error(error || "No response from the server.");
    }
  }
  const handleCoinbaseCheckOut = async () => {
    const urls = 'https://api.cryptomus.com/v1/payment';
    const API_KEY = "5jXGtWTrAQmUQTEcR5TUullvmkIzHe4EQ6UqvNodjenRE46XCrifLabGNblpdh1YGEPwEAydyztbcZKfYE1DIBceZ4hXzNRsjA4JI5vVfzujgizyezkPFKBqc637UrA7"
    const merchantId = 'caa88443-4aa7-49a5-a455-c81aa8767ad7';
    // const merchantId = '96a781d9-a361-41bc-9d0b-030b72ac4dd9';
    // const API_KEY = 'Q8Qztyb6RsshHiASpf4p2iM4fYZwGv6f3RsSQ4K10cjuHA7dR8SsLFPDCbAs0l3E5vmsa62Em374ZYuZIEwvc8CsyAuS4PH4qzKMBpcMJPFJK7bkKKWWsqlCUs1Bc525';

    const data = {
      "amount": "15",
      "currency": "USD",
      "order_id": "1",
      "url_return": "http://localhost:3000/user/payment/",
      "url_callback": "http://localhost:3000/user/payment/"
    };
    const jsonData = JSON.stringify(data);
    const base64Data = btoa('' + API_KEY);
    const sign = MD5(base64Data).toString();;
    const signHeader = sign
    console.log("first", sign)

    const headers = {
      'merchant': merchantId,
      'sign': signHeader,
      'Content-Type': 'application/json'
    };


    axios.post(urls, data, { headers })
      .then(response => {
        console.log('Response:', response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });

  };

  return { handleCheckOut, handleCoinbaseCheckOut, handlecryptomus };
};

const Payment = () => {
  const { amount, setAmount, active, setActive, method, setMethod } =
    usePaymentState();
  const { handleCheckOut, handleCoinbaseCheckOut, handlecryptomus } = usePaymentHandlers();
  const router = useRouter();
  const url = "https://api.diginums.com/api" + "/coupon";
  const [couponDetails, setCouponDetails] = useState();
  const [payable, setPayable] = useState(0);
  const [loading, setLoading] = useState(false);

  const validateCoupon = (couponName) => {
    setTimeout(async () => {
      try {
        const response = await axios.get(url, {
          params: {
            coupon_name: couponName,
          },
        });
        setCouponDetails(response.data.coupons.result);
        setAmount(Number(response.data.coupons.result?.coupon_value))
        // toast.success(response.data.coupons.result.status);
        // console.log(response.data);
      } catch (error) {
        setCouponDetails(error.response.data);
        // toast.error(error.response.data.msg);
        // console.log(error.response?.data.msg);
      }
    }, 700);
  };

  const handleUseCoupon = async () => {
    if (couponDetails?.coupon_value) {
      const posted = {
        coupon_name: couponDetails.coupon_name,
        user_id: sessionStorage.getItem("id"),
        new_balance: couponDetails.coupon_value,
      };
      console.log(posted);
      try {
        const response = await axios.post(url, posted);

        toast.success(response.data.msg);
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      } catch (error) {
        console.log(error);
      }
    } else {
      toast.error(couponDetails?.msg || "Enter a valid coupon");
    }
  };



  useEffect(() => {
    const asa = sessionStorage.getItem("sessionID")
    const cryptomusk = sessionStorage.getItem("cryptomusk")

    if (cryptomusk) {
      toast.success("Proccessing Payment ")
      const aaa = async () => {
        try {
          const response = await axios.post(
            "https://api.diginums.com" + 'api/payment/checkcryptomusk',
            {
              uuid: cryptomusk,
              amount: Number(sessionStorage.getItem("paymentAmount")),
              toalamount: Number(sessionStorage.getItem("walletBalance")) + Number(sessionStorage.getItem("paymentAmount"))
            },
            {
              timeout: 30000,
              params: {
                userId: sessionStorage.getItem("id"),
              },
              headers: {
                Authorization: `Bearer ${sessionStorage.getItem("authToken")}`,
              },
            }
          );

          if (response?.data?.msg === "paid" || response?.data?.msg === "paid_over") {
            toast.success("Payment Successful")
            sessionStorage.removeItem("cryptomusk")
            sessionStorage.removeItem("paymentAmount")
            window.location.reload()
          } else if (response?.data?.msg === "refund_paid" || response?.data?.msg === "fail" || response?.data?.msg === "cancel") {
            toast.error(response?.data?.msg)
            sessionStorage.removeItem("cryptomusk")
            sessionStorage.removeItem("paymentAmount")
            window.location.reload()
          } else if (response?.data?.msg === "confirm_check" || response?.data?.msg === "process" || response?.data?.msg === "wrong_amount_waiting") {
            toast.success(response?.data?.msg + "reload this page in few minutes ")
          }


        } catch (error) {
          toast.error(error?.response?.data.msg || "No response from the server.");
          setLoading(false)
        }
      }
      aaa()
    }
    if (asa) {
      toast.success("Proccessing Payment ")
      const aaa = async () => {
        try {
          const response = await axios.post(
            "https://api.diginums.com" + "/api/stripe/check",
            {
              sessionID: asa,
              amount: Number(sessionStorage.getItem("walletBalance")) + Number(sessionStorage.getItem("paymentAmount"))
            },
            {
              timeout: 30000,
              params: {
                userId: sessionStorage.getItem("id"),
              },
              headers: {
                Authorization: `Bearer ${sessionStorage.getItem("authToken")}`,
              },
            }
          );

          if (response?.data?.msg) {
            toast.success("Payment Successful")
            sessionStorage.removeItem("sessionID")
            sessionStorage.removeItem("paymentAmount")
            window.location.reload()
          }


        } catch (error) {
          toast.error(error?.response?.data.msg || "No response from the server.");
          setLoading(false)
        }
      }
      aaa()
    }
  }, []);

  const [btnActive, setBtnActive] = useState(true);
  function InputChange() {
    setBtnActive(!btnActive);
  }

  return (
    <section className="user-scroll h-full w-full overflow-y-scroll">
      <h1 className="ml-3 mt-6 text-xl font-bold">Top up your balance</h1>
      <div className="w-full max-w-4xl px-4 pt-10 lg:flex xl:mx-auto">
        <div className="mb-16 h-full rounded-2xl bg-white py-5 shadow-lg lg:w-full xl:w-[80vw] ">
          <div className="flex flex-col px-4 lg:items-baseline">
            <div className="flex flex-grow flex-col gap-y-6">
              <div>
                <h1 className="text-lg font-bold">
                  1. Choose a payment method
                </h1>
                <div className="mt-4 grid grid-cols-1 justify-items-center gap-4 px-10 md:grid-cols-2 lg:grid-cols-3">
                  <div
                    className={`flex h-20 w-32 flex-col items-center justify-center bg-white shadow-lg ${method === "stripe"
                      ? "rounded-md border-4 border-blue-500"
                      : "border-0"
                      }`}
                    onClick={() => {
                      setMethod("stripe");
                    }}
                  >
                    <Image src={Visa} alt="Payment" className="" />
                  </div>
                  <div
                    className={`flex h-20 w-32 flex-col items-center justify-center bg-white shadow-lg ${method === "coinbase"
                      ? "rounded-md border-4 border-blue-500"
                      : "border-0"
                      }`}
                    onClick={() => {
                      setMethod("coinbase");
                    }}
                  >
                    <Image src={Coinbase} alt="Payment" className="" />
                  </div>
                  {/* <div
                    className={`flex h-20 w-32 flex-col items-center justify-center bg-white shadow-lg ${method === "usdt"
                      ? "rounded-md border-4 border-blue-500"
                      : "border-0"
                      }`}
                    onClick={() => {
                      setMethod("usdt");
                    }}
                  >
                    <Image src={Usdt} alt="Payment" className="" />
                  </div> */}
                  <div
                    className={`flex h-20 w-32 flex-col items-center justify-center bg-white shadow-lg ${method === "coupon"
                      ? "rounded-md border-4 border-blue-500"
                      : "border-0"
                      }`}
                    onClick={() => {
                      setMethod("coupon");
                    }}
                  >
                    {/* <Image src={Usdt} alt="Payment" className="" /> */}
                    <p>Use Coupon</p>
                  </div>
                </div>
              </div>
              {method !== "coupon" && (
                <div>
                  <h1 className="mb-5 text-lg font-bold">
                    2. Specify top up amount
                  </h1>
                  <div className="mb-5 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                    <div
                      onClick={() => {
                        setAmount(10);
                        setPayable(10)
                      }}
                      className={`rounded-md bg-color-bg_primary-500 px-16 py-2 shadow-md ${amount === 10
                        ? "rounded-md border-4 border-blue-500"
                        : "border-0"
                        }`}
                    >
                      $10
                    </div>
                    <div
                      onClick={() => {
                        setAmount(50)
                        setPayable(50)
                      }}
                      className={`rounded-md bg-color-bg_primary-500 px-16 py-2 shadow-md ${amount === 50
                        ? "rounded-md border-4 border-blue-500"
                        : "border-0"
                        }`}
                    >
                      $50
                    </div>
                    <div
                      className={`rounded-md bg-color-bg_primary-500 px-16 py-2 shadow-md ${amount === 100 ? "border-4 border-blue-500" : "border-0"
                        }`}
                      onClick={() => {
                        setAmount(100)
                        setPayable(100)
                      }}
                    >
                      $100
                    </div>
                  </div>
                  <input
                    value={amount}
                    placeholder="Other amount"
                    onChange={(e) => {
                      setAmount(e.target.value);
                      setPayable(e.target.value)
                    }}
                    className="mb-5 w-full rounded-md bg-color-bg_primary-500 px-3 py-2 lg:w-96"
                  />
                </div>
              )}

              {method === "coupon" && (
                <div>
                  <h3 className="mb-5 text-lg font-bold">
                    2. Add coupon code here
                  </h3>
                  <input
                    placeholder="Enter coupon code"
                    onChange={(e) => {
                      validateCoupon(e.target.value);
                    }}
                    className="mb-5 w-full rounded-md bg-color-bg_primary-500 px-3 py-2 lg:w-96"
                  />
                  {couponDetails && (
                    <p className="flex items-center text-sm text-color-primary_darken">
                      {couponDetails.status}
                      {/* <CheckCircleIcon class="h-4 w-4 text-green-600" /> */}
                    </p>
                  )}
                  {couponDetails && <p>{couponDetails.msg}</p>}
                </div>
              )}

              <button
                className="group relative overflow-hidden rounded-md bg-color-primary px-2 py-2 text-white lg:w-40"
                onClick={() => {
                  if (method === "stripe") {
                    sessionStorage.setItem("paymentAmount", amount)
                    handleCheckOut(amount);
                  } else if (method === "coinbase") {
                    handlecryptomus(amount);
                  } else if (method === "coupon") {
                    handleUseCoupon();
                  } else {
                    console.log("nothing");
                  }
                }}
              >
                <span className="absolute left-0 top-0 mt-12 h-20 w-full rounded-3xl bg-color-primary_black transition-all duration-300 ease-in-out group-hover:-mt-4"></span>
                <span className="relative">Pay ${amount}</span>
              </button>
            </div>
          </div>
        </div>
        <div>
          <Image
            src={PiggyBank}
            alt="piggy bank svg"
            className=" hidden lg:inline-block lg:h-96 lg:w-80"
          />
        </div>
      </div>
    </section>
  );
};

export default Payment;

Payment.getLayout = function getLayout(page) {
  return <UserDashboardLayout>{page}</UserDashboardLayout>;
};
