import Link from "next/link";
import GetText from "@/Components/GetText";
import useAlllangDataStore from "@/store/LangKeyStore";
import useLangStore from "@/store/LangStore";

export default function Ref() {
  const { AlllangData } = useAlllangDataStore();
  const { langData } = useLangStore();

  return (
    <section>
      <div className="m-auto md:px-4 xl:px-8">
        <div className="mx-auto mb-8 mt-24 max-w-6xl px-4 xl:px-8">
          <h2 className="mb-4 text-center text-sm font-bold sm:text-xl md:text-left">
            {AlllangData ? (
              <GetText data={AlllangData} keys="RefText1" lang={langData} />
            ) : (
              "Get money for attracted users!"
            )}
          </h2>
          <p className="mb-2 text-xs font-bold sm:text-lg md:mb-6">
            {AlllangData ? (
              <GetText data={AlllangData} keys="RefText2" lang={langData} />
            ) : (
              "Detailed conditions of the affiliate program:"
            )}
          </p>
          <ol className="mb-4 ml-10 list-decimal space-y-2 text-xs sm:text-lg md:ml-12 md:text-justify">
            <li>
              {AlllangData ? (
                <GetText data={AlllangData} keys="RefText3" lang={langData} />
              ) : (
                "Referral program is created exclusively for stimulation of distribution of information about Diginums.com resource."
              )}
            </li>
            <li>
              {AlllangData ? (
                <GetText data={AlllangData} keys="RefText4" lang={langData} />
              ) : (
                "Each registered user of Diginums.com can take part in Referral program"
              )}
            </li>
            <li>
              {AlllangData ? (
                <GetText data={AlllangData} keys="RefText5" lang={langData} />
              ) : (
                "The number of invited users by one user is unlimited"
              )}
            </li>
            <li>
              {AlllangData ? (
                <GetText data={AlllangData} keys="RefText6" lang={langData} />
              ) : (
                "The inviting user is called a referrer and the invitee is called a referral"
              )}
            </li>
            <li>
              {AlllangData ? (
                <GetText data={AlllangData} keys="RefText7" lang={langData} />
              ) : (
                "Referrer, who invited the new active referral, gets 3% of referral&apos;s expenses"
              )}
            </li>
            <li>
              {AlllangData ? (
                <GetText data={AlllangData} keys="RefText8" lang={langData} />
              ) : (
                "The maximum amount of referral payments from one referral is unlimited."
              )}
            </li>
            <li>
              {AlllangData ? (
                <GetText data={AlllangData} keys="RefText9" lang={langData} />
              ) : (
                "Referral funds are withdrawn within 24 hours from the moment of application. The minimum amount for withdrawal is 10$. Transfer to user Diginums.com account is instant and without commission"
              )}
            </li>
            <li>
              {AlllangData ? (
                <GetText data={AlllangData} keys="RefText10" lang={langData} />
              ) : (
                "Administration of Diginums has the right to deny withdrawal of funds in case of fraudulent use of the invited users or other abuses of the referral program"
              )}
            </li>
          </ol>
          <p className="mb-2 text-xs sm:text-lg md:mb-4 md:text-justify">
            {AlllangData ? (
              <GetText data={AlllangData} keys="RefText11" lang={langData} />
            ) : (
              "If you have an application that works with our API, you can get affiliate payments from users you attracted."
            )}
          </p>
          <p className="text-xs sm:text-lg md:text-justify">
            {AlllangData ? (
              <GetText data={AlllangData} keys="RefText12" lang={langData} />
            ) : (
              "To do this"
            )}

            <Link href={"/contact"} className="text-color-primary underline">
              {AlllangData ? (
                <GetText data={AlllangData} keys="RefText13" lang={langData} />
              ) : (
                "write us."
              )}
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
