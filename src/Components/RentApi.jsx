import Link from "next/link";
import CopyToClipboard from "@/Components/Copy";
import { ClipboardDocumentCheckIcon } from "@heroicons/react/24/outline";
import GetText from "@/Components/GetText";
import useAlllangDataStore from "@/store/LangKeyStore";
import useLangStore from "@/store/LangStore";

const RentApi = () => {
  const { AlllangData } = useAlllangDataStore();
  const { langData } = useLangStore();
  const scrollTo = (id) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <section className="bg-color-white py-16 md:py-24">
      <div className="mx-auto w-full max-w-7xl">
        <div className="md:mx-auto md:flex md:items-start md:justify-between md:px-8">
          <aside className="sticky-top sticky hidden max-w-[20rem] flex-1 lg:block">
            <ul className="space-y-2">
              <li>
                <p
                  onClick={() => scrollTo("desc")}
                  className="text-color-primary"
                >
                  {AlllangData ? (
                    <GetText
                      data={AlllangData}
                      keys="Api4Text1"
                      lang={langData}
                    />
                  ) : (
                    <>API Protocol Description</>
                  )}
                </p>
              </li>
              <li>
                <p
                  onClick={() => scrollTo("point_1")}
                  className="text-color-primary"
                >
                  {AlllangData ? (
                    <GetText
                      data={AlllangData}
                      keys="Api4Text2"
                      lang={langData}
                    />
                  ) : (
                    <>Balance request</>
                  )}
                </p>
              </li>
              <li>
                <p
                  onClick={() => scrollTo("point_2")}
                  className="text-color-primary"
                >
                  {AlllangData ? (
                    <GetText
                      data={AlllangData}
                      keys="Api4Text3"
                      lang={langData}
                    />
                  ) : (
                    <>Get list of all countries</>
                  )}
                </p>
              </li>
              <li>
                <p
                  onClick={() => scrollTo("point_3")}
                  className="text-color-primary"
                >
                  {AlllangData ? (
                    <GetText
                      data={AlllangData}
                      keys="Api4Text4"
                      lang={langData}
                    />
                  ) : (
                    <>Ordering a number to rent</>
                  )}
                </p>
              </li>
              <li>
                <p
                  onClick={() => scrollTo("point_4")}
                  className="text-color-primary"
                >
                  {AlllangData ? (
                    <GetText
                      data={AlllangData}
                      keys="Api4Text5"
                      lang={langData}
                    />
                  ) : (
                    <>Change status</>
                  )}
                </p>
              </li>
              <li>
                <p
                  onClick={() => scrollTo("point_5")}
                  className="text-color-primary"
                >
                  {AlllangData ? (
                    <GetText
                      data={AlllangData}
                      keys="Api4Text6"
                      lang={langData}
                    />
                  ) : (
                    <>Receive the last text message</>
                  )}
                </p>
              </li>
              <li>
                <p
                  onClick={() => scrollTo("point_6")}
                  className="text-color-primary"
                >
                  {AlllangData ? (
                    <GetText
                      data={AlllangData}
                      keys="Api4Text7"
                      lang={langData}
                    />
                  ) : (
                    <>Receive all sms</>
                  )}
                </p>
              </li>
              <li>
                <p
                  onClick={() => scrollTo("point_7")}
                  className="text-color-primary"
                >
                  {AlllangData ? (
                    <GetText
                      data={AlllangData}
                      keys="Api4Text8"
                      lang={langData}
                    />
                  ) : (
                    <>Get list of all numbers</>
                  )}
                </p>
              </li>
            </ul>
          </aside>
          <div className="space-y-4 px-4 md:flex-1 md:px-0 lg:px-12">
            <h2 className="text-center text-2xl font-extrabold md:text-left md:text-3xl">
              {AlllangData ? (
                <GetText data={AlllangData} keys="Api4Text10" lang={langData} />
              ) : (
                <>Rent API</>
              )}
            </h2>
            <p className="text-sm md:text-base">
              {AlllangData ? (
                <GetText data={AlllangData} keys="Api4Text11" lang={langData} />
              ) : (
                <>
                  API is the protocol for communication between your software
                  and our number rental server.
                </>
              )}
            </p>
            <h3
              id="desc"
              className="text-center text-xl font-extrabold md:text-left"
            >
              {AlllangData ? (
                <GetText data={AlllangData} keys="Api4Text12" lang={langData} />
              ) : (
                <>API Protocol Description</>
              )}
            </h3>
            <p className="text-sm md:text-base">
              All requests must go to http://api.diginums.com/rent-api/ GET
              request. All requests must include the API key as a parameter
              token All answers are in json format.
            </p>
            <h3
              id="point_1"
              className="text-center text-xl font-extrabold md:text-left"
            >
              {AlllangData ? (
                <GetText data={AlllangData} keys="Api4Text13" lang={langData} />
              ) : (
                <>Balance request</>
              )}
            </h3>
            <p className="flex space-x-2">
              <Link
                href="/"
                className="text-sm text-color-api-red md:text-base"
              >
                http://api.diginums.com/control/get-balance?token=$token
              </Link>
              <CopyToClipboard textToCopy="http://api.diginums.com/control/get-balance?token=$token">
                <ClipboardDocumentCheckIcon
                  width={20}
                  className="cursor-pointer text-color-primary"
                />
              </CopyToClipboard>
            </p>
            <h4 className="text-center font-extrabold md:text-left">
              {AlllangData ? (
                <GetText data={AlllangData} keys="Api4Text14" lang={langData} />
              ) : (
                <>Parameters</>
              )}
            </h4>
            <div className="api-box rounded-xl border border-[#dbebff] bg-color-bg_light">
              <table className="api-table w-full table-fixed text-left">
                <thead>
                  <tr>
                    <th className="pb-2">
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys="Api4Text15"
                          lang={langData}
                        />
                      ) : (
                        <>Parameter</>
                      )}
                    </th>
                    <th className="pb-2">
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys="Api4Text16"
                          lang={langData}
                        />
                      ) : (
                        <>Type</>
                      )}
                    </th>
                    <th className="pb-2">
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys="Api4Text17"
                          lang={langData}
                        />
                      ) : (
                        <>Required</>
                      )}
                    </th>
                    <th className="pb-2">
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys="Api4Text18"
                          lang={langData}
                        />
                      ) : (
                        <>Value</>
                      )}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-t border-color-border_light py-1">
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys="Api4Text19"
                          lang={langData}
                        />
                      ) : (
                        <>token</>
                      )}
                    </td>
                    <td className="border-t border-color-border_light py-1">
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys="Api4Text20"
                          lang={langData}
                        />
                      ) : (
                        <>String</>
                      )}
                    </td>
                    <td className="border-t border-color-border_light py-1">
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys="Api4Text21"
                          lang={langData}
                        />
                      ) : (
                        <>yes</>
                      )}
                    </td>
                    <td className="border-t border-color-border_light py-1">
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys="Api4Text22"
                          lang={langData}
                        />
                      ) : (
                        <>Your API key</>
                      )}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h4 className="text-center font-extrabold md:text-left">
              {AlllangData ? (
                <GetText data={AlllangData} keys="Api4Text23" lang={langData} />
              ) : (
                <>Result</>
              )}
            </h4>
            <div className="api-box rounded-xl border border-[#dbebff] bg-color-bg_light">
              <div>
                <strong>
                  {AlllangData ? (
                    <GetText
                      data={AlllangData}
                      keys="Api4Text24"
                      lang={langData}
                    />
                  ) : (
                    <>&quot;balanc799.70&quot;</>
                  )}
                </strong>
              </div>
            </div>
            <h4 className="text-center font-extrabold md:text-left">
              {AlllangData ? (
                <GetText data={AlllangData} keys="Api4Text25" lang={langData} />
              ) : (
                <>Possible errors</>
              )}
            </h4>
            <div className="api-box rounded-xl border border-[#dbebff] bg-color-bg_light">
              <div>
                <strong>
                  {AlllangData ? (
                    <GetText
                      data={AlllangData}
                      keys="Api4Text26"
                      lang={langData}
                    />
                  ) : (
                    <>some textx</>
                  )}
                </strong>
              </div>
            </div>
            <h3
              id="point_2"
              className="text-center text-xl font-extrabold md:text-left"
            >
              {AlllangData ? (
                <GetText data={AlllangData} keys="Api4Text27" lang={langData} />
              ) : (
                <>Get list of all countries</>
              )}
            </h3>
            <Link href="/" className="text-sm text-color-api-red md:text-base">
              http://api.diginums.com/control/limits
            </Link>
            <CopyToClipboard textToCopy="http://api.diginums.com/control/limits">
              <ClipboardDocumentCheckIcon
                width={20}
                className="cursor-pointer text-color-primary"
              />
            </CopyToClipboard>
            <h4 className="text-center font-extrabold md:text-left">
              {AlllangData ? (
                <GetText data={AlllangData} keys="Api4Text28" lang={langData} />
              ) : (
                <>Parameters</>
              )}
            </h4>
            <div className="api-box rounded-xl border border-[#dbebff] bg-color-bg_light">
              <table className="api-table w-full table-fixed text-left">
                <thead>
                  <tr>
                    <th className="pb-2">
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys="Api4Text29"
                          lang={langData}
                        />
                      ) : (
                        <>Field</>
                      )}
                    </th>
                    <th className="pb-2">
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys="Api4Text30"
                          lang={langData}
                        />
                      ) : (
                        <>Type</>
                      )}
                    </th>
                    <th className="pb-2">
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys="Api4Text31"
                          lang={langData}
                        />
                      ) : (
                        <>Required</>
                      )}
                    </th>
                    <th className="pb-2">
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys="Api4Text32"
                          lang={langData}
                        />
                      ) : (
                        <>Value</>
                      )}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-t border-color-border_light py-1">
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys="Api4Text33"
                          lang={langData}
                        />
                      ) : (
                        <>token</>
                      )}
                    </td>
                    <td className="border-t border-color-border_light py-1">
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys="Api4Text34"
                          lang={langData}
                        />
                      ) : (
                        <>String</>
                      )}
                    </td>
                    <td className="border-t border-color-border_light py-1">
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys="Api4Text35"
                          lang={langData}
                        />
                      ) : (
                        <>yes</>
                      )}
                    </td>
                    <td className="border-t border-color-border_light py-1">
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys="Api4Text36"
                          lang={langData}
                        />
                      ) : (
                        <>Your API key</>
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td className="border-t border-color-border_light py-1">
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys="Api4Text37"
                          lang={langData}
                        />
                      ) : (
                        <>country_id</>
                      )}
                    </td>
                    <td className="border-t border-color-border_light py-1">
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys="Api4Text38"
                          lang={langData}
                        />
                      ) : (
                        <>Integer</>
                      )}
                    </td>
                    <td className="border-t border-color-border_light py-1">
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys="Api4Text39"
                          lang={langData}
                        />
                      ) : (
                        <>Yes</>
                      )}
                    </td>
                    <td className="border-t border-color-border_light py-1">
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys="Api4Text40"
                          lang={langData}
                        />
                      ) : (
                        <>Number country</>
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td className="border-t border-color-border_light py-1">
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys="Api4Text41"
                          lang={langData}
                        />
                      ) : (
                        <>type</>
                      )}
                    </td>
                    <td className="border-t border-color-border_light py-1">
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys="Api4Text42"
                          lang={langData}
                        />
                      ) : (
                        <>String</>
                      )}
                    </td>
                    <td className="border-t border-color-border_light py-1">
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys="Api4Text43"
                          lang={langData}
                        />
                      ) : (
                        <>Yes</>
                      )}
                    </td>
                    <td className="border-t border-color-border_light py-1">
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys="Api4Text44"
                          lang={langData}
                        />
                      ) : (
                        <>hour / day /week / month</>
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td className="border-t border-color-border_light py-1">
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys="Api4Text45"
                          lang={langData}
                        />
                      ) : (
                        <>time</>
                      )}
                    </td>
                    <td className="border-t border-color-border_light py-1">
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys="Api4Text46"
                          lang={langData}
                        />
                      ) : (
                        <>String</>
                      )}
                    </td>
                    <td className="border-t border-color-border_light py-1">
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys="Api4Text47"
                          lang={langData}
                        />
                      ) : (
                        <>Yes</>
                      )}
                    </td>
                    <td className="border-t border-color-border_light py-1">
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys="Api4Text48"
                          lang={langData}
                        />
                      ) : (
                        <>Rental Time</>
                      )}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h4 className="text-center font-extrabold md:text-left">
              {AlllangData ? (
                <GetText data={AlllangData} keys="Api4Text49" lang={langData} />
              ) : (
                <>Result</>
              )}
            </h4>
            <div className="api-box rounded-xl border border-[#dbebff] bg-color-bg_light">
              <div>
                <strong>
                  {AlllangData ? (
                    <GetText
                      data={AlllangData}
                      keys="Api4Text50"
                      lang={langData}
                    />
                  ) : (
                    <>The result</>
                  )}
                </strong>
              </div>
            </div>
            <h4 className="text-center font-extrabold md:text-left">
              {AlllangData ? (
                <GetText data={AlllangData} keys="Api4Text51" lang={langData} />
              ) : (
                <>Possible errors</>
              )}
            </h4>
            <div className="api-box rounded-xl border border-[#dbebff] bg-color-bg_light">
              <div>
                <Link
                  href="/"
                  className="text-sm text-color-api-red md:text-base"
                >
                  http://api.diginums.com/control/get-number
                </Link>
                <CopyToClipboard textToCopy="http://api.diginums.com/control/get-number">
                  <ClipboardDocumentCheckIcon
                    width={20}
                    className="cursor-pointer text-color-primary"
                  />
                </CopyToClipboard>
              </div>
            </div>
            <h3
              id="point_3"
              className="text-center text-xl font-extrabold md:text-left"
            >
              {AlllangData ? (
                <GetText data={AlllangData} keys="Api4Text52" lang={langData} />
              ) : (
                <>Ordering a number to rent</>
              )}
            </h3>
            <p>link***</p>
            <h4 className="text-center font-extrabold md:text-left">
              {AlllangData ? (
                <GetText data={AlllangData} keys="Api4Text53" lang={langData} />
              ) : (
                <>Parameters</>
              )}
            </h4>
            <div className="api-box rounded-xl border border-[#dbebff] bg-color-bg_light">
              <table className="api-table w-full table-fixed text-left">
                <thead>
                  <tr>
                    <th className="pb-2">
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys="Api4Text54"
                          lang={langData}
                        />
                      ) : (
                        <>Parameter</>
                      )}
                    </th>
                    <th className="pb-2">
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys="Api4Text55"
                          lang={langData}
                        />
                      ) : (
                        <>Type</>
                      )}
                    </th>
                    <th className="pb-2">
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys="Api4Text56"
                          lang={langData}
                        />
                      ) : (
                        <>Required</>
                      )}
                    </th>
                    <th className="pb-2">
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys="Api4Text57"
                          lang={langData}
                        />
                      ) : (
                        <>Value</>
                      )}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-t border-color-border_light py-1">
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys="Api4Text58"
                          lang={langData}
                        />
                      ) : (
                        <>token</>
                      )}
                    </td>
                    <td className="border-t border-color-border_light py-1">
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys="Api4Text59"
                          lang={langData}
                        />
                      ) : (
                        <>String</>
                      )}
                    </td>
                    <td className="border-t border-color-border_light py-1">
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys="Api4Text60"
                          lang={langData}
                        />
                      ) : (
                        <>yes</>
                      )}
                    </td>
                    <td className="border-t border-color-border_light py-1">
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys="Api4Text61"
                          lang={langData}
                        />
                      ) : (
                        <>Your API key</>
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td className="border-t border-color-border_light py-1">
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys="Api4Text62"
                          lang={langData}
                        />
                      ) : (
                        <>country_id</>
                      )}
                    </td>
                    <td className="border-t border-color-border_light py-1">
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys="Api4Text63"
                          lang={langData}
                        />
                      ) : (
                        <>Integer</>
                      )}
                    </td>
                    <td className="border-t border-color-border_light py-1">
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys="Api4Text64"
                          lang={langData}
                        />
                      ) : (
                        <>no</>
                      )}
                    </td>
                    <td className="border-t border-color-border_light py-1">
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys="Api4Text65"
                          lang={langData}
                        />
                      ) : (
                        <>Number country</>
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td className="border-t border-color-border_light py-1">
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys="Api4Text66"
                          lang={langData}
                        />
                      ) : (
                        <>type</>
                      )}
                    </td>
                    <td className="border-t border-color-border_light py-1">
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys="Api4Text67"
                          lang={langData}
                        />
                      ) : (
                        <>String</>
                      )}
                    </td>
                    <td className="border-t border-color-border_light py-1">
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys="Api4Text68"
                          lang={langData}
                        />
                      ) : (
                        <>Yes</>
                      )}
                    </td>
                    <td className="border-t border-color-border_light py-1">
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys="Api4Text69"
                          lang={langData}
                        />
                      ) : (
                        <>hour / day /week / month</>
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td className="border-t border-color-border_light py-1">
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys="Api4Text70"
                          lang={langData}
                        />
                      ) : (
                        <>time</>
                      )}
                    </td>
                    <td className="border-t border-color-border_light py-1">
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys="Api4Text71"
                          lang={langData}
                        />
                      ) : (
                        <>String</>
                      )}
                    </td>
                    <td className="border-t border-color-border_light py-1">
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys="Api4Text72"
                          lang={langData}
                        />
                      ) : (
                        <>Yes</>
                      )}
                    </td>
                    <td className="border-t border-color-border_light py-1">
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys="Api4Text73"
                          lang={langData}
                        />
                      ) : (
                        <>Rental Time</>
                      )}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h4 className="text-center font-extrabold md:text-left">
              {AlllangData ? (
                <GetText data={AlllangData} keys="Api4Text74" lang={langData} />
              ) : (
                <>Result</>
              )}
            </h4>
            <div className="api-box rounded-xl border border-[#dbebff] bg-color-bg_light">
              <div>
                <strong>
                  {AlllangData ? (
                    <GetText
                      data={AlllangData}
                      keys="Api4Text75"
                      lang={langData}
                    />
                  ) : (
                    <>The result</>
                  )}
                </strong>
              </div>
            </div>
            <h4 className="text-center font-extrabold md:text-left">
              {AlllangData ? (
                <GetText data={AlllangData} keys="Api4Text76" lang={langData} />
              ) : (
                <>Possible errors</>
              )}
            </h4>
            <div className="api-box rounded-xl border border-[#dbebff] bg-color-bg_light">
              <div>
                <Link
                  href="/"
                  className="text-sm text-color-api-red md:text-base"
                >
                  http://api.diginums.com/control/get-sms
                </Link>
                <CopyToClipboard textToCopy="http://api.diginums.com/control/get-sms">
                  <ClipboardDocumentCheckIcon
                    width={20}
                    className="cursor-pointer text-color-primary"
                  />
                </CopyToClipboard>
              </div>
            </div>
            <h3
              id="point_4"
              className="text-center text-xl font-extrabold md:text-left"
            >
              {AlllangData ? (
                <GetText data={AlllangData} keys="Api4Text77" lang={langData} />
              ) : (
                <>Change status</>
              )}
            </h3>
            <p>link**</p>
            <h4 className="text-center font-extrabold md:text-left">
              {AlllangData ? (
                <GetText data={AlllangData} keys="Api4Text78" lang={langData} />
              ) : (
                <>Parameters</>
              )}
            </h4>
            <div className="api-box rounded-xl border border-[#dbebff] bg-color-bg_light">
              <table className="api-table w-full table-fixed text-left">
                <thead>
                  <tr>
                    <th className="pb-2">
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys="Api4Text79"
                          lang={langData}
                        />
                      ) : (
                        <>Parameter</>
                      )}
                    </th>
                    <th className="pb-2">
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys="Api4Text80"
                          lang={langData}
                        />
                      ) : (
                        <>Type</>
                      )}
                    </th>
                    <th className="pb-2">
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys="Api4Text81"
                          lang={langData}
                        />
                      ) : (
                        <>Required</>
                      )}
                    </th>
                    <th className="pb-2">
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys="Api4Text82"
                          lang={langData}
                        />
                      ) : (
                        <>Value</>
                      )}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-t border-color-border_light py-1">
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys="Api4Text83"
                          lang={langData}
                        />
                      ) : (
                        <>token</>
                      )}
                    </td>
                    <td className="border-t border-color-border_light py-1">
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys="Api4Text84"
                          lang={langData}
                        />
                      ) : (
                        <>String</>
                      )}
                    </td>
                    <td className="border-t border-color-border_light py-1">
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys="Api4Text85"
                          lang={langData}
                        />
                      ) : (
                        <>yes</>
                      )}
                    </td>
                    <td className="border-t border-color-border_light py-1">
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys="Api4Text86"
                          lang={langData}
                        />
                      ) : (
                        <>Your API key</>
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td className="border-t border-color-border_light py-1">
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys="Api4Text87"
                          lang={langData}
                        />
                      ) : (
                        <>request_id</>
                      )}
                    </td>
                    <td className="border-t border-color-border_light py-1">
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys="Api4Text88"
                          lang={langData}
                        />
                      ) : (
                        <>Integer</>
                      )}
                    </td>
                    <td className="border-t border-color-border_light py-1">
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys="Api4Text89"
                          lang={langData}
                        />
                      ) : (
                        <>yes</>
                      )}
                    </td>
                    <td className="border-t border-color-border_light py-1">
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys="Api4Text90"
                          lang={langData}
                        />
                      ) : (
                        <>Request ID</>
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td className="border-t border-color-border_light py-1">
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys="Api4Text91"
                          lang={langData}
                        />
                      ) : (
                        <>status</>
                      )}
                    </td>
                    <td className="border-t border-color-border_light py-1">
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys="Api4Text92"
                          lang={langData}
                        />
                      ) : (
                        <>String</>
                      )}
                    </td>
                    <td className="border-t border-color-border_light py-1">
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys="Api4Text93"
                          lang={langData}
                        />
                      ) : (
                        <>yes</>
                      )}
                    </td>
                    <td className="border-t border-color-border_light py-1">
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys="Api4Text94"
                          lang={langData}
                        />
                      ) : (
                        <>
                          cancel - cancel of the rent (in the first 20 minutes
                          if number has received no SMS) / close - terminate the
                          rent
                        </>
                      )}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h4 className="text-center font-extrabold md:text-left">
              {AlllangData ? (
                <GetText data={AlllangData} keys="Api4Text95" lang={langData} />
              ) : (
                <>Result</>
              )}
            </h4>
            <div className="api-box rounded-xl border border-[#dbebff] bg-color-bg_light">
              <div>
                <strong>
                  {AlllangData ? (
                    <GetText
                      data={AlllangData}
                      keys="Api4Text96"
                      lang={langData}
                    />
                  ) : (
                    <>The result</>
                  )}
                </strong>
              </div>
            </div>
            <h4 className="text-center font-extrabold md:text-left">
              {AlllangData ? (
                <GetText data={AlllangData} keys="Api4Text97" lang={langData} />
              ) : (
                <>Possible errors</>
              )}
            </h4>
            <div className="api-box rounded-xl border border-[#dbebff] bg-color-bg_light">
              <div>
                <Link
                  href="/"
                  className="text-sm text-color-api-red md:text-base"
                >
                  http://api.diginums.com/control/get-status
                </Link>
                <CopyToClipboard textToCopy="http://api.diginums.com/control/get-status">
                  <ClipboardDocumentCheckIcon
                    width={20}
                    className="cursor-pointer text-color-primary"
                  />
                </CopyToClipboard>
              </div>
            </div>
            <h3
              id="point_5"
              className="text-center text-xl font-extrabold md:text-left"
            >
              {AlllangData ? (
                <GetText data={AlllangData} keys="Api4Text98" lang={langData} />
              ) : (
                <>Receive the last text message</>
              )}
            </h3>
            <p>link**</p>
            <h4 className="text-center font-extrabold md:text-left">
              {AlllangData ? (
                <GetText data={AlllangData} keys="Api4Text99" lang={langData} />
              ) : (
                <>Parameters</>
              )}
            </h4>
            <div className="api-box rounded-xl border border-[#dbebff] bg-color-bg_light">
              <table className="api-table w-full table-fixed text-left">
                <thead>
                  <tr>
                    <th className="pb-2">
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys="Api4Text100"
                          lang={langData}
                        />
                      ) : (
                        <>Parameter</>
                      )}
                    </th>
                    <th className="pb-2">
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys="Api4Text101"
                          lang={langData}
                        />
                      ) : (
                        <>Type</>
                      )}
                    </th>
                    <th className="pb-2">
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys="Api4Text102"
                          lang={langData}
                        />
                      ) : (
                        <>Required</>
                      )}
                    </th>
                    <th className="pb-2">
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys="Api4Text103"
                          lang={langData}
                        />
                      ) : (
                        <>Value</>
                      )}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-t border-color-border_light py-1">
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys="Api4Text104"
                          lang={langData}
                        />
                      ) : (
                        <>token</>
                      )}
                    </td>
                    <td className="border-t border-color-border_light py-1">
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys="Api4Text105"
                          lang={langData}
                        />
                      ) : (
                        <>String</>
                      )}
                    </td>
                    <td className="border-t border-color-border_light py-1">
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys="Api4Text106"
                          lang={langData}
                        />
                      ) : (
                        <>yes</>
                      )}
                    </td>
                    <td className="border-t border-color-border_light py-1">
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys="Api4Text107"
                          lang={langData}
                        />
                      ) : (
                        <>Your API key</>
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td className="border-t border-color-border_light py-1">
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys="Api4Text108"
                          lang={langData}
                        />
                      ) : (
                        <>request_id</>
                      )}
                    </td>
                    <td className="border-t border-color-border_light py-1">
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys="Api4Text109"
                          lang={langData}
                        />
                      ) : (
                        <>Integer</>
                      )}
                    </td>
                    <td className="border-t border-color-border_light py-1">
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys="Api4Text110"
                          lang={langData}
                        />
                      ) : (
                        <>yes</>
                      )}
                    </td>
                    <td className="border-t border-color-border_light py-1">
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys="Api4Text111"
                          lang={langData}
                        />
                      ) : (
                        <>Request ID</>
                      )}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h4 className="text-center font-extrabold md:text-left">
              {AlllangData ? (
                <GetText
                  data={AlllangData}
                  keys="Api4Text112"
                  lang={langData}
                />
              ) : (
                <>Result</>
              )}
            </h4>
            <div className="api-box rounded-xl border border-[#dbebff] bg-color-bg_light">
              <div>
                <strong>
                  {AlllangData ? (
                    <GetText
                      data={AlllangData}
                      keys="Api4Text113"
                      lang={langData}
                    />
                  ) : (
                    <>The result</>
                  )}
                </strong>
              </div>
            </div>
            <h4 className="text-center font-extrabold md:text-left">
              {AlllangData ? (
                <GetText
                  data={AlllangData}
                  keys="Api4Text114"
                  lang={langData}
                />
              ) : (
                <>Possible errors</>
              )}
            </h4>
            <div className="api-box rounded-xl border border-[#dbebff] bg-color-bg_light">
              <div>
                <Link
                  href="/"
                  className="text-sm text-color-api-red md:text-base"
                >
                  http://api.diginums.com/control/get-price
                </Link>
                <CopyToClipboard textToCopy="http://api.diginums.com/control/get-price">
                  <ClipboardDocumentCheckIcon
                    width={20}
                    className="cursor-pointer text-color-primary"
                  />
                </CopyToClipboard>
              </div>
            </div>
            <h3
              id="point_6"
              className="text-center text-xl font-extrabold md:text-left"
            >
              {AlllangData ? (
                <GetText
                  data={AlllangData}
                  keys="Api4Text115"
                  lang={langData}
                />
              ) : (
                <>Receive all sms</>
              )}
            </h3>
            <p>link</p>
            <h4 className="text-center font-extrabold md:text-left">
              {AlllangData ? (
                <GetText
                  data={AlllangData}
                  keys="Api4Text116"
                  lang={langData}
                />
              ) : (
                <>Parameters</>
              )}
            </h4>
            <div className="api-box rounded-xl border border-[#dbebff] bg-color-bg_light">
              <table className="api-table w-full table-fixed text-left">
                <thead>
                  <tr>
                    <th className="pb-2">
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys="Api4Text117"
                          lang={langData}
                        />
                      ) : (
                        <>Parameter</>
                      )}
                    </th>
                    <th className="pb-2">
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys="Api4Text118"
                          lang={langData}
                        />
                      ) : (
                        <>Type</>
                      )}
                    </th>
                    <th className="pb-2">
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys="Api4Text119"
                          lang={langData}
                        />
                      ) : (
                        <>Required</>
                      )}
                    </th>
                    <th className="pb-2">
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys="Api4Text120"
                          lang={langData}
                        />
                      ) : (
                        <>Value</>
                      )}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-t border-color-border_light py-1">
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys="Api4Text121"
                          lang={langData}
                        />
                      ) : (
                        <>token</>
                      )}
                    </td>
                    <td className="border-t border-color-border_light py-1">
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys="Api4Text122"
                          lang={langData}
                        />
                      ) : (
                        <>String</>
                      )}
                    </td>
                    <td className="border-t border-color-border_light py-1">
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys="Api4Text123"
                          lang={langData}
                        />
                      ) : (
                        <>yes</>
                      )}
                    </td>
                    <td className="border-t border-color-border_light py-1">
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys="Api4Text124"
                          lang={langData}
                        />
                      ) : (
                        <>Your API key</>
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td className="border-t border-color-border_light py-1">
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys="Api4Text125"
                          lang={langData}
                        />
                      ) : (
                        <>request_id</>
                      )}
                    </td>
                    <td className="border-t border-color-border_light py-1">
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys="Api4Text126"
                          lang={langData}
                        />
                      ) : (
                        <>Integer</>
                      )}
                    </td>
                    <td className="border-t border-color-border_light py-1">
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys="Api4Text127"
                          lang={langData}
                        />
                      ) : (
                        <>yes</>
                      )}
                    </td>
                    <td className="border-t border-color-border_light py-1">
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys="Api4Text128"
                          lang={langData}
                        />
                      ) : (
                        <>Request ID</>
                      )}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h4 className="text-center font-extrabold md:text-left">
              {AlllangData ? (
                <GetText
                  data={AlllangData}
                  keys="Api4Text129"
                  lang={langData}
                />
              ) : (
                <>Result</>
              )}
            </h4>
            <div className="api-box rounded-xl border border-[#dbebff] bg-color-bg_light">
              <div>
                <strong>
                  {AlllangData ? (
                    <GetText
                      data={AlllangData}
                      keys="Api4Text130"
                      lang={langData}
                    />
                  ) : (
                    <>The result</>
                  )}
                </strong>
              </div>
            </div>
            <h4 className="text-center font-extrabold md:text-left">
              {AlllangData ? (
                <GetText
                  data={AlllangData}
                  keys="Api4Text131"
                  lang={langData}
                />
              ) : (
                <>Possible errors</>
              )}
            </h4>
            <div className="api-box rounded-xl border border-[#dbebff] bg-color-bg_light">
              <div>
                <Link
                  href="/"
                  className="text-sm text-color-api-red md:text-base"
                >
                  http://api.diginums.com/control/countries
                </Link>
                <CopyToClipboard textToCopy="http://api.diginums.com/control/countries">
                  <ClipboardDocumentCheckIcon
                    width={20}
                    className="cursor-pointer text-color-primary"
                  />
                </CopyToClipboard>
              </div>
            </div>
            <h3
              id="point_7"
              className="text-center text-xl font-extrabold md:text-left"
            >
              {AlllangData ? (
                <GetText
                  data={AlllangData}
                  keys="Api4Text132"
                  lang={langData}
                />
              ) : (
                <>Get list of all numbers</>
              )}
            </h3>
            <p>link**</p>
            <h4 className="text-center font-extrabold md:text-left">
              {AlllangData ? (
                <GetText
                  data={AlllangData}
                  keys="Api4Text133"
                  lang={langData}
                />
              ) : (
                <>Parameters</>
              )}
            </h4>
            <div className="api-box rounded-xl border border-[#dbebff] bg-color-bg_light">
              <table className="api-table w-full table-fixed text-left">
                <thead>
                  <tr>
                    <th className="pb-2">
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys="Api4Text134"
                          lang={langData}
                        />
                      ) : (
                        <>Parameter</>
                      )}
                    </th>
                    <th className="pb-2">
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys="Api4Text135"
                          lang={langData}
                        />
                      ) : (
                        <>Type</>
                      )}
                    </th>
                    <th className="pb-2">
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys="Api4Text136"
                          lang={langData}
                        />
                      ) : (
                        <>Required</>
                      )}
                    </th>
                    <th className="pb-2">
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys="Api4Text137"
                          lang={langData}
                        />
                      ) : (
                        <>Value</>
                      )}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-t border-color-border_light py-1">
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys="Api4Text138"
                          lang={langData}
                        />
                      ) : (
                        <>token</>
                      )}
                    </td>
                    <td className="border-t border-color-border_light py-1">
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys="Api4Text139"
                          lang={langData}
                        />
                      ) : (
                        <>String</>
                      )}
                    </td>
                    <td className="border-t border-color-border_light py-1">
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys="Api4Text140"
                          lang={langData}
                        />
                      ) : (
                        <>yes</>
                      )}
                    </td>
                    <td className="border-t border-color-border_light py-1">
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys="Api4Text141"
                          lang={langData}
                        />
                      ) : (
                        <>Your API key</>
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td className="border-t border-color-border_light py-1">
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys="Api4Text142"
                          lang={langData}
                        />
                      ) : (
                        <>request_id</>
                      )}
                    </td>
                    <td className="border-t border-color-border_light py-1">
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys="Api4Text143"
                          lang={langData}
                        />
                      ) : (
                        <>Integer</>
                      )}
                    </td>
                    <td className="border-t border-color-border_light py-1">
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys="Api4Text144"
                          lang={langData}
                        />
                      ) : (
                        <>yes</>
                      )}
                    </td>
                    <td className="border-t border-color-border_light py-1">
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys="Api4Text145"
                          lang={langData}
                        />
                      ) : (
                        <>Request ID</>
                      )}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h4 className="text-center font-extrabold md:text-left">
              {AlllangData ? (
                <GetText
                  data={AlllangData}
                  keys="Api4Text146"
                  lang={langData}
                />
              ) : (
                <>Result</>
              )}
            </h4>
            <div className="api-box rounded-xl border border-[#dbebff] bg-color-bg_light">
              <div>
                <strong>
                  {AlllangData ? (
                    <GetText
                      data={AlllangData}
                      keys="Api4Text147"
                      lang={langData}
                    />
                  ) : (
                    <>The result</>
                  )}
                </strong>
              </div>
            </div>
            <h4 className="text-center font-extrabold md:text-left">
              {AlllangData ? (
                <GetText
                  data={AlllangData}
                  keys="Api4Text148"
                  lang={langData}
                />
              ) : (
                <>Possible errors</>
              )}
            </h4>
            <div className="api-box rounded-xl border border-[#dbebff] bg-color-bg_light">
              <div>
                <Link
                  href="/"
                  className="text-sm text-color-api-red md:text-base"
                >
                  http://api.diginums.com/control/applications
                </Link>
                <CopyToClipboard textToCopy="http://api.diginums.com/control/applications">
                  <ClipboardDocumentCheckIcon
                    width={20}
                    className="cursor-pointer text-color-primary"
                  />
                </CopyToClipboard>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RentApi;
