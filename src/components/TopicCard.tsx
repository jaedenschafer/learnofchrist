import Link from 'next/link';
import { Topic } from '@/data/topics';

interface TopicCardProps {
  topic: Topic;
}

export default function TopicCard({ topic }: TopicCardProps) {
  return (
    <Link href={`/topics/${topic.id}`}>
      <div className="card hover:scale-105 transition-transform duration-200 cursor-pointer h-full">
        <div className="flex flex-col h-full">
          <h3 className="font-serif text-xl font-bold text-navy mb-3">{topic.name}</h3>
          <p className="text-sm text-navy/80 mb-4 flex-grow">{topic.description}</p>
          <div className="border-t border-cream pt-4">
            <p className="scripture-quote text-sm mb-2">{topic.keyVerse}</p>
            <p className="text-xs text-sage font-medium">{topic.keyVerseReference}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
