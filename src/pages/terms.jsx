import GetText from "@/Components/GetText";
import useAlllangDataStore from "@/store/LangKeyStore";
import useLangStore from "@/store/LangStore";

export default function Terms() {
  const { AlllangData } = useAlllangDataStore();
  const { langData } = useLangStore();

  return (
    <section>
      <div className="m-auto px-4 lg:px-0">
        <div className="mx-auto mb-8 mt-24 max-w-6xl md:px-8">
          <h2 className="mb-4 text-center text-lg font-extrabold sm:text-[1.6rem] md:mb-6 md:text-justify lg:mb-8 lg:text-3xl">
            Terms of Use
          </h2>
          <div className="space-y-4 text-justify text-[0.60rem] font-medium sm:text-sm md:text-base">
            <p>
              <span>
                {AlllangData ? (
                  <GetText
                    data={AlllangData}
                    keys="Term5Text1"
                    lang={langData}
                  />
                ) : (
                  "These Terms and Conditions, as well as the Privacy Policy, Payment Policy, Refund Policy, any license agreement and other documents published on our website (hereinafter referred to as the"
                )}
              </span>
              <strong>
                {AlllangData ? (
                  <GetText
                    data={AlllangData}
                    keys="Term5Text1a"
                    lang={langData}
                  />
                ) : (
                  <>&quot;Site&quot;</>
                )}
              </strong>
              <span>
                {AlllangData ? (
                  <GetText
                    data={AlllangData}
                    keys="Term5Text1b"
                    lang={langData}
                  />
                ) : (
                  "),collectively constitute a full-fledged individual agreement between you and Diginums, and prevail over any other agreements, statements, guarantees and individual understanding of the Site. We reserve the right to change any documents at any time without prior notice to Users. The latest version of our documents is always available at the bottom of the Site. You have to familiarize yourself with all the documents and accept all the provisions before using the Site. You confirm your consent to review the changes in our documents after their publication. Thus, by visiting the Site, you agree to comply with all the terms of use of our sites and all applicable laws and regulations. If you do not agree with any of these terms, you agree to immediately stop using the Site."
                )}
              </span>{" "}
            </p>

            <h3 className="text-center text-sm font-extrabold sm:text-xl md:text-justify md:text-2xl">
              {AlllangData ? (
                <GetText data={AlllangData} keys="Term5Text2" lang={langData} />
              ) : (
                <>Defination</>
              )}
            </h3>
            <p>
              {AlllangData ? (
                <GetText data={AlllangData} keys="Term5Text3" lang={langData} />
              ) : (
                <>
                  For the purposes of these Terms and Conditions, the following
                  terms have the following meanings:
                </>
              )}
            </p>

            <p>
              <strong>
                {AlllangData ? (
                  <GetText
                    data={AlllangData}
                    keys="Term5Text4"
                    lang={langData}
                  />
                ) : (
                  <>&quot;We&quot;</>
                )}
              </strong>
              ;{" "}
              <strong>
                {AlllangData ? (
                  <GetText
                    data={AlllangData}
                    keys="Term5Text5"
                    lang={langData}
                  />
                ) : (
                  <>&quot;Diginums&quot;</>
                )}
              </strong>
              {AlllangData ? (
                <GetText data={AlllangData} keys="Term5Text6" lang={langData} />
              ) : (
                <>- the administration of the Site.</>
              )}
            </p>

            <p>
              <strong>
                {AlllangData ? (
                  <GetText
                    data={AlllangData}
                    keys="Term5Text7"
                    lang={langData}
                  />
                ) : (
                  <>&quot;Website&quot;</>
                )}
              </strong>
              ;
              <strong>
                {AlllangData ? (
                  <GetText
                    data={AlllangData}
                    keys="Term5Text8"
                    lang={langData}
                  />
                ) : (
                  <>&quot;Service&quot;</>
                )}
              </strong>
              {AlllangData ? (
                <GetText data={AlllangData} keys="Term5Text9" lang={langData} />
              ) : (
                <>
                  - a system of graphic and informational materials, programs
                  and databases that ensure their availability on the Internet
                  at the following addresses: Diginums.com; Diginums.ru.
                </>
              )}
            </p>

            <p>
              <strong>
                {AlllangData ? (
                  <GetText
                    data={AlllangData}
                    keys="Term5Text10"
                    lang={langData}
                  />
                ) : (
                  <>&quot;Visitors&quot;</>
                )}
              </strong>
              {AlllangData ? (
                <GetText
                  data={AlllangData}
                  keys="Term5Text11"
                  lang={langData}
                />
              ) : (
                <>
                  {" "}
                  are people who only visit our website but have not yet
                  registered as members.
                </>
              )}
            </p>

            <p>
              <strong>
                {AlllangData ? (
                  <GetText
                    data={AlllangData}
                    keys="Term5Text12"
                    lang={langData}
                  />
                ) : (
                  <>&quot;Services&quot;</>
                )}
              </strong>
              {AlllangData ? (
                <GetText
                  data={AlllangData}
                  keys="Term5Text13"
                  lang={langData}
                />
              ) : (
                <>a list of functions provided to Users by the Site.</>
              )}
            </p>

            <p>
              <strong>
                {AlllangData ? (
                  <GetText
                    data={AlllangData}
                    keys="Term5Text14"
                    lang={langData}
                  />
                ) : (
                  <>&quot;User&quot;</>
                )}
              </strong>
              {AlllangData ? (
                <GetText
                  data={AlllangData}
                  keys="Term5Text15"
                  lang={langData}
                />
              ) : (
                <>
                  a person who has passed the registration procedure on the
                  Site, who uses the services on the Site.
                </>
              )}
            </p>

            <p>
              <strong>
                {AlllangData ? (
                  <GetText
                    data={AlllangData}
                    keys="Term5Text16"
                    lang={langData}
                  />
                ) : (
                  <>&quot;Content&quot;</>
                )}
              </strong>
              {AlllangData ? (
                <GetText
                  data={AlllangData}
                  keys="Term5Text17"
                  lang={langData}
                />
              ) : (
                <>
                  all the textual; graphical; audio; video information and data
                  provided on the Site.
                </>
              )}
            </p>

            <p>
              <strong>
                {AlllangData ? (
                  <GetText
                    data={AlllangData}
                    keys="Term5Text18"
                    lang={langData}
                  />
                ) : (
                  <>&quot;Mirror&quot;</>
                )}
              </strong>{" "}
              {AlllangData ? (
                <GetText
                  data={AlllangData}
                  keys="Term5Text19"
                  lang={langData}
                />
              ) : (
                <>an exact copy of the data of one server on another.</>
              )}
            </p>

            <h3 className="text-center text-sm font-extrabold sm:text-xl md:text-justify md:text-2xl">
              {AlllangData ? (
                <GetText
                  data={AlllangData}
                  keys="Term5Text20"
                  lang={langData}
                />
              ) : (
                <>Permission to use</>
              )}
            </h3>

            <p>
              {AlllangData ? (
                <GetText
                  data={AlllangData}
                  keys="Term5Text21"
                  lang={langData}
                />
              ) : (
                <>
                  Diginums and/or its licensors have intellectual property
                  rights in regard to all materials on the Site. All
                  intellectual property rights are reserved. You may access the
                  protected materials of Diginums only for your personal use and
                  subject to the restrictions set forth in these Terms and
                  Conditions.
                </>
              )}
            </p>

            <p>
              {AlllangData ? (
                <GetText
                  data={AlllangData}
                  keys="Term5Text22"
                  lang={langData}
                />
              ) : (
                <>
                  You unconditionally agree <strong>not</strong> to do the
                  following:
                </>
              )}
            </p>
            <p>
              {AlllangData ? (
                <GetText
                  data={AlllangData}
                  keys="Term5Text23"
                  lang={langData}
                />
              ) : (
                <>• Republish materials posted on the Site;</>
              )}
            </p>
            <p>
              {AlllangData ? (
                <GetText
                  data={AlllangData}
                  keys="Term5Text24"
                  lang={langData}
                />
              ) : (
                <>
                  • Use these materials for commercial purposes or for the
                  purpose of public display (commercial or non-commercial);
                </>
              )}
            </p>
            <p>
              {AlllangData ? (
                <GetText
                  data={AlllangData}
                  keys="Term5Text25"
                  lang={langData}
                />
              ) : (
                <>
                  • Reproduce, transmit, distribute, modify, duplicate, copy the
                  materials posted on the Site, create a mirror of the content
                  posted on the Site on any other server;
                </>
              )}
            </p>
            <p>
              {AlllangData ? (
                <GetText
                  data={AlllangData}
                  keys="Term5Text26"
                  lang={langData}
                />
              ) : (
                <>
                  • Remove copyright marks and/or other intellectual property
                  protection marks from the material;
                </>
              )}
            </p>
            <p>
              {AlllangData ? (
                <GetText
                  data={AlllangData}
                  keys="Term5Text27"
                  lang={langData}
                />
              ) : (
                <>
                  • Attempt to decompile and/or reconstruct any software
                  available on the Site.
                </>
              )}
            </p>
            <p>
              {AlllangData ? (
                <GetText
                  data={AlllangData}
                  keys="Term5Text28"
                  lang={langData}
                />
              ) : (
                <>
                  If you commit any of the above-mentioned actions, your account
                  may be blocked. An internal inspection will be initiated,
                  during which it will be established whether an offense has
                  taken place. If the commission of an offense is established,
                  further settlement of the situation takes place in court.
                </>
              )}
            </p>

            <h3 className="text-center text-sm font-extrabold sm:text-xl md:text-justify md:text-2xl">
              {AlllangData ? (
                <GetText
                  data={AlllangData}
                  keys="Term5Text29"
                  lang={langData}
                />
              ) : (
                <>Restriction of use</>
              )}
            </h3>
            <p>
              {AlllangData ? (
                <GetText
                  data={AlllangData}
                  keys="Term5Text30"
                  lang={langData}
                />
              ) : (
                <>
                  In order to exclude the possibility of using our service for
                  fraudulent purposes, as well as in order to prevent any
                  possible illegal actions, an appropriate filter is established
                  on the Site. Services from the list of unacceptable for
                  receiving SMS (such as banks/credit institutions, electronic
                  payment systems and similar services) will not be displayed on
                  the Site pages.
                </>
              )}
            </p>
            <p>
              {AlllangData ? (
                <GetText
                  data={AlllangData}
                  keys="Term5Text31"
                  lang={langData}
                />
              ) : (
                <>
                  The products listed on the Site may be used only for
                  legitimate purposes. Without our written consent, it is
                  prohibited to use crop technology, as well as any other
                  methods of deleting and/or changing information on the Site,
                  that makes unreadable logos, copyrighted materials or
                  confidential data (consisting of text, images, page layouts).
                  It is prohibited to use any meta signs and/or any other signs
                  with our name, trademark, or any other copyrighted material
                  without our written consent. You agree not to publish and/or
                  modify any information received on the Site and/or in any way
                  recreate, display, distribute or otherwise use this material
                  for any public purposes related to our services and/or
                  products. Otherwise, it may deceive consumers or licensors.
                  You also agree to refrain from misuse of any materials
                  presented on the Site.In order to exclude the possibility of
                  using our service for fraudulent purposes, as well as in order
                  to prevent any possible illegal actions, an appropriate filter
                  is established on the Site. Services from the list of
                  unacceptable for receiving SMS (such as banks/credit
                  institutions, electronic payment systems and similar services)
                  will not be displayed on the Site pages.
                </>
              )}
            </p>
            <p>
              {AlllangData ? (
                <GetText
                  data={AlllangData}
                  keys="Term5Text32"
                  lang={langData}
                />
              ) : (
                <>
                  {" "}
                  Diginums is not obliged to track the publication, transmission
                  or any mentions of the Site. If you believe that any content
                  posted on the Internet violates the above-mentioned
                  conditions, please report to the Diginums support service. If
                  the User is suspected of non-compliance with these Terms and
                  Conditions, we have the right to investigate this situation
                  unilaterally and make a decision to remove the content by
                  legal means. We are not responsible for the illegality or
                  non-performance of such actions by individuals.
                </>
              )}
            </p>

            <h3 className="text-center text-sm font-extrabold sm:text-xl md:text-justify md:text-2xl">
              {AlllangData ? (
                <GetText
                  data={AlllangData}
                  keys="Term5Text33"
                  lang={langData}
                />
              ) : (
                <>Telecommunications</>
              )}
            </h3>
            <p>
              {AlllangData ? (
                <GetText
                  data={AlllangData}
                  keys="Term5Text34"
                  lang={langData}
                />
              ) : (
                <>
                  When you visit the Site or send us an email, or we contact you
                  by email or send notifications on the Site, means of
                  electronic communication is used. You agree to interact
                  through the Internet. You also confirm that all contract
                  notices, personal data transfers and other communications that
                  we provide to you in digital form must comply with all
                  requirements for similar materials in writing.
                </>
              )}
            </p>

            <h3 className="text-center text-sm font-extrabold sm:text-xl md:text-justify md:text-2xl">
              {AlllangData ? (
                <GetText
                  data={AlllangData}
                  keys="Term5Text35"
                  lang={langData}
                />
              ) : (
                <>Your account</>
              )}
            </h3>
            <p>
              {AlllangData ? (
                <GetText
                  data={AlllangData}
                  keys="Term5Text36"
                  lang={langData}
                />
              ) : (
                <>
                  {" "}
                  When using the Site, you are responsible for the
                  confidentiality of your account login and password and for all
                  actions that you perform using your account. You also confirm
                  that you will not disclose any personal information,
                  including, but not limited to: the name of the Website,
                  account details and other personal data. Diginums reserves the
                  following exclusive rights: to refuse to provide services,
                  annul accounts, and delete or edit content. We do not
                  guarantee the authenticity, accuracy or reliability of
                  Users&apos; personal data displayed on the Site. The user is
                  responsible for updating and changing any relevant
                  information, which is important for maintaining the accuracy
                  and reliability of the data.
                </>
              )}
            </p>

            <h3 className="text-center text-sm font-extrabold sm:text-xl md:text-justify md:text-2xl">
              {AlllangData ? (
                <GetText
                  data={AlllangData}
                  keys="Term5Text37"
                  lang={langData}
                />
              ) : (
                <>Reviews and comments</>
              )}
            </h3>
            <p>
              {AlllangData ? (
                <GetText
                  data={AlllangData}
                  keys="Term5Text38"
                  lang={langData}
                />
              ) : (
                <>
                  Registered users can post ratings and comments regarding
                  products and services purchased through the Site, provided
                  that such a review will not be contrary to the law; offensive;
                  threatening; defamatory; violating privacy rights,
                  intellectual property rights or otherwise causing damage to
                  third parties. Also, comments cannot contain mass invitations,
                  mass mailing or any &quot;spam&quot;. It is prohibited to use
                  another user&apos;s account to impersonate another person or
                  organization, or otherwise mislead Diginums and other Users.
                  Diginums reserves the right to delete (or limit) such
                  materials without restrictions, but does not take
                  responsibility for the content of regularly posting User
                  reviews.
                </>
              )}
            </p>
            <p>
              {AlllangData ? (
                <GetText
                  data={AlllangData}
                  keys="Term5Text39"
                  lang={langData}
                />
              ) : (
                <>
                  Diginums does not filter, edit or view comments before they
                  appear on the Site. The comments do not reflect the opinions
                  of Diginums, its representatives, employees and/or affiliates.
                  Comments reflect the views and thoughts of the person who
                  posts the comment. To the extent permitted by applicable law,
                  Diginums is not responsible for comments or for any damage
                  and/or expenses incurred as a result of any use and/or posting
                  comments on the Site.
                </>
              )}
            </p>
            <p>
              {AlllangData ? (
                <GetText
                  data={AlllangData}
                  keys="Term5Text40"
                  lang={langData}
                />
              ) : (
                <>
                  When you post a review and/or leave a comment, you provide us
                  a free, perpetual, irrevocable and legal right to use,
                  re-create, modify, correct, release works on any media and
                  distribute without any restrictions. You provide us the right
                  to use your name in relation to these materials if necessary.
                  You confirm that it is you who control all rights to the
                  published comment; your comment does not violate the Terms and
                  Conditions and does not cause damage to any individual or
                  legal entity; you will compensate us for all claims related to
                  the content provided by you. Diginums will not be liable for
                  any comments and/or ratings posted by Users.
                </>
              )}
            </p>

            <h3 className="text-center text-sm font-extrabold sm:text-xl md:text-justify md:text-2xl">
              {AlllangData ? (
                <GetText
                  data={AlllangData}
                  keys="Term5Text41"
                  lang={langData}
                />
              ) : (
                <>Compiance with legal provisions</>
              )}
            </h3>
            <p>
              {AlllangData ? (
                <GetText
                  data={AlllangData}
                  keys="Term5Text42"
                  lang={langData}
                />
              ) : (
                <>
                  You agree to comply with all applicable national and
                  international laws, regulations and rules regarding the use of
                  the Site. Diginums is free to investigate the nature of
                  complaints and other reported violations of the terms and
                  conditions and take any action deemed appropriate, including,
                  but not limited to, terminating your account and reporting any
                  suspicious and/or illegal activity to law enforcement
                  authorities, regulators, or appropriate designees. Subject to
                  the Privacy Policy, where required by law, Diginums may
                  disclose any information including, but not limited to: your
                  personal data, usage history, published data, IP address and
                  traffic information.
                </>
              )}
            </p>

            <h3 className="text-center text-sm font-extrabold sm:text-xl md:text-justify md:text-2xl">
              {AlllangData ? (
                <GetText
                  data={AlllangData}
                  keys="Term5Text43"
                  lang={langData}
                />
              ) : (
                <>Intellectual property law</>
              )}
            </h3>
            <p>
              {AlllangData ? (
                <GetText
                  data={AlllangData}
                  keys="Term5Text44"
                  lang={langData}
                />
              ) : (
                <>
                  The Site contains copyright marks and/or trademarks in the
                  form of text, graphics and logos, as well as copyright marks
                  and/or trademarks of our affiliates and/or other companies.
                  Without prior written consent from the relevant copyright
                  holder, your use of the Site does not imply the acquisition of
                  any rights or licenses to use the copyright marks and
                  trademarks used on the Site. The Site is protected by
                  international copyright law. Users are strictly prohibited
                  from copying, distributing or publishing any part of the Site.
                  Your use of the Site does not grant you ownership of it or any
                  part of it.
                </>
              )}
            </p>

            <h3 className="text-center text-sm font-extrabold sm:text-xl md:text-justify md:text-2xl">
              {AlllangData ? (
                <GetText
                  data={AlllangData}
                  keys="Term5Text45"
                  lang={langData}
                />
              ) : (
                <>Editing information</>
              )}
            </h3>
            <p>
              {AlllangData ? (
                <GetText
                  data={AlllangData}
                  keys="Term5Text46"
                  lang={langData}
                />
              ) : (
                <>
                  The materials on the Website may contain technical, textual or
                  visual errors/inaccuracies. Diginums does not guarantee that
                  any information on the Site is accurate, complete and
                  up-to-date. We have the right to edit the information
                  contained on the Site at any time without prior notice to
                  users.
                </>
              )}
            </p>

            <h3 className="text-center text-sm font-extrabold sm:text-xl md:text-justify md:text-2xl">
              {AlllangData ? (
                <GetText
                  data={AlllangData}
                  keys="Term5Text47"
                  lang={langData}
                />
              ) : (
                <>Disclaimer of liability</>
              )}
            </h3>
            <p>
              {AlllangData ? (
                <GetText
                  data={AlllangData}
                  keys="Term5Text48"
                  lang={langData}
                />
              ) : (
                <>
                  The materials on the Site are provided in &quot;as is&quot;
                  condition. Diginums makes no warranties, express or implied,
                  including, but not limited to, the conditions of
                  merchantability applicable to our products and/or services.
                  The main reason is the prevention of violation of intellectual
                  property rights and other offenses. Diginums also does not
                  provide any guarantees or assurances regarding the accuracy,
                  possible results and reliability of materials on the Site or
                  on any other linked site.
                </>
              )}
            </p>
            <p>
              {AlllangData ? (
                <GetText
                  data={AlllangData}
                  keys="Term5Text49"
                  lang={langData}
                />
              ) : (
                <>
                  The Site provides unique services and products. Diginums
                  cannot control the quality and/or compliance of certain
                  product characteristics.
                </>
              )}
            </p>
            <p>
              {AlllangData ? (
                <GetText
                  data={AlllangData}
                  keys="Term5Text50"
                  lang={langData}
                />
              ) : (
                <>
                  {" "}
                  Diginums does not guarantee the accuracy, reliability,
                  completeness and relevance of the information provided by
                  Users, and also does not provide any guarantees and assurances
                  regarding any information on the Site.
                </>
              )}
            </p>

            <h3 className="text-center text-sm font-extrabold sm:text-xl md:text-justify md:text-2xl">
              {AlllangData ? (
                <GetText
                  data={AlllangData}
                  keys="Term5Text51"
                  lang={langData}
                />
              ) : (
                <>Third-party sites</>
              )}
            </h3>
            <p>
              {AlllangData ? (
                <GetText
                  data={AlllangData}
                  keys="Term5Text52"
                  lang={langData}
                />
              ) : (
                <>
                  The Site may contain links to third-party websites. These
                  links are provided merely for the convenience of your use and
                  in order to provide you with additional information. By
                  leaving links to third-party sites, we do not establish
                  contacts and do not conduct financial relations with such
                  sites. The presence of links on the Site does not mean
                  approval, providing guarantees or recommendations. We do not
                  control the documentation (including internal) of third-party
                  sites, so your access to any third-party sites is at your own
                  risk.
                </>
              )}
            </p>

            <h3 className="text-center text-sm font-extrabold sm:text-xl md:text-justify md:text-2xl">
              {AlllangData ? (
                <GetText
                  data={AlllangData}
                  keys="Term5Text53"
                  lang={langData}
                />
              ) : (
                <>Disclaimer regarding third-party sites</>
              )}
            </h3>
            <p>
              {AlllangData ? (
                <GetText
                  data={AlllangData}
                  keys="Term5Text54"
                  lang={langData}
                />
              ) : (
                <>
                  {" "}
                  When we leave a link to a third-party site, all its content,
                  materials, products (including software) and services are
                  provided in condition &quot;as is&quot;. Diginums is not
                  liable for the use of any information, materials (including
                  software) or services provided on such sites. You agree to use
                  these sites at your own risk. To the maximum extent permitted
                  by applicable law, Diginums does not provide any guarantees
                  regarding (but not limited to): the content, materials,
                  servers, products (including software) or services provided to
                  you on such sites in any way. It is also not guaranteed that
                  the emails sent from these sites do not contain viruses or
                  other malicious elements. Diginums is not responsible for any
                  damage caused by the use of such sites and its materials,
                  products (including software) or services listed or otherwise
                  provided on this site. Diginums is not liable for errors and
                  inaccuracies on such sites and for the damage caused by
                  errors/inaccuracies.
                </>
              )}
            </p>

            <h3 className="text-center text-sm font-extrabold sm:text-xl md:text-justify md:text-2xl">
              {AlllangData ? (
                <GetText
                  data={AlllangData}
                  keys="Term5Text55"
                  lang={langData}
                />
              ) : (
                <>Modification of the Terms and Conditions</>
              )}
            </h3>
            <p>
              {AlllangData ? (
                <GetText
                  data={AlllangData}
                  keys="Term5Text56"
                  lang={langData}
                />
              ) : (
                <>
                  These Terms and Conditions can be changed at any time without
                  prior notice. By using the Site, you confirm your consent to
                  comply with the latest version of the Terms and Conditions.
                </>
              )}
            </p>

            <h3 className="text-center text-sm font-extrabold sm:text-xl md:text-justify md:text-2xl">
              {AlllangData ? (
                <GetText
                  data={AlllangData}
                  keys="Term5Text57"
                  lang={langData}
                />
              ) : (
                <>Company details</>
              )}
            </h3>
            <p>Liknot Ltd.</p>
            <p>Registration number 13819411</p>
            <p>85 Great Portland Street</p>
            <p>First Floor, London</p>
            <p>W1W7LT, United Kingdom</p>
            <p>+443300271844</p>
          </div>
        </div>
      </div>
    </section>
  );
}
