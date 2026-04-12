import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbNavProps {
  items: BreadcrumbItem[] | undefined;
}

export default function BreadcrumbNav({ items = [] }: BreadcrumbNavProps) {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <nav className="breadcrumb mb-6">
      <Link href="/" className="hover:text-navy transition-colors">
        Home
      </Link>
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          <span className="text-gold">/</span>
          {index === items.length - 1 ? (
            <span className="text-navy font-medium">{item.label}</span>
          ) : (
            <Link href={item.href} className="hover:text-navy transition-colors">
              {item.label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
}
