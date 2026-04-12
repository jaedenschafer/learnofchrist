export const metadata = {
  title: 'Privacy Policy - Learn of Christ',
  description: 'Our commitment to your privacy and data protection.',
};

export default function PrivacyPage() {
  return (
    <div className="bg-cream min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="font-serif text-5xl font-bold text-navy mb-8">Privacy Policy</h1>
        
        <div className="card space-y-6">
          <div>
            <h2 className="font-serif text-2xl font-bold text-navy mb-3">Introduction</h2>
            <p className="text-navy/90">
              At Learn of Christ, we are committed to protecting your privacy. This Privacy Policy explains how we handle your information when you visit our website.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-navy mb-3">Information We Collect</h2>
            <p className="text-navy/90 mb-3">
              When you subscribe to our newsletter, we collect your email address. We do not collect or store any other personal information without your explicit consent.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-navy mb-3">How We Use Your Information</h2>
            <p className="text-navy/90 mb-3">We use your information solely for:</p>
            <ul className="list-disc list-inside text-navy/90 space-y-1">
              <li>Sending you Bible study resources and insights</li>
              <li>Improving our website and user experience</li>
            </ul>
          </div>

          <div className="border-t border-cream pt-6">
            <p className="text-sm text-sage">Last updated: March 2026</p>
          </div>
        </div>
      </div>
    </div>
  );
}
