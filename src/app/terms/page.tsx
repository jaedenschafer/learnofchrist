export const metadata = {
  title: 'Terms of Service - Learn of Christ',
  description: 'Terms and conditions for using Learn of Christ.',
};

export default function TermsPage() {
  return (
    <div className="bg-cream min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="font-serif text-5xl font-bold text-navy mb-8">Terms of Service</h1>
        
        <div className="card space-y-6">
          <div>
            <h2 className="font-serif text-2xl font-bold text-navy mb-3">Welcome to Learn of Christ</h2>
            <p className="text-navy/90">
              These Terms of Service govern your use of our website and services. By accessing or using Learn of Christ, you agree to be bound by these terms.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-navy mb-3">Use License</h2>
            <p className="text-navy/90 mb-3">
              We grant you a limited license to access and use our resources for personal study and non-commercial purposes. You may not:
            </p>
            <ul className="list-disc list-inside text-navy/90 space-y-1">
              <li>Modify or copy content without permission</li>
              <li>Use content for commercial purposes</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Transmit viruses or malicious code</li>
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-navy mb-3">Content Ownership</h2>
            <p className="text-navy/90">
              All content, including study guides, commentary, and design, is owned by Learn of Christ or our content providers. Scripture references are from various translations as noted.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-navy mb-3">Disclaimer</h2>
            <p className="text-navy/90">
              Our resources are provided "as is" for educational and spiritual purposes. We do not guarantee the accuracy or completeness of all information and are not liable for any errors or omissions.
            </p>
          </div>

          <div className="border-t border-cream pt-6">
            <p className="text-sm text-sage">Last updated: March 2026</p>
          </div>
        </div>
      </div>
    </div>
  );
}
