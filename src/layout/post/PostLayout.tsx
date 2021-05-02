/* eslint-disable @typescript-eslint/no-use-before-define */
import AuthorCard from '@/components/author-card';
import PostNavigation from '@/components/post-navigation';
import { useAuthor } from '@/hooks/useAuthor';
import { ReactNode } from 'react';
import Layout from '../default';

type FrontMatter = {
  title?: string;
  description?: string;
  date?: string;
};

export default function PostLayout({
  frontMatter,
  children,
}: {
  children: ReactNode;
  frontMatter: FrontMatter;
}) {
  return (
    <Layout>
      <div className="md:pt-20 pt-10 px-5">
        <PostHeader
          title={frontMatter.title}
          description={frontMatter.description}
          publishDate={new Date(frontMatter.date)}
        />
      </div>
      <div className="md:pt-10 pt-6 px-5 ">
        <ContentPanel content={children} />
      </div>
      <div className="pt-5 px-5 ">
        <BottomPanel />
      </div>
    </Layout>
  );
}

function ContentPanel({ content }: { content: ReactNode }) {
  return (
    <article className="prose w-full mx-auto md:prose-lg md:max-w-2xl prose-yellow">
      {content}
    </article>
  );
}

function BottomPanel() {
  return (
    <div className="flex md:flex-row flex-col justify-between max-w-2xl mx-auto md:mt-10 mt-5 pt-5 border-t border-solid border-gray-200">
      <PostNavigation
        label="이전 글"
        title="단단한 컴포넌트 부수기"
        href="/post/break-the-components"
      />
      <PostNavigation
        label="다음 글"
        title="Ref를 활용한 React Hooks 개선"
        href="/post/improve-your-hooks-with-ref"
      />
    </div>
  );
}

function PostHeader({
  title,
  description,
  publishDate,
}: {
  title: string;
  description: string;
  publishDate: Date;
}) {
  const {
    name,
    avatarSrc,
    primarySns,
    getSNSHref,
    sns,
  } = useAuthor();
  return (
    <div className="relative flex flex-col max-w-2xl mx-auto">
      <div>
        <h1 className="md:text-5xl text-4xl font-bold text-gray-900">
          {title}
        </h1>
        <h3 className="mt-4 md:text-2xl text-xl font-normal text-gray-500">
          {description}
        </h3>
      </div>
      <div className="flex justify-between items-end mt-14">
        <AuthorCard
          name={name}
          // avatarSrc={avatarSrc}
          sns={{
            accountName: sns[primarySns],
            href: getSNSHref(sns[primarySns], primarySns),
          }}
        />

        <h4 className="mt-2 text-gray-400 md:text-md text-sm font-normal">
          {publishDate.toDateString()}
        </h4>
      </div>
    </div>
  );
}
