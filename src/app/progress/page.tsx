import type { Metadata } from 'next';
import ProgressDashboard from '@/components/ProgressDashboard';

export const metadata: Metadata = {
  title: 'Your Progress — Learn of Christ',
  description: 'Your Bible study progress: chapters opened, completed, streak, and every book you are working through.',
  alternates: { canonical: 'https://learnofchrist.com/progress' },
  // Robots: not worth indexing since content is per-device
  robots: { index: false, follow: true },
};

export default function ProgressPage() {
  return (
    <div className="page-container">
      <div className="max-w-4xl mx-auto">
        <div className="page-header">
          <h1>Your Progress</h1>
          <p>Every chapter you open is saved to this device. Sign in support is coming — your history will carry over.</p>
        </div>
        <ProgressDashboard />
      </div>
    </div>
  );
}
