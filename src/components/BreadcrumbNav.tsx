import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbNavProps {
  items: BreadcrumbItem[] | undefined;
}

/**
 * Single liquid-glass "back" pill, rendered in place of the old breadcrumb
 * trail. We derive the destination from the FIRST item in the array passed
 * by each page (which was already the highest-level ancestor — e.g. on
 * /study/genesis/1 the first item is { label: "Study", href: "/study" }),
 * so no caller needs to change.
 *
 * Renders nothing if items is empty or the first item has no href.
 */
export default function BreadcrumbNav({ items = [] }: BreadcrumbNavProps) {
  if (!items || items.length === 0) return null;
  const target = items[0];
  if (!target.href) return null;

  return (
    <nav className="back-nav" aria-label="Back">
      <Link
        href={target.href}
        className="back-link"
        aria-label={`Back to ${target.label}`}
      >
        <svg
          viewBox="0 0 24 24"
          width="16"
          height="16"
          fill="none"
          stroke="currentColor"
          strokeWidth={2.2}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M15 18l-6-6 6-6" />
        </svg>
        <span className="back-link__label">{target.label}</span>
      </Link>
    </nav>
  );
}
