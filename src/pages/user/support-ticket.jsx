import UserDashboardLayout from "@/Components/UserDashboardLayout";
import { useEffect, useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import TicketList from "@/Components/TicketList";

const SupportTicket = () => {
  const [isVerified, setIsVerified] = useState(false);
  const [modal, setModal] = useState(false);
  let modalRef = useRef();
  const url = "https://api.diginums.com/api" + "/support-ticket";
  const { register, handleSubmit } = useForm();
  const id = sessionStorage.getItem("id");
  const CreateTicket = async ({ subject, message }) => {
    try {
      const ticket = await axios.post(
        url,
        {
          senderId: id,
          message: message,
          subject: subject,
        },
        {
          timeout: 30000,
        }
      );
      toast.success(ticket.data.msg);
      setModal(!modal);
    } catch (error) {
      console.log(error);
    }
  };

  const closeModal = (e) => {
    if (!modalRef.current.contains(e.target)) {
      setModal(false);
    }
  };

  function onChange() {
    setIsVerified(!isVerified);
  }

  return (
    <section className="user-scroll mx-auto h-full w-full max-w-6xl overflow-y-scroll bg-color-bg_light-100 pb-20">
      <div className="pb-24">
        <div className="mx-0 space-y-4 px-4 sm:space-y-8 sm:pb-12 lg:pt-14">
          <h1 className="pt-2 text-center text-2xl font-extrabold sm:text-4xl">
            Support Ticket
          </h1>
        </div>
        <div className="mx-auto mt-8 flex w-full max-w-2xl  flex-col items-center justify-between space-y-6 text-sm md:flex-row md:space-y-0 md:text-base">
          {/* <p>You have no support tickets yet</p> */}
          <button
            onClick={() => setModal(!modal)}
            className="group relative overflow-hidden rounded-3xl bg-color-primary px-4 py-3 text-center text-sm font-bold text-color-white md:text-lg lg:py-4 lg:text-xl"
          >
            <span className="absolute left-0 top-0 mt-20 h-20 w-full rounded-3xl bg-color-primary_black transition-all duration-300 ease-in-out group-hover:-mt-1"></span>
            <span className="relative">Add a support ticket</span>
          </button>
        </div>
        {modal && (
          <div
            onClick={closeModal}
            className="fixed inset-0 z-50 flex h-screen w-screen items-center justify-center bg-black bg-opacity-25 backdrop-blur-sm"
          >
            <div
              ref={modalRef}
              className="flex w-full max-w-4xl flex-col items-center justify-center bg-white p-2"
            >
              <button
                onClick={() => setModal(false)}
                className="place-self-end rounded-full bg-color-primary px-4 py-2"
              >
                X
              </button>
              <form
                onSubmit={handleSubmit(CreateTicket)}
                className="z-10 mx-auto my-10 grid max-w-3xl grid-cols-2 gap-5 px-4 md:px-0 md:text-xl"
              >
                <input
                  type="text"
                  required
                  {...register("subject", { required: true })}
                  placeholder="Enter a subject"
                  className="w-full rounded-md border border-color-primary_darken px-2 py-2 font-bold uppercase outline-none placeholder:font-normal placeholder:capitalize placeholder:text-color-primary_darken"
                />
                <div className="col-span-2">
                  <textarea
                    type="text"
                    required
                    {...register("message", { required: true })}
                    placeholder="Type your message"
                    className="w-full rounded-md border border-color-primary_darken px-2 py-2 outline-none placeholder:text-color-primary_darken"
                    rows="5"
                  />
                </div>
                <ReCAPTCHA
                  className="col-span-2 md:col-span-1"
                  sitekey="6LdLX8UnAAAAAKC8AjLOAGtfkHxmTJ3HaTO8Wd8r"
                  onChange={onChange}
                />
                <button
                  onClick={() => setModal(modal)}
                  disabled={!isVerified}
                  className={
                    isVerified
                      ? "group relative col-span-2 mx-auto w-full overflow-hidden rounded-3xl bg-color-primary py-3 text-center text-sm font-bold text-color-white  md:col-span-1 md:text-lg lg:py-4 lg:text-xl"
                      : "group relative col-span-2 mx-auto w-full cursor-not-allowed overflow-hidden rounded-3xl bg-color-primary py-3 text-center text-sm font-bold text-color-white opacity-50 md:col-span-1 md:text-lg lg:py-4 lg:text-xl"
                  }
                >
                  <span className="absolute left-0 top-0 mt-20 h-20 w-full rounded-3xl bg-color-primary_black transition-all duration-300 ease-in-out group-hover:-mt-1"></span>
                  <span className="relative">Send</span>
                </button>
              </form>
            </div>
          </div>
        )}
        <TicketList />
      </div>
    </section>
  );
};

export default SupportTicket;

SupportTicket.getLayout = function getLayout(page) {
  return <UserDashboardLayout>{page}</UserDashboardLayout>;
};
