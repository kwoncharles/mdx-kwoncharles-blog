import clsx from 'clsx';
import Link from 'next/link';

export default function PostNavigation({
  label,
  title,
  href,
  className,
}: {
  label: string;
  title: string;
  href: string;
  className?: string;
}) {
  return (
    <div className={clsx('md:max-w-[40%] md:py-5 py-4', className)}>
      <h2 className="md:text-sm text-xs font-normal text-gray-500">
        {label}
      </h2>
      <div className="mt-1 text-yellow-600 font-semibold md:text-lg text-md">
        <Link
          passHref
          href={href}
        >
          <a>
            {title}
          </a>
        </Link>
      </div>
    </div>
  );
}
