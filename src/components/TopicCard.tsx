import Link from 'next/link';
import { Topic } from '@/data/topics';

interface TopicCardProps {
  topic: Topic;
}

const topicColors: Record<string, { bg: string; text: string; border: string }> = {
  faith: { bg: 'bg-amber-50', text: 'text-amber-700', border: 'border-amber-100' },
  hope: { bg: 'bg-sky-50', text: 'text-sky-700', border: 'border-sky-100' },
  love: { bg: 'bg-rose-50', text: 'text-rose-700', border: 'border-rose-100' },
  grace: { bg: 'bg-violet-50', text: 'text-violet-700', border: 'border-violet-100' },
  forgiveness: { bg: 'bg-teal-50', text: 'text-teal-700', border: 'border-teal-100' },
  peace: { bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-100' },
  anxiety: { bg: 'bg-indigo-50', text: 'text-indigo-700', border: 'border-indigo-100' },
  joy: { bg: 'bg-orange-50', text: 'text-orange-700', border: 'border-orange-100' },
  strength: { bg: 'bg-red-50', text: 'text-red-700', border: 'border-red-100' },
  wisdom: { bg: 'bg-cyan-50', text: 'text-cyan-700', border: 'border-cyan-100' },
  purpose: { bg: 'bg-fuchsia-50', text: 'text-fuchsia-700', border: 'border-fuchsia-100' },
  obedience: { bg: 'bg-lime-50', text: 'text-lime-700', border: 'border-lime-100' },
  sacrifice: { bg: 'bg-stone-50', text: 'text-stone-700', border: 'border-stone-200' },
  resurrection: { bg: 'bg-yellow-50', text: 'text-yellow-700', border: 'border-yellow-100' },
  redemption: { bg: 'bg-pink-50', text: 'text-pink-700', border: 'border-pink-100' },
};

const defaultColor = { bg: 'bg-gray-50', text: 'text-gray-700', border: 'border-gray-100' };

export default function TopicCard({ topic }: TopicCardProps) {
  const color = topicColors[topic.id] || defaultColor;

  return (
    <Link href={`/topics/${topic.id}`} className="group">
      <div className="card h-full flex flex-col">
        <div className="flex items-center gap-3 mb-3">
          <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${color.bg} ${color.text} border ${color.border}`}>
            {topic.name}
          </span>
        </div>
        <p className="text-sm text-navy/60 mb-4 flex-grow leading-relaxed">{topic.description}</p>
        <div className="border-t border-gray-100 pt-4">
          <p className="scripture-quote text-sm text-navy/80 mb-2 line-clamp-2">&ldquo;{topic.keyVerse}&rdquo;</p>
          <p className="text-xs text-gold font-semibold tracking-wide">{topic.keyVerseReference}</p>
        </div>
      </div>
    </Link>
  );
}
