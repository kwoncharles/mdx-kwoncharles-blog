import Link from 'next/link';
import { PropsWithChildren } from 'react';
import GithubIcon from '@/components/icon/github';

const icons = [
  {
    href: 'https://github.com/kwoncharles',
    icon: GithubIcon,
  },
];

const author = 'Charles';

function Header() {
  return (
    <header
      className="sticky z-10 top-0 max-w-7xl mx-auto bg-white bg-opacity-70 backdrop-filter sm:backdrop-blur backdrop-blur border-b border-solid border-gray-200"
    >
      <div className="flex items-center justify-between px-5 sm:py-5 py-4">
        <Link passHref href="/">
          <a className="text-2xl font-bold text-gray-900">
            {author}
          </a>
        </Link>
        <div className="sm:flex hidden">
          {icons.map(({ href, icon: Icon }) => (
            <a href={href} key={href}>
              <Icon className="ml-2 w-[22px] h-[22px] text-gray-500 hover:text-gray-600 fill-current" />
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}

function Body({
  children,
}: PropsWithChildren<unknown>) {
  return (
    <main className="max-w-7xl mx-auto">
      {children}
    </main>
  );
}

export default function Layout({
  children,
}: PropsWithChildren<unknown>) {
  return (
    <>
      <Header />
      <Body>
        {children}
      </Body>
    </>
  );
}
