import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbNavProps {
  items: BreadcrumbItem[] | undefined;
}

/**
 * Single icon-only liquid-glass back button, rendered in place of the old
 * breadcrumb trail. Goes one level up — the parent breadcrumb item, which
 * is `items[items.length - 2]`. On /study/genesis/1 that is Genesis (the
 * book index) rather than the Study Guides root; on /art/book/genesis/1
 * it is the Genesis art index; etc.
 *
 * Falls back to the first item when the items array has no clear parent
 * (e.g. only one entry). Renders nothing if no usable target exists.
 */
export default function BreadcrumbNav({ items = [] }: BreadcrumbNavProps) {
  if (!items || items.length === 0) return null;

  // Walk backwards from the second-to-last item looking for the first one
  // with a real href. Skips entries whose href is "#" or missing (those
  // represent the current page).
  let target: BreadcrumbItem | null = null;
  for (let i = items.length - 2; i >= 0; i--) {
    const it = items[i];
    if (it.href && it.href !== '#') {
      target = it;
      break;
    }
  }
  // Fallback: use the first item if nothing else qualified.
  if (!target) {
    const first = items[0];
    if (!first.href || first.href === '#') return null;
    target = first;
  }

  return (
    <nav className="back-nav" aria-label="Back">
      <Link
        href={target.href!}
        className="back-link"
        aria-label={`Back to ${target.label}`}
      >
        <svg
          viewBox="0 0 24 24"
          width="18"
          height="18"
          fill="none"
          stroke="currentColor"
          strokeWidth={2.2}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </Link>
    </nav>
  );
}
