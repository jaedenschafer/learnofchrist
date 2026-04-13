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
    <nav className="breadcrumb mb-3">
      <Link href="/">Home</Link>
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-1.5">
          <svg className="w-2.5 h-2.5 text-[#AEAEB2]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" /></svg>
          {index === items.length - 1 ? (
            <span>{item.label}</span>
          ) : (
            <Link href={item.href}>{item.label}</Link>
          )}
        </div>
      ))}
    </nav>
  );
}
