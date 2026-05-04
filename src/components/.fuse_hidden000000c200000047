import Link from 'next/link';
import { Topic } from '@/data/topics';

interface TopicCardProps {
  topic: Topic;
}

const topicColors: Record<string, { bg: string; text: string }> = {
  faith: { bg: 'frost-chip', text: 'text-[color:var(--vesper-gold)]' },
  hope: { bg: 'frost-chip', text: 'text-[color:var(--vesper-peach)]' },
  love: { bg: 'frost-chip', text: 'text-[color:var(--vesper-peach)]' },
  grace: { bg: 'frost-chip', text: 'text-[color:var(--vesper-gold)]' },
  forgiveness: { bg: 'frost-chip', text: 'text-[color:var(--vesper-peach)]' },
  peace: { bg: 'frost-chip', text: 'text-[color:var(--vesper-gold)]' },
  anxiety: { bg: 'frost-chip', text: 'text-[color:var(--vesper-gold)]' },
  joy: { bg: 'frost-chip', text: 'text-[color:var(--vesper-peach)]' },
  strength: { bg: 'frost-chip', text: 'text-[color:var(--vesper-gold)]' },
  wisdom: { bg: 'frost-chip', text: 'text-[color:var(--vesper-peach)]' },
  purpose: { bg: 'frost-chip', text: 'text-[color:var(--vesper-gold)]' },
  obedience: { bg: 'frost-chip', text: 'text-[color:var(--vesper-gold)]' },
  sacrifice: { bg: 'frost-chip', text: 'text-[color:var(--vesper-peach)]' },
  resurrection: { bg: 'frost-chip', text: 'text-[color:var(--vesper-gold)]' },
  redemption: { bg: 'frost-chip', text: 'text-[color:var(--vesper-peach)]' },
};

const defaultColor = { bg: 'frost-chip', text: 'text-[color:var(--vesper-gold)]' };

export default function TopicCard({ topic }: TopicCardProps) {
  const color = topicColors[topic.id] || defaultColor;

  return (
    <Link href={`/topics/${topic.id}`} className="group">
      <div className="card h-full flex flex-col">
        <span className={`pill ${color.bg} ${color.text} self-start mb-3`}>
          {topic.name}
        </span>
        <p className="text-sm text-[color:var(--color-secondary-label)] mb-4 flex-grow leading-relaxed">{topic.description}</p>
        <div className="border-t border-[color:var(--color-separator)] pt-3">
          <p className="scripture-quote text-xs text-[color:var(--color-label)]/80 mb-1.5 line-clamp-2">&ldquo;{topic.keyVerse}&rdquo;</p>
          <p className="text-[0.65rem] text-[color:var(--color-primary)] font-semibold tracking-wide">{topic.keyVerseReference}</p>
        </div>
      </div>
    </Link>
  );
}
