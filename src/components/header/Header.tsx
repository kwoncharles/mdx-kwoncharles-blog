import Link from 'next/link';
import GithubIcon from '@/components/icon/github';

const icons = [
  {
    href: 'https://github.com/kwoncharles',
    component: GithubIcon,
  },
];

const author = 'Charles';

export default function Header() {
  return (
    <header
      className="sticky top-0 max-w-7xl mx-auto bg-opacity-50 backdrop-filter sm:backdrop-blur-sm backdrop-blur border-b border-solid border-gray-200"
    >
      <div className="flex items-center justify-between px-5 sm:py-5 py-4">
        <Link passHref href="/">
          <a className="text-2xl font-bold text-gray-900">
            {author}
          </a>
        </Link>
        <div className="sm:flex hidden">
          {icons.map(({ href, component: Component }) => (
            <a href={href} key={href}>
              <Component className="ml-2 w-[22px] h-[22px] text-gray-500 hover:text-gray-600 fill-current" />
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
