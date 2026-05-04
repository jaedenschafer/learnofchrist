// ─── ISR ───
// Static page — cache for a week.
export const revalidate = 604800;

export const metadata = {
  title: 'Privacy Policy — Learn of Christ',
  description:
    'How Learn of Christ handles your information across the website and iOS app. What we collect, why, who we share with, your rights, and how to delete your account.',
  alternates: { canonical: 'https://learnofchrist.com/privacy' },
};

export default function PrivacyPage() {
  return (
    <div className="page-container">
      <article className="legal-doc">
        <header className="legal-doc__head">
          <p className="legal-doc__eyebrow">Privacy</p>
          <h1>Privacy Policy</h1>
          <p className="legal-doc__sub">
            Effective May 4, 2026 · Last updated May 4, 2026
          </p>
        </header>

        <section className="legal-doc__summary">
          <h2>The short version</h2>
          <p>
            Learn of Christ is a free Bible study app and website. You can read
            scripture, follow study guides, and explore sacred art without
            creating an account. If you choose to sign in, we save your notes,
            highlights, reflection journal entries, and reading progress so
            they sync across your devices.
          </p>
          <p>
            We do not sell your personal information. We do not run advertising
            networks. We do not use behavioral tracking, advertising IDs, or
            third-party analytics SDKs that build profiles about you. We collect
            only what we need to operate the app, and we let you delete your
            account and your data at any time from inside the app or by
            emailing <a href="mailto:hello@learnofchrist.com">hello@learnofchrist.com</a>.
          </p>
          <p>
            The full policy below explains what that means in detail. It
            applies to the Learn of Christ iOS application, our Android
            application (when released), our website at learnofchrist.com, and
            any related services we operate (collectively, the &ldquo;Services&rdquo;).
          </p>
        </section>

        <nav className="legal-doc__toc" aria-label="On this page">
          <p className="legal-doc__toc-title">On this page</p>
          <ol>
            <li><a href="#scope">1. Who we are and what this covers</a></li>
            <li><a href="#information">2. Information we collect</a></li>
            <li><a href="#sources">3. How we receive that information</a></li>
            <li><a href="#purposes">4. How we use your information</a></li>
            <li><a href="#legal-bases">5. Legal bases (EU/UK/EEA users)</a></li>
            <li><a href="#sign-in">6. Sign-in methods and what each one shares</a></li>
            <li><a href="#permissions">7. Device permissions and notifications</a></li>
            <li><a href="#sharing">8. How we share information</a></li>
            <li><a href="#service-providers">9. Service providers we rely on</a></li>
            <li><a href="#cookies">10. Cookies and similar technologies</a></li>
            <li><a href="#analytics">11. Analytics and crash reporting</a></li>
            <li><a href="#children">12. Children&apos;s privacy</a></li>
            <li><a href="#retention">13. How long we keep your information</a></li>
            <li><a href="#security">14. How we protect your information</a></li>
            <li><a href="#transfers">15. International data transfers</a></li>
            <li><a href="#your-rights">16. Your rights and choices</a></li>
            <li><a href="#delete">17. Deleting your account</a></li>
            <li><a href="#california">18. California, Virginia, and other US state rights</a></li>
            <li><a href="#eu">19. EU, UK, and EEA rights</a></li>
            <li><a href="#third-party">20. Third-party links and content</a></li>
            <li><a href="#changes">21. Changes to this policy</a></li>
            <li><a href="#contact">22. Contact us</a></li>
          </ol>
        </nav>

        <section id="scope" className="legal-doc__section">
          <h2>1. Who we are and what this covers</h2>
          <p>
            Learn of Christ (&ldquo;Learn of Christ,&rdquo; &ldquo;we,&rdquo;
            &ldquo;us,&rdquo; or &ldquo;our&rdquo;) operates the Learn of
            Christ website at learnofchrist.com and the Learn of Christ iOS
            and Android applications. We are headquartered in Arizona, United
            States.
          </p>
          <p>
            This Privacy Policy describes how we collect, use, share, and
            protect personal information when you use our Services. It applies
            whether you visit the site as a guest, create an account, or sign
            in with a third-party identity provider. It does not apply to
            third-party websites, applications, or services that we do not
            own or control, even if you reach them through a link in our app.
          </p>
        </section>

        <section id="information" className="legal-doc__section">
          <h2>2. Information we collect</h2>
          <p>
            We collect only what is necessary to provide and improve the
            Services. We have organized the categories below by source, so you
            know exactly what we store and why.
          </p>

          <h3>Information you provide directly</h3>
          <ul>
            <li>
              <strong>Account information.</strong> If you create an account,
              we collect the email address you sign in with. We do not collect
              your phone number, date of birth, mailing address, or
              government-issued identifiers.
            </li>
            <li>
              <strong>Profile information (optional).</strong> You may add a
              display name and an avatar image. You are not required to use
              your real name and you can change or remove this information at
              any time from inside the app.
            </li>
            <li>
              <strong>Study content you create.</strong> Reflection journal
              entries, scripture highlights, verse notes, prayer entries,
              reading-plan progress, &ldquo;carry&rdquo; commitments, and any
              other personal study artifacts you save in the app. This
              information is private to you by default. We do not display it
              publicly and we do not share it with other users unless you
              explicitly use a sharing feature.
            </li>
            <li>
              <strong>Communications with us.</strong> If you email us, fill
              out a contact form, or report a problem with an artwork or
              study guide, we keep a record of the message and any
              attachments so we can respond and follow up.
            </li>
          </ul>

          <h3>Information we collect automatically when you use the Services</h3>
          <ul>
            <li>
              <strong>Device and app information.</strong> The type of device
              you use, the operating system version, the version of the
              Learn of Christ app, your preferred language, and time zone.
              On iOS this is limited to information Apple makes available to
              every app; we do not request the Identifier for Advertisers
              (IDFA) and we have not configured the app to track you across
              other apps and websites under Apple&apos;s App Tracking
              Transparency framework.
            </li>
            <li>
              <strong>Approximate location.</strong> We may infer an
              approximate region (typically country, sometimes state) from
              your IP address so we can comply with regional content licensing
              for some Bible translations and so we can show you the right
              language by default. We do not collect precise GPS coordinates
              and we do not request location permission from your device.
            </li>
            <li>
              <strong>App and reading activity.</strong> Which chapters and
              study guides you have opened, your reading streak, your current
              translation preference, your study-depth preference, and
              similar data needed to keep your reading progress accurate
              across devices. If you sign out, this activity stays on the
              specific device only and is not associated with you.
            </li>
            <li>
              <strong>Crash and error reports.</strong> If the app crashes or
              encounters an error, we may collect a diagnostic report
              describing what happened (the screen, a stack trace, device
              type, OS version). These reports do not include the contents of
              your notes, reflections, or highlights. See section 11.
            </li>
            <li>
              <strong>Server logs.</strong> When the app or website talks to
              our servers, our hosting provider records standard request
              logs (IP address, request path, response code, user agent,
              timestamp). We use these logs to detect abuse, debug issues,
              and meet security obligations. They are kept for a limited
              time as described in section 13.
            </li>
          </ul>

          <h3>Information we receive from third parties</h3>
          <ul>
            <li>
              <strong>Sign-in providers.</strong> If you choose Sign in with
              Apple, Google, or another social provider, that provider
              passes us a basic identity assertion. Section 6 describes
              exactly what we receive in each case.
            </li>
            <li>
              <strong>Bible translation licensors.</strong> Some Bible
              translations are made available to us by external licensors
              under terms that may require us to report aggregated,
              non-identifying usage (for example, &ldquo;X anonymous reads of
              chapter Y this month&rdquo;). We do not share your identity
              with these licensors.
            </li>
          </ul>
        </section>

        <section id="sources" className="legal-doc__section">
          <h2>3. How we receive that information</h2>
          <p>
            We receive information when you (a) install or open our app,
            (b) visit our website, (c) create an account or sign in,
            (d) save reading content, (e) contact us, or (f) interact with
            sharing features (such as sharing a verse to another app on
            your device). Your operating system or browser may also send
            standard request information automatically; that is normal
            internet plumbing, not a separate disclosure of personal
            information by you.
          </p>
        </section>

        <section id="purposes" className="legal-doc__section">
          <h2>4. How we use your information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Run the Services, including authenticating you, syncing your
              notes, highlights, and reading progress across devices, and
              showing you the right Bible translation, study depth, and
              language.</li>
            <li>Personalize the experience without profiling. For example, we
              may surface a continue-where-you-left-off card or restore your
              chosen reader theme. We do not use your data to build advertising
              profiles or to predict consumer behavior.</li>
            <li>Communicate with you about service issues, security alerts,
              important policy updates, and direct replies to your support
              messages. We do not send marketing emails unless you have
              specifically opted in.</li>
            <li>Diagnose, debug, and improve the Services, including by
              looking at crash reports and aggregate usage patterns
              (&ldquo;page X loads slowly on older iPhones&rdquo;).</li>
            <li>Detect, prevent, and respond to fraud, abuse, or violations
              of our Terms of Service, including bot activity, scraping, and
              attempts to bypass authentication.</li>
            <li>Comply with our legal obligations, respond to lawful
              requests, and enforce our agreements.</li>
          </ul>
          <p>
            We do not use your information to train commercial AI models. We
            do not sell or rent your information. We do not share your
            information with data brokers or advertising networks.
          </p>
        </section>

        <section id="legal-bases" className="legal-doc__section">
          <h2>5. Legal bases (EU/UK/EEA users)</h2>
          <p>
            If you are in the European Economic Area, the United Kingdom,
            or another jurisdiction with similar data-protection rules, we
            rely on the following legal bases under the GDPR/UK GDPR:
          </p>
          <ul>
            <li><strong>Performance of a contract</strong> when we provide the
              Services you have asked for (for example, syncing your notes
              when you sign in).</li>
            <li><strong>Legitimate interests</strong> in operating, securing,
              and improving the Services, where those interests are not
              overridden by your rights and freedoms (for example, server
              logging for abuse prevention).</li>
            <li><strong>Consent</strong> where required, for example for
              optional crash reporting on platforms where we ask for
              permission first, or for marketing emails if we ever send any.
              You can withdraw consent at any time.</li>
            <li><strong>Compliance with a legal obligation</strong> when we
              must retain or disclose information to comply with applicable
              law.</li>
          </ul>
        </section>

        <section id="sign-in" className="legal-doc__section">
          <h2>6. Sign-in methods and what each one shares</h2>
          <p>
            You do not need an account to read scripture, browse art, or
            view study guides. An account is required only to sync your
            personal study content (notes, highlights, reflections) across
            devices. The following sign-in methods are available:
          </p>
          <ul>
            <li>
              <strong>Sign in with Apple.</strong> Apple sends us an opaque
              user identifier and either your real email address or a
              private relay email of the form
              <code>xxxx@privaterelay.appleid.com</code>, depending on the
              choice you make in Apple&apos;s prompt. Apple may also send us
              the name you choose to share. We never see your Apple ID
              password or any other Apple account data. If you used a relay
              email, replies we send to that address are forwarded to you by
              Apple; you can disable forwarding at any time from your Apple
              ID settings.
            </li>
            <li>
              <strong>Sign in with Google.</strong> Google sends us your
              email address, a Google-issued user identifier, and the
              public profile fields you allow (typically your name and
              avatar URL). We never see your Google password.
            </li>
            <li>
              <strong>Email magic link.</strong> You enter an email address
              and we send a one-time sign-in link. We store the email
              address on our authentication backend so we can recognize you
              on future sign-ins. There is no password to remember and no
              password for us to leak.
            </li>
          </ul>
          <p>
            We do not post anything to any third-party network on your
            behalf, ever.
          </p>
        </section>

        <section id="permissions" className="legal-doc__section">
          <h2>7. Device permissions and notifications</h2>
          <p>
            The Learn of Christ app may, from time to time, ask iOS or
            Android for permission to use specific device capabilities. You
            can always say no, and you can revoke any permission later in
            your device&apos;s system settings.
          </p>
          <ul>
            <li>
              <strong>Notifications.</strong> If you opt in to reading
              reminders, daily verse, or reflection prompts, the operating
              system delivers those notifications on our behalf. Notification
              content is generated locally where possible. Notification
              tokens are stored on our servers solely to deliver the
              notifications you requested.
            </li>
            <li>
              <strong>Photo library / saving images.</strong> If you save a
              shareable verse card to your photo library, the app needs
              permission to write to your photos. The image is generated on
              your device; we do not upload it.
            </li>
            <li>
              <strong>Camera.</strong> If we add a feature to scan a
              physical Bible page or import a study card, we will request
              camera permission only when you tap that feature. We do not
              passively access the camera at any other time.
            </li>
            <li>
              <strong>Microphone.</strong> The app does not currently
              request microphone access. If a future feature needs it (for
              example, a voice-prayer journal), we will ask only when you
              activate the feature.
            </li>
            <li>
              <strong>Contacts and calendars.</strong> We do not access
              your contacts or your calendar.
            </li>
            <li>
              <strong>Location.</strong> We do not request the
              precise-location permission. We may infer your approximate
              region from your IP address as described in section 2.
            </li>
            <li>
              <strong>Bluetooth, Health, Motion, HomeKit, etc.</strong>
              We do not request these.
            </li>
          </ul>
        </section>

        <section id="sharing" className="legal-doc__section">
          <h2>8. How we share information</h2>
          <p>We share personal information only in the limited circumstances below.</p>
          <ul>
            <li>
              <strong>With service providers acting on our behalf.</strong>
              We use a small set of vendors to run the Services (hosting,
              authentication, transactional email, crash reporting, customer
              support). These vendors process information only on our
              instructions and under written contracts that require them to
              protect it. Section 9 lists them.
            </li>
            <li>
              <strong>With sign-in providers you choose.</strong> When you
              use Sign in with Apple or Sign in with Google, the act of
              authenticating necessarily involves an exchange with that
              provider. Their handling of your information is governed by
              their own privacy policies.
            </li>
            <li>
              <strong>To comply with law or protect rights.</strong> We may
              disclose information when we believe in good faith that
              disclosure is necessary to comply with a subpoena, court
              order, or other lawful request; to enforce our Terms of
              Service; to detect and prevent fraud, abuse, or security
              issues; or to protect the rights, property, or safety of
              Learn of Christ, our users, or others. Where allowed by law,
              we will try to notify the user before complying with a
              government request.
            </li>
            <li>
              <strong>With your consent or at your direction.</strong> If
              you ask us to share information (for example, by using a
              share-to-Twitter button), we will. We will also share
              information with any third party you specifically authorize.
            </li>
            <li>
              <strong>In a business transaction.</strong> If we are
              involved in a merger, acquisition, financing, reorganization,
              bankruptcy, or sale of assets, your information may be
              transferred as part of that transaction. We will require any
              successor to honor this Privacy Policy or to notify you of
              material changes before transitioning.
            </li>
          </ul>
          <p>
            We do not sell or share your personal information for
            cross-context behavioral advertising, as those terms are used
            in the California Consumer Privacy Act, the Virginia Consumer
            Data Protection Act, or similar state laws.
          </p>
        </section>

        <section id="service-providers" className="legal-doc__section">
          <h2>9. Service providers we rely on</h2>
          <p>
            The Services are built on top of a small group of providers
            chosen for their privacy posture. The current providers are:
          </p>
          <ul>
            <li>
              <strong>Vercel</strong> &mdash; web hosting and content
              delivery for our website and image assets.
            </li>
            <li>
              <strong>Supabase</strong> &mdash; backend database,
              authentication, and storage for accounts, notes, highlights,
              reflections, and reading progress. Data is stored in Supabase
              regions located in the United States.
            </li>
            <li>
              <strong>Apple Inc.</strong> &mdash; iOS app distribution,
              Sign in with Apple, and the iOS push notification service.
            </li>
            <li>
              <strong>Google LLC</strong> &mdash; Sign in with Google for
              users who choose that method, and (when the Android app
              ships) Android app distribution and Firebase Cloud Messaging
              for push notifications.
            </li>
            <li>
              <strong>Resend or a comparable transactional email
              provider</strong> &mdash; sends sign-in magic links and
              service emails such as security alerts and account-deletion
              confirmations.
            </li>
            <li>
              <strong>A privacy-respecting product analytics tool</strong>
              &mdash; aggregate, non-identifying usage and performance
              metrics. See section 11.
            </li>
            <li>
              <strong>A crash-reporting tool</strong> &mdash; collects
              diagnostic reports when the app crashes or hits an
              unrecoverable error. See section 11.
            </li>
          </ul>
          <p>
            We update this list from time to time as the Services evolve.
            We may rely on additional, comparable infrastructure providers
            (for example, a CDN edge, a backup service, or a fraud-detection
            service) that act as our processors under written contracts.
          </p>
        </section>

        <section id="cookies" className="legal-doc__section">
          <h2>10. Cookies and similar technologies</h2>
          <p>
            On the website we use a small number of essential cookies and
            similar technologies (for example, your reading-theme choice,
            your translation, and a session cookie if you sign in). We do
            not use advertising cookies, tracking pixels from advertising
            networks, or cross-site fingerprinting. Where required, the site
            shows a cookie banner and lets you decline non-essential cookies.
          </p>
          <p>
            The Learn of Christ iOS app does not use web cookies for
            authentication. Sign-in tokens are stored in iOS Keychain and
            limited preferences are stored locally using Apple&apos;s
            standard preferences API.
          </p>
        </section>

        <section id="analytics" className="legal-doc__section">
          <h2>11. Analytics and crash reporting</h2>
          <p>
            We use a privacy-respecting product-analytics tool to understand
            aggregate usage of the Services (which features are used, how
            many people read which book, how often a screen errors out).
            That tool does not use advertising IDs and does not build
            cross-app or cross-site profiles. Where the platform requires
            it, we will ask for your permission before enabling analytics.
          </p>
          <p>
            We use a crash-reporting tool to receive diagnostic reports
            when the app crashes or fails. A crash report typically
            contains: the device model, OS version, app version, the
            screen the user was on, a stack trace, and free memory at the
            time of the crash. Crash reports do not include the contents
            of your notes, reflections, highlights, or messages.
          </p>
          <p>
            On iOS, you can also turn off &ldquo;Share with App
            Developers&rdquo; under Settings → Privacy &amp; Security →
            Analytics &amp; Improvements at any time, which prevents Apple
            from sharing aggregate iOS-level analytics with us.
          </p>
        </section>

        <section id="children" className="legal-doc__section">
          <h2>12. Children&apos;s privacy</h2>
          <p>
            The Services are intended for users who are at least 13 years
            old (or the equivalent minimum age in your jurisdiction).
            They are not directed to children under 13. We do not
            knowingly collect personal information from children under 13.
            If you believe a child under 13 has created an account, please
            contact us at <a href="mailto:hello@learnofchrist.com">hello@learnofchrist.com</a> and we will delete the
            account and any associated information promptly.
          </p>
          <p>
            Parents and guardians are welcome to read scripture and
            browse the public site with younger children; that browsing
            does not require an account and does not collect identifying
            information about the child.
          </p>
        </section>

        <section id="retention" className="legal-doc__section">
          <h2>13. How long we keep your information</h2>
          <ul>
            <li>
              <strong>Your account, notes, highlights, and reflections</strong>
              are kept until you delete them or delete your account. When
              you delete your account, we delete your personal content
              promptly and remove backups within a reasonable rolling
              window (typically within 30 days).
            </li>
            <li>
              <strong>Server access logs</strong> are kept for up to 30
              days for debugging and abuse prevention, after which they
              are deleted or aggregated.
            </li>
            <li>
              <strong>Crash reports</strong> are kept for up to 90 days
              and then deleted.
            </li>
            <li>
              <strong>Email correspondence</strong> with us is kept for
              as long as we reasonably need it to follow up on your
              question or to retain a record of how we handled an issue.
            </li>
            <li>
              <strong>Information we are legally required to keep</strong>
              (for example, records related to tax, fraud prevention, or
              security incidents) is kept for the period required by law.
            </li>
          </ul>
        </section>

        <section id="security" className="legal-doc__section">
          <h2>14. How we protect your information</h2>
          <p>
            We use industry-standard technical and organizational measures
            to protect your information. Network traffic between your
            device and our servers is encrypted using TLS. Stored data is
            encrypted at rest by our hosting and database providers.
            Access to production systems is restricted to a small number
            of administrators using strong authentication. We monitor for
            unusual activity and review the security of the Services
            regularly.
          </p>
          <p>
            No system is perfectly secure. We strongly recommend that you
            use a unique sign-in method, enable a passcode and biometrics
            on your device, and contact us right away if you suspect
            unauthorized access to your account.
          </p>
        </section>

        <section id="transfers" className="legal-doc__section">
          <h2>15. International data transfers</h2>
          <p>
            We are based in the United States and our service providers
            are primarily located in the United States. If you access the
            Services from outside the United States, your information will
            be transferred to, processed in, and stored in the United
            States and other countries that may have data-protection
            rules different from those in your country.
          </p>
          <p>
            For transfers from the European Economic Area, the United
            Kingdom, or Switzerland, we rely on the European Commission&apos;s
            Standard Contractual Clauses (and the UK&apos;s International
            Data Transfer Addendum where applicable) with our processors,
            and we apply additional safeguards where appropriate.
          </p>
        </section>

        <section id="your-rights" className="legal-doc__section">
          <h2>16. Your rights and choices</h2>
          <p>
            You have meaningful control over the information we hold
            about you:
          </p>
          <ul>
            <li>
              <strong>Access and review.</strong> You can see your
              account email, notes, highlights, and reflections from
              inside the app at any time.
            </li>
            <li>
              <strong>Correction.</strong> You can edit your display name,
              avatar, and any of your saved content directly in the app.
            </li>
            <li>
              <strong>Export.</strong> You can request a copy of the
              personal information associated with your account in a
              portable, machine-readable format by emailing us.
            </li>
            <li>
              <strong>Deletion.</strong> You can delete individual notes,
              highlights, or reflections at any time, and you can delete
              your entire account as described in section 17.
            </li>
            <li>
              <strong>Object or restrict processing.</strong> Where
              applicable law gives you the right to object to or restrict
              certain processing, we will honor your request unless we
              have a compelling legal basis to continue.
            </li>
            <li>
              <strong>Withdraw consent.</strong> Where we rely on
              consent, you can withdraw it at any time. Withdrawal does
              not affect the lawfulness of processing carried out before
              withdrawal.
            </li>
            <li>
              <strong>Lodge a complaint.</strong> If you are in the EEA,
              UK, or another jurisdiction with a data-protection
              authority, you have the right to complain to that
              authority. We&apos;d appreciate a chance to address your
              concern first.
            </li>
          </ul>
          <p>
            To exercise any of these rights, contact us at <a href="mailto:hello@learnofchrist.com">hello@learnofchrist.com</a>. We may
            need to verify your identity before responding to a request.
          </p>
        </section>

        <section id="delete" className="legal-doc__section">
          <h2>17. Deleting your account</h2>
          <p>
            You can delete your account at any time. There are two ways:
          </p>
          <ol>
            <li>
              <strong>From inside the app.</strong> Open Settings → Account → Delete account.
              Confirm the prompt. Your account, your reflection journal,
              your highlights, your notes, and your reading progress will
              be removed from our active systems immediately and from
              backups within a reasonable rolling window (typically within
              30 days).
            </li>
            <li>
              <strong>By email.</strong> Send a request from the email
              address on your account to <a href="mailto:hello@learnofchrist.com">hello@learnofchrist.com</a>. We will
              delete the account and confirm by email.
            </li>
          </ol>
          <p>
            Some information may be retained after account deletion if we
            are legally required to keep it (for example, transactional
            records) or if it has been aggregated and de-identified so
            that it can no longer be associated with you. Public content
            you may have generated (such as a verse you publicly shared
            on a social network) is outside our control once it has been
            posted there.
          </p>
        </section>

        <section id="california" className="legal-doc__section">
          <h2>18. California, Virginia, and other US state rights</h2>
          <p>
            If you are a resident of California, Virginia, Colorado,
            Connecticut, Utah, Texas, or another US state with a
            consumer-privacy law, you may have the right to:
          </p>
          <ul>
            <li>Confirm whether we are processing personal information about you, and request access to that information.</li>
            <li>Request that we correct inaccurate personal information.</li>
            <li>Request that we delete personal information we have collected from you, subject to certain exceptions.</li>
            <li>Request a portable copy of your personal information.</li>
            <li>Opt out of the &ldquo;sale&rdquo; or &ldquo;sharing&rdquo; of personal information for cross-context behavioral advertising. We do not engage in either, so there is nothing to opt out of, but the right exists.</li>
            <li>Not be discriminated against for exercising these rights.</li>
          </ul>
          <p>
            To exercise these rights, contact us at <a href="mailto:hello@learnofchrist.com">hello@learnofchrist.com</a>. We will
            verify your request using the information associated with
            your account. You may use an authorized agent; we may need
            written proof of authorization. If we deny your request, you
            may appeal by replying to the denial email; we will respond
            within the time required by your state&apos;s law.
          </p>
          <p>
            <strong>California &ldquo;Shine the Light.&rdquo;</strong>
            California Civil Code Section 1798.83 permits California
            residents to request information regarding our disclosure of
            personal information to third parties for direct-marketing
            purposes. We do not disclose personal information to third
            parties for their own direct-marketing purposes.
          </p>
        </section>

        <section id="eu" className="legal-doc__section">
          <h2>19. EU, UK, and EEA rights</h2>
          <p>
            For purposes of the General Data Protection Regulation
            (&ldquo;GDPR&rdquo;) and the UK GDPR, the data controller of
            your personal information is Learn of Christ. You can reach
            us at the contact information in section 22.
          </p>
          <p>
            In addition to the rights described in section 16, you have
            the right to lodge a complaint with your local supervisory
            authority. We will cooperate with any reasonable request from
            an authority. If you believe we have not addressed your
            request adequately, please contact us before filing a
            complaint &mdash; we want a chance to fix the issue.
          </p>
        </section>

        <section id="third-party" className="legal-doc__section">
          <h2>20. Third-party links and content</h2>
          <p>
            Our study guides cite external resources from museums,
            manuscript archives, and academic publishers (for example,
            Sefaria, Bible Odyssey, the British Museum, the
            Israel Antiquities Authority, the Met). When you tap one of
            these citations, you leave the Learn of Christ Services and
            arrive on a third-party website. Their privacy practices are
            governed by their own policies. We do not control and are
            not responsible for those sites&apos; content, advertising,
            or data practices.
          </p>
          <p>
            Bible translations are licensed from their respective
            publishers. Translation text remains the property of the
            relevant publisher and is provided for personal study under
            their terms.
          </p>
        </section>

        <section id="changes" className="legal-doc__section">
          <h2>21. Changes to this policy</h2>
          <p>
            We may update this Privacy Policy from time to time to
            reflect changes in our practices, the Services, or applicable
            law. When we make material changes we will (a) update the
            &ldquo;Effective&rdquo; date at the top, (b) post the updated
            policy at this page, and (c) notify users with active
            accounts by email or through an in-app notice before the
            change takes effect. Your continued use of the Services
            after a change becomes effective constitutes acceptance of
            the updated Privacy Policy.
          </p>
        </section>

        <section id="contact" className="legal-doc__section">
          <h2>22. Contact us</h2>
          <p>
            We are happy to hear from you. For privacy questions,
            requests under this policy, or general feedback:
          </p>
          <p>
            <strong>Email:</strong> <a href="mailto:hello@learnofchrist.com">hello@learnofchrist.com</a><br />
            <strong>Postal:</strong> Learn of Christ, Privacy &amp; Trust,
            Arizona, USA. (We will provide a current postal address on
            request.)
          </p>
          <p>
            Thank you for trusting us with your time and your study.
          </p>
        </section>
      </article>
    </div>
  );
}
