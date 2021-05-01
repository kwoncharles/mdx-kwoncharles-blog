import { ReactNode } from 'react';
import Layout from '../layout';
import PostHeader from './post-header';

type FrontMatter = {
  title?: string;
  description?: string;
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
      <div className="px-5 py-10">
        <article className="prose sm:mx-auto md:prose-lg prose-yellow">
          <PostHeader
            title={frontMatter.title}
            description={frontMatter.description}
          />
          {children}
        </article>
      </div>
    </Layout>
  );
}
