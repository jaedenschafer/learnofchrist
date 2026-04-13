export const metadata = {
  title: 'Terms of Service - Learn of Christ',
  description: 'Terms and conditions for using Learn of Christ.',
};

export default function TermsPage() {
  return (
    <div className="page-container">
      <div className="max-w-3xl mx-auto">
        <div className="page-header !text-left">
          <h1>Terms of Service</h1>
        </div>

        <div className="space-y-3">
          <div className="card">
            <h2 className="font-sans text-base font-semibold text-navy mb-2">Welcome</h2>
            <p className="text-sm text-navy/55 leading-relaxed">
              These Terms of Service govern your use of our website and services. By accessing Learn of Christ, you agree to be bound by these terms.
            </p>
          </div>

          <div className="card">
            <h2 className="font-sans text-base font-semibold text-navy mb-2">Use License</h2>
            <p className="text-sm text-navy/55 leading-relaxed mb-2">
              We grant you a limited license for personal study and non-commercial purposes. You may not:
            </p>
            <ul className="space-y-1.5">
              {['Modify or copy content without permission', 'Use content for commercial purposes', 'Attempt unauthorized access to our systems', 'Transmit viruses or malicious code'].map((item, i) => (
                <li key={i} className="flex gap-2 items-start text-sm text-navy/55">
                  <span className="text-navy/25 flex-shrink-0">&bull;</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="card">
            <h2 className="font-sans text-base font-semibold text-navy mb-2">Content Ownership</h2>
            <p className="text-sm text-navy/55 leading-relaxed">
              All content including study guides, commentary, and design is owned by Learn of Christ or our content providers. Scripture references are from various translations as noted.
            </p>
          </div>

          <div className="card">
            <h2 className="font-sans text-base font-semibold text-navy mb-2">Disclaimer</h2>
            <p className="text-sm text-navy/55 leading-relaxed">
              Our resources are provided &ldquo;as is&rdquo; for educational and spiritual purposes. We do not guarantee completeness and are not liable for errors or omissions.
            </p>
          </div>

          <div className="text-xs text-navy/30 px-1 mt-4">Last updated: March 2026</div>
        </div>
      </div>
    </div>
  );
}
