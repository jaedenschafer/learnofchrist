import Link from 'next/link';
import { Topic } from '@/data/topics';

interface TopicCardProps {
  topic: Topic;
}

const topicColors: Record<string, { bg: string; text: string }> = {
  faith: { bg: 'bg-amber-50', text: 'text-amber-700' },
  hope: { bg: 'bg-sky-50', text: 'text-sky-700' },
  love: { bg: 'bg-rose-50', text: 'text-rose-700' },
  grace: { bg: 'bg-violet-50', text: 'text-violet-700' },
  forgiveness: { bg: 'bg-teal-50', text: 'text-teal-700' },
  peace: { bg: 'bg-emerald-50', text: 'text-emerald-700' },
  anxiety: { bg: 'bg-indigo-50', text: 'text-indigo-700' },
  joy: { bg: 'bg-orange-50', text: 'text-orange-700' },
  strength: { bg: 'bg-red-50', text: 'text-red-700' },
  wisdom: { bg: 'bg-cyan-50', text: 'text-cyan-700' },
  purpose: { bg: 'bg-fuchsia-50', text: 'text-fuchsia-700' },
  obedience: { bg: 'bg-lime-50', text: 'text-lime-700' },
  sacrifice: { bg: 'bg-stone-100', text: 'text-stone-700' },
  resurrection: { bg: 'bg-yellow-50', text: 'text-yellow-700' },
  redemption: { bg: 'bg-pink-50', text: 'text-pink-700' },
};

const defaultColor = { bg: 'bg-gray-50', text: 'text-gray-700' };

export default function TopicCard({ topic }: TopicCardProps) {
  const color = topicColors[topic.id] || defaultColor;

  return (
    <Link href={`/topics/${topic.id}`} className="group">
      <div className="card h-full flex flex-col">
        <span className={`pill ${color.bg} ${color.text} self-start mb-3`}>
          {topic.name}
        </span>
        <p className="text-sm text-navy/50 mb-4 flex-grow leading-relaxed">{topic.description}</p>
        <div className="border-t border-black/[0.04] pt-3">
          <p className="scripture-quote text-xs text-navy/65 mb-1.5 line-clamp-2">&ldquo;{topic.keyVerse}&rdquo;</p>
          <p className="text-[0.65rem] text-gold font-semibold tracking-wide">{topic.keyVerseReference}</p>
        </div>
      </div>
    </Link>
  );
}
