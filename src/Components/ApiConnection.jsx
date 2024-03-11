import Link from "next/link";
import CopyToClipboard from "@/Components/Copy";
import { ClipboardDocumentCheckIcon } from "@heroicons/react/24/outline";
import GetText from "@/Components/GetText";
import useAlllangDataStore from "@/store/LangKeyStore";
import useLangStore from "@/store/LangStore";

const ApiConnection = () => {
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
          {/* side links */}
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
                      keys="Api2Text1"
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
                      keys="Api2Text2"
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
                      keys="Api2Text3"
                      lang={langData}
                    />
                  ) : (
                    <>Get limits</>
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
                      keys="Api2Text4"
                      lang={langData}
                    />
                  ) : (
                    <>Request a phone number</>
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
                      keys="Api2Text5"
                      lang={langData}
                    />
                  ) : (
                    <>Get sms</>
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
                      keys="Api2Text6"
                      lang={langData}
                    />
                  ) : (
                    <>Change request status</>
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
                      keys="Api2Text7"
                      lang={langData}
                    />
                  ) : (
                    <>Request for the amount of available numbers</>
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
                      keys="Api2Text8"
                      lang={langData}
                    />
                  ) : (
                    <>Get list of all countries</>
                  )}
                </p>
              </li>
              <li>
                <p
                  onClick={() => scrollTo("point_8")}
                  className="text-color-primary"
                >
                  {AlllangData ? (
                    <GetText
                      data={AlllangData}
                      keys="Api2Text9"
                      lang={langData}
                    />
                  ) : (
                    <>Get list of all services</>
                  )}
                </p>
              </li>
            </ul>
          </aside>
          {/* api instructions */}
          <div className="space-y-4 px-4 md:flex-1 md:px-0 lg:px-12">
            <h2 className="text-center text-2xl font-extrabold md:text-left md:text-3xl">
              {AlllangData ? (
                <GetText data={AlllangData} keys="Api2Text10" lang={langData} />
              ) : (
                <>API v2.0</>
              )}
            </h2>
            <p className="text-sm md:text-base">
              {AlllangData ? (
                <GetText data={AlllangData} keys="Api2Text11" lang={langData} />
              ) : (
                <>
                  API is a protocol of interaction between your software and our
                  activation server. The API is needed in order to automate the
                  process of receiving SMS messages on your side To work with
                  the API, you must use your API key, you can get it by going to
                  the profile page. Our software is fully compatible with
                  competitor sites
                </>
              )}
            </p>
            <h3
              id="desc"
              className="text-center text-xl font-extrabold md:text-left"
            >
              {AlllangData ? (
                <GetText data={AlllangData} keys="Api2Text12" lang={langData} />
              ) : (
                <>API Protocol Description</>
              )}
            </h3>
            <p className="text-sm md:text-base">
              {AlllangData ? (
                <GetText data={AlllangData} keys="Api2Text13" lang={langData} />
              ) : (
                <>
                  All requests should go to POST or GET request. All requests
                  must have an API key in the form of the token parameter
                </>
              )}
            </p>
            <h3
              id="point_1"
              className="text-center text-xl font-extrabold md:text-left"
            >
              {AlllangData ? (
                <GetText data={AlllangData} keys="Api2Text14" lang={langData} />
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
                <GetText data={AlllangData} keys="Api2Text15" lang={langData} />
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
                          keys="Api2Text16"
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
                          keys="Api2Text17"
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
                          keys="Api2Text18"
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
                          keys="Api2Text19"
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
                          keys="Api2Text19a"
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
                          keys="Api2Text19b"
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
                          keys="Api2Text19c"
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
                          keys="Api2Text19d"
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
                <GetText
                  data={AlllangData}
                  keys="Api2Text19e"
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
                      keys="Api2Text19f"
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
                <GetText
                  data={AlllangData}
                  keys="Api2Text19g"
                  lang={langData}
                />
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
                      keys="Api2Text19h"
                      lang={langData}
                    />
                  ) : (
                    <>some text</>
                  )}
                </strong>
              </div>
            </div>
            <h3
              id="point_2"
              className="text-center text-xl font-extrabold md:text-left"
            >
              {AlllangData ? (
                <GetText
                  data={AlllangData}
                  keys="Api2Text19i"
                  lang={langData}
                />
              ) : (
                <>Get limits</>
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
                <GetText data={AlllangData} keys="Api2Text20" lang={langData} />
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
                          keys="Api2Text21"
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
                          keys="Api2Text22"
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
                          keys="Api2Text23"
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
                          keys="Api2Text24"
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
                          keys="Api2Text25"
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
                          keys="Api2Text26"
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
                          keys="Api2Text27"
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
                          keys="Api2Text28"
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
                          keys="Api2Text29"
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
                          keys="Api2Text30"
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
                          keys="Api2Text31"
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
                          keys="Api2Text32"
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
                          keys="Api2Text33"
                          lang={langData}
                        />
                      ) : (
                        <>application_id</>
                      )}
                    </td>
                    <td className="border-t border-color-border_light py-1">
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys="Api2Text34"
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
                          keys="Api2Text35"
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
                          keys="Api2Text36"
                          lang={langData}
                        />
                      ) : (
                        <>Number Service</>
                      )}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h4 className="text-center font-extrabold md:text-left">
              {AlllangData ? (
                <GetText data={AlllangData} keys="Api2Text37" lang={langData} />
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
                      keys="Api2Text38"
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
                <GetText data={AlllangData} keys="Api2Text39" lang={langData} />
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
                <GetText data={AlllangData} keys="Api2Text40" lang={langData} />
              ) : (
                <>Request a phone number</>
              )}
            </h3>
            <p>link</p>
            <h4 className="text-center font-extrabold md:text-left">
              {AlllangData ? (
                <GetText data={AlllangData} keys="Api2Text41" lang={langData} />
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
                          keys="Api2Text42"
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
                          keys="Api2Text43"
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
                          keys="Api2Text44"
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
                          keys="Api2Text45"
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
                          keys="Api2Text46"
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
                          keys="Api2Text47"
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
                          keys="Api2Text48"
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
                          keys="Api2Text49"
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
                          keys="Api2Text50"
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
                          keys="Api2Text51"
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
                          keys="Api2Text52"
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
                          keys="Api2Text53"
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
                          keys="Api2Text54"
                          lang={langData}
                        />
                      ) : (
                        <>application_id</>
                      )}
                    </td>
                    <td className="border-t border-color-border_light py-1">
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys="Api2Text55"
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
                          keys="Api2Text56"
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
                          keys="Api2Text57"
                          lang={langData}
                        />
                      ) : (
                        <>Number Service</>
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td className="border-t border-color-border_light py-1">
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys="Api2Text58"
                          lang={langData}
                        />
                      ) : (
                        <>ref</>
                      )}
                    </td>
                    <td className="border-t border-color-border_light py-1">
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys="Api2Text59"
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
                          keys="Api2Text60"
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
                          keys="Api2Text61"
                          lang={langData}
                        />
                      ) : (
                        <>Pass the referral ID</>
                      )}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h4 className="text-center font-extrabold md:text-left">
              {AlllangData ? (
                <GetText data={AlllangData} keys="Api2Text62" lang={langData} />
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
                      keys="Api2Text63"
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
                <GetText data={AlllangData} keys="Api2Text64" lang={langData} />
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
                <GetText data={AlllangData} keys="Api2Text65" lang={langData} />
              ) : (
                <>Get sms</>
              )}
            </h3>
            <p>
              {AlllangData ? (
                <GetText data={AlllangData} keys="Api2Text66" lang={langData} />
              ) : (
                <>link</>
              )}
            </p>
            <h4 className="text-center font-extrabold md:text-left">
              {AlllangData ? (
                <GetText data={AlllangData} keys="Api2Text67" lang={langData} />
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
                          keys="Api2Text68"
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
                          keys="Api2Text69"
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
                          keys="Api2Text70"
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
                          keys="Api2Text71"
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
                          keys="Api2Text72"
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
                          keys="Api2Text73"
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
                          keys="Api2Text74"
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
                          keys="Api2Text75"
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
                          keys="Api2Text76"
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
                          keys="Api2Text77"
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
                          keys="Api2Text78"
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
                          keys="Api2Text79"
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
                <GetText data={AlllangData} keys="Api2Text80" lang={langData} />
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
                      keys="Api2Text81"
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
                <GetText data={AlllangData} keys="Api2Text82" lang={langData} />
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
                <GetText data={AlllangData} keys="Api2Text83" lang={langData} />
              ) : (
                <>Change request status</>
              )}
            </h3>
            <p>
              {AlllangData ? (
                <GetText data={AlllangData} keys="Api2Text84" lang={langData} />
              ) : (
                <>link</>
              )}
            </p>
            <h4 className="text-center font-extrabold md:text-left">
              {AlllangData ? (
                <GetText data={AlllangData} keys="Api2Text85" lang={langData} />
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
                          keys="Api2Text86"
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
                          keys="Api2Text87"
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
                          keys="Api2Text88"
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
                          keys="Api2Text89"
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
                          keys="Api2Text90"
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
                          keys="Api2Text91"
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
                          keys="Api2Text92"
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
                          keys="Api2Text93"
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
                          keys="Api2Text94"
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
                          keys="Api2Text95"
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
                          keys="Api2Text96"
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
                          keys="Api2Text97"
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
                          keys="Api2Text98"
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
                          keys="Api2Text99"
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
                          keys="Api2Text100"
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
                          keys="Api2Text101"
                          lang={langData}
                        />
                      ) : (
                        <>ready / close / reject / used</>
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
                  keys="Api2Text102"
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
                      keys="Api2Text103"
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
                  keys="Api2Text104"
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
                  keys="Api2Text105"
                  lang={langData}
                />
              ) : (
                <>Request for the amount of available numbers</>
              )}
            </h3>
            <p>link</p>
            <h4 className="text-center font-extrabold md:text-left">
              {AlllangData ? (
                <GetText
                  data={AlllangData}
                  keys="Api2Text106"
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
                          keys="Api2Text107"
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
                          keys="Api2Text108"
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
                          keys="Api2Text109"
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
                          keys="Api2Text110"
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
                          keys="Api2Text111"
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
                          keys="Api2Text112"
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
                          keys="Api2Text113"
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
                          keys="Api2Text114"
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
                          keys="Api2Text115"
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
                          keys="Api2Text116"
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
                          keys="Api2Text117"
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
                          keys="Api2Text118"
                          lang={langData}
                        />
                      ) : (
                        <>Number country</>
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
                  keys="Api2Text119"
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
                      keys="Api2Text120"
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
                  keys="Api2Text121"
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
                  keys="Api2Text122"
                  lang={langData}
                />
              ) : (
                <>Get list of all countries</>
              )}
            </h3>
            <p>link</p>
            <h4 className="text-center font-extrabold md:text-left">
              {AlllangData ? (
                <GetText
                  data={AlllangData}
                  keys="Api2Text123"
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
                          keys="Api2Text124"
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
                          keys="Api2Text125"
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
                          keys="Api2Text126"
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
                          keys="Api2Text127"
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
                          keys="Api2Text128"
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
                          keys="Api2Text129"
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
                          keys="Api2Text130"
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
                          keys="Api2Text131"
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
                <GetText
                  data={AlllangData}
                  keys="Api2Text132"
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
                      keys="Api2Text133"
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
                  keys="Api2Text135"
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
            <h3
              id="point_8"
              className="text-center text-xl font-extrabold md:text-left"
            >
              {AlllangData ? (
                <GetText
                  data={AlllangData}
                  keys="Api2Text135"
                  lang={langData}
                />
              ) : (
                <>Get list of all services</>
              )}
            </h3>
            <p>
              {AlllangData ? (
                <GetText
                  data={AlllangData}
                  keys="Api2Text136"
                  lang={langData}
                />
              ) : (
                <>link</>
              )}
            </p>
            <h4 className="text-center font-extrabold md:text-left">
              {AlllangData ? (
                <GetText
                  data={AlllangData}
                  keys="Api2Text137"
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
                          keys="Api2Text138"
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
                          keys="Api2Text139"
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
                          keys="Api2Text140"
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
                          keys="Api2Text141"
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
                          keys="Api2Text142"
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
                          keys="Api2Text143"
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
                          keys="Api2Text144"
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
                          keys="Api2Text145"
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
                <GetText
                  data={AlllangData}
                  keys="Api2Text146"
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
                      keys="Api2Text147"
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
                  keys="Api2Text148"
                  lang={langData}
                />
              ) : (
                <>Possible errors</>
              )}
            </h4>
            <div className="api-box rounded-xl border border-[#dbebff] bg-color-bg_light">
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApiConnection;
