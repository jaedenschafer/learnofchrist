import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbNavProps {
  items: BreadcrumbItem[] | undefined;
}

export default function BreadcrumbNav({ items = [] }: BreadcrumbNavProps) {
  if (!items || items.length === 0) return null;

  return (
    <nav className="breadcrumb mb-4">
      <Link href="/" className="hover:text-navy transition-colors">Home</Link>
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-1.5">
          <svg className="w-3 h-3 text-navy/20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
          {index === items.length - 1 ? (
            <span className="text-navy/70 font-medium truncate max-w-[200px]">{item.label}</span>
          ) : (
            <Link href={item.href} className="hover:text-navy transition-colors">{item.label}</Link>
          )}
        </div>
      ))}
    </nav>
  );
}
