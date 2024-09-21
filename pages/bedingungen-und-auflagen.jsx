import { useState } from "react";
import { StickyNav } from "../components/StickyNav";
import { CartErrorModal } from "../components/CartErrorModal";
import { Footer } from "../components/Footer";
import AnimatedBlock from "../components/AnimatedBlock";

export default function BedingungenUndAuflagen({ setCartVisible, cartState }) {
  const [cartError, setCartError] = useState(false);

  const closeCartError = () => {
    setCartError(false);
  };

  const reviewCart = () => {
    setCartError(false);
    setCartVisible(true);
  };

  return (
    <>
      <StickyNav setCartVisible={setCartVisible} cartState={cartState} />
      <div className="flex flex-col items-center py-11 bg-beige min-h-screen">
        <AnimatedBlock className="flex flex-col w-10/12 text-titleColor">
          <h3 className="text-3xl font-bold">Bedingungen und Auflagen</h3>
          <p className="py-7">
            August 2024
            <br />
            <br />
            These terms and conditions (these “Terms”) are entered into between
            you and Swehl Inc. (“Swehl”), and govern your use of (a)
            www.swehl.com and all other websites operated by Swehl (including
            any content and functionality available on such websites) (each, a
            “Site,” and collectively, the “Sites”), and (b) any products or
            services you order through the Sites (collectively, “Products”).
            <br />
            Please read these Terms carefully before you use the Sites,
            including ordering any Products through the Sites. By using the
            Sites, you agree to be bound and abide by these Terms. If you do not
            want to agree to these Terms, you are not permitted to access or use
            the Sites. If you breach these Terms at any time, your right to
            access the Sites will be terminated. <br />
            The Sites are offered and available only to users who are 18 years
            of age or older. By using the Sites, you represent and warrant that
            you are 18 years of age or older.
            <br />
            <br />
            THESE TERMS REQUIRE THE USE OF ARBITRATION ON AN INDIVIDUAL BASIS TO
            RESOLVE DISPUTES, RATHER THAN JURY TRIALS OR CLASS ACTIONS. <br />
            1. Use of the Sites. <br />
            a. Accessing the Sites. Swehl reserves the right to takedown or
            change the Sites, and any service or material Swehl provides on the
            Sites, at Swehl's sole discretion without notice. Swehl will not be
            liable if a Site is unavailable at any time for any reason. From
            time-to-time, Swehl may restrict access to some parts of a Site, or
            an entire Site(s), including to registered users. <br />
            b. Account Information. If you register with a Site, you must treat
            your user name, password, and any other secure information
            associated with your account (“Account Information”) confidential,
            and must not share your Account Information with any third party.
            You agree to notify Swehl immediately of any unauthorized access to
            or use of your Account Information or any other breach of security.
            Swehl has the right to disable any user name, password, or other
            identifier, whether chosen by you or provided by Swehl, at any time
            at Swehl's sole discretion, including if Swehl believes you have
            violated any provision of these Terms. Swehl is not liable to you or
            any third party for any unauthorized use of your Account
            Information. <br />
            c. Prohibited Uses. You shall not: (i) use the Sites in violation of
            any applicable federal, state, local, or international law or
            regulation (“Applicable Laws”), (ii) use the Sites to transmit, or
            procure the sending of, any advertising or promotional material
            without Swehl's prior written consent, including any "junk mail,"
            "chain letter," "spam," or similar solicitation, (iii) use the Sites
            to impersonate or attempt to impersonate Swehl or any of its
            employees, another user, or any other person or entity (including,
            without limitation, by using email addresses associated with any of
            the foregoing), (iv) use the Sites to engage in any conduct that
            interferes with anyone's use of the Sites, or which Swehl determines
            may harm Swehl or any Site's users, or expose Swehl or any of those
            users to liability, (v) use the Sites in any manner that could
            disable, overburden, or damage the Sites, or interfere with the
            Sites' operation, (vi) use any robot, spider, or other automatic
            device, process, or means to access the Sites for any purpose,
            including monitoring or copying any of the material on the Sites,
            (vii) introduce to the Sites any viruses, Trojan horses, worms,
            logic bombs, or other material that is malicious or technologically
            harmful, or (viii) attempt to gain unauthorized access to, interfere
            with, damage, or disrupt any parts of a Site, the server on which a
            Site is stored, or any server, computer, or database connected to a
            Site.
            <br />
            <br />
            d. User Contributions. The Sites may contain message boards, forums,
            and other interactive features that allow users to post, submit, or
            transmit (collectively, “post”) content or materials on or through
            the Sites that can be viewed by other users (“User Contributions'').
            Any User Contribution you post to the Sites will be considered
            non-confidential and non-proprietary. By posting a User
            Contribution, you grant Swehl and its affiliates, service providers
            and retailers, and Swehl's and those parties' respective licensees,
            successors, and assigns the right to use, reproduce, modify,
            perform, display, distribute, and otherwise disclose to third
            parties the User Contribution for Swehls's business purposes. You
            represent and warrant that you own or control all rights in and to
            your User Contributions and have the right to grant the license
            granted above. User Contributions must not: (i) contain any material
            that is defamatory, obscene, hateful, harassing, violent,
            inflammatory, or otherwise objectionable, (ii) promote any unlawful
            conduct, sexually explicit or pornographic material, violence, or
            discrimination based on race, sex, religion, nationality,
            disability, sexual orientation, or age, (iii) infringe any
            intellectual property rights, rights of publicity, privacy rights,
            or other rights of any third party, (iv) misrepresent your identity
            or affiliation with any third party, or misrepresent that they
            emanate from or are endorsed by Swehl or any third party, or
            otherwise be deceptive, (v) involve commercial activities or sales,
            such as contests, sweepstakes, and other sales promotions or
            advertising unless pre-approved by Swehl in writing, or (vi) violate
            these Terms, our Privacy Policy, or any Applicable Laws. You are
            fully responsible for your User Contributions, including their
            legality, accuracy, and appropriateness.
            <br />
            <br />
            e. Enforcement. Swehl has the right to, in Swehl's sole discretion:
            (i) remove, refuse to post, or take any other action with respect to
            a User Contribution for any reason, including if Swehl believes that
            a User Contribution violates these Terms, infringes a third party's
            rights, threatens the safety of a Site's users or the public, or
            could create liability for Swehl, (ii) take appropriate legal action
            (including without limitation, referral to law enforcement) for any
            illegal or unauthorized use of the Sites, and otherwise cooperate
            fully with any law enforcement authorities or court order requesting
            or directing Swehl to disclose the identity or other information of
            anyone posting any materials on or through the Sites, (iii)
            terminate or suspend your access to all or part of the Sites for any
            reason, including without limitation, any violation of these Terms,
            and (iv) disclose your identity or other information about you to
            any third party who claims that your User Contribution violates
            their or another third party's rights. YOU WAIVE AND HOLD HARMLESS
            SWEHL AND ITS AFFILIATES, LICENSEES, AND SERVICE PROVIDERS FROM ANY
            CLAIMS RESULTING FROM ANY ACTION TAKEN BY ANY OF THE FOREGOING
            PARTIES DURING, OR TAKEN AS A CONSEQUENCE OF, INVESTIGATIONS BY SUCH
            PARTIES OR LAW ENFORCEMENT AUTHORITIES. f. Monitoring.
            Notwithstanding the terms of subsection (e) above, Swehl does not
            review User Contributions before they are posted on the Sites, and
            cannot ensure prompt removal of an objectionable User Contribution
            after it has been posted. Accordingly, Swehl is not responsible or
            liable to any third party for the content or accuracy of any User
            Contributions, and assumes no liability for any action or inaction
            regarding transmissions, communications, or content provided by any
            user or third party.
            <br />
            <br /> g. Reporting Claims of Copyright Infringement. Swehl takes
            claims of copyright infringement seriously and will respond to
            notices of alleged copyright infringement that comply with
            applicable law. If you believe any materials accessible on or from a
            Site infringes your copyright, you may request removal of those
            materials (or access to them) from the Site by submitting written
            notification to Swehl's copyright agent designated below. In
            accordance with the Online Copyright Infringement Liability
            Limitation Act of the Digital Millennium Copyright Act (17 U.S.C. §
            512) ("DMCA"), the written notice (the "DMCA Notice") must include
            substantially the following: (i) your physical or electronic
            signature, (ii) identification of the copyrighted work you believe
            to have been infringed, (iii) a description of the precise location
            where the allegedly infringing content appears, (iv) adequate
            information by which Swehl can contact you (including your name,
            mailing address, telephone number, and email address), (v) a
            statement that you have a good faith belief that use of the
            copyrighted material is not authorized by the copyright owner, its
            agent, or the law, (vi) a statement that the information in the
            written notice is accurate, and (vii) a statement, under penalty of
            perjury, that you are authorized.
          </p>
        </AnimatedBlock>
      </div>
      <Footer />
      <CartErrorModal
        cartError={cartError}
        reviewCart={reviewCart}
        closeCartError={closeCartError}
      />
    </>
  );
}
