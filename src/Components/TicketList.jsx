import Link from "next/link";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useEffect, useState } from "react";
const TicketList = () => {
  const url = "https://api.diginums.com/api" + "/support-ticket";
  const [ticketData, setTicketData] = useState([]);
  const GetTickets = async () => {
    try {
      const res = await axios.get(url, {
        timeout: 30000,
        params: {
          senderId: sessionStorage.getItem("id"),
        },
      });
      setTicketData(res.data.result);
      console.log(res.data.result)
    } catch (error) {
      console.log(error)
      toast.error(error?.response.data?.msg);
    }
  };

  useEffect(() => {
    sessionStorage.removeItem("subject");
    GetTickets();
  }, []);

  if (ticketData.length === 0) {
    return (
      <div className="mt-10">
        <h3 className="pl-4 font-bold md:text-xl">Support Ticket Lists</h3>
        <div className="my-10 text-center">No tickets</div>
      </div>
    );
  }

  return (
    <div className="mt-10">
      <h3 className="pl-4 font-bold md:text-xl">Support Ticket Lists</h3>
      <div className="mx-auto mb-20 mt-5 flex w-full max-w-4xl flex-col justify-between rounded-2xl bg-color-white p-2 text-xs shadow-xl md:text-base">
        {ticketData.map((ticket, id) => (
          <div key={id} className="flex items-center justify-between p-4">
            <span className="font-bold">{ticket.subject}</span>
            <Link
              onClick={() => {
                sessionStorage.setItem("subject", ticket.subject);
              }}
              href={"/chats/" + ticket.id}
              className="group relative overflow-hidden rounded-3xl bg-color-primary px-4 py-3 text-center text-sm font-bold text-color-white md:text-lg lg:py-4 lg:text-xl"
            >
              <span className="absolute left-0 top-0 mt-20 h-20 w-full rounded-3xl bg-color-primary_black transition-all duration-300 ease-in-out group-hover:-mt-1"></span>
              <span className="relative">View more</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TicketList;
