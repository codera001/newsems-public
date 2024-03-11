import React, { useState, useEffect } from "react";
import UserDashboardLayout from "@/Components/UserDashboardLayout";
import axios from "axios";
import { toast } from "react-hot-toast";
import CopyToClipboard from "@/Components/Copy";

const AllTransactions = () => {
  const [dataa, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const GetAllTransactions = async () => {
    try {
      let userId = sessionStorage.getItem("id");
      const response = await axios.get(
        "https://api.diginums.com/api" +
        `/admin/user/transactions?userid=${userId}`,
        {
          timeout: 30000,
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("authToken")}`,
          },
        }
      );
      setData(response.data.users.result);
      // console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handlecheckpayment = () => {

  }

  useEffect(() => {
    GetAllTransactions();
    setIsLoading(false);
  }, []);

  if (dataa == []) {
    // setIsLoading(false);
    return (
      <div>
        <h2 className="text-center font-extrabold md:pl-8 md:text-left md:text-xl">
          All your transaction history
        </h2>
        <div className="relative mx-auto mb-8 flex max-w-3xl items-center justify-center rounded-3xl bg-color-white py-6 shadow-[0px_4px_15px_rgba(37,39,86,0.15)] lg:max-w-4xl">
          You have not carried out any transacton yet!
        </div>
      </div>
    );
  }

  const histories = [
    {
      title: "Id",
    },
    {
      title: "Date",
    },
    {
      title: "Payment Method",
    },
    {
      title: "Amount",
    },
    {
      title: "Status",
    },
  ];

  return (
    <div className="user-scroll h-full w-full overflow-y-scroll bg-color-bg_light">
      <div className="max-w-5xl pb-20 pt-8 xl:mx-auto">
        <h2 className="text-center font-extrabold md:pl-8 md:text-left md:text-xl">
          All your transaction history
        </h2>
        <div className="px-2 pt-8">
          <div className="relative mx-auto mb-8 max-w-3xl rounded-3xl bg-color-white pt-6 shadow-[0px_4px_15px_rgba(37,39,86,0.15)] lg:max-w-4xl">
            <div className="px-2">
              <div className="wrapper pb-10">
                <div className="table overflow-hidden text-sm md:text-base lg:px-4">
                  <div className="header-row-2">
                    {histories.map((history, index) => (
                      <div key={index} className="th text-color-table_gray">
                        <p>{history.title}</p>
                      </div>
                    ))}
                  </div>
                  <div className="table-body lg:text-xs">
                    {isLoading ? (
                      <p className="text-center text-xl">Loading...</p>
                    ) : (
                      <div className="roll h-full max-h-[700px] w-full overflow-hidden overflow-y-auto scrollbar-thin scrollbar-track-[#0188ff2a] scrollbar-thumb-color-decor_blue lg:max-h-96">
                        {dataa
                          .sort(function (a, b) {
                            return b.id - a.id;
                          })
                          .map((data, index) => (
                            <div
                              className="table-row-2 rounded-xl pb-4 shadow shadow-color-border_light md:rounded-none md:shadow-none"
                              key={index}
                            >
                              <div className="td id2 md:py-2">
                                <h6 className="font-medium text-color-table_gray">
                                  Id
                                </h6>
                                <CopyToClipboard textToCopy={data.trx_id}>
                                  <p>{data.trx_id.slice(0, 10)} </p>
                                </CopyToClipboard>

                              </div>
                              <div className="td date2 md:py-2">
                                <h6 className="font-medium text-color-table_gray">
                                  Date
                                </h6>
                                <p>{new Date(data.date).toDateString()}</p>
                              </div>
                              <div className="td type2">
                                <h6 className="font-medium text-color-table_gray">
                                  Payment Type
                                </h6>
                                <p>{data.type}</p>
                              </div>
                              <div className="td price2">
                                <h6 className="font-medium text-color-table_gray">
                                  Amount
                                </h6>
                                <p className="lg:text-center">{data.amount}</p>
                              </div>
                              <div className="td message2">
                                <h6 className="text-center font-medium text-color-table_gray">
                                  Status
                                </h6>
                                <button className="group relative w-full cursor-pointer overflow-hidden rounded-3xl bg-[rgba(255,67,130,.1)] py-2 text-color-api-red md:rounded-md">
                                  <span className="absolute left-0 top-0 mt-12 h-20 w-full rounded-3xl bg-inherit transition-all duration-300 ease-in-out group-hover:-mt-4"></span>
                                  <span className="relative">
                                    {data.status}
                                  </span>
                                </button>
                              </div>
                            </div>
                          ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllTransactions;

AllTransactions.getLayout = function getLayout(page) {
  return <UserDashboardLayout>{page}</UserDashboardLayout>;
};
