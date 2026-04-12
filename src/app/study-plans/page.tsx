import Link from 'next/link';

export const metadata = {
  title: 'Study Plans - Learn of Christ',
  description: 'Choose from structured Bible study plans designed for consistent, meaningful engagement with scripture.',
};

interface StudyPlan {
  id: string;
  name: string;
  description: string;
  duration: string;
  icon: string;
}

const plans: StudyPlan[] = [
  {
    id: 'bible-in-year',
    name: 'Bible in a Year',
    description: 'Read through the entire Bible in one year with a structured daily reading plan that covers Old and New Testament passages together.',
    duration: '365 days',
    icon: '📖',
  },
  {
    id: 'old-testament',
    name: 'Old Testament Journey',
    description: 'Dive deep into the Old Testament with detailed commentary and reflection questions on each chapter.',
    duration: '6-9 months',
    icon: '🏛️',
  },
  {
    id: 'new-testament',
    name: 'New Testament Essentials',
    description: 'Focus on the life, teachings, and redemptive work of Jesus Christ through the Gospels and Epistles.',
    duration: '3-4 months',
    icon: '✨',
  },
  {
    id: 'come-follow-me',
    name: 'Come Follow Me',
    description: 'A comprehensive year-long study designed to help you develop a deeper relationship with Jesus Christ.',
    duration: '52 weeks',
    icon: '❤️',
  },
  {
    id: 'topical',
    name: 'Topical Studies',
    description: 'Explore specific themes throughout Scripture, including faith, grace, forgiveness, and discipleship.',
    duration: 'Flexible',
    icon: '🎯',
  },
  {
    id: 'gospels',
    name: 'Gospel Deep Dive',
    description: 'Study all four Gospels side-by-side to understand different perspectives on Jesus\'s life and ministry.',
    duration: '8-10 weeks',
    icon: '📚',
  },
];

export default function StudyPlansPage() {
  return (
    <div className="bg-cream min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="font-serif text-5xl font-bold text-navy mb-4">Study Plans</h1>
          <p className="text-xl text-navy/80 max-w-2xl mx-auto">
            Choose a study plan that fits your schedule and spiritual goals. Each plan is designed to deepen your understanding of Scripture and draw you closer to Christ.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div key={plan.id} className="card flex flex-col hover:shadow-xl transition-shadow duration-300">
              <div className="text-5xl mb-4">{plan.icon}</div>
              <h3 className="font-serif text-xl font-bold text-navy mb-2">{plan.name}</h3>
              <p className="text-sm text-sage font-medium mb-3">{plan.duration}</p>
              <p className="text-navy/80 text-sm mb-6 flex-grow">{plan.description}</p>
              <button className="btn-primary text-sm w-full">
                Start Plan
              </button>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-navy to-brown text-cream rounded-lg p-8 text-center">
          <h2 className="font-serif text-3xl font-bold mb-4">Not sure which plan is right for you?</h2>
          <p className="text-cream/90 mb-6">
            You can customize any study plan to fit your schedule and learning style. Start with whatever appeals to you most!
          </p>
          <Link href="/bible" className="btn-primary inline-block">
            Start with the Bible
          </Link>
        </div>
      </div>
    </div>
  );
}
