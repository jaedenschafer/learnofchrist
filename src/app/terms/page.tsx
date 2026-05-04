// ─── ISR ───
// Static page — cache for a week.
export const revalidate = 604800;

export const metadata = {
  title: 'Terms of Service — Learn of Christ',
  description:
    'The terms that govern your use of the Learn of Christ website, iOS app, and related services.',
  alternates: { canonical: 'https://learnofchrist.com/terms' },
};

export default function TermsPage() {
  return (
    <div className="page-container">
      <article className="legal-doc">
        <header className="legal-doc__head">
          <p className="legal-doc__eyebrow">Terms</p>
          <h1>Terms of Service</h1>
          <p className="legal-doc__sub">
            Effective May 4, 2026 · Last updated May 4, 2026
          </p>
        </header>

        <section className="legal-doc__summary">
          <h2>The short version</h2>
          <p>
            These Terms of Service form a legal agreement between you and
            Learn of Christ. By using our app or website, you agree to
            them. Please read them. They include important information
            about disclaimers, limitations of liability, dispute
            resolution, and an arbitration agreement.
          </p>
          <p>
            In plain English: the Services are free. We do our best to
            make them accurate and reliable, but we provide them &ldquo;as
            is.&rdquo; You agree to use the Services lawfully and
            respectfully. You keep ownership of the notes and reflections
            you write. We can update these terms over time, and we will
            tell you when we do.
          </p>
        </section>

        <nav className="legal-doc__toc" aria-label="On this page">
          <p className="legal-doc__toc-title">On this page</p>
          <ol>
            <li><a href="#agreement">1. Agreement to these Terms</a></li>
            <li><a href="#eligibility">2. Eligibility and minimum age</a></li>
            <li><a href="#account">3. Your account</a></li>
            <li><a href="#license">4. License to use the Services</a></li>
            <li><a href="#user-content">5. Your content (notes, reflections, highlights)</a></li>
            <li><a href="#feedback">6. Feedback</a></li>
            <li><a href="#acceptable-use">7. Acceptable use</a></li>
            <li><a href="#scripture">8. Scripture text and study content</a></li>
            <li><a href="#third-party-content">9. Third-party content and links</a></li>
            <li><a href="#purchases">10. Purchases, subscriptions, and donations</a></li>
            <li><a href="#apple">11. App Store EULA addendum (iOS users)</a></li>
            <li><a href="#google">12. Google Play addendum (Android users)</a></li>
            <li><a href="#dmca">13. Copyright and DMCA notices</a></li>
            <li><a href="#suspension">14. Suspension and termination</a></li>
            <li><a href="#disclaimers">15. Disclaimers</a></li>
            <li><a href="#liability">16. Limitation of liability</a></li>
            <li><a href="#indemnification">17. Indemnification</a></li>
            <li><a href="#dispute">18. Governing law and dispute resolution</a></li>
            <li><a href="#changes">19. Changes to these Terms</a></li>
            <li><a href="#general">20. General provisions</a></li>
            <li><a href="#contact">21. Contact us</a></li>
          </ol>
        </nav>

        <section id="agreement" className="legal-doc__section">
          <h2>1. Agreement to these Terms</h2>
          <p>
            These Terms of Service (&ldquo;Terms&rdquo;) form a binding
            agreement between you and Learn of Christ (&ldquo;Learn of
            Christ,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or
            &ldquo;our&rdquo;) that governs your access to and use of the
            Learn of Christ iOS app, our Android app (when released), our
            website at learnofchrist.com, and any related features,
            content, and services we offer (collectively, the
            &ldquo;Services&rdquo;).
          </p>
          <p>
            By downloading, installing, accessing, or using any part of
            the Services, you agree to be bound by these Terms and by
            our <a href="/privacy">Privacy Policy</a>, which is
            incorporated by reference. If you do not agree, do not use
            the Services.
          </p>
          <p>
            If you are using the Services on behalf of an organization,
            ministry, or church, you represent that you have authority
            to bind that organization, and &ldquo;you&rdquo; refers to
            both you personally and that organization.
          </p>
        </section>

        <section id="eligibility" className="legal-doc__section">
          <h2>2. Eligibility and minimum age</h2>
          <p>
            The Services are intended for users who are at least 13
            years old, or the equivalent minimum age in your country if
            higher (for example, 16 in some EEA member states). By
            using the Services, you represent that you meet this
            minimum age.
          </p>
          <p>
            If you are a parent or guardian and believe a child under
            13 has created an account, please contact us at <a href="mailto:hello@learnofchrist.com">hello@learnofchrist.com</a> and we
            will remove the account.
          </p>
        </section>

        <section id="account" className="legal-doc__section">
          <h2>3. Your account</h2>
          <p>
            You can read scripture, browse art, and view our study
            guides without creating an account. An account is required
            only to sync your personal study content (highlights, notes,
            reflections, reading progress) across devices. When you
            create an account you agree to:
          </p>
          <ul>
            <li>Provide accurate information and keep it up to date.</li>
            <li>Keep your sign-in method secure. You are responsible for any activity that occurs through your account.</li>
            <li>Notify us promptly at <a href="mailto:hello@learnofchrist.com">hello@learnofchrist.com</a> if you suspect that your account has been compromised.</li>
            <li>Not share your account or impersonate another person.</li>
          </ul>
          <p>
            You may delete your account at any time from the in-app
            account settings or by emailing us. Account deletion is
            described in detail in our <a href="/privacy">Privacy Policy</a>.
          </p>
        </section>

        <section id="license" className="legal-doc__section">
          <h2>4. License to use the Services</h2>
          <p>
            Subject to your compliance with these Terms, we grant you a
            personal, limited, revocable, non-exclusive,
            non-transferable, non-sublicensable license to download,
            install, and use the Services for your personal,
            non-commercial study and devotional use. This license does
            not transfer any ownership rights and is not a sale.
          </p>
          <p>You may not, and you may not let anyone else:</p>
          <ul>
            <li>Copy, reproduce, distribute, publicly display, publish, or sell any part of the Services or our content except as expressly permitted by these Terms.</li>
            <li>Modify, translate, adapt, or create derivative works of the Services or our proprietary content.</li>
            <li>Reverse engineer, decompile, disassemble, or attempt to extract source code from the app, except where applicable law expressly prohibits these restrictions.</li>
            <li>Use the Services to train machine-learning or AI models, build a competing product, or scrape, index, or compile data from the Services.</li>
            <li>Remove or obscure any copyright, trademark, or other proprietary notices.</li>
            <li>Use any robot, spider, scraper, or automated means to access the Services for any purpose without our express written permission.</li>
            <li>Use the Services in a way that interferes with their normal operation, that places an unreasonable load on our infrastructure, or that attempts to gain unauthorized access.</li>
          </ul>
          <p>
            All rights not expressly granted to you are reserved by
            Learn of Christ and its licensors.
          </p>
        </section>

        <section id="user-content" className="legal-doc__section">
          <h2>5. Your content (notes, reflections, highlights)</h2>
          <p>
            The Services let you create personal content, such as
            scripture highlights, verse notes, reflection journal
            entries, prayer entries, and &ldquo;carry&rdquo; commitments
            (collectively, &ldquo;Your Content&rdquo;). You own Your
            Content. We do not claim ownership of it.
          </p>
          <p>
            You grant us a worldwide, royalty-free, non-exclusive license
            to host, store, copy, transmit, display, and reformat Your
            Content solely as needed to operate the Services for you
            (for example, to sync a reflection across your iPhone and
            iPad, to create encrypted backups, and to restore Your
            Content if a device is lost). This license exists only
            because the Services cannot operate without it. It ends
            when you delete Your Content or your account, except for
            (a) anonymized or aggregated information that no longer
            identifies you and (b) copies retained for a limited time
            in our backup systems before they are overwritten.
          </p>
          <p>
            You are solely responsible for Your Content. You represent
            that you have the right to create and store it and that it
            does not violate the law, infringe anyone&apos;s rights, or
            violate these Terms.
          </p>
          <p>
            We do not generally review private user content. If we
            become aware that Your Content violates these Terms or
            applicable law, we may remove or restrict access to it and,
            in serious cases, suspend or terminate your account as
            described in section 14.
          </p>
          <p>
            <strong>Public sharing.</strong> If you choose to share
            Your Content publicly (for example, by posting a generated
            verse card to a social network), the social network&apos;s
            terms apply to that post. We are not responsible for
            content posted to third-party platforms.
          </p>
        </section>

        <section id="feedback" className="legal-doc__section">
          <h2>6. Feedback</h2>
          <p>
            If you send us suggestions, ideas, or feedback, you grant
            us a perpetual, irrevocable, worldwide, royalty-free
            license to use that feedback for any purpose, including to
            improve the Services, without obligation or compensation
            to you. You are not obligated to send us feedback, but
            we&apos;re grateful when you do.
          </p>
        </section>

        <section id="acceptable-use" className="legal-doc__section">
          <h2>7. Acceptable use</h2>
          <p>You agree not to use the Services to:</p>
          <ul>
            <li>Violate any applicable law, regulation, or third-party right (including intellectual property, privacy, or publicity rights).</li>
            <li>Harass, threaten, defame, exploit, or harm others, including minors.</li>
            <li>Upload or transmit content that is unlawful, deceptive, fraudulent, sexually explicit, hateful, or inciting violence.</li>
            <li>Impersonate any person or entity, or misrepresent your affiliation with anyone.</li>
            <li>Interfere with, disrupt, or attempt to gain unauthorized access to any part of the Services, our servers, or our networks.</li>
            <li>Probe, scan, or test the vulnerability of any system or network without our prior written authorization. Responsible-disclosure security reports are welcome at <a href="mailto:hello@learnofchrist.com">hello@learnofchrist.com</a>.</li>
            <li>Use the Services to send spam, phishing, or unsolicited communications.</li>
            <li>Use the Services in a way that materially competes with Learn of Christ or that is intended to extract our content for redistribution.</li>
            <li>Encourage or enable any of the above by anyone else.</li>
          </ul>
        </section>

        <section id="scripture" className="legal-doc__section">
          <h2>8. Scripture text and study content</h2>
          <p>
            Scripture is a public inheritance, but specific Bible
            translations are licensed. The King James Version is in
            the public domain in most jurisdictions. Other translations
            available in the Services (for example, the
            Douay-Rheims American Edition or any modern translation we
            offer) are provided under licenses from their respective
            publishers, and translation text remains the property of
            those publishers. You may use translation text inside the
            Services for personal study. You may not extract,
            redistribute, or republish translation text in ways that
            would violate the underlying license.
          </p>
          <p>
            Our study guides, commentaries, intros, Christ Connection
            blocks, Carry blocks, reflection prompts, ornaments, and
            visual design are original works of authorship that belong
            to Learn of Christ. Citations to museums, manuscript
            archives, and academic sources do not transfer ownership of
            those external resources. Public-domain artwork is
            displayed under public-domain status; where artwork is
            licensed, attributions appear with the work.
          </p>
          <p>
            Nothing in the Services is a substitute for personal study,
            qualified pastoral counsel, or the help of a licensed
            professional in matters of mental health, medicine, law,
            or finance.
          </p>
        </section>

        <section id="third-party-content" className="legal-doc__section">
          <h2>9. Third-party content and links</h2>
          <p>
            The Services may contain links to third-party websites or
            content (for example, citations to Sefaria, Bible Odyssey,
            British Museum, the Israel Antiquities Authority, etc.).
            We do not own, operate, or control those resources, and
            their availability or content may change without notice.
            We provide links for your convenience and study; the
            link does not imply endorsement, and we are not
            responsible for the content, advertising, or practices of
            third-party sites.
          </p>
        </section>

        <section id="purchases" className="legal-doc__section">
          <h2>10. Purchases, subscriptions, and donations</h2>
          <p>
            The Services are free at launch. If we offer optional
            paid features, donations, or subscriptions in the future,
            those purchases will be processed through Apple&apos;s
            App Store, Google Play, or another payment processor we
            designate. The applicable storefront&apos;s billing,
            refund, and tax policies will govern the transaction.
            We will display the price, the renewal terms, and any
            applicable cancellation rules before you complete the
            purchase. By making a purchase, you authorize the
            applicable storefront to charge the payment method on
            file.
          </p>
          <p>
            For subscriptions purchased through the App Store or
            Google Play, you can manage and cancel directly in your
            Apple ID subscription settings or your Google Play
            subscription settings. Cancelling stops future renewals
            but does not refund the current period unless required
            by law.
          </p>
        </section>

        <section id="apple" className="legal-doc__section">
          <h2>11. App Store EULA addendum (iOS users)</h2>
          <p>
            The following terms apply to the iOS version of the Learn
            of Christ app (&ldquo;Licensed Application&rdquo;)
            distributed through the Apple App Store. They supplement
            and, where in conflict, supersede other terms in this
            agreement only with respect to the iOS version.
          </p>
          <ul>
            <li>
              <strong>Acknowledgement.</strong> You acknowledge that
              this agreement is between you and Learn of Christ only,
              not with Apple Inc. (&ldquo;Apple&rdquo;). Apple is not
              responsible for the Licensed Application or its content.
            </li>
            <li>
              <strong>Scope of license.</strong> The license granted
              for the Licensed Application is limited to a non-
              transferable license to use the Licensed Application on
              any Apple-branded products that you own or control and
              as permitted by the Apple Media Services Terms and
              Conditions, except that the Licensed Application may be
              accessed and used by other accounts associated with the
              purchaser via Family Sharing or volume purchasing.
            </li>
            <li>
              <strong>Maintenance and support.</strong> Learn of
              Christ is solely responsible for providing any
              maintenance and support services with respect to the
              Licensed Application. Apple has no obligation
              whatsoever to furnish any maintenance and support
              services.
            </li>
            <li>
              <strong>Warranty.</strong> Learn of Christ is solely
              responsible for any product warranties, whether express
              or implied by law, to the extent not effectively
              disclaimed. In the event of any failure of the Licensed
              Application to conform to any applicable warranty, you
              may notify Apple, and Apple will refund the purchase
              price for the Licensed Application to you (if any). To
              the maximum extent permitted by applicable law, Apple
              has no other warranty obligation whatsoever with respect
              to the Licensed Application, and any other claims,
              losses, liabilities, damages, costs, or expenses
              attributable to any failure to conform to any warranty
              will be Learn of Christ&apos;s sole responsibility.
            </li>
            <li>
              <strong>Product claims.</strong> Learn of Christ, not
              Apple, is responsible for addressing any claims by you
              or any third party relating to the Licensed Application
              or your possession and use of it, including (i) product
              liability claims; (ii) any claim that the Licensed
              Application fails to conform to any applicable legal or
              regulatory requirement; and (iii) claims arising under
              consumer protection, privacy, or similar legislation,
              including in connection with HealthKit and HomeKit (we
              do not use those frameworks).
            </li>
            <li>
              <strong>Intellectual property rights.</strong> In the
              event of any third-party claim that the Licensed
              Application or your possession and use of it infringes
              that third party&apos;s intellectual property rights,
              Learn of Christ, not Apple, will be solely responsible
              for the investigation, defense, settlement, and
              discharge of any such claim.
            </li>
            <li>
              <strong>Legal compliance.</strong> You represent and
              warrant that (i) you are not located in a country that
              is subject to a U.S. Government embargo, or that has
              been designated by the U.S. Government as a
              &ldquo;terrorist supporting&rdquo; country; and (ii) you
              are not listed on any U.S. Government list of
              prohibited or restricted parties.
            </li>
            <li>
              <strong>Developer name and address.</strong> Direct any
              questions, complaints, or claims regarding the Licensed
              Application to: Learn of Christ, <a href="mailto:hello@learnofchrist.com">hello@learnofchrist.com</a>.
            </li>
            <li>
              <strong>Third-party terms.</strong> You must comply with
              applicable third-party terms of agreement when using the
              Licensed Application.
            </li>
            <li>
              <strong>Third-party beneficiary.</strong> You and Learn
              of Christ acknowledge and agree that Apple, and Apple&apos;s
              subsidiaries, are third-party beneficiaries of these
              Terms with respect to the Licensed Application, and that
              upon your acceptance of these Terms, Apple will have the
              right (and will be deemed to have accepted the right) to
              enforce these Terms against you as a third-party
              beneficiary.
            </li>
          </ul>
        </section>

        <section id="google" className="legal-doc__section">
          <h2>12. Google Play addendum (Android users)</h2>
          <p>
            If you obtained the Learn of Christ app from Google Play,
            your use of the app is also subject to the Google Play
            Terms of Service. Google is not responsible for the app or
            its content. To the extent these Terms conflict with the
            Google Play Terms regarding the app obtained from Google
            Play, the Google Play Terms control with respect to that
            specific subject matter.
          </p>
        </section>

        <section id="dmca" className="legal-doc__section">
          <h2>13. Copyright and DMCA notices</h2>
          <p>
            We respect intellectual property and ask that you do too.
            If you believe content available through the Services
            infringes a copyright you own or control, please send a
            written notice to <a href="mailto:hello@learnofchrist.com">hello@learnofchrist.com</a> with
            the subject line &ldquo;DMCA Notice&rdquo; that includes:
          </p>
          <ul>
            <li>A physical or electronic signature of the copyright owner or an authorized agent.</li>
            <li>Identification of the copyrighted work claimed to have been infringed.</li>
            <li>Identification of the material that is claimed to be infringing and where it is located on the Services (a URL or screenshot is helpful).</li>
            <li>Your address, telephone number, and email address.</li>
            <li>A statement that you have a good-faith belief that use of the material is not authorized by the copyright owner, its agent, or the law.</li>
            <li>A statement, made under penalty of perjury, that the information in the notice is accurate and that you are the copyright owner or authorized to act on the owner&apos;s behalf.</li>
          </ul>
          <p>
            Counter-notices may be sent to the same address. We will
            remove or disable access to allegedly infringing content
            in accordance with the Digital Millennium Copyright Act
            and we may, in appropriate circumstances, terminate
            accounts of repeat infringers.
          </p>
        </section>

        <section id="suspension" className="legal-doc__section">
          <h2>14. Suspension and termination</h2>
          <p>
            We may suspend or terminate your access to all or part of
            the Services, with or without notice, if we reasonably
            believe that:
          </p>
          <ul>
            <li>You have violated these Terms or the law.</li>
            <li>You are using the Services in a way that causes risk or harm to other users, to third parties, or to us.</li>
            <li>We are required to do so by law or by a competent authority.</li>
            <li>The Services or a feature is being discontinued.</li>
          </ul>
          <p>
            You can stop using the Services and delete your account at
            any time, for any reason, as described in the <a href="/privacy">Privacy Policy</a>.
            Sections 4 (Use License restrictions),
            5 (the license you grant to Your Content for already-stored
            content), 6 (Feedback), 13 (DMCA), 15 through 18
            (Disclaimers, Liability, Indemnification, Disputes), and
            20 (General provisions) survive termination.
          </p>
        </section>

        <section id="disclaimers" className="legal-doc__section">
          <h2>15. Disclaimers</h2>
          <p>
            <strong>The Services are provided &ldquo;as is&rdquo; and
            &ldquo;as available,&rdquo; without warranties of any
            kind, whether express, implied, or statutory.</strong>
            To the fullest extent permitted by applicable law, Learn
            of Christ disclaims all warranties, including the implied
            warranties of merchantability, fitness for a particular
            purpose, title, and non-infringement; warranties arising
            from course of dealing or course of performance; and any
            warranty regarding the accuracy, reliability, timeliness,
            availability, or completeness of the Services or any
            content within them.
          </p>
          <p>
            The Services are intended for educational and devotional
            use. They are not professional spiritual direction,
            medical advice, mental-health treatment, legal advice,
            or financial advice. Always consult a qualified
            professional for serious decisions in those areas.
          </p>
          <p>
            We do not warrant that the Services will be uninterrupted,
            error-free, free of harmful components, or that defects
            will be corrected. You access the Services at your own
            discretion and risk and you are solely responsible for
            any damage to your device or loss of data that results.
          </p>
        </section>

        <section id="liability" className="legal-doc__section">
          <h2>16. Limitation of liability</h2>
          <p>
            <strong>To the fullest extent permitted by applicable
            law, in no event will Learn of Christ, its officers,
            directors, employees, contractors, agents, suppliers, or
            licensors be liable for any indirect, incidental,
            special, consequential, exemplary, or punitive damages,
            or for any loss of profits, revenue, data, use, goodwill,
            or other intangible losses, arising out of or related to
            your use of (or inability to use) the Services, even if
            we have been advised of the possibility of such
            damages.</strong>
          </p>
          <p>
            <strong>To the fullest extent permitted by applicable
            law, our aggregate liability to you for all claims arising
            from or relating to the Services or these Terms will not
            exceed the greater of (a) the amounts you paid us, if
            any, in the twelve months immediately before the event
            giving rise to the claim, or (b) one hundred U.S.
            dollars (US $100).</strong>
          </p>
          <p>
            Some jurisdictions do not allow certain limitations on
            implied warranties or the exclusion or limitation of
            certain damages. If those laws apply to you, some or all
            of the above disclaimers, exclusions, or limitations may
            not apply, and you may have additional rights.
          </p>
        </section>

        <section id="indemnification" className="legal-doc__section">
          <h2>17. Indemnification</h2>
          <p>
            To the fullest extent permitted by applicable law, you
            agree to defend, indemnify, and hold harmless Learn of
            Christ and its officers, directors, employees,
            contractors, and agents from and against any claims,
            damages, losses, liabilities, costs, and expenses
            (including reasonable attorneys&apos; fees) that arise out
            of or relate to (a) your access to or use of the
            Services, (b) Your Content, (c) your violation of these
            Terms, or (d) your violation of the rights of any third
            party. We reserve the right to assume the exclusive
            defense and control of any matter otherwise subject to
            indemnification, in which case you will cooperate with
            our defense.
          </p>
        </section>

        <section id="dispute" className="legal-doc__section">
          <h2>18. Governing law and dispute resolution</h2>
          <p>
            <strong>Governing law.</strong> These Terms and any
            dispute arising out of or relating to them or the
            Services are governed by the laws of the State of
            Arizona, United States, and applicable U.S. federal law,
            without regard to conflict-of-laws principles. The U.N.
            Convention on Contracts for the International Sale of
            Goods does not apply.
          </p>
          <p>
            <strong>Informal resolution first.</strong> Before filing
            a formal claim, you agree to try to resolve the dispute
            informally by contacting us at <a href="mailto:hello@learnofchrist.com">hello@learnofchrist.com</a>. Most
            disputes can be resolved that way. We will try in good
            faith to resolve any dispute within 60 days after we
            receive your notice.
          </p>
          <p>
            <strong>Binding arbitration.</strong> Except for the
            exceptions below, you and Learn of Christ agree that any
            dispute, claim, or controversy arising out of or
            relating to these Terms or the Services will be resolved
            by binding individual arbitration administered by the
            American Arbitration Association (&ldquo;AAA&rdquo;)
            under its Consumer Arbitration Rules. The arbitration
            will be conducted in Maricopa County, Arizona (or by
            video, telephone, or written submission, at the
            arbitrator&apos;s discretion and consistent with the
            AAA rules). Judgment on the award may be entered in any
            court of competent jurisdiction.
          </p>
          <p>
            <strong>Exceptions.</strong> Either party may bring a
            claim in small-claims court if it qualifies. Either
            party may seek injunctive or other equitable relief in
            a court of competent jurisdiction to protect its
            intellectual property or to prevent unauthorized access
            to the Services.
          </p>
          <p>
            <strong>Class-action waiver.</strong> You and Learn of
            Christ agree that each may bring claims against the
            other only in your or its individual capacity, and not
            as a plaintiff or class member in any purported class or
            representative proceeding. The arbitrator may not
            consolidate more than one person&apos;s claims and may
            not preside over any form of representative or class
            proceeding. If this class-action waiver is found to be
            unenforceable, then the entirety of this arbitration
            agreement will be null and void.
          </p>
          <p>
            <strong>Opt-out.</strong> You may opt out of the
            arbitration agreement and class-action waiver by sending
            us written notice within 30 days of first accepting
            these Terms to <a href="mailto:hello@learnofchrist.com">hello@learnofchrist.com</a> with the subject line
            &ldquo;Arbitration Opt-Out.&rdquo; The notice must
            include your name, the email associated with your
            account (if any), and a clear statement that you wish
            to opt out. If you opt out, the rest of these Terms,
            including section 18 (Governing law), still apply.
          </p>
          <p>
            <strong>Forum if arbitration does not apply.</strong>
            For any dispute not subject to arbitration, you and
            Learn of Christ agree to the exclusive jurisdiction of
            the state and federal courts located in Maricopa
            County, Arizona, and waive any objection to that venue.
          </p>
          <p>
            <strong>Time limit.</strong> Any claim arising out of or
            related to these Terms or the Services must be brought
            within one (1) year after the cause of action arose, or
            it is forever barred.
          </p>
        </section>

        <section id="changes" className="legal-doc__section">
          <h2>19. Changes to these Terms</h2>
          <p>
            We may update these Terms from time to time. When we
            make material changes we will (a) update the
            &ldquo;Effective&rdquo; date at the top, (b) post the
            updated Terms at this page, and (c) notify users with
            active accounts by email or through an in-app notice
            before the change takes effect. The updated Terms will
            apply prospectively. Your continued use of the Services
            after the effective date constitutes acceptance of the
            updated Terms. If you do not agree, stop using the
            Services and delete your account.
          </p>
        </section>

        <section id="general" className="legal-doc__section">
          <h2>20. General provisions</h2>
          <ul>
            <li>
              <strong>Entire agreement.</strong> These Terms,
              together with the <a href="/privacy">Privacy Policy</a>
              and any other notice or agreement we expressly
              incorporate, constitute the entire agreement between
              you and Learn of Christ regarding the Services and
              supersede any prior agreements.
            </li>
            <li>
              <strong>No waiver.</strong> Our failure to enforce a
              provision is not a waiver of our right to do so later.
            </li>
            <li>
              <strong>Severability.</strong> If any provision of
              these Terms is held to be unenforceable, that
              provision will be enforced to the maximum extent
              permissible and the remaining provisions will remain
              in full force and effect.
            </li>
            <li>
              <strong>Assignment.</strong> You may not assign or
              transfer these Terms or any of your rights or
              obligations under them without our prior written
              consent. We may assign these Terms without restriction,
              including in connection with a merger, acquisition,
              reorganization, or sale of assets.
            </li>
            <li>
              <strong>No third-party beneficiaries.</strong> Except
              as expressly stated (for example, Apple in section 11),
              there are no third-party beneficiaries to these Terms.
            </li>
            <li>
              <strong>Notices.</strong> We may give notice by email,
              by posting on the website, or by an in-app message.
              You may give us notice at <a href="mailto:hello@learnofchrist.com">hello@learnofchrist.com</a>.
            </li>
            <li>
              <strong>Force majeure.</strong> Neither party will be
              liable for any failure or delay caused by an event
              beyond its reasonable control (for example, natural
              disaster, internet outage, or government action).
            </li>
            <li>
              <strong>Headings.</strong> Section headings are for
              convenience only and do not affect the interpretation
              of these Terms.
            </li>
          </ul>
        </section>

        <section id="contact" className="legal-doc__section">
          <h2>21. Contact us</h2>
          <p>
            Questions about these Terms? Reach out at:
          </p>
          <p>
            <strong>Email:</strong> <a href="mailto:hello@learnofchrist.com">hello@learnofchrist.com</a><br />
            <strong>Postal:</strong> Learn of Christ, Legal, Arizona,
            USA. (We will provide a current postal address on
            request.)
          </p>
          <p>
            Thank you for studying with us.
          </p>
        </section>
      </article>
    </div>
  );
}
