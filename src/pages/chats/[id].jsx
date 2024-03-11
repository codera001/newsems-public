import UserDashboardLayout from "@/Components/UserDashboardLayout";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

const ChatSupport = () => {
  const url = "https://api.diginums.com/api" + "/support-ticket";
  const [chats, setChats] = useState([]);
  const [messages, setMessages] = useState("");
  const router = useRouter();
  // Accessing the query parameters
  const { id } = router.query;

  const GetMessages = async () => {
    try {
      const res = await axios.get(url, {
        timeout: 30000,
        params: {
          subjectId: id,
        },
      });
      setChats(res.data.result);
    } catch (error) {
      toast.error(error.data);
      console.log(error);
    }
  };

  useEffect(() => {
    if (id) {
      GetMessages();
    }
  }, [id]);

  const HandleSubmit = async () => {
    try {
      const ticket = await axios.post(
        url,
        {
          senderId: sessionStorage.getItem("id"),
          message: messages,
          subjectId: id,
          subject: sessionStorage.getItem("subject"),
        },
        {
          timeout: 30000,
        }
      );
      GetMessages();
      toast.success(ticket.data.msg);
      setMessages("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="mx-auto h-full max-w-6xl bg-color-bg_light-100 pb-20">
      <div className="h-full w-full py-12">
        {/* chat component */}
        <div className="flex h-full w-full rounded border  border-gray-50 py-4 shadow-lg">
          {/* <!-- Right --> */}
          <div className="mx-auto flex w-11/12 flex-col border md:w-2/3">
            {/* <!-- Header --> */}
            <h3 className="my-4 text-center text-3xl font-bold">
              {sessionStorage.getItem("subject") || ""}
            </h3>
            {/* <!-- Messages --> */}
            <div className="flex-1 overflow-auto bg-color-bg_primary-500 text-white">
              <div className="px-3 py-2">
                {chats.map((item, i) => {
                  return (
                    <>
                      {item.senderId === sessionStorage.getItem("id") ? (
                        <div
                          key={i}
                          className="mb-2 ml-auto flex max-w-lg justify-end"
                        >
                          <div className="rounded bg-color-primary_black px-3 py-2">
                            <p className="mt-1 text-sm md:text-base">
                              {item.message}
                            </p>
                            <p className="text-grey-dark mt-1 text-right text-xs">
                              {new Date(item.date).toDateString() +
                                " " +
                                new Date(item.date).toLocaleTimeString()}
                            </p>
                          </div>
                        </div>
                      ) : (
                        <div key={i} className="mb-2 flex">
                          <div className="rounded bg-color-primary px-3 py-2">
                            <p className="mt-1 text-sm md:text-base">
                              {item.message}
                            </p>
                            <p className="text-grey-dark mt-1 text-right text-xs">
                              {new Date(item.date).toDateString() +
                                " " +
                                new Date(item.date).toLocaleTimeString()}
                            </p>
                          </div>
                        </div>
                      )}
                    </>
                  );
                })}
              </div>
            </div>
            {/* <!-- Input --> */}
            <div className="flex items-center px-4 py-4">
              <div className="mx-4 flex-1">
                <input
                  value={messages}
                  onChange={(e) => {
                    if (e.target.value !== "") {
                      setMessages(e.target.value);
                    }
                  }}
                  className="w-full rounded border px-2 py-2"
                  type="text"
                />
              </div>
              <button
                onClick={HandleSubmit}
                className="border-spacing-16 bg-color-primary p-3 text-white hover:bg-color-primary_black active:opacity-25"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatSupport;

ChatSupport.getLayout = function getLayout(page) {
  return <UserDashboardLayout>{page}</UserDashboardLayout>;
};
