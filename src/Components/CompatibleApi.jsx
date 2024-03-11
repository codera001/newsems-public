import Link from "next/link";
import CopyToClipboard from "@/Components/Copy";
import { ClipboardDocumentCheckIcon } from "@heroicons/react/24/outline";
import GetText from "@/Components/GetText";
import useAlllangDataStore from "@/store/LangKeyStore";
import useLangStore from "@/store/LangStore";

const CompatibleApi = () => {
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
                      keys="Api3Text1"
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
                      keys="Api3Text2"
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
                      keys="Api3Text3"
                      lang={langData}
                    />
                  ) : (
                    <>Request for the amount of available numbers</>
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
                      keys="Api3Text4"
                      lang={langData}
                    />
                  ) : (
                    <>Get number</>
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
                      keys="Api3Text5"
                      lang={langData}
                    />
                  ) : (
                    <>Get activation status</>
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
                      keys="Api3Text6"
                      lang={langData}
                    />
                  ) : (
                    <>Change the activation status</>
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
                      keys="Api3Text7"
                      lang={langData}
                    />
                  ) : (
                    <>Get list of all countries</>
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
                      keys="Api3Text8"
                      lang={langData}
                    />
                  ) : (
                    <>Get list of all services</>
                  )}
                </p>
              </li>
            </ul>
          </aside>
          <div className="space-y-4 px-4 md:flex-1 md:px-0 lg:px-12">
            <h2 className="text-center text-2xl font-extrabold md:text-left md:text-3xl">
              {AlllangData ? (
                <GetText data={AlllangData} keys="Api3Text10" lang={langData} />
              ) : (
                <>Compatible API</>
              )}
            </h2>
            <p className="text-sm md:text-base">
              {AlllangData ? (
                <GetText data={AlllangData} keys="Api3Text11" lang={langData} />
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
                <GetText data={AlllangData} keys="Api3Text12" lang={langData} />
              ) : (
                <>API Protocol Description</>
              )}
            </h3>
            <p className="text-sm md:text-base">
              All requests must go to
              http://api.sms-man.com/stubs/handler_api.php POST or GET request.
              All requests must contain the API key in the form of the parameter
              api_key. All answers in json format
            </p>
            <h3
              id="point_1"
              className="text-center text-xl font-extrabold md:text-left"
            >
              {AlllangData ? (
                <GetText data={AlllangData} keys="Api3Text13" lang={langData} />
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
                <GetText data={AlllangData} keys="Api3Text14" lang={langData} />
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
                          keys="Api3Text15"
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
                          keys="Api3Text16"
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
                          keys="Api3Text17"
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
                          keys="Api3Text18"
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
                          keys="Api3Text19"
                          lang={langData}
                        />
                      ) : (
                        <>action</>
                      )}
                    </td>
                    <td className="border-t border-color-border_light py-1">
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys="Api3Text20"
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
                          keys="Api3Text21"
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
                          keys="Api3Text22"
                          lang={langData}
                        />
                      ) : (
                        <>getBalance</>
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td className="border-t border-color-border_light py-1">
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys="Api3Text23"
                          lang={langData}
                        />
                      ) : (
                        <>api_key</>
                      )}
                    </td>
                    <td className="border-t border-color-border_light py-1">
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys="Api3Text24"
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
                          keys="Api3Text25"
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
                          keys="Api3Text26"
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
                <GetText data={AlllangData} keys="Api3Text27" lang={langData} />
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
                      keys="Api3Text28"
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
                <GetText data={AlllangData} keys="Api3Text29" lang={langData} />
              ) : (
                <>Possible errors</>
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
                          keys="Api3Text30"
                          lang={langData}
                        />
                      ) : (
                        <>Error</>
                      )}
                    </th>
                    <th className="pb-2">
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys="Api3Text31"
                          lang={langData}
                        />
                      ) : (
                        <>Description</>
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
                          keys="Api3Text32"
                          lang={langData}
                        />
                      ) : (
                        <>BAD_KEY</>
                      )}
                    </td>
                    <td className="border-t border-color-border_light py-1">
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys="Api3Text33"
                          lang={langData}
                        />
                      ) : (
                        <>Incorrect API key</>
                      )}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h3
              id="point_2"
              className="text-center text-xl font-extrabold md:text-left"
            >
              {AlllangData ? (
                <GetText data={AlllangData} keys="Api3Text34" lang={langData} />
              ) : (
                <>Request for the amount of available numbers</>
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
                <GetText data={AlllangData} keys="Api3Text35" lang={langData} />
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
                          keys="Api3Text36"
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
                          keys="Api3Text37"
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
                          keys="Api3Text38"
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
                          keys="Api3Text39"
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
                          keys="Api3Text40"
                          lang={langData}
                        />
                      ) : (
                        <>action</>
                      )}
                    </td>
                    <td className="border-t border-color-border_light py-1">
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys="Api3Text41"
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
                          keys="Api3Text42"
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
                          keys="Api3Text43"
                          lang={langData}
                        />
                      ) : (
                        <>getPrices</>
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td className="border-t border-color-border_light py-1">
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys="Api3Text44"
                          lang={langData}
                        />
                      ) : (
                        <>api_key</>
                      )}
                    </td>
                    <td className="border-t border-color-border_light py-1">
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys="Api3Text45"
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
                          keys="Api3Text46"
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
                          keys="Api3Text47"
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
                          keys="Api3Text48"
                          lang={langData}
                        />
                      ) : (
                        <>country</>
                      )}
                    </td>
                    <td className="border-t border-color-border_light py-1">
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys="Api3Text49"
                          lang={langData}
                        />
                      ) : (
                        <>Number</>
                      )}
                    </td>
                    <td className="border-t border-color-border_light py-1">
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys="Api3Text50"
                          lang={langData}
                        />
                      ) : (
                        <>No</>
                      )}
                    </td>
                    <td className="border-t border-color-border_light py-1">
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys="Api3Text51"
                          lang={langData}
                        />
                      ) : (
                        <>Number Country</>
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td className="border-t border-color-border_light py-1">
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys="Api3Text52"
                          lang={langData}
                        />
                      ) : (
                        <>Service</>
                      )}
                    </td>
                    <td className="border-t border-color-border_light py-1">
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys="Api3Text53"
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
                          keys="Api3Text54"
                          lang={langData}
                        />
                      ) : (
                        <>No</>
                      )}
                    </td>
                    <td className="border-t border-color-border_light py-1">
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys="Api3Text55"
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
                <GetText data={AlllangData} keys="Api3Text56" lang={langData} />
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
                      keys="Api3Text57"
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
                <GetText data={AlllangData} keys="Api3Text58" lang={langData} />
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
                <GetText data={AlllangData} keys="Api3Text59" lang={langData} />
              ) : (
                <>Get number</>
              )}
            </h3>
            <p>link****</p>
            <h4 className="text-center font-extrabold md:text-left">
              {AlllangData ? (
                <GetText data={AlllangData} keys="Api3Text60" lang={langData} />
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
                          keys="Api3Text61"
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
                          keys="Api3Text62"
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
                          keys="Api3Text63"
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
                          keys="Api3Text64"
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
                          keys="Api3Text65"
                          lang={langData}
                        />
                      ) : (
                        <>action</>
                      )}
                    </td>
                    <td className="border-t border-color-border_light py-1">
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys="Api3Text66"
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
                          keys="Api3Text67"
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
                          keys="Api3Text68"
                          lang={langData}
                        />
                      ) : (
                        <>getNumber</>
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td className="border-t border-color-border_light py-1">
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys="Api3Text69"
                          lang={langData}
                        />
                      ) : (
                        <>api_key</>
                      )}
                    </td>
                    <td className="border-t border-color-border_light py-1">
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys="Api3Text70"
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
                          keys="Api3Text71"
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
                          keys="Api3Text72"
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
                          keys="Api3Text73"
                          lang={langData}
                        />
                      ) : (
                        <>country</>
                      )}
                    </td>
                    <td className="border-t border-color-border_light py-1">
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys="Api3Text74"
                          lang={langData}
                        />
                      ) : (
                        <>Number</>
                      )}
                    </td>
                    <td className="border-t border-color-border_light py-1">
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys="Api3Text75"
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
                          keys="Api3Text76"
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
                          keys="Api3Text77"
                          lang={langData}
                        />
                      ) : (
                        <>service</>
                      )}
                    </td>
                    <td className="border-t border-color-border_light py-1">
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys="Api3Text78"
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
                          keys="Api3Text79"
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
                          keys="Api3Text80"
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
                          keys="Api3Text81"
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
                          keys="Api3Text82"
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
                          keys="Api3Text83"
                          lang={langData}
                        />
                      ) : (
                        <>No</>
                      )}
                    </td>
                    <td className="border-t border-color-border_light py-1">
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys="Api3Text84"
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
                <GetText data={AlllangData} keys="Api3Text85" lang={langData} />
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
                      keys="Api3Text86"
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
                <GetText data={AlllangData} keys="Api3Text87" lang={langData} />
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
                <GetText data={AlllangData} keys="Api3Text88" lang={langData} />
              ) : (
                <>Get activation status</>
              )}
            </h3>
            <p>link ***</p>
            <h4 className="text-center font-extrabold md:text-left">
              {AlllangData ? (
                <GetText data={AlllangData} keys="Api3Text89" lang={langData} />
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
                          keys="Api3Text90"
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
                          keys="Api3Text91"
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
                          keys="Api3Text92"
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
                          keys="Api3Text93"
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
                          keys="Api3Text94"
                          lang={langData}
                        />
                      ) : (
                        <>action</>
                      )}
                    </td>
                    <td className="border-t border-color-border_light py-1">
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys="Api3Text95"
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
                          keys="Api3Text96"
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
                          keys="Api3Text97"
                          lang={langData}
                        />
                      ) : (
                        <>getNumber</>
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td className="border-t border-color-border_light py-1">
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys="Api3Text98"
                          lang={langData}
                        />
                      ) : (
                        <>api_key</>
                      )}
                    </td>
                    <td className="border-t border-color-border_light py-1">
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys="Api3Text99"
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
                          keys="Api3Text100"
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
                          keys="Api3Text101"
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
                          keys="Api3Text102"
                          lang={langData}
                        />
                      ) : (
                        <>id</>
                      )}
                    </td>
                    <td className="border-t border-color-border_light py-1">
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys="Api3Text103"
                          lang={langData}
                        />
                      ) : (
                        <>Number</>
                      )}
                    </td>
                    <td className="border-t border-color-border_light py-1">
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys="Api3Text104"
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
                          keys="Api3Text105"
                          lang={langData}
                        />
                      ) : (
                        <>Activation id</>
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
                  keys="Api3Text106"
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
                      keys="Api3Text107"
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
                  keys="Api3Text108"
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
                <GetText
                  data={AlllangData}
                  keys="Api3Text109"
                  lang={langData}
                />
              ) : (
                <>Change the activation status</>
              )}
            </h3>
            <p>link*****</p>
            <h4 className="text-center font-extrabold md:text-left">
              {AlllangData ? (
                <GetText
                  data={AlllangData}
                  keys="Api3Text110"
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
                          keys="Api3Text111"
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
                          keys="Api3Text112"
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
                          keys="Api3Text113"
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
                          keys="Api3Text114"
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
                          keys="Api3Text115"
                          lang={langData}
                        />
                      ) : (
                        <>action</>
                      )}
                    </td>
                    <td className="border-t border-color-border_light py-1">
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys="Api3Text116"
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
                          keys="Api3Text117"
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
                          keys="Api3Text118"
                          lang={langData}
                        />
                      ) : (
                        <>set Status</>
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td className="border-t border-color-border_light py-1">
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys="Api3Text119"
                          lang={langData}
                        />
                      ) : (
                        <>api_key</>
                      )}
                    </td>
                    <td className="border-t border-color-border_light py-1">
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys="Api3Text120"
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
                          keys="Api3Text121"
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
                          keys="Api3Text122"
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
                          keys="Api3Text123"
                          lang={langData}
                        />
                      ) : (
                        <>id</>
                      )}
                    </td>
                    <td className="border-t border-color-border_light py-1">
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys="Api3Text124"
                          lang={langData}
                        />
                      ) : (
                        <>Number</>
                      )}
                    </td>
                    <td className="border-t border-color-border_light py-1">
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys="Api3Text125"
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
                          keys="Api3Text126"
                          lang={langData}
                        />
                      ) : (
                        <>Activation id</>
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td className="border-t border-color-border_light py-1">
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys="Api3Text127"
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
                          keys="Api3Text128"
                          lang={langData}
                        />
                      ) : (
                        <>Number</>
                      )}
                    </td>
                    <td className="border-t border-color-border_light py-1">
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys="Api3Text129"
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
                          keys="Api3Text130"
                          lang={langData}
                        />
                      ) : (
                        <>Activation status</>
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
                  keys="Api3Text131"
                  lang={langData}
                />
              ) : (
                <>Possible statuses</>
              )}
            </h4>
            <div className="api-box rounded-xl border border-[#dbebff] bg-color-bg_light">
              <div>
                <div>
                  <strong>-1</strong>
                  {AlllangData ? (
                    <GetText
                      data={AlllangData}
                      keys="Api3Text132"
                      lang={langData}
                    />
                  ) : (
                    <>— Cancel activation</>
                  )}
                </div>
                <div>
                  <strong>1</strong>
                  {AlllangData ? (
                    <GetText
                      data={AlllangData}
                      keys="Api3Text133"
                      lang={langData}
                    />
                  ) : (
                    <>— Notify that SMS is sent (optional)</>
                  )}
                </div>
              </div>
              <div>
                <strong>3</strong>
                {AlllangData ? (
                  <GetText
                    data={AlllangData}
                    keys="Api3Text134"
                    lang={langData}
                  />
                ) : (
                  <>— Request another code (free)</>
                )}
              </div>
              <div>
                <strong>6</strong> — complete the activation (if the status was
                &quot;code received&quot; - marks success and completes, if the
                status was &quot;preparation&quot; - deletes and marks error, if
                the status was &quot;waiting for repeat&quot; - translates
                activation to waiting for SMS)
              </div>
              <div>
                <strong>8</strong>
                {AlllangData ? (
                  <GetText
                    data={AlllangData}
                    keys="Api3Text136"
                    lang={langData}
                  />
                ) : (
                  <>— informs that the number is used and cancels activation</>
                )}
              </div>
            </div>
            <h4 className="text-center font-extrabold md:text-left">
              {AlllangData ? (
                <GetText
                  data={AlllangData}
                  keys="Api3Text136a"
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
                      keys="Api3Text137"
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
                  keys="Api3Text138"
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
                  keys="Api3Text139"
                  lang={langData}
                />
              ) : (
                <>Get list of all countries</>
              )}
            </h3>
            <p>link**</p>
            <h4 className="text-center font-extrabold md:text-left">
              {AlllangData ? (
                <GetText
                  data={AlllangData}
                  keys="Api3Text140"
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
                          keys="Api3Text141"
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
                          keys="Api3Text142"
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
                          keys="Api3Text143"
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
                          keys="Api3Text144"
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
                          keys="Api3Text145"
                          lang={langData}
                        />
                      ) : (
                        <>action</>
                      )}
                    </td>
                    <td className="border-t border-color-border_light py-1">
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys="Api3Text146"
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
                          keys="Api3Text147"
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
                          keys="Api3Text148"
                          lang={langData}
                        />
                      ) : (
                        <>getCountries</>
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td className="border-t border-color-border_light py-1">
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys="Api3Text149"
                          lang={langData}
                        />
                      ) : (
                        <>api_key</>
                      )}
                    </td>
                    <td className="border-t border-color-border_light py-1">
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys="Api3Text150"
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
                          keys="Api3Text151"
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
                          keys="Api3Text152"
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
                  keys="Api3Text153"
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
                      keys="Api3Text154"
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
                  keys="Api3Text155"
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
                  keys="Api3Text156"
                  lang={langData}
                />
              ) : (
                <>Get list of all services</>
              )}
            </h3>
            <p>link***</p>
            <h4 className="text-center font-extrabold md:text-left">
              {AlllangData ? (
                <GetText
                  data={AlllangData}
                  keys="Api3Text157"
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
                          keys="Api3Text158"
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
                          keys="Api3Text159"
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
                          keys="Api3Text160"
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
                          keys="Api3Text161"
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
                          keys="Api3Text162"
                          lang={langData}
                        />
                      ) : (
                        <>action</>
                      )}
                    </td>
                    <td className="border-t border-color-border_light py-1">
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys="Api3Text163"
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
                          keys="Api3Text164"
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
                          keys="Api3Text165"
                          lang={langData}
                        />
                      ) : (
                        <>getServices</>
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td className="border-t border-color-border_light py-1">
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys="Api3Text166"
                          lang={langData}
                        />
                      ) : (
                        <>api_key</>
                      )}
                    </td>
                    <td className="border-t border-color-border_light py-1">
                      {AlllangData ? (
                        <GetText
                          data={AlllangData}
                          keys="Api3Text167"
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
                          keys="Api3Text168"
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
                          keys="Api3Text169"
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
                  keys="Api3Text170"
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
                      keys="Api3Text171"
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
                  keys="Api3Text172"
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

export default CompatibleApi;
