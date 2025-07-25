"use client";
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Breadcrumb() {
  const pathname = usePathname();

  if (!pathname) return null; // Optional: show nothing if pathname is not available yet

  const segments = pathname.split('/').filter(Boolean);

  return (
    <nav className="text-[14px] text-gray-600 font-light">
      <ol className="list-reset flex">
        <li>
          <Link href="/" className="text-white hover:underline">
            Home
          </Link>
        </li>

        {segments.map((seg, i) => {
          const href = '/' + segments.slice(0, i + 1).join('/');
          const cleanSeg = seg.replace(/-/g, ' ');
          const label = cleanSeg.charAt(0).toUpperCase() + cleanSeg.slice(1);

          return (
            <li key={i} className="flex items-center">
              <span className="mx-2 text-white">{'/'}</span>
              {i === segments.length - 1 ? (
                <span className="text-white/70">{label}</span>
              ) : (
                <Link href={href} className="text-white hover:underline">
                  {label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
